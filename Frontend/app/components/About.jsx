import Image from 'next/image';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import backgroundImage from "../Assets/pattern.png"

const About = () => {
  return (
    <div className='relative flex items-center justify-center'>
      {/* <div className="absolute -z-10 w-full rotate-180 opacity-50">
          <Image src={backgroundImage} alt='' className=''/>
        </div>  */}
      <div className='md:w-3/4'>
          <div className='text-center p-10 px-8 rounded-lg'> 
            <h1 className='text-2xl md:text-4xl uppercase font-extrabold mb-2 leading-loose my-4'>Share your CompassLink from your Instagram, TikTok, Twitter and other bios.</h1>
            <p className='text-md font-semibold leading-8 my-5'>Add your unique CompassLink URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online. Track your engagement over time, monitor revenue and learn what&apos;s converting your audience. Make informed updates on the fly to keep them coming back.</p>
            <Link href="../auth/signin" className='bg-black px-7 py-4 text-xs font-semibold uppercase text-white rounded-3xl border border-black hover:bg-stone-800'>Get started for free</Link>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-10 mt-5'>
            <div className='flex flex-col m-3 p-2'>
              <h1 className='text-2xl md:text-4xl uppercase font-extrabold mb-2 leading-relaxed'>The fast, friendly and powerful link in bio tool.</h1>
              <p className='text-md capitalize font-semibold leading-7 mb-4'>Connect your TikTok, Instagram, Twitter, website, store, events and more. It all comes together in a link in bio designed for you.</p>
            </div>
            <div>
                <DotLottieReact
                    src="https://lottie.host/276f03d7-d989-41d5-978c-1fc1703df236/6e9vIOGcZm.json"
                    loop
                    autoplay
                    className='md:w-[35rem] md:h-[25rem] h-[20rem]'
                  />
            </div>
          </div>
        <div className='flex flex-col-reverse md:flex-row items-center'>
          <DotLottieReact
              src="https://lottie.host/533e2d0f-9cae-49b8-ae53-741165e01114/8cF2M7sQ8G.json"
              loop
              autoplay
              className='md:w-[40rem] md:h-[35rem] h-[20rem] hidden md:block'
            />
          <div className='flex flex-col lg:w-1/2 m-3 p-2 md:p-4'>
              <h1 className='text-2xl md:text-4xl uppercase font-extrabold mb-2 leading-relaxed'>Analyze your audience and keep your followers engaged.</h1>
              <p className='text-md capitalize font-semibold leading-7 mb-4'>Track your engagement over time, monitor revenue and learn what&apos;s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
