import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { FaMessage } from "react-icons/fa6";


const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className=' md:min-w-[450px] flex flex-col'>
      {noChatSelected ? <NoChatSelected/> : (
        <>
        {/* Header */}
        <div className='bg-slate-500 p-4 rounded-r scrollbar'>
          <span className='label-text'> To :  </span><span className='text-gray-900 font-bold'> Manikanta</span>
        </div>
        <Messages/>
        <MessageInput/>
      </>
    
    )}
    </div>
      
  )
}

const NoChatSelected = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-white font-bold text-2xl'>
      <p>Welcome Manikanta</p>
      <p>Select a chart to start messaging</p>
      <FaMessage className='text-3xl md:text-6xl m-3'/>

    </div>
  )
}

export default MessageContainer



