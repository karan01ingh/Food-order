import React, { useState } from 'react'
import addicon from "../assets/add_icon.png"
import ordericon from "../assets/order_icon.png"
function Sidebar(){
  const [sideitem,setsideitem]=useState("All");
  
  return (
    <div className='h-screen w-64 border-r-2 border-slate-500 pt-10 flex flex-col items-end'>
      {/* <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start w-52 bg-red-100 rounded-l-sm'>
        <img src={addicon} alt="" className='h-6 pr-5'/>
        <h1 className='font-semibold'>Add Items</h1>
      </div> */}
      {sideitem=="AddItems"?
           <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start w-52 bg-red-100 rounded-l-sm hover:cursor-pointer'>
               <img src={addicon} alt="" className='h-6 pr-5'/>
               <h1 className='font-semibold'>Add Items</h1>
           </div>
        :
            <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start w-52 hover:cursor-pointer  rounded-l-sm' onClick={()=>{setsideitem("AddItems")}}>
                <img src={addicon} alt="" className='h-6 pr-5'/>
                <h1 className='font-semibold'>Add Items</h1>
           </div>
       }
      <br />
      {/* <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start w-52 rounded-l-sm' >
        <img src={addicon} alt="" className='h-6 pr-5'/>
        <h1 className='font-semibold'>List Items</h1>
      </div> */}
      {sideitem=="ListItems"?
          <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start hover:cursor-pointer  bg-red-100 w-52 rounded-l-sm' >
               <img src={addicon} alt="" className='h-6 pr-5'/>
               <h1 className='font-semibold'>List Items</h1>
          </div>
          :
          <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start w-52 hover:cursor-pointer rounded-l-sm' onClick={()=>{setsideitem("ListItems")}} >
              <img src={addicon} alt="" className='h-6 pr-5'/>
              <h1 className='font-semibold'>List Items</h1>
          </div>
      }
      <br />
      {sideitem=="Orders"?
           <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start hover:cursor-pointer bg-red-100 w-52 rounded-l-sm'>
              <img src={ordericon} alt="" className='h-6 pr-5'/>
              <h1 className='font-semibold'>Orders</h1>
           </div> 
           :
           <div className='p-2 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row justify-start hover:cursor-pointer w-52 rounded-l-sm' onClick={()=>{setsideitem("Orders")}}>
                <img src={ordericon} alt="" className='h-6 pr-5'/>
                <h1 className='font-semibold'>Orders</h1>
           </div> 
      }   
      <br/>
    </div>
  )
}

export default Sidebar
