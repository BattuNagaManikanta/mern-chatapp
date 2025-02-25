import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessages = () => {
  const [loading,setLoading] = useState(false);
  const {messages,setMessages,selectedConversation}= useConversation()
  const sendMessage = async (message)=>{
    try{
      setLoading(true);
      const response = await fetch("/api/messages/send/"+selectedConversation._id ,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({message})
      });
      const data = await response.json();
      if(data.error){
        throw new Error(data.error);
      }
      setMessages([...messages,data.newMessage]);
    }
    catch(e){
      toast.error(e.message);
    }finally{
      setLoading(false);
    }
  }
  return {loading,sendMessage};
}


export default useSendMessages;