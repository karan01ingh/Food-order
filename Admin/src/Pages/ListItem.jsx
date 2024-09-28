import React from 'react'
import Sidebar from '../Components/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CircleX} from 'lucide-react'
function ListItem(){
  const notify = () => toast.success("Item Removed Successfully!");
  const lists=[{id:1,image:"nbvdsvcd",name:"ngvsdcsdhcvds",category:"nvcvdcdcsdc",Price:"nmcvdc"},{id:2,image:"nbvdsd",name:"ngvsdds",category:"nvcvdc",Price:"nmhjvcdjs"},{id:3,image:"nbvdsvcd",name:"ngvsdcsdhcvds",category:"nvcvdcdcsdc",Price:"nmcvdc"},{id:4,image:"nbvdsd",name:"ngvsdds",category:"nvcvdc",Price:"nmhjvcdjs"}]
  // const [selection,setselection]=useState("ListItem");
  const handleClick=async()=>{
    notify();
    console.log("done remove");

  }
  return(
    <div className='w-screen h-screen flex flex-row'>
      <Sidebar category={"ListItems"}/>
      <div className='w-full h-full md:p-12 p-4'>
        <h1 className='font-semibold text-gray-500'>All Foods List</h1>
        <ul className='flex flex-row w-full justify-between text-gray-500 font-bold p-2 border-2 border-gray-300 mt-2 rounded-sm'>
          <li  className='w-1/6'>Image</li>
          <li className='w-1/3 text-start'>Name</li>
          <li className='w-1/6 '>Category</li>
          <li className='w-1/6 '>Price</li>
          <li className='w-1/6 text-end'>Action</li>
        </ul>
        <div className='flex flex-col border-2 border-slate-300 h-auto w-full rounded-sm'>
          {lists.map((list)=>(
            <ul className='flex flex-row h-auto w-full justify-between text-gray-500 p-2 border-b-2 border-slate-300 ' id={list.id}>
              <li className='w-1/6'>{list.image}</li>
              <li className='w-1/3 text-start'>{list.name}</li>
              <li className='w-1/6 '>{list.category}</li>
              <li className='w-1/6 '>{list.Price}</li>
              <li className='w-1/6 flex flex-row justify-end'><CircleX size={16} color="#0b0a0a" strokeWidth={1.75} absoluteStrokeWidth onClick={handleClick} className='hover:cursor-pointer'/></li>
              <ToastContainer/>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ListItem
// <CircleX size={16} strokeWidth={0.5} absoluteStrokeWidth />