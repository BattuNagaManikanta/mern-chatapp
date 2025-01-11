import React from 'react'

const Message = () => {
  return (
    <div className=''>
      <div className="chat chat-end ">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="chat-bubble bg-sky-500">It was said that you would, destroy the Sith, not join them.</div>
          <time className="text-xs opacity-50 text-gray-300">12:45</time>
      </div>

      <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="chat-bubble bg-sky-500">It was said that you would, destroy the Sith, not join them.</div>
          <time className="text-xs opacity-50 text-gray-300">12:45</time>
      </div>
    </div>
  )
}

export default Message
