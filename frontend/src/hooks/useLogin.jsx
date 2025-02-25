import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export const useLogin = () => {
   const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if(!success) return;
    try{
      setLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });
      const data = await response.json();
      if(data.error){
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user",JSON.stringify(data));
      setAuthUser(data);
    }
    catch(err){
      toast.error(err.message);
    }
    finally{
      setLoading(false);
    }
  }
  return {loading,login};
}

function handleInputErrors(username, password){
  if(username === '' || password === ''){
    toast.error('All fields are required');
    return false;
  }
  return true;
}