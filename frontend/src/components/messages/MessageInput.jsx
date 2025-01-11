import React from 'react'
import { BiSend } from 'react-icons/bi'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='flex'>
        <input type='text' className='border text-sm rounded-lg flex-1 bg-gray-700 p-3' placeholder='Send a message'/>
        <button className='border-none text-white text-sm rounded-lg bg-gray-700 p-3'>
          <BiSend/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput
