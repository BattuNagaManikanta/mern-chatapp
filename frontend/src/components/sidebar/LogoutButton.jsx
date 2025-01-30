import {BiLogOut} from 'react-icons/bi';

import React from 'react'
import { useLogout } from '../../hooks/useLogout';
import useConversation from '../../zustand/useConversation';

const LogoutButton = () => {
  const {loading,logout} = useLogout();
  const handleLogout = () => {
    logout();
  }

  return (
    <div className='mt-10'>
      {loading ? <span className="loading loading-spinner loading-sm"></span> : <BiLogOut className='w-6 h-6 cursor-pointer  text-black' onClick={handleLogout}/>}
    </div>
  )
}

export default LogoutButton
