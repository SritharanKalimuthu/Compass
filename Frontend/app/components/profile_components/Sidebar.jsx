import NavLinks from './NavLinks';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faGear } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <>  
        <div className="flex h-full flex-col p-2 rounded-xl shadow-lg">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-xl bg-stone-700 p-4 md:h-40"
                href="/"
            >
                <div className="w-32 text-white flex items-center mx-3 md:w-40">
                    <FontAwesomeIcon icon={faCompass}className='w-5 h-5'/>
                    <h1 className='text-lg font-black px-1 uppercase'>Compass</h1>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-xl bg-gray-50 md:block"></div>
                <form>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-gray-50 p-3 text-sm font-semibold hover:bg-stone-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-6">
                    <FontAwesomeIcon icon={faGear} className='w-4 h-4'/>
                    <div className="hidden md:block">Sign Out</div>
                </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Sidebar
