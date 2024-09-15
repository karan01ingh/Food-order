import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Menu from '../Components/menu'
import Fooditem from '../Components/Fooditem';
import { useSelector,useDispatch } from 'react-redux';
import AppDownload from '../Components/AppDownload';
function Home(){
  const dispatch=useDispatch();
  const {currentList}=useSelector((state)=>state.FoodItem)
  const [currentcategory,setcurrentcategory]=useState("ALL");
  const { currentitems}=useSelector((state)=>state.CartItems)
  // function issameCategory(value) {
  //   if(value="ALL"){
  //     return true;
  //   }
  //   return value ==currentcategory;
  // }
  console.log(currentitems);
  return (
    <div>
      <div className="bg-[url('./assets/header_img.png')] mt-8 ml-8 mr-8 sm:h-auto sm:w-auto p-20 sm:pt-40 rounded-lg bg-no-repeat   pt-20 "  >
     {/* <img src={assets.header_img} alt="" /> */}
     {/* bg-contain */}
     <div className='w-auto h-full '>
      <h1 className='sm:text-5xl font-bold text-white text-3xl animation-textanimate 4s '>Order Your </h1>
      <br/>
      <h1 className='sm:text-5xl font-bold text-white text-3xl'>favourite fodd here</h1>
      <br />
      <h1 className='text-white text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur, adipis Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga quidem distinctio adipisci voluptatum nam vero unde quasi! Dicta architecto voluptates explicabo quos reiciendis officiis odio rem dolores perferendis voluptate.</h1>
      <br />
      <h1><button className='bg-white p-2 w-28 text-sm rounded-full text-black pl-2 font-semibold'>View Menu</button></h1>
     </div>
    </div>
    <Menu category={currentcategory} setcategory={setcurrentcategory}/>
    <h1 className='text-3xl font-bold pl-8 pb-8'>Top dishes near you</h1>
   <div className='w-auto h-auto flex flex-row flex-wrap justify-around'>
      {currentList.map((list)=>(
      //  currentcategory=="ALL" ||list.category===currentcategory?<Fooditem id={list._id} name={list.name} image={list.image} price={list.price} description={list.description} category={list.category} />:null
        // list.category===currentcategory?<Fooditem id={list._id} name={list.name} image={list.image} price={list.price} description={list.description} category={list.category} />:null
        currentcategory=="ALL" ||list.category===currentcategory?<Fooditem list={list}/>:null
      ))}
    </div>
    <AppDownload/>
    </div>
    
  )
}

export default Home