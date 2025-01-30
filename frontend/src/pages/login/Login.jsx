import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading,login} = useLogin();

  const handleClick =  (e) => {
    e.preventDefault();
    login(username,password);
  }


  return (
    <div className='flex flex-col min-w-96  mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-600'> ChatApp</span></h1>

      <form>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Username</span>
          </label>
          <input type="text" placeholder="Enter Username" value={username} className="input bg-black text-white input-bordered w-full h-10"
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>
            <span className='text-white text-base label-text'>Enter Password</span>
          </label>
          <input type="password" placeholder="Enter Password" value={password} className="input bg-black text-white input-bordered w-full h-10"
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/signup"><p className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</p></Link>
        <div>
          <button className=' bg-gray-800 border-none text-white btn btn-block btn-sm mt-2' onClick={handleClick}>
          {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Login'}  
          </button>
        </div>
      </form>
        
      </div>
      
    </div>
  )
}

export default Login;


// const Login = () => {
//   return (
//     <div className='flex flex-col min-w-96  mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-600'> ChatApp</span></h1>

//       <form>
//         <div>
//           <label className='label'>
//             <span className='text-white text-base label-text'>Enter Username</span>
//           </label>
//           <input type="text" placeholder="Enter Username" className="input bg-black text-white input-bordered w-full h-10"/>
//         </div>
//         <div>
//           <label className='label'>
//             <span className='text-white text-base label-text'>Enter Password</span>
//           </label>
//           <input type="password" placeholder="Enter Password" className="input bg-black text-white input-bordered w-full h-10"/>
//         </div>
//         <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account</a>
//         <div>
//           <button className=' bg-gray-800 border-none text-white btn btn-block btn-sm mt-2'>login</button>
//         </div>
//       </form>
        
//       </div>
      
//     </div>
//   )
// }
