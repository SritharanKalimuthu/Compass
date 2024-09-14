import React from 'react'
import Image from 'next/image'
import placeholder from "../Assets/profile.jpg"
import PreviewArea from '../components/profile_components/PreviewArea';

const page = () => {
  return (
    <>
      <div className='w-full flex items-center h-full gap-5'>
        <div className='md:w-2/3 m-2 p-3 md:p-12 py-3'>
          <h1 className=" text-center my-2 text-xl font-bold underline mb-3">Profile Card</h1>
            <div className='m-2 p-2 pt-5'>
              <div className='flex gap-10 items-center justify-center mb-4'>
                  <Image src={placeholder} alt="UserProfile" className='w-1/4 h-1/4 rounded-lg border-2 border-stone-100 drop-shadow-lg mb-3'/>
                  <Image src={placeholder} alt="UserProfile" className='w-1/4 h-1/4 rounded-lg border-2 border-stone-100 drop-shadow-lg mb-3'/>
              </div>
              <div className='flex items-center justify-center my-3'>
                    <button className='my-1 bg-green-700 px-5 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1'>Generate QR Code</button>
              </div>
              <div className='bg-white rounded-md shadow-ld gap-2 p-5 mb-3 text-center'>
                <h1 className='text-stone-600 font-semibold uppercase mb-3'>Personal information</h1>
                <hr />
                  <div className='flex items-center justify-between my-3 mx-5 px-2 py-2'>
                    <p className='text-sm text-stone-500 font-semibold uppercase'>Name</p>
                    <p className='text-md text-stone-700 font-semibold'>UserName</p>
                  </div>
                  <div className='flex items-center justify-between my-3 mx-5 px-2 py-2'>
                    <p className='text-sm text-stone-500 font-semibold uppercase'>Email</p>
                    <p className='text-md text-stone-700 font-semibold'>UserName@mail.com</p>
                  </div>
                  <div className='flex items-center justify-between my-3 mx-5 px-2 py-2'>
                    <p className='text-sm text-stone-500 font-semibold uppercase'>Join Date</p>
                    <p className='text-md text-stone-700 font-semibold'>24 Apr 2024</p>
                  </div>
                  <div className='flex items-center justify-between my-3 mx-5 px-2 py-2'>
                    <p className='text-sm text-stone-500 font-semibold uppercase'>bio</p>
                    <p className='text-md text-stone-700 font-semibold'>UserName has not been given.</p>
                  </div>
              </div>
            </div>
        </div>
        <div className='w-[1px] h-4/5 border-none bg-stone-400'></div>
        <div className='hidden md:block bg-gray-50 w-1/2 h-full'>
          <PreviewArea/>
        </div>
      </div>
    </>
  )
}

export default page
