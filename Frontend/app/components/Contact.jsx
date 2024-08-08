import React from 'react';
import Footer from './Footer';
import Image from 'next/image';
import backgroundImage from '../Assets/pattern.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
          <div className='relative'>
            <div className="absolute -z-10 w-full opacity-50">
              <Image src={backgroundImage} alt='' className=''/>
            </div>
            {/* Support title */}
            <h1 className="text-center text-5xl font-extrabold pt-28 mb-1 capitalize">
              Get in touch
            </h1>

            {/* Support section */}
            <div className="flex flex-col border-none rounded-lg p-8 transition ease-in-out duration-2000">
              <div className="grid gap-y-5 gap-x-12 lg:grid-cols-10 py-4 md:px-40">
                <div className="bg-green-950  border-2 border-black p-9 rounded-lg lg:col-span-4 text-green-100">
                  <h1 className="text-4xl md:text-6xl font-black capitalize leading-tight">
                    Get All your profile with one click.
                  </h1>
                  <p className="text-xl mt-4 font-bold">@compass</p>
                  <p className="mt-3">© 2024 All Rights Reserved</p>
                </div>

                <div className="flex flex-col gap-10 lg:col-span-4">
                  <div className=" bg-orange-950 border-2 border-black p-10 rounded-lg text-orange-100">
                    <h2 className="text-2xl font-bold mb-3">Support</h2>
                    <p className="mb-4">
                      Have questions? Get in touch or check out our Help Center.
                    </p>
                    <p>
                      You can also text our support team at{' '}
                      <a className="underline underline-offset-1 cursor-pointer">
                        (000) 000-0000
                      </a>{' '}
                      or email us at{' '}
                      <a className="underline underline-offset-1 cursor-pointer">
                        help@mail.com
                      </a>
                    </p>
                  </div>
                  <div className="bg-indigo-950 text-indigo-100 border-2 border-black p-10 rounded-lg flex justify-between text-sky-100 lg:col-span-4">
                    <p className="underline underline-offset-1 cursor-pointer">Terms of use</p>
                    <p className="underline underline-offset-1 cursor-pointer">Privacy policy</p>
                  </div>
                </div>

                <div className="bg-stone-900  border-2 border-black p-8 rounded-lg lg:col-span-2 text-purple-100">
                  <h2 className="text-2xl font-bold text-center mb-6">Social</h2>
                  <div className="flex md:flex-col gap-5 md:gap-0 items-center">
                    {/* Social icons */}
                    <FontAwesomeIcon icon={faFacebook} size='3x' className=" mb-6 cursor-pointer" />
                    <FontAwesomeIcon icon={faInstagram} size='3x' className=" mb-6 cursor-pointer" />
                    <FontAwesomeIcon icon={faTwitter} size='3x' className=" mb-6 cursor-pointer" />
                    <FontAwesomeIcon icon={faYoutube} size='3x' className=" mb-6 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
    </>
  )
}

export default Contact;
