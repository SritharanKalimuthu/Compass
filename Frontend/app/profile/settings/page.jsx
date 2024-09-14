import React from 'react'
import Image from 'next/image'
import LinkList from '../../components/profile_components/LinkList'
import placeholder from "../../Assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrash,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PreviewArea from '../../components/profile_components/PreviewArea';
import ChangeName from '@/app/components/profile_components/Settings_component/ChangeName'
import ChangeEmail from '@/app/components/profile_components/Settings_component/ChangeEmail'
import ChangePassword from '@/app/components/profile_components/Settings_component/ChangePassword'
import ChangeBio from '@/app/components/profile_components/Settings_component/ChangeBio'

function page() {
  return (
    <>
      <div className='w-full flex h-full gap-5'>
        <div className='h-full m-2 p-3 md:p-12 py-3 md:py-4'>
          <h1 className="text-center my-2 text-xl font-bold underline mb-3">Settings</h1>
          <div className='flex flex-col items-center justify-center gap-5 mb-3'>
              <div className='flex items-center justify-center gap-10 mb-3'>
                <Image src={placeholder} alt="UserProfile" className='w-1/6 rounded-full border-2 border-stone-100 drop-shadow-lg my-5'/>
                <div className='flex flex-col'>
                  <h1 className='text-center font-semibold text-stone-800 mb-2 uppercase'>Arshit Patel</h1>
                  <button className='my-1 bg-green-700 px-5 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1'>
                    <FontAwesomeIcon icon={faPen} className='w-3 h-3'/>
                    <span className=''>Change Profile</span>
                  </button>
                  <button className='my-1 bg-red-700 px-5 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1'>
                    <FontAwesomeIcon icon={faTrash} className='w-3 h-3'/>
                    <span className=''>Delete Profile</span>
                  </button>
                </div>
              </div>
          <div className='w-4/5 shadow-ld gap-2 p-5 mb-3'>
            <h1 className='text-lg font-bold text-stone-700 uppercase mb-5'>Account Settings</h1>
            <ChangeName/>
            <ChangeEmail/>
            <ChangePassword/>
            <ChangeBio/>
            <div className='bg-white rounded-md shadow-ld gap-2 p-5 flex flex-col justify-center mb-4'>
              <h1 className='text-sm font-bold text-stone-700 uppercase'>Delete Account</h1>
              <p className='w-1/4 text-red-700 text-sm bg-red-300 px-3 py-1 rounded-full'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='mr-2'/> 
                Proceed with Caution.
              </p>
              <div className='flex items-center gap-2 px-2'>
                <p className='w-4/5 text-sm text-stone-600'>We will completely wipe your data. There is no way to access your account after this action. Make sure you wanted to delete your Account.</p>
                <button className='my-1 bg-red-700 px-5 py-1 rounded-md text-sm font-semibold text-white flex items-center gap-1'>
                  <FontAwesomeIcon icon={faTrash} className='w-3 h-3'/>
                  <span className=''>Delete Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <div className='w-[1px] h-4/5 border-none bg-stone-400'></div>
        <div className='hidden md:block bg-gray-50 w-1/2 h-full'>
          <PreviewArea/>
        </div> */}
      </div>
    </>
  )
}

export default page
