import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notificationSound from "../assets/sound/notification.mp3"
 
const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages,selectedConversation} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      if(newMessage.senderId == selectedConversation._id){
        setMessages([...messages,newMessage])
      }
    })
    return ()=>socket?.off("newMessage");
  },[socket,setMessages,messages]);
}

export default useListenMessages
