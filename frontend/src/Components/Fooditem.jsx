import React, { useState } from 'react'
// import food_23 from '../assets/food_26.png'
import add_icon_white from  "../assets/add_icon_white.png"
import rating_stars from "../assets/rating_starts.png"
import icon_green from "../assets/add_icon_green.png"
import remove_icon from "../assets/remove_icon_red.png"
import { useSelector,useDispatch } from 'react-redux'
// import {currentCartList} from "../features/Cart.js"
import {currentItems,addToCart,currentCartList,removefromCart} from "../features/Cart.js"
function Fooditem({list}){
  const [clicked,setclicked]=useState(false);
  const [itemscount,setitemscount]=useState(0);
    const dispatch=useDispatch();
    const {currentitems}=useSelector((state)=>state.CartItems);
    const handleclickWhitebutton= ()=>{
      setitemscount(itemscount+1);
      dispatch(currentItems(currentitems+1));
      // dispatch(currentCartList({...currentCartList,[props.id]:props.price}));
      dispatch(addToCart(list));
    }
    const handleclickGreenbutton= ()=>{
      setitemscount(itemscount+1) 
      dispatch(currentItems(currentitems+1));

    }
    const handleclickRedbutton= ()=>{
      setitemscount(itemscount-1) 
      if(currentitems>0){
       dispatch(currentItems(currentitems-1));
      }
      // dispatch(removefromCart(list));

    }

  return(
    <div id={list._id}  className='h-96 w-64 rounded-lg  ml-5 border-2 border-gray-50 shadow-md  shadow-gray-100 hover:scale-105 mt-1 mb-2 animate-fadeIn'>
      {/* its width can be 72 also but I give 64 because it can also be applied */}
      <img className='rounded-t-lg' src={list.image} alt="" />
      <button className='h-14 w-full flex flex-row justify-end -mt-12 pr-2'>
        {itemscount==0? <img onClick={handleclickWhitebutton} className='h-10 w-auto hover:border-2 hover:border-orange-600 rounded-full' src={add_icon_white} alt="" />
        :
        <div className='w-28 flex flex-row justify-between bg-white p-1 rounded-full font-semibold'>
          <img onClick={handleclickGreenbutton} src={icon_green} alt="" />
          
          <h1>{itemscount}</h1>
          <img onClick={handleclickRedbutton} src={remove_icon} alt="" />
          
        </div>} 
       </button>
      <div className='h-40 w-full flex flex-col p-4 '>
        <div className='flex flex-row justify-between'>
            <div className='text-xl font-semibold'>{list.name}</div>
            <div><img src={rating_stars} alt="" /></div>
        </div>
        
        <div className='text-sm mt-2'>{list.description}</div>
        <div className='text-2xl text-orange-600 font-semibold mt-2'>${list.price}</div>
      </div>
    </div>
  )
}

export default Fooditem
// {
//   _id: "1",
//   name: "Greek salad",
//   image: food_1,
//   price: 12,
//   description: "Food provides essential nutrients for overall health and well-being",
//   category: "Salad"
// },
// setformdata({...formdata,[e.target.name]:e.target.value});