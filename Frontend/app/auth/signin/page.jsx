"use client"
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faXmark, faPersonWalkingArrowRight, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import backgroundImage from '../../Assets/pattern.png';

const page = () => {
  return (
            <div className="min-h-screen bg-gradient-to-l from-[#9796f0] to-[#fbc7d4] text-gray-900 flex justify-center">
                <div className="absolute bottom-0 z-0 w-full opacity-50">/
                <Image src={backgroundImage} alt='' className=''/>
                </div>
                <div className="relative max-w-screen-xl m-0 sm:m-10 bg-stone-300 shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="flex-1 bg-gradient-to-b from-[#C4E0E5] to-[#4CA1AF] text-center hidden md:flex">
                        {/* <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{backgroundImage:"url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}>
                        </div> */}
                        <DotLottieReact
                            src="https://lottie.host/4294c8a6-fe0e-44c9-aa0f-6f5affa5f14e/GUl1lZ8AJu.json"
                            loop
                            autoplay
                        />
                    </div>
                    <div className="lg:w-1/2 p-6 sm:p-12">
                        <div className='flex items-center justify-center'>
                            <FontAwesomeIcon icon={faCompass} className='w-[2rem] h-[2rem]'/>
                            <h1 className='text-lg font-black px-2 uppercase'>Compass</h1>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-xl xl:text-2xl uppercase font-extrabold">
                                Welcome Back
                            </h1>
                            <p className='text-center font-medium my-5'>Enter your credentials to get your compass.</p>
                            <div className="w-full flex-1 mt-6">
                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <div className='flex items-center gap-5'>
                                        <button href="../../auth/signin"
                                            className="mt-4 tracking-wide font-semibold bg-indigo-700 text-gray-100 w-full py-2 rounded-full hover:bg-indigo-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='w-6 h-6'/>
                                            <span className="ml-3 text-sm">
                                                Log In
                                            </span>
                                        </button>
                                    </div>
                                    <p className='p-2 py-4 relative right-0 text-sm text-stone-800 my-2 underline cursor-pointer'>Forget Password?</p>
                                    <div className="my-1 border-b border-stone-400 text-center">
                                    <div
                                        className="leading-none pt-2 px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-stone-300 transform translate-y-1/2">
                                        Or
                                    </div>
                                    </div>
                                    <p className='p-2 py-4 relative right-0 text-sm text-stone-800 my-2'>New User? To Register click below,</p>
                                    <Link href="../../auth/signup"
                                            className="mt-4 tracking-wide font-semibold bg-green-700 text-gray-100 w-full py-2 rounded-full hover:bg-green-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <FontAwesomeIcon icon={faPersonCirclePlus} className='w-6 h-6'/>
                                            <span className="ml-3 text-sm">
                                                Register
                                            </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 right-0 p-3 cursor-pointer'>
                    <Link href="/"><FontAwesomeIcon icon={faXmark} className='p-1 bg-none text-stone-600 rounded-full w-4 h-5'/></Link>
                    </div>
                </div>
            </div>
  )
}

export default page
