import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar({setShowSignup}) {
    const {currentitems}=useSelector((state)=>state.CartItems)
    const [menu,setmenu]=useState("home");
  return (
    <div className='w-screen h-auto flex flex-row justify-between pl-10 pr-10  '>
        {/* first wala */}
        <div className='sm:w-auto sm:h-auto w-24'>
            <img src={assets.logo} alt="" />
        </div>
        {/* second wala */}
        <div className='md:w-96 w-0  h-auto p-1 invisible md:visible'>
            <ul className='flex flex-row justify-around '>
                {/* learn new method for this */}
                <Link onClick={()=>setmenu("home")}>{menu=="home"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>home</h1>:<h1 className='hover:cursor-pointer'>home</h1>}</Link>
                <a href='#menu' onClick={()=>setmenu("menu")}>{menu=="menu"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>menu</h1>:<h1 className='hover:cursor-pointer'>menu</h1>}</a>
                <a href='#App-Download' onClick={()=>setmenu("mobile-app")}>{menu=="mobile-app"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>mobile-app</h1>:<h1 className='hover:cursor-pointer'>mobile-app</h1>}</a>
                <a href='#contact-us' onClick={()=>setmenu("contact-us")}>{menu=="contact-us"?<h1 className='border-b-2 border-gray-500 hover:cursor-pointer'>contact us</h1>:<h1 className='hover:cursor-pointer'>contact us</h1>}</a>
        </ul>
        </div>
        {/* third wala */}
        <div className='sm:w-44 w-36 md:w-56 h-auto '>
            <ul className='flex flex-row justify-around '>
                <li><button type="button"><img className='w-4 sm:w-auto mt-1 sm:mr-5' src={assets.search_icon} alt="" /></button></li>
                <Link to='/Cart' className='flex flex-row hover:cursor-pointer w-auto h-auto sm:mr-2'><img className='relative w-5 h-5 sm:w-7 sm:h-8' src={assets.basket_icon} alt="" />{currentitems==0||null?null:<span class="relative flex  sm:h-3 sm:w-3">
  <span class="animate-ping absolute inline-flex h-1/3 sm:h-full w-full rounded-full bg-orange-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full sm:h-3 sm:w-3 h-2 w-2 bg-orange-600"></span>
</span>}</Link>
                <li><button onClick={()=>{setShowSignup(true)}} type="button" className='sm:h-auto sm:w-20 sm:ml-2 w-14 h-auto p-1 text-xs sm:text-base  border-2 border-gray-400 rounded-full hover:bg-red-50'><h1>sign in</h1></button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
{/* <div className='w-3 h-2 rounded-full bg-red-500 -mt-1 '></div> */}