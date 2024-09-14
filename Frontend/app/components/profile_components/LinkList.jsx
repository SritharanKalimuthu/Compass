import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical,faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function LinkList() {
    const Links = [
        {   
            icon:faInstagram,
            link : "https://www.instagram.com/usrname/profile",
            platform:"Instagram",
        },
        {   
            icon:faFacebook,
            link : "https://www.instagram.com/usrname/profile",
            platform:"Facebook",
        },
        {   
            icon:faXTwitter,
            link : "https://www.instagram.com/usrname/profile",
            platform:"XTwitter",
        },
    ]
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='antialiased text-xl text-stone-800 font-extrabold my-2 mx-auto underline'>Link Hub</h1>
        {Links.map((links,i)=>{
            return(
                <div key={i} className='w-4/5 flex items-center justify-between m-2 p-5 bg-stone-100 text-stone-800 rounded-md shadow-xl'>
                    <FontAwesomeIcon icon={faGripVertical}className='w-4 h-4 p-2 text-stone-400'/>
                    <FontAwesomeIcon icon={links.icon}className='w-7 h-7 mr-3'/>
                    <div className='flex flex-col'>
                        <h1 className='text-xs font-semibold uppercase'>{links.platform}</h1>
                        <p className='text-sm font-medium'>{links.link}</p>
                    </div>
                    <FontAwesomeIcon icon={faPen}className='w-4 h-4 p-2 text-green-700 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrash}className='w-4 h-4 p-2 text-red-700 cursor-pointer'/>
                </div>
            )
        })}
        <button className='my-2 bg-blue-700 px-6 py-1 rounded-sm text-sm font-semibold text-white flex items-center gap-1'>
                  <FontAwesomeIcon icon={faPen} className='w-3 h-3'/>
                  <span className='uppercase'>Edit links</span>
                </button>
      </div>
    </>
  )
}

export default LinkList
