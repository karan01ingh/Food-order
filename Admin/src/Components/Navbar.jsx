import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile_image.png"
function Navbar() {
  const handleProfileClick=async()=>{
    console.log("Profile clicked done");
  }
  const handleLogoClick=async()=>{
    console.log("logo clicked done");
  }
  return (
    <div className='h-20 w-screen bg-pink-500 p-3 flex justify-between  border-b-2 border-slate-500'>
      <div><img src={logo} alt="" className='h-16' onClick={handleLogoClick}/></div>
      <div><img src={profile} className='h-14' alt="" onClick={handleProfileClick} /></div>
    </div>
  )
}

export default Navbar
