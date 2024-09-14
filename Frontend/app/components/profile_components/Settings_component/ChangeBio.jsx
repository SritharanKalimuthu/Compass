import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function ChangeBio() {
  return (
    <form className='bg-white rounded-md shadow-ld gap-2 p-5 mb-3'>
            <h1 className='text-sm font-bold text-stone-700 uppercase mb-5'>Change Bio</h1>
              <div className='flex flex-col justify-center px-10'>
                  <div className='flex flex-col mb-4'>
                      <label htmlFor="bio" className='uppercase text-xs text-stone-500 font-semibold mb-1'>Your Bio* </label>
                      <textarea id='bio' className='p-3 bg-stone-300 rounded-sm shadow-lg text-sm' rows="4" cols="20" placeholder='Give you a TagLine' required/>
                  </div>
              </div>
              <button className='mt-2 mb-1 mx-10 bg-green-700 px-5 py-1 rounded-md text-sm font-semibold text-white flex items-center gap-1'>
                  <FontAwesomeIcon icon={faPen} className='w-3 h-3'/>
                  <span className=''>Update Bio</span>
              </button>
    </form>
  )
}

export default ChangeBio
