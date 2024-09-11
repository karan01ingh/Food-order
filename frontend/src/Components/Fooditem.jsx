import React from 'react'
import food_23 from '../assets/food_26.png'
import add_icon_white from  "../assets/add_icon_white.png"
import { useSelector,useDispatch } from 'react-redux'
function Fooditem(props){
    const dispatch=useDispatch();
    const handleClick=async()=>{
        
        console.log("done click");
    }
  return(
    <div id='1' className='h-96 w-72 rounded-lg  ml-5 border-2 border-gray-50 shadow-md  shadow-gray-100 hover:scale-105'>
      <img className='rounded-t-lg' src={food_23} alt="" />
      <button onClick={handleClick} className='h-14 w-full flex flex-row justify-end -mt-12 pr-2'>
             <img className='h-10 w-auto hover:border-2 hover:border-orange-600 rounded-full' src={add_icon_white} alt="" />
       </button>
      <div className='h-40 w-full flex flex-col p-4 '>
        <div className='flex flex-row justify-between'>
            <div className='text-xl font-semibold'>hhgfhsgfsd ge</div>
            <div>Revuew</div>
        </div>
        
        <div className='text-sm mt-2'>Lorem ipsum dolor sit angfcgdxc f xgfv jch  ddf b gendi?</div>
        <div className='text-2xl text-orange-600 font-semibold mt-2'>$12</div>
      </div>
    </div>
  )
}

export default Fooditem
