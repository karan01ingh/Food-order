import React from 'react'
import crossIcon from "../assets/cross_icon.png"
import {useState} from 'react';
import {CurrentUser,Authenticated } from '../features/currentuser';
import {useDispatch } from 'react-redux';
function Signup({setShowSignup,setShowLogin}){
  const dispatch=useDispatch();
  const [Signupdata,SetSignupdata]=useState(null);
  const handleChange=(e)=>{
      SetSignupdata({...Signupdata,[e.target.name]:e.target.value});
      console.log(Signupdata);
  }
  const handleSubmit=async()=>{
    try {
      const res=await fetch('/ap/User/Signup',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Signupdata)
      });
      if(res.success){
        const data=res.json();
        // dispatch(CurrentUser(data.new));
        // dispatch(Authenticated(true));
        setShowSignup(false);

      }
    } catch (error) { 

    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center p-5 absolute  bg-mine '>
    <div className='flex flex-col w-96 h-auto border-gray-500'>
  {/* <div className='flex justify-center items-center'><img src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" className='h-10' alt="" /></div> */}
  <div className=' w-auto h-auto p-5 border-2 border-gray-200 mt-8 bg-white rounded-sm '>
    <div className='flex flex-row justify-between'>
    <h1 className='text-3xl font-sans mb-3 font-bold'>Sign Up</h1>
    <img className='w-5 h-5 mt-3 hover:cursor-pointer' onClick={()=>{setShowSignup(false)}} src={crossIcon} alt="" />
    </div>
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col pt-2 m-1'>
          {/* <div className='flex justify-between'>Your Name</div> */}
          <input type="name" id='name' name='name' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' required placeholder='Your name' onChange={handleChange} />
    </div>
    <div className='flex flex-col pt-2 m-1'>
          {/* <div className='flex justify-between'>Email</div> */}
          <input type='email' id='email' name='email' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' required  placeholder='Your email' onChange={handleChange}/>
    </div>
    <div className='flex flex-col pt-2 m-1'>
          {/* <div className='flex justify-between'><label htmlFor="repass">Password</label></div> */}
          <input type="password" id='password' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' name='password' required placeholder='Password' onChange={handleChange} />
    </div>
    <div className='flex flex-col pt-2 m-1'>
          {/* <div className='flex justify-between'><label htmlFor="repass">Re-enter Password</label></div> */}
          <input type="password" id='repassword' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' name='repassword' required placeholder='Re-enter Password' onChange={handleChange}/>
    </div>
    <div className='flex flex-col pt-2 m-1'>
          {/* <div className='flex justify-between'>Email</div> */}
          {/* <input type='' id='email' name='email' className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900' required  placeholder='Your email' onChange={handleChange}/> */}
          <select name="Select" id="" onChange={handleChange} className='xs:h-10 h-8 rounded-md outline-orange-600 border-2 border-gray-300 p-1 pl-3 xs:text-base text-xs text-neutral-900'>
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
          </select>
    </div>
    <div className='w-full bg-orange-600 text-center p-2 mt-4 rounded-md font-semibold text-white'><button type='Submit'>Create your Account</button></div>
    <div className='flex flex-row items-start mt-3 '><input type="checkbox" name="" id="check" className='xs:mt-2  mt-1 mr-1 ' required/><h1 className='xs:text-base text-xs'>By continuing, I agree to the<span className='text-blue-500'>terms of use </span>& <span className='text-blue-500'>privacy policy.</span></h1></div>
    </form>
    <h1 className='text-xs xs:text-base mt-4'>Already have and account?<span className='text-orange-600 font-semibold hover:cursor-pointer' onClick={()=>{setShowSignup(false),setShowLogin(true)}}>Login here</span></h1>
  </div>
</div>
</div>
  )
}

export default Signup
// exit code
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { Navigate } from 'react-router-dom';
// function Signup() {
//   // const navigate=Navigate();
//   const notify = () => toast("Wow so easy!");
//     const handlenewaccount=async (e)=>{
//       e.preventDefault();
//         if(Signupdata.password!=Signupdata.repassword){
//           console.log("not done");
//         }
//         try {
//           const res=await fetch("/api/auth/signup",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(Signupdata)
//           })
//           const data=await res.json()
//           console.log(data)
//           if(res.ok){
//             // navigate("/Login")
//             console.log("Successsfylly Signin");
//           }
//         } catch (error) {
//           console.log(error);
//         }
//     }
//     const [Signupdata,SetSignupdata]=useState(null);
//     const handleChange=(e)=>{
//       SetSignupdata({...Signupdata,[e.target.name]:e.target.value});
//       console.log(Signupdata);
//     }
//   return (
//     // <div className='w-screen h-screen flex justify-center p-5'>
//     //     <div className='flex flex-col w-96 h-auto border-gray-500'>
//     //   <div className='flex justify-center items-center'><img src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" className='h-10' alt="" /></div>
//     //   <div className=' w-full h-auto p-5 border-2 border-gray-200 mt-8 '>
//     //     <div className='text-3xl font-sans'>Create account</div>
//     //     <form onSubmit={handlenewaccount}>
//     //     <div className='flex flex-col pt-2'>
//     //           <div className='flex justify-between'>Your Name</div>
//     //           <input type="name" id='name' name='name' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' required onChange={handleChange} />
//     //     </div>
//     //     <div className='flex flex-col pt-2'>
//     //           <div className='flex justify-between'>Email</div>
//     //           <input type="password" id='email' name='email' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' required onChange={handleChange} />
//     //     </div>
//     //     <div className='flex flex-col pt-2'>
//     //           <div className='flex justify-between'><label htmlFor="repass">Password</label></div>
//     //           <input type="password" id='password' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' name='password' required onChange={handleChange} />
//     //     </div>
//     //     <div className='flex flex-col pt-2'>
//     //           <div className='flex justify-between'><label htmlFor="repass">Re-enter Password</label></div>
//     //           <input type="password" id='repassword' className='h-8 rounded-sm outline-yellow-500 border-2 border-gray-300 pl-1' name='repassword' required onChange={handleChange} />
//     //     </div>
//     //     <div className='w-full bg-yellow-500 text-center p-2 mt-4 rounded-md'><button>Create your Account</button></div>
//     //     </form>
//     //     <br />
//     //     <br/>
//     //     <div>By sigining in you are agreeing to our <span className='text-blue-500'> condition of Use and sale </span>and our <span className='text-blue-500'>Privacy Notice</span></div>
//     //   </div>
//     // </div>
//     // </div>
//   )
// }

// export default Signup