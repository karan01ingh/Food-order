import React from 'react'
import crossIcon from "../assets/cross_icon.png"
import { useState } from 'react';
function Login({setShowSignup,setShowLogin}){
  // const handlesignIn=(e)=>{
  //   e.preventDefault();
  //     console.log("done with sign in");
  // }
  const [logindata,Setlogindata]=useState({});
    const handleChange=(e)=>{
      Setlogindata({...logindata,[e.target.name]:e.target.value});
      console.log(logindata);
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center p-5 absolute bg-mine'>
    <div className='flex flex-col w-96 h-auto border-gray-500 '>
  <div className=' w-auto h-auto p-5 border-2 border-gray-200 mt-8 bg-white rounded-sm '>
    <div className='flex flex-row justify-between'>
    <h1 className='text-3xl font-sans mb-3 font-bold'>Login</h1>
    <img className='w-5 h-5 mt-3 hover:cursor-pointer' onClick={()=>{setShowLogin(false)}} src={crossIcon} alt="" />
    </div>
    <form>
    <div className='flex flex-col pt-2 m-1'>
          <input type="email" id='email' name='email' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' required  placeholder='Your email' onChange={handleChange} />
    </div>
    <div className='flex flex-col pt-2 m-1'>
          <input type="password" id='password' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' name='password' required placeholder='Password' onChange={handleChange}/>
    </div>
    <div className='w-full bg-orange-600 text-center p-2 mt-4 rounded-md font-semibold text-white'><button>Login</button></div>
    <div className='flex flex-row items-start mt-3 '><input type="checkbox" name="" id="check" className='xs:mt-2 mt-1 mr-1' required/><h1 className='xs:text-base text-xs'>By continuing, I agree to the<span className='text-blue-500'>terms of use </span>& <span className='text-blue-500'>privacy policy.</span></h1></div>
    </form>
    <h1 className='text-xs xs:text-base mt-4'>Create a new account?<span className='text-orange-600 font-semibold hover:cursor-pointer' onClick={()=>{setShowSignup(true),setShowLogin(false)}}>Click here</span></h1>
  </div>
</div>
</div>
  )
}
export default Login
// import React from 'react'
// import crossIcon from "../assets/cross_icon.png"
// import { useState } from 'react';
// function Login({setShowSignup,setShowLogin}) {
//   const [Signupdata,SetSignupdata]=useState(null);
//   const handleChange=(e)=>{
//       SetSignupdata({...Signupdata,[e.target.name]:e.target.value});
//       console.log(Signupdata);
//   }
//   return (
//     <div className='w-screen h-screen flex justify-center items-center p-5 absolute  bg-mine '>
//     <div className='flex flex-col w-96 h-auto border-gray-500'>
//   {/* <div className='flex justify-center items-center'><img src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" className='h-10' alt="" /></div> */}
//   <div className=' w-auto h-auto p-5 border-2 border-gray-200 mt-8 bg-white rounded-sm '>
//     <div className='flex flex-row justify-between'>
//     <h1 className='text-3xl font-sans mb-3 font-bold'>Sign Up</h1>
//     <img className='w-5 h-5 mt-3 hover:cursor-pointer' onClick={()=>{setShowSignup(false)}} src={crossIcon} alt="" />
//     </div>
//     <form>
//     <div className='flex flex-col pt-2 m-1'>
//           {/* <div className='flex justify-between'>Your Name</div> */}
//           <input type="name" id='name' name='name' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' required placeholder='Your name' onChange={handleChange} />
//     </div>
//     <div className='flex flex-col pt-2 m-1'>
//           {/* <div className='flex justify-between'>Email</div> */}
//           <input type='email' id='email' name='email' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' required  placeholder='Your email' onChange={handleChange}/>
//     </div>
//     <div className='flex flex-col pt-2 m-1'>
//           {/* <div className='flex justify-between'><label htmlFor="repass">Password</label></div> */}
//           <input type="password" id='password' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' name='password' required placeholder='Password' onChange={handleChange} />
//     </div>
//     <div className='flex flex-col pt-2 m-1'>
//           {/* <div className='flex justify-between'><label htmlFor="repass">Re-enter Password</label></div> */}
//           <input type="password" id='repassword' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' name='repassword' required placeholder='Re-enter Password' onChange={handleChange}/>
//     </div>
//     <div className='w-full bg-orange-600 text-center p-2 mt-4 rounded-md font-semibold text-white'><button>Create your Account</button></div>
//     <div className='flex flex-row items-start mt-3 '><input type="checkbox" name="" id="check" className='xs:mt-2  mt-1 mr-1 ' required/><h1 className='xs:text-base text-xs'>By continuing, I agree to the<span className='text-blue-500'>terms of use </span>& <span className='text-blue-500'>privacy policy.</span></h1></div>
//     </form>
//     <h1 className='text-xs xs:text-base mt-4'>Already have and account?<span className='text-orange-600 font-semibold hover:cursor-pointer' onClick={()=>{setShowSignup(false),setShowLogin(true)}}>Login here</span></h1>
//   </div>
// </div>
// </div>
//   )
// }

// export default Login
