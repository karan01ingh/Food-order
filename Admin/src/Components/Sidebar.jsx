import React, { useState } from 'react'
import addicon from "../assets/add_icon.png"
import ordericon from "../assets/order_icon.png"
import { useNavigate } from "react-router-dom";
function Sidebar({category,setcategory}){
  const navigate=useNavigate();
  return(
    <div className='h-screen sm:w-64 w-16 border-r-2 border-slate-500 pt-10 flex flex-col items-end'>
      {{category}=="AddItem"?
           <div className='sm:p-2 p-1 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row  sm:justify-start justify-center sm:w-48 w-10 bg-red-100 rounded-l-sm hover:cursor-pointer'>
               <img src={addicon} alt="" className='sm:h-6 h-3 sm:pr-5 mr-1'/>
               <h1 className='font-semibold text-xs sm:text-base invisible w-0 sm:w-auto sm:visible'>Add Items</h1>
           </div>
        :
            <div className='sm:p-2 p-1 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row sm:justify-start justify-center sm:w-48 w-10 hover:cursor-pointer  rounded-l-sm' onClick={()=>{navigate("/AddItem")}}>
                <img src={addicon} alt="" className='sm:h-6 h-3 sm:pr-5 mr-1'/>
                <h1 className='font-semibold text-xs sm:text-base invisible w-0 sm:w-auto sm:visible'>Add Items</h1>
           </div>
       }
      <br/>
      {{category}=="ListItems"?
          <div className='sm:p-2 p-1 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row sm:justify-start justify-center sm:w-48 w-10  hover:cursor-pointer  bg-red-100  rounded-l-sm'>
               <img src={addicon} alt="" className='sm:h-6 h-3 sm:pr-5 mr-1'/>
               <h1 className='font-semibold text-xs sm:text-base invisible w-0 sm:w-auto sm:visible'>List Items</h1>
          </div>
          :
          <div className='sm:p-2 p-1 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row sm:justify-start justify-center sm:w-48 w-10 hover:cursor-pointer rounded-l-sm' onClick={()=>{navigate("/ListItem")}} >
              <img src={addicon} alt="" className='sm:h-6 h-3 sm:pr-5 mr-1'/>
              <h1 className='font-semibold text-xs sm:text-base invisible w-0 sm:w-auto sm:visible'>List Items</h1>
          </div>
      }
      <br/>
      {{category}=="Orders"?
           <div className='sm:p-2 p-1 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row sm:justify-start justify-center hover:cursor-pointer bg-red-100 sm:w-48 w-10 rounded-l-sm'>
              <img src={ordericon} alt="" className='sm:h-6 h-3 sm:pr-5 mr-1'/>
              <h1 className='font-semibold text-xs sm:text-base invisible w-0 sm:w-auto sm:visible'>Orders</h1>
           </div> 
           :
           <div className='sm:p-2 p-1 border-t-2 border-b-2 border-l-2 border-slate-500 flex flex-row sm:justify-start justify-center hover:cursor-pointer sm:w-48 w-10 rounded-l-sm' onClick={()=>{navigate("/Orders")}}>
                <img src={ordericon} alt="" className='sm:h-6 h-3 sm:pr-5 mr-1'/>
                <h1 className='font-semibold text-xs sm:text-base invisible w-0 sm:w-auto sm:visible'>Orders</h1>
           </div> 
      }   
      <br/>
    </div>
  )
}

export default Sidebar
