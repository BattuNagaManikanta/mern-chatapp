import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 p-4 flex flex-col'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <div className='overflow-y-auto'>
        <Conversations/>
      </div>
      <LogoutButton/>
      {/* <Conversations/>
      <LogoutButton/> */}
    </div>
  )
}

export default Sidebar
