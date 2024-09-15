import React from 'react'
import { menu_list } from '../assets/assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect,useState } from 'react';
function Menu({category,setcategory}){
    const [width,setwidth]=useState(window.innerWidth);
    const [clicked,setclicked]=useState(false);
    const handleClick=async()=>{
        if(clicked==false){
          setcategory(items.menu_name)
          setclicked(true);
        }
        else{
            setcategory("ALL");
            setclicked(false);
        }
        console.log("done click");
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:6,
        slidesToScroll:1
      };
      console.log(category);
  return (
    <div className='flex flex-col ml-8 m-6 pb-16 border-b-2 border-gray-200' id='menu'>
        <h1 className='text-4xl font-bold '>Explore Menu</h1>
        <br/>
        <h1 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum quisquam ipsum veritatis voluptate delectus nemo debitis corrupti, similique officia. Expedita nulla officiis unde eaque doloremque. Aspernatur sed accusamus nobis.loem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro architecto vitae tenetur ullam quod commodi illum quidem facilis sit totam. Culpa iste, voluptate labore provident quos quis! Consequatur, alias corrupti.</h1>
        <br />
        <Slider {...settings} >
            {menu_list.map((items)=>(
                <div key={items.index} className='flex flex-col justify-center mt-2 ml-1 animate-fadeIn'>
                    <button onClick={()=>{setcategory(items.menu_name)}}>{category===items.menu_name?<img src={items.menu_image} className='border-4 border-orange-600 rounded-full  ' alt="" />:<img className='hover:scale-110' src={items.menu_image}/>}
                    </button>
                    <h1 className='sm:text-start sm:pl-10 text-center text-sm font-semibold'>{items.menu_name}</h1>
                    </div>
            ))}
        </Slider>
    </div>
  )
}

export default Menu
// menu bar me 600 scrren width pe to ek dum accah lgra hai but usse niche words overlap hore h 
