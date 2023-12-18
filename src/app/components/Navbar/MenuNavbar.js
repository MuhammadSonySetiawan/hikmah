import React from 'react'
import UilBrightnessEmpty from "@iconscout/react-unicons/icons/uil-brightness-empty";
import UilDiary from "@iconscout/react-unicons/icons/uil-diary";
import UilBookOpen from "@iconscout/react-unicons/icons/uil-book-open";
import UilSortAmountDown from "@iconscout/react-unicons/icons/uil-sort-amount-down";

function MenuNavbar() {
  return (
    <>
    {/* Sering di baca */}
      <div className="flex justify-center items-center gap-3">
        <h3 className="font-bold text-white text-sm"> Sering di baca :</h3>
        <div className="flex gap-2">
          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>

          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>

          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>

          <button className="p-3 text-sky-700 bg-emerald-200 rounded-3xl text-xs font-extrabold">
            Al Kahfi
          </button>
        </div>
      </div>
      
      {/* Menu */}
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
    </>
  );
}

export default MenuNavbar