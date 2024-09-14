'use client';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLink, faGear } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Profile', href: '/profile', icon: faUser },
  {
    name: 'Links',
    href: '/profile/links',
    icon: faLink,
  },
  { name: 'Settings', href: '/profile/settings', icon: faGear },
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-xl bg-gray-50 p-3 text-sm font-medium hover:bg-stone-700 hover:text-white md:flex-none md:justify-start md:p-2 md:px-6',
              {
                'bg-stone-700 text-white': pathname === link.href,
              },
            )}
          >
            <FontAwesomeIcon icon={link.icon} className='w-4 h-4'/>
            <p className="hidden md:block font-semibold">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
