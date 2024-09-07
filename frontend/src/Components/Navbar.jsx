import React, { useState } from 'react'
import { assets } from '../assets/assets'
function Navbar() {
    const [menu,setmenu]=useState("home");
    const [items,setitems]=useState(2);
    const handleClick=async()=>{
        console.log("done");
    }
  return (
    <div className='w-screen h-auto   flex flex-row justify-around p-4'>
        {/* first wala */}
        <div className=''>
            <img src={assets.logo} alt="" />
        </div>
        {/* second wala */}
        <div className='w-1/4 h-auto p-1'>
            <ul className='flex flex-row justify-around'>
                {/* learn new method for this */}
                <li onClick={()=>setmenu("home")}>{menu=="home"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>home</h1>:<h1 className='hover:cursor-pointer'>home</h1>}</li>
                <li onClick={()=>setmenu("menu")}>{menu=="menu"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>menu</h1>:<h1 className='hover:cursor-pointer'>menu</h1>}</li>
                <li onClick={()=>setmenu("mobile-app")}>{menu=="mobile-app"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>mobile-app</h1>:<h1 className='hover:cursor-pointer'>mobile-app</h1>}</li>
                <li onClick={()=>setmenu("contact-us")}>{menu=="contact-us"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>contact us</h1>:<h1 className='hover:cursor-pointer'>contact us</h1>}</li>
        </ul>
        </div>
        {/* third wala */}
        <div className='w-1/5 h-auto '>
            <ul className='flex flex-row justify-around '>
                <li><button type="button"><img src={assets.search_icon} alt="" /></button></li>
                <li onClick={handleClick} className='flex flex-row hover:cursor-pointer'><img className='relative' src={assets.basket_icon} alt="" />{items==0?null:<div className='w-3 h-2 rounded-full bg-red-500 -mt-1 '></div>}</li>
                <li><button type="button" className='h-auto w-20 p-1 border-2 border-gray-400 rounded-full hover:bg-red-50'><h1>sign in</h1></button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
