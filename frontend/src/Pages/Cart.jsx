import React, { useState } from 'react'
import {currentCartList} from "../features/Cart.js"
import { assets } from '../assets/assets.js';
import cross from "../assets/cross_icon.png"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function Cart() {
  const navigate=useNavigate();
    const dispatch=useDispatch();
    const {currentCartList}=useSelector((state)=>state.CartItems);
    const [numberofitems,setnumberofitems]=useState(currentCartList);
    const [coupancode,setcoupancode]=useState("");
    const handlechange=(e)=>{
      setcoupancode(e.target.value);
    }
  return (
    <div className='w-screen h-screen md:p-24 flex flex-col md:pt-24 xs:pt-5 xs:p-2 overflow-x-scroll'>
        <div className='w-full h-auto'>
            <ul  className='flex flex-row justify-between border-b-2 mb-1 pb-2 border-slate-100'>
                <li className='w-1/6 h-auto text-center xs:text-lg text-sm'><h1>Items</h1></li>
                <li className='w-1/6 h-auto text-center xs:text-lg text-sm'><h1>Title</h1></li>
                <li className='w-1/6 h-auto text-center xs:text-lg text-sm'><h1>Price</h1></li>
                <li className='w-1/6 h-auto text-center xs:text-lg text-sm'><h1>Quantity</h1></li>
                <li className='w-1/6 h-auto text-center xs:text-lg text-sm'><h1>Total</h1></li>
                <li className='w-1/6 h-auto text-center xs:text-lg text-sm'><h1>Remove</h1></li>
             </ul>
                {currentCartList.map((list)=>(
                  <ul id={list._id} className='flex flex-row justify-between mt-2 border-b-2 border-slate-100'>
                    <li className='w-1/6 flex flex-row text-center font-semibold justify-center mt-1 mb-2'><img src={list.image} alt="" className='xs:w-16 w-10' /></li>
                    <li className='w-1/6  text-center font-semibold mt-1 xs:text-base text-xs'>{list.name}</li>
                    <li className='w-1/6  text-center font-semibold mt-1 xs:text-base text-xs'>{list.price}</li>
                    <li className='w-1/6  text-center font-semibold mt-1 xs:text-base text-xs'>1</li>
                    <li className='w-1/6  text-center font-semibold mt-1 xs:text-base text-xs'>${list.price}</li>
                    <li className='w-1/6 flex flex-row justify-center mt-2'><img className='xs:w-4 xs:h-4 h-2 w-2  hover:cursor-pointer' onClick={()=>{}} src={cross} alt=""  /></li>
                  </ul>
                 ))}
        </div>
        <div className='w-full h-96 flex md:flex-row flex-col justify-between md:pt-16'>
          <div className='md:w-1/2 h-full md:pr-16 md:pt-0 pt-10 flex flex-col w-full p-8 md:p-0'>
              <h1 className='md:text-2xl font-bold mb-3'>Cart Total</h1>
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
                <h1 className='text-md font-bold'>Total</h1>
                <h1>$64</h1>
              </div>
              <button className='bg-orange-600  w-auto p-2 rounded-md mt-8' onClick={()=>{navigate('/Order')}}>Proceed <span>To Checkout</span></button>
          </div>
          <div className='md:w-1/2 w-full h-full pl-8 pr-8 md:pl-0 md:pr-0 xs:ml-4'>
          <h1 className='font-semibold text-start'>If you have a promo code,Enter it here</h1>
          <div className='mt-2 flex flex-row'>
            <input type="text" placeholder='promo code' className='w-4/5 h-auto p-1 lg:p-2 outline-1 outline-slate-300 rounded-l-sm bg-slate-200 text-gray-800' onChange={handlechange}/>
            <button className='w-auto  h-auto bg-slate-900 font-semibold text-white p-1 rounded-r-sm lg:p-2'>Submit</button>
          </div>
          </div>
        </div>
        <div></div>
    </div>
  )
}
export default Cart
// _id: "3",
// name: "Clover Salad",
// image: food_3,
// price: 16,
// description: "Food provides essential nutrients for overall health and well-being",
// category: "Salad"
// setAllPosts((prev) =>prev.filter((post) => post._id !== postidtoDelete)