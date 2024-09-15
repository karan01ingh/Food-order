import React from 'react'
import playstore from "../assets/play_store.png"
import appstore from "../assets/app_store.png"
function AppDownload() {
  return (
    <div className='w-full h-36  text-center mt-4 sm:h-80 sm:p-12' id='App-Download'>
      <h1 className='font-semibold text-xl pt-3 sm:text-4xl '>For Better Experience Download</h1>
      <h1 className='font-semibold text-xl sm:text-4xl  '>Tomato App</h1>
      <div className='flex flex-row justify-center mt-4'>
        {/* <img className='h-6 w-auto sm:h-auto sm:w-auto' src={playstore} alt="" /> */}
        <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_US"><img className='h-6 w-auto sm:h-auto sm:w-auto' src={playstore} alt="" /></a>
        <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><img className='h-6 w-auto sm:h-auto sm:w-auto' src={appstore} alt="" /></a>
      </div>
    </div>
  )
}

export default AppDownload
