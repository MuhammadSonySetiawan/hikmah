import React from 'react'
import Link from "next/link";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

function Search() {
  return (
    <>
      <div className="py-6 relative">
        <input
          type="text"
          alt=""
          placeholder="Pencarian surat dalam Al Quran"
          className="rounded-md w-[22rem] sm:w-[32rem]  p-4 border border-primary placeholder-primary  shadow-lg"
        />
        <div className="absolute inset-y-0 right-3 pl-3 flex items-center">
          <Link href="" className="text-primary">
            <UilSearch size="23" color="#32B7C5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Search