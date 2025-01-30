import React, { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'
import { use } from 'react';

const Conversation = ({conversation , emoji , lastIdx}) => {


  const {selectedConversation,setSelectedConversation} = useConversation()
  const isSelected = selectedConversation && selectedConversation._id === conversation._id ; 

  useEffect(()=>{
    return () => {setSelectedConversation(null)}
  },[]);
  
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? 'bg-sky-500' : ''}`} onClick={()=>setSelectedConversation(conversation)}>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt='user-avatar' />
          </div>
        </div>
        <div className='flex flex-1 justify-between items-center p-2'>
          <p className='text-gray-200 font-bold'>{conversation.fullname}</p>
          <span className='text-xl'>{emoji}</span>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default Conversation
