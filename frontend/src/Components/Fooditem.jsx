import React, { useState } from 'react'
// import food_23 from '../assets/food_26.png'
import add_icon_white from  "../assets/add_icon_white.png"
import rating_stars from "../assets/rating_starts.png"
import { useSelector,useDispatch } from 'react-redux'
function Fooditem(props){
  const [clicked,setclicked]=useState(false);
    const dispatch=useDispatch();
    const handleClick=async()=>{
        
        console.log("done click");
    }
  return(
    <div id={props._id}  className='h-96 w-64 rounded-lg  ml-5 border-2 border-gray-50 shadow-md  shadow-gray-100 hover:scale-105 mt-1 mb-2 animate-fadeIn'>
      {/* its width can be 72 also but I give 64 because it can also be applied */}
      <img className='rounded-t-lg' src={props.image} alt="" />
      <button onClick={handleClick} className='h-14 w-full flex flex-row justify-end -mt-12 pr-2'>
             <img className='h-10 w-auto hover:border-2 hover:border-orange-600 rounded-full' src={add_icon_white} alt="" />
             
       </button>
      <div className='h-40 w-full flex flex-col p-4 '>
        <div className='flex flex-row justify-between'>
            <div className='text-xl font-semibold'>{props.name}</div>
            <div><img src={rating_stars} alt="" /></div>
        </div>
        
        <div className='text-sm mt-2'>{props.description}</div>
        <div className='text-2xl text-orange-600 font-semibold mt-2'>${props.price}</div>
      </div>
    </div>
  )
}

export default Fooditem
// _id: "1",
//         name: "Greek salad",
//         image: food_1,
//         price: 12,
//         description: "Food provides essential nutrients for overall health and well-being",
//         category: "Salad"