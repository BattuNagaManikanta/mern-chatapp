import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const signUp = async ({fullname , username, password,confirmPassword,gender}) => {
    const success = handleInputErrors({fullname , username, password,confirmPassword,gender});
    if(!success) return;
    setLoading(true);
    try{
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname , username, password,confirmPassword,gender})
      });
      const data = await response.json();
      // console.log(data);
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
  return {loading,signUp};
}


function handleInputErrors({fullname , username, password,confirmPassword,gender}){
  
  if(fullname === '' || username === '' || password === '' || confirmPassword === '' || gender === ''){
    toast.error('All fields are required');
    return false;
  }
  if(password !== confirmPassword){
    toast.error('Passwords do not match');
    return false;
  }
  if(password.length < 6){
    toast.error('Password must be atleast 6 characters long');
    return false;
  }
  return true;
}


export default useSignup;