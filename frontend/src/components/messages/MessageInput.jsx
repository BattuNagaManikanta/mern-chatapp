import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import useSendMessages from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message , setMessage] = useState('');
  const {loading,sendMessage} = useSendMessages();
  console.log(message);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(message === '') return;
    await sendMessage(message);
    setMessage('');
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='flex'>
        <input type='text' className='border text-sm rounded-lg flex-1 text-white bg-gray-700 p-3' placeholder='Send a message'
        onChange={(e)=>setMessage(e.target.value)} value={message}
        />
        <button className='border-none text-white text-sm rounded-lg bg-gray-700 p-3'>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : <BiSend/> }  
        </button>
      </div>
    </form>
  )
}

export default MessageInput
