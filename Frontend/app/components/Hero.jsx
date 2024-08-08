"use client"
import { useState } from "react";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import backgroundImage from "../Assets/pattern.png"

const Hero = () => {

  const link= "compass.link/"
  const [inputlink, setInputLink] = useState(link);
    const handleChange = (event) => {
        const value = event.target.value;
        if (value.startsWith(link)) {
            setInputLink(value);
        } else {
            setInputLink(link);
        }
    };
    
  return (
    <div className='flex items-center justify-center mt-20 md:mt-32 pt-6'>
      <div className="absolute -z-10 w-full">
          <Image src={backgroundImage} alt='' className=''/>
        </div>
        <div className='flex flex-col lg:flex-row items-center md:w-3/4 bg-rose-950 border-2 border-black md:p-10 m-3 rounded-lg'>
            <div className='relative flex flex-col justify-center p-5 lg:p-5 my-12 lg:w-2/3 z-50'>
                <h1 className='text-3xl md:text-4xl uppercase font-extrabold text-red-100 mb-4 leading-snug'>Your One-Stop Link Hub. for your Followers in one, simple click in bio.</h1>
                <p className='text-sm md:text-md font-medium text-red-200 leading-7'>Join with Millions of people using compass for their link in bio. Organize and share all your links from one easy-to-use platform. Connect your audience with a single URL link which help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
                <div className="flex flex-col lg:flex-row items-center"> 
                  <input type="text" id="link" className="mt-5 px-7 py-4 rounded-full bg-stone-200 text-slate-700 mr-2" value={inputlink} placeholder="compass.link/" onChange={handleChange} />
                  <button className='mt-5 bg-indigo-900 px-7 py-4 text-xs font-semibold uppercase text-white rounded-3xl hover:bg-indigo-950'>Get your compass</button>
                </div> 
            </div>
            <DotLottieReact
              src="https://lottie.host/276f03d7-d989-41d5-978c-1fc1703df236/6e9vIOGcZm.json"
              loop
              autoplay
              className="md:w-[22rem] md:h-[22rem] h-[20rem] mb-5 md:mb-0 rotate-[5deg]"
            />
        </div>
    </div>
  )
}

export default Hero
