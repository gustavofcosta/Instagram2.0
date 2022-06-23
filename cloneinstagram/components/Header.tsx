import Image from 'next/image';
import React from 'react';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';

import { HomeIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <div className='shadow-sm border-b pb-1 bg-white fixed w-full z-50'>
      <div className="flex justify-between mx-5 max-w-3xl lg:mx-auto" >
        {/* logo */}
        <div className="relative hidden lg:inline-grid w-28 cursor-pointer" >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-8 lg:hidden flex-shrink-0 cursor-pointer" >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Search */}
        <div className="max-w-xs" >
          <div className="relative mt-1 p-2 rounded-md" >
            <div className="absolute inset-y-0 pl-2 flex items-center pointer-events-none" >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 h-9 w-64 block pl-8 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Pesquisar"
            />
          </div>
        </div>

        {/* Nav-Icons */}
        <div className="flex items-center justify-end space-x-3" >
          <MenuIcon className="h-7 md:hidden cursor-pointer" />
          <HomeIcon className="navBtn" />

          <div className='relative navBtn'>
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <PaperAirplaneIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          {/* User Photo */}
          < img
            className="h-9 w-9 rounded-full cursor-pointer object-cover"
            src="/women.jpg"
            alt="profile pic"
          />
        </div>

      </div>
    </div>
  );
};

export default Header;
