import React from 'react'
import Search from './Search';
import BgLogo from "../../../../public/asset/Logo.png";
import Image from 'next/image';

function Logo() {
  return (
    <>
        <div className="w-full flex flex-col justify-center items-center"> 
          <div className="flex justify-center items-center gap-3 ">
            <Image src={BgLogo} className="w-16 h-16 sm:object-cover" />
            <div className="text-white text-3xl">
              <h3 className="font-extrabold ">Al Quran</h3>
              <p className="text-xl"> Hikmah.com </p>
            </div>
          </div>
          
        </div>
    </>
  );
}

export default Logo