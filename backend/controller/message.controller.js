import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req,res)=>{
  try {
    const {message} = req.body;
    const {id : recieverId} = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants : {
        $all : [senderId,recieverId]
      }
    });

    if(!conversation){
      conversation = await Conversation.create({
        participants : [senderId,recieverId]
      })
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message
    })

    if(newMessage){
      conversation.messages.push(newMessage); 
    }

    await Promise.all([newMessage.save(),conversation.save()]); 

    const recieverSocketId = getRecieverSocketId(recieverId);
    if(recieverSocketId){
      io.to(recieverSocketId).emit("newMessage",newMessage);
    }

    res.status(201).json({newMessage})

  } catch (error) {
    res.status(500).json({error : "Internal Server error"});
  }
}


export const getMessages = async (req,res)=>{
  try {
    const {id : recieverId} = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({participants : {$all : [senderId,recieverId]}}).populate("messages");
    if (!conversation) return res.status(200).json([]);    
    res.status(200).json(conversation.messages);

  } catch (error) {
    res.status(500).json({error : "Internal Server error"});
    
  }
}