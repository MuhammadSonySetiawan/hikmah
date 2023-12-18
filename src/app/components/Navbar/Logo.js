import React from 'react'
import Search from './Search';
import BgLogo from "../../../../public/asset/Logo.png";
import Image from 'next/image';
import MenuNavbar from './MenuNavbar';
import UilBrightnessEmpty from "@iconscout/react-unicons/icons/uil-brightness-empty";
import UilDiary from "@iconscout/react-unicons/icons/uil-diary";
import UilBookOpen from "@iconscout/react-unicons/icons/uil-book-open";
import UilSortAmountDown from "@iconscout/react-unicons/icons/uil-sort-amount-down";
import Footer from '../Footer/Footer';

function Logo() {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative px-4 py-6">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-3 ">
            <Image src={BgLogo} className="w-16 h-16 sm:object-cover" />
            <div className="text-white text-3xl">
              <h3 className="font-extrabold ">Al Quran</h3>
              <p className="text-xl"> Hikmah.com </p>
            </div>
          </div>
          <Search />
        </div>
        {/* <MenuNavbar/> */}

        <MenuNavbar />

        <div className="flex gap-2 px-4 py-6 ">
          <button className="p-2 text-sky-700 bg-amber-200 rounded-xl text-xs font-extrabold flex justify-center items-center gap-1">
            <UilBrightnessEmpty size="23" className="text-sky-700" />
            Surat
          </button>

          <button className="p-2 text-white border border-white rounded-xl text-xs font-extrabold flex justify-center items-center gap-1">
            <UilDiary size="23" color="#ffff" />
            Juz
          </button>

          <button className="p-3 text-white border border-white rounded-xl text-xs font-extrabold flex justify-center items-center gap-1">
            <UilBookOpen size="23" color="#ffff" />
            Halaman
          </button>

          <button className="p-3 text-white border border-white rounded-xl text-xs font-extrabold ">
            <UilSortAmountDown size="23" color="#ffff" />
          </button>
        </div>
        
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Logo