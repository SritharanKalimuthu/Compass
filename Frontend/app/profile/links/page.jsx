import React from 'react'
import Image from 'next/image'
import placeholder from "../../Assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import PreviewArea from '../../components/profile_components/PreviewArea';
import LinkList from '@/app/components/profile_components/LinkList';
import AddLink from '@/app/components/profile_components/AddLink';

function page() {
  return (
    <>
      <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center h-full gap-5'>
        <div className='md:w-2/3 h-full m-2 p-2 pt-5 p-6 md:p-12'>
          <LinkList/>
        </div>
        <div className='w-[1px] h-4/5 border-none bg-stone-400'></div>
        <div className='w-1/2 h-full m-2 p-2 pt-5 p-6 md:p-12'>
          <AddLink/>
          {/* <PreviewArea/> */}
        </div>
      </div>
    </>
  )
}

export default page
