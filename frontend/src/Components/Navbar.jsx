import React, { useState } from 'react'
import { assets } from '../assets/assets'
function Navbar() {
    const [menu,setmenu]=useState("home");
    const [items,setitems]=useState(1);
    const handleClick=async()=>{
        console.log("done");
    }
  return (
    <div className='w-screen h-auto   flex flex-row justify-between p-4 bg-contain'>
        {/* first wala */}
        <div className='sm:w-auto sm:h-auto w-24'>
            <img src={assets.logo} alt="" />
        </div>
        {/* second wala */}
        <div className='md:w-96 w-0  h-auto p-1 invisible md:visible'>
            <ul className='flex flex-row justify-around '>
                {/* learn new method for this */}
                <li onClick={()=>setmenu("home")}>{menu=="home"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>home</h1>:<h1 className='hover:cursor-pointer'>home</h1>}</li>
                <li onClick={()=>setmenu("menu")}>{menu=="menu"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>menu</h1>:<h1 className='hover:cursor-pointer'>menu</h1>}</li>
                <li onClick={()=>setmenu("mobile-app")}>{menu=="mobile-app"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>mobile-app</h1>:<h1 className='hover:cursor-pointer'>mobile-app</h1>}</li>
                <li onClick={()=>setmenu("contact-us")}>{menu=="contact-us"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>contact us</h1>:<h1 className='hover:cursor-pointer'>contact us</h1>}</li>
        </ul>
        </div>
        {/* third wala */}
        <div className='w-44 md:w-56 h-auto '>
            <ul className='flex flex-row justify-around '>
                <li><button type="button"><img className='w-4 sm:w-auto' src={assets.search_icon} alt="" /></button></li>
                <li onClick={handleClick} className='flex flex-row hover:cursor-pointer w-auto h-auto '><img className='relative w-4 h-5 sm:w-7 sm:h-8' src={assets.basket_icon} alt="" />{items==0?null:<span class="relative flex  sm:h-3 sm:w-3">
  {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span> */}
  <span class="relative inline-flex rounded-full sm:h-3 sm:w-3 h-2 w-2 bg-orange-600"></span>
</span>}</li>
                <li><button type="button" className='sm:h-auto sm:w-20 w-14 h-auto p-1 text-xs sm:text-base  border-2 border-gray-400 rounded-full hover:bg-red-50'><h1>sign in</h1></button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
{/* <div className='w-3 h-2 rounded-full bg-red-500 -mt-1 '></div> */}