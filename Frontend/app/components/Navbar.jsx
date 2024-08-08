import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faPersonWalkingArrowRight, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center">
        <div className="w-full md:w-2/3 border-2 border-black fixed top-0 flex items-center justify-around md:m-5 mt-2 py-3 px:2 md:px-5 bg-[#ebdfdf59] shadow-lg backdrop-blur-md rounded-full filter drop-shadow-md">
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faCompass} size='2x'/>
                <h1 className='text-lg font-black px-2 uppercase'>Compass</h1>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex items-center'>
                    <li className='text-md font-semibold mr-6 cursor-pointer'>Home</li>
                    <li className='text-md font-semibold mr-6 cursor-pointer'>About</li>
                    <li className='text-md font-semibold cursor-pointer'>Support</li>
                </ul>
            </div>
            <div className='flex'>
                <Link href="../auth/signup" className='flex items-center bg-green-800 text-white text-sm font-semibold capitalize px-5 py-3 rounded-3xl mr-2 md:mr-4'>
                    <FontAwesomeIcon icon={faPersonCirclePlus} className='w-[20px] md:mr-2'/>
                    <span className='hidden md:block'>Register</span>
                </Link>
                <Link href="../auth/signin" className='flex items-center bg-blue-800 text-white text-sm font-semibold capitalize px-5 py-3 rounded-3xl'>
                    <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='w-[20px] md:mr-2'/>
                    <span className='hidden md:block'>login</span>
                </Link>
            </div>
        </div> 
    </nav>
  )
}

export default Navbar
