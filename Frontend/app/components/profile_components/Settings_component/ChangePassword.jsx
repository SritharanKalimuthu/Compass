import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function ChangePassword() {
  return (
    <form className='bg-white rounded-md shadow-ld gap-2 p-5 mb-3'>
            <h1 className='text-sm font-bold text-stone-700 uppercase mb-5'>Change Password</h1>
              <div className='flex flex-col justify-center px-10'>
                  <div className='flex items-center gap-10 mb-4'>
                    <div className='flex flex-col w-1/2'>
                      <label htmlFor="cpass" className='uppercase text-xs text-stone-500 font-semibold mb-1'>Current Password*</label>
                      <input type='password' id='ccpass' className='py-2 bg-stone-300 rounded-sm shadow-lg text-sm px-4' placeholder='Enter Your current password' required/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                      <label htmlFor="npass" className='uppercase text-xs text-stone-500 font-semibold mb-1'>New Password*</label>
                      <input type='password' id='npass' className='py-2 bg-stone-300 rounded-sm shadow-lg text-sm px-4' placeholder='Enter Your New password' required/>
                    </div>
                  </div>
              </div>
              <button className='mt-2 mb-1 mx-10 bg-green-700 px-5 py-1 rounded-md text-sm font-semibold text-white flex items-center gap-1'>
                  <FontAwesomeIcon icon={faPen} className='w-3 h-3'/>
                  <span className=''>Update Account</span>
              </button>
    </form>
  )
}

export default ChangePassword
