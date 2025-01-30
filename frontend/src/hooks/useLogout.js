import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { set } from "mongoose";
import { useState } from "react";

export const useLogout = () => {
  const {setAuthUser} = useAuthContext();
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    try{
      setLoading(true);
      const res = await fetch("/api/auth/logout",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
      });
      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      }
    catch(e){
      toast.error(e.message);
    }
    finally{
      setLoading(false);
    }
  }
  return {loading,logout};
}