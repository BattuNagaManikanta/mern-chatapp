import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

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
    res.status(201).json({newMessage})

  } catch (error) {
    console.log("Error in sendMessage controller",error.message);
    res.status(500).json({error : "Internal Server error"});
  }
}


export const getMessages = async (req,res)=>{
  try {
    const {id : recieverId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({participants : {$all : [senderId,recieverId]}}).populate("messages");

    console.log(conversation);
    if (!conversation) return res.status(200).json([]);    
    res.status(200).json(conversation.messages);

  } catch (error) {
    console.log("Error in getMessages controller",error.message);
    res.status(500).json({error : "Internal Server error"});
    
  }
}