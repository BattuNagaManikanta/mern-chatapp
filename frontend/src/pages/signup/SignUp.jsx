import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'
// import toast from 'react-hot-toast'

const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullname : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender : ''
  })
  const {loading , signUp } = useSignup();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputs);
    
    signUp(inputs);
  }

  const handleCheckBox = ( gender)=>{
    setInputs({...inputs,gender : gender})

   }

  return (
    <div className='flex flex-col min-w-96  mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-600'> ChatApp</span></h1>

      <form>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Fullname</span>
          </label>
          <input type="text" value={inputs.fullname} onChange={(e)=>setInputs({...inputs , fullname : e.target.value})} placeholder="Enter Fullname" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Username</span>
          </label>
          <input type="text" value={inputs.username} onChange={(e)=>setInputs({...inputs , username : e.target.value})} placeholder="Enter username" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Password</span>
          </label>
          <input type="password" value={inputs.password} onChange={(e)=>setInputs({...inputs , password : e.target.value})} placeholder="Enter Password" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Confirm Password</span>
          </label>
          <input type="password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs , confirmPassword : e.target.value})} placeholder="Confirm Password" className="input bg-black text-white input-bordered w-full h-10"/>
        </div>
        <GenderCheckBox onCheckBoxChange = {handleCheckBox} selectedGender = {inputs.gender}/>
        <Link to="/login"><p className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account ?</p></Link>
        <div>
          <button onClick={handleClick} className=' bg-gray-800 border-none text-white btn btn-block btn-sm mt-2'>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Sign Up'}
          </button>
        </div>
      </form>
        
      </div>
      
    </div>
  )
}

export default SignUp
