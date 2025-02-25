import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractTime.js';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId == authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const chatBubbleClassName = fromMe ? 'bg-sky-500' : '';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const shakeClass = message.shouldShake ? "shake" : ""
  return (
    <div className=''>
      <div className={`chat ${chatClassName}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={profilePic} />
            </div>
          </div>
          <div className={`chat-bubble ${chatBubbleClassName} ${shakeClass}`}>{message.message}</div>
          <time className="text-xs opacity-50 text-gray-300">{formattedTime}</time>
      </div>
    </div>
  )
}

export default Message
