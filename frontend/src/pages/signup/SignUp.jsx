import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col min-w-96  mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-600'> ChatApp</span></h1>

      <form>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Fullname</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Username</span>
          </label>
          <input type="text" placeholder="Enter username" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <GenderCheckBox/>
        <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account ? </a>
        <div>
          <button className=' bg-gray-800 border-none text-white btn btn-block btn-sm mt-2'>login</button>
        </div>
      </form>
        
      </div>
      
    </div>
  )
}

export default SignUp
