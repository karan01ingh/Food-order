import React from 'react'
import { useState } from 'react'
function Order() {
    const [deliveryaddress,setdeliveryaddress]=useState({});
    const handleChange=(e)=>{
        setdeliveryaddress({...deliveryaddress,[e.target.name]:e.target.value})
    }
    const handleClick=()=>{
        console.log("done handle click");
    }
    console.log(deliveryaddress);
  return (
    <form action="" >
      <div className='w-screen lg:h-screen h-auto flex flex-col lg:flex-row'>
      <div className='lg:w-2/3 w-full h-4/5 md:p-16 xs:p-8 p-3 xs:mt-10 lg:p-16 pt-16'>
      <h1 className='md:text-3xl xs:text-2xl text-xl font-bold text-gray-600'>Delievery Information</h1>
      <div className='grid grid-cols-2 gap-1 w-full sm:gap-y-4 gap-y-2 sm:mt-10 mt-6'>
        
        <input type="text" name='Firstname' className='sm:h-10 h-8 p-2  rounded-md sm:p-5 border-2 border-gray-400 text-gray-600 outline-1 outline-gray-500' placeholder='First name'required onChange={handleChange}/>
        <input type="text" name='Lastname' className='sm:h-10 h-8 p-2 rounded-md sm:p-5 border-2 border-gray-400 text-gray-600'placeholder='Last name'  onChange={handleChange} required/>
        <input type="email" name='Emailaddress' className='sm:h-10 h-8 col-span-2 p-2 rounded-md sm:p-5 border-2 border-gray-400 text-gray-600'placeholder='Email address' onChange={handleChange} required/>
        <input type="text" name='Street' className='sm:h-10 h-8 p-2  col-span-2 rounded-md sm:p-5 border-2 border-gray-400 text-gray-600'placeholder='Street'  onChange={handleChange} required/>
        <input type="text" name='City' className='sm:h-10 h-8 p-2 sm:p-5 rounded-md border-2 border-gray-400 text-gray-600'placeholder='City' onChange={handleChange} required/>
        <input type="text" name='State' className='sm:h-10 h-8 p-2 sm:p-5 rounded-md border-2 border-gray-400 text-gray-600'placeholder='State' onChange={handleChange} required/>
        <input type="text" name='Zipcode' className='sm:h-10 h-8 sm:p-5 p-2 rounded-md border-2 border-gray-400 text-gray-600'placeholder='Zip code' onChange={handleChange} required/>
        <input type="text" name='Country' className='sm:h-10 h-8 sm:p-5 p-2 rounded-md  border-2 border-gray-400 text-gray-600'placeholder='Country' onChange={handleChange} required/>
        <input type="phone" name='Phone' className='sm:h-10 h-8 sm:p-5 p-2 col-span-2 rounded-md border-2 border-gray-400 text-gray-600'placeholder='Phone' onChange={handleChange} required/>       
      </div>
      </div>
      <div className='lg:w-1/3 w-full h-4/5 xs:pt-2 lg:mt-16 xs:p-10 p-0'>
      <div className='md:w-full h-full md:pr-16 md:pt-0 pt-10 flex flex-col w-full xs:p-8 p-2 mt-2 md:p-6 lg:mt-8'>
              <h1 className='md:text-3xl font-bold mb-3 text-xl text-gray-600'>Cart Total</h1>
              {/* <h1 className='md:text-base '>Subtotal</h1> */}
              <div className='w-full h-10 pt-1 pb-1 flex flex-row justify-between border-b-2 border-slate-200'>
                <h1 className='text-xs md:text-base'>Subtotal</h1>
                <h1>$60</h1>
              </div>
              <div className='w-full h-10 pt-1 pb-1  flex flex-row justify-between border-b-2 border-slate-200'>
                <h1>Delievery Fee</h1>
                <h1>$5</h1>
              </div>
              <div className='w-full h-10 pt-1 pb-1  flex flex-row justify-between border-b-2 border-slate-200'>
                <h1 className='text-md font-bold text-gray-600'>Total</h1>
                <h1>$64</h1>
              </div>
              <button className='bg-orange-600 p-2 rounded-md mt-8 w-40  sm:w-44 text-center  text-xs sm:text-base text-white font-semibold' type='Submit'>Proceed <span >To Checkout</span></button>
          </div>
          </div>
    </div>
    </form>
    
  )
}

export default Order
