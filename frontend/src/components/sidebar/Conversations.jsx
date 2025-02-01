import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = () => {
  const {loading,conversations} = useGetConversations();
  return (
    <div className=''>
      {conversations.map((conversation,index)=>{
        return <Conversation key={conversation._id} conversation={conversation} emoji = {getRandomEmoji()} 
        lastIdx = { index === conversations.length-1} />
      })}
      {loading ? <span className="loading loading-spinner loading-sm"></span> : null}
    </div>
  )
}

export default Conversations
