import React, { useEffect, useRef } from 'react'
import Message from './Message'
import "../../index.css"
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeleton/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {

  const {loading,messages} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  // console.log(messages);
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"});
    },500)
  },[messages])
  return (
    <div className='py-8 flex-1 overflow-auto'>
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
      
      {loading && [...Array(3)].map((_,index) => <MessageSkeleton key={index}/>)}
      {!loading && messages.length === 0 && <p className='text-center text-white'>Send a message to start conversation</p>}
    </div>
  )
}

export default Messages
