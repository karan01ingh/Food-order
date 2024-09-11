import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Menu from '../Components/menu'
function Home() {
  const [category,setcategory]=useState("ALL");
  return (
    <div>
      <div className="bg-[url('./assets/header_img.png')] mt-8 ml-8 mr-8 sm:h-auto sm:w-auto p-20 sm:pt-40 rounded-lg bg-no-repeat   pt-20 "  >
     {/* <img src={assets.header_img} alt="" /> */}
     {/* bg-contain */}
     <div className='w-auto h-full '>
      <h1 className='sm:text-5xl font-bold text-white text-3xl animation-textanimate 4s '>Order Your </h1>
      <br />
      <h1 className='sm:text-5xl font-bold text-white text-3xl'>favourite fodd here</h1>
      <br />
      <h1 className='text-white text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur, adipis Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga quidem distinctio adipisci voluptatum nam vero unde quasi! Dicta architecto voluptates explicabo quos reiciendis officiis odio rem dolores perferendis voluptate.</h1>
      <br />
      <h1><button className='bg-white p-2 w-28 text-sm rounded-full text-black pl-2'>View Menu</button></h1>
     </div>
    </div>
    <Menu category={category} setcategory={setcategory}/>
    </div>
    
  )
}

export default Home
