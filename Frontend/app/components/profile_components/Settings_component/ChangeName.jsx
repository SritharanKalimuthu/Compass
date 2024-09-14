import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


function ChangeName() {
  return (
    <form className='bg-white rounded-md shadow-ld gap-2 p-5 mb-3'>
            <h1 className='text-sm font-bold text-stone-700 uppercase mb-5'>Change Name</h1>
              <div className='flex flex-col justify-center px-10'>
                  <div className='flex items-center gap-10 mb-4'>
                    <div className='flex flex-col w-1/2'>
                      <label htmlFor="fname" className='uppercase text-xs text-stone-500 font-semibold mb-1'>FirstName*</label>
                      <input type='text' id='fname' className='py-2 bg-stone-300 rounded-sm shadow-lg text-sm px-4' placeholder='Enter Your FirstName' required/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                      <label htmlFor="lname" className='uppercase text-xs text-stone-500 font-semibold mb-1'>LastName*</label>
                      <input type='text' id='lname' className='py-2 bg-stone-300 rounded-sm shadow-lg text-sm px-4' placeholder='Enter Your LastName' required/>
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

export default ChangeName
