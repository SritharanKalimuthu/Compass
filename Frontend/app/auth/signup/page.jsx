"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faXmark, faPersonWalkingArrowRight, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#cc95c0] to-[#7aa1d2] text-gray-900 flex justify-center">
        <div className="relative max-w-screen-xl m-0 sm:m-10 bg-stone-300 shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 p-6 sm:p-12">
                <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faCompass} className='w-[2rem] h-[2rem]'/>
                    <h1 className='text-lg font-black px-2 uppercase'>Compass</h1>
                </div>
                <div className="mt-10 flex flex-col items-center">
                    <h1 className="text-xl xl:text-2xl uppercase font-extrabold">
                        Create your account now
                    </h1>
                    <div className="w-full flex-1 mt-6">
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email" name='email' placeholder="Email" />
                            <input
                                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password" name='password' placeholder="Password" />
                            <input
                                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password" name='confirm password' placeholder="Confirm Password" />
                            <p className="mt-6 px-2 text-xs text-gray-600 leading-5">
                              <input type='checkbox' name='checkbox' className='mr-2 pt-1 p-2'/>
                                I agree to abide by compass's <a className="border-b border-gray-500 border-dotted cursor-pointer">
                                    Terms of Service
                                </a> and its <a className="border-b border-gray-500 border-dotted cursor-pointer">
                                    Privacy Policy.
                                </a>
                            </p>
                            <div className='flex items-center gap-5'>
                                <Link href="../../auth/signin"
                                    className="mt-4 tracking-wide font-semibold bg-indigo-700 text-gray-100 w-full py-2 rounded-full hover:bg-indigo-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='w-6 h-6'/>
                                    <span className="ml-3 text-sm">
                                        Log In
                                    </span>
                                </Link>
                                <button
                                    className="mt-4 tracking-wide font-semibold bg-green-700 text-gray-100 w-full py-2 rounded-full hover:bg-green-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <FontAwesomeIcon icon={faPersonCirclePlus} className='w-6 h-6'/>
                                    <span className="ml-3 text-sm">
                                        Register
                                    </span>
                                </button>
                            </div>
                            <div className="my-3 border-b border-stone-400 text-center">
                              <div
                                  className="leading-none pt-2 px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-stone-300 transform translate-y-1/2">
                                  Or
                              </div>
                            </div>
                            <div className="flex flex-col items-center mt-8 gap-5">
                              <button
                                className="w-full max-w-xs font-bold shadow-sm rounded-full py-2 bg-blue-800 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className="bg-white p-2 rounded-full">
                                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4" />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853" />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04" />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335" />
                                    </svg>
                                </div>
                                <span className="ml-4 text-sm">
                                    Sign Up with Google
                                </span>
                              </button>
                              <button
                                className="w-full max-w-xs font-bold shadow-sm rounded-full py-2 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className="bg-white text-black p-1 rounded-full">
                                    <FontAwesomeIcon icon={faXTwitter} className='w-6 h-5'/>
                                </div>
                                <span className="ml-4 text-sm">
                                    Sign Up with Twitter
                                </span>
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-gradient-to-t from-[#ED4264] to-[#FFEDBC] text-center hidden md:flex">
                {/* <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                    style={{backgroundImage:"url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}>
                </div> */}
                <DotLottieReact
                    src="https://lottie.host/4294c8a6-fe0e-44c9-aa0f-6f5affa5f14e/GUl1lZ8AJu.json"
                    loop
                    autoplay
                />
            </div>
            <div className='absolute top-0 right-0 p-3 cursor-pointer'>
              <Link href="/"><FontAwesomeIcon icon={faXmark} className='p-1 bg-none text-stone-600 rounded-full w-4 h-6'/></Link>
            </div>
        </div>
    </div>
  )
}

export default page
