import React from 'react'
import Sidebar from '../Components/Sidebar'
import upload_image from "../assets/upload_area.png"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddItem(){
  const notify = () => toast.success("Item Added Successfully!");
  const [file,setfile]=useState(false);
  const [formdata,setformdata]=useState("");
  const handleSubmit=async(e)=>{
    e.preventDefault();
    notify();
    console.log("Order Added Suceessfully");
  }
  const handleChange=async(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value});
    console.log(formdata);
  }
  return(
    <div className='w-screen h-screen flex flex-row'>
      <Sidebar category={"AddItems"}/>
      <div className='w-full h-full md:p-12 p-4'>
        <form action="" onSubmit={handleSubmit}>
        <h1 className='font-semibold text-gray-600 mb-2'>Upload image</h1>
         <label htmlFor="image">
           <img src={file?URL.createObjectURL(file):upload_image} alt="" className='mb-3'/>
        </label>
        <input onChange={(e)=>{setfile(e.target.files[0]);
          setformdata({FoodImage:file});
        }} id="image" type="file" name="image" className='hidden' required />
        <h1 className='font-semibold text-gray-600 mb-2'>Product name</h1>
        <input type="text" name='Productname'  placeholder='Type here' className='p-2 border-2 border-gray-600 rounded-sm w-1/2 text-gray-600 text-ellipsis mb-3' required onChange={handleChange}/>
        <h1 className='font-semibold text-gray-600 mb-2'>Product Description</h1>
        <textarea name="Description" required className='p-2 border-2 border-gray-600 rounded-sm w-1/2 text-gray-600 text-ellipsis mb-3 h-60' id=""  onChange={handleChange}></textarea>
        {/* <input type='text' placeholder='Write Description here'className='p-2 border-2 border-gray-600 rounded-sm w-1/2 text-gray-600 text-ellipsis mb-3 h-60' /> */}
        <div className='flex flex-row w-96 ' >
          <div className='w-full'>
            <h1 className='font-semibold text-gray-600 mb-2'>Product Category</h1>
            <input type="text" name='ProductCategory' className='p-2 border-2 border-gray-600 rounded-sm w-40 text-gray-600 text-ellipsis mb-3' required onChange={handleChange} />
          </div>
          <div className='flex flex-row w-full'>
             <div className='w-full'>
                 <h1 className='font-semibold text-gray-600 mb-2'>Product Price</h1>
                 <input type="text" name='ProductPrice' className='p-2 border-2 border-gray-600 rounded-sm w-40 text-gray-600 text-ellipsis mb-3' required  onChange={handleChange} />
             </div>
          </div>
        </div>
        {/* <button className='h-40 w-48 bg-slate-700' onClick={notify}>hello</button> */}
        
        <button type="submit" className='h-10 p-2  bg-gray-900 w-20 text-white rounded-md mt-3'>Add</button>
        <ToastContainer/>
        </form>
      </div>
    </div>
  )
}
export default AddItem
