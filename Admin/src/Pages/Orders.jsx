import React from 'react'
import Sidebar from '../Components/Sidebar'
import parcelicon from "../assets/parcel_icon.png"
import { useState } from 'react';
function Orders(){
  // const [selection,setselection]=useState("Orders");
  let arr=[{"item":2,details:"greeksalad",address:"nfvfdnv fdv fdvdf fhbfer"},{item:2,details:"greekWined",address:"nfvfdnv fdv fdvdf fhbfer"}];
  return(
    <div className='w-screen h-screen flex flex-row'>
      <Sidebar category={"Orders"}/>
      <div className='w-full h-full md:p-12 p-4'>
        <h1 className='md:text-3xl text-xl font-semibold mb-3'>Order page</h1>
        <div className='w-full h-auto flex flex-col'>
        {arr.map((list)=>(
          <div className='w-full h-auto flex md:flex-row md:justify-between flex-col  border-2 border-slate-400 mt-5 md:pt-2 md:pb-2 md:pl-2 md:pr-2 p-5'>
            {/* <img src={parcelicon} alt="" /> */}
            <div className='h-full w-10'><img src={parcelicon} alt="" /></div>
            <div className='flex flex-col justify-between w-full md:w-2/5 mt-1 md:mt-0'>
              <h1>{list.details}</h1>
              <h1>{list.address}</h1>
            </div>
            <h1>{list.item}</h1>
            <h1 className='font-bold  mt-1 md:mt-0'>$48</h1>
            <select name="" id="" className='h-10 text-gray-700 border-2 border-slate-500 bg-red-100 rounded-sm  mt-1 md:mt-0'>
              <option value="Food Processing" className='bg-green-300'>Food Processing</option>
              <option value="Food conferm" className='bg-green-300'>Food Done</option>
              <option value="out of deleivery" className='bg-green-300'>Out for Delievery</option>
            </select>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
