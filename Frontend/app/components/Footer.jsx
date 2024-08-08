import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full p-2 md:px-10 md:py-5">
      <div className="flex items-center justify-between text-stone-950 opacity-50">
          <div className="flex">
            <FontAwesomeIcon icon={faCompass}/>
            <h1 className='text-xs font-bold px-2 uppercase'>Compass</h1>
          </div>
          <p className="text-xs">@Compass 2024, with link <a href="https://github.com/SritharanKalimuthu" className="underline">Author</a></p>
      </div>
    </footer>
  )
}

export default Footer
