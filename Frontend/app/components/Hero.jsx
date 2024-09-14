"use client"
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass} from '@fortawesome/free-solid-svg-icons';


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
    <div className='flex items-center justify-center mt-10 md:mt-22 pt-6'>
      {/* <div className="absolute -z-10 w-full opacity-50">
          <Image src={backgroundImage} alt='' className=''/>
        </div> */}
        <div className='flex flex-col lg:flex-row items-center md:w-3/4 md:my-0 my-10 md:p-5'>
            <div className='ml-4 flex flex-col justify-center lg:w-1/2 z-50'>
                <div className='my-3 mb-10'>
                    <FontAwesomeIcon icon={faCompass} size='3x' className="mb-5"/>
                    <h1 className='text-2xl font-extrabold px-2 uppercase'>Welcome to Compass</h1>
                </div>
                <h1 className='text-3xl md:text-4xl uppercase font-extrabold mb-4 leading-widest'>Your One-Stop Link Hub. for your Followers in one, simple click in bio.</h1>
                <p className=' md:text-md font-medium leading-7'>Connect your audience with a single URL link which help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
                <div className="flex flex-col md:items-start items-center"> 
                  <input type="text" id="link" className="mt-5 px-7 py-4 rounded-full bg-stone-300 text-stone-900 mr-2" value={inputlink} placeholder="compass.link/" onChange={handleChange} />
                  <a href="../auth" className='mt-5 bg-indigo-900 px-7 py-4 text-xs font-semibold uppercase text-white rounded-3xl hover:bg-indigo-950'>Get your compass</a>
                </div> 
            </div>
            <DotLottieReact
              src="https://lottie.host/ca5ff85a-ce16-4d48-bf28-888644c38efc/tj0qELNyxL.json"
              loop
              autoplay
              className="md:w-[45rem] md:h-[45rem] h-[25rem] mb-5 md:mb-0"
            />
        </div>
    </div>
  )
}

export default Hero
