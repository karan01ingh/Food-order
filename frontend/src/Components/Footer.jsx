import React from 'react'
import logo from "../assets/logo.png"
import twitter from "../assets/twitter_icon.png"
import linkedin from "../assets/linkedin_icon.png"
import facebook from "../assets/facebook_icon.png"
function Footer() {
  return (
    <div className='w-screen h-auto mt-10 bg-zinc-800 pl-1 pt-1 pr-1 flex flex-col md:pl-14 md:pt-14 md:pr-14 '>
        <div className='h-auto w-full flex flex-row border-b-2 border-slate-200 justify-between pb-10'>
            <div className='w-1/2'>
                <img src={logo} alt=""/>
                <br />
                <h1 className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet quis, iure repellat reprehenderit quasi maxime quam, saepe commodi minus est placeat accusamus suscipit sapiente. Maxime temporibus molesti</h1>
                <br />
                <div className='flex flex-row jstify p-2 '>
                    <img src={twitter} alt="" className='m-1' /><img src={linkedin} alt="" className='m-1'/><img src={facebook} alt="" className='m-1'/>
                </div>
            </div>
            <div className='w-1/2 flex flex-col md:flex-row justify-around md:justify-around '>
            <div className='md:w-1/2 w-full h-auto md:pt-0 text-center  pl-1'>
                <h1 className='text-slate-200  font-semibold md:text-3xl text-xl'>COMPANY</h1>
                <h1 className='text-slate-200 font-semibold text-sm md:text-lg pt-2'>Home</h1>
                <h1 className='text-slate-200 font-semibold text-sm md:text-lg pt-2 '>About Us</h1>
                <h1 className='text-slate-200 font-semibold text-sm md:text-lg pt-2 '> Delievery</h1>
                <h1 className='text-slate-200 font-semibold text-sm md:text-lg pt-2 '>Privacy Policy</h1>
            </div>
            <div className='md:w-1/2 w-full h-auto md:pt-0 text-center '>
                <h1 className='text-slate-200 md:text-3xl font-semibold text-xl'>GET IN TOUCH</h1>
                <h1 className='text-slate-200 font-semibold text-sm md:text-lg pt-2'>Number</h1>
                <h1 className='text-slate-200 font-semibold pt-2'>Email</h1>
            </div>
            </div>
        </div>
        <h1 className='text-center pt-4 text-slate-200'>Copyright 2024 © Website.com - All right Reserved</h1>
    </div>
  )
}

export default Footer
