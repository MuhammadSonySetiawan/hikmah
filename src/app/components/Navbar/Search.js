"use client"

import React, { useState } from 'react'
import Link from "next/link";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";


function Search() {
 const [keyword, setKeyword] = useState("")

  const handleSearch = async() => {
    console.log(keyword.toLowerCase().toString())

    const searchSurat = await fetch(
      `https://equran.id/api/v2/surat`
    );
    const result = await searchSurat.json()
    console.log(result.data)
    
  }
  
  return (
    <>
      <div className="py-6 relative">
        <input
          type="text"
          alt=""
          placeholder="Pencarian surat dalam Al Quran"
          onChange={(e) => setKeyword(e.target.value)}
          className="rounded-md w-[22rem] sm:w-[32rem]  p-4 border border-primary placeholder-primary  shadow-lg"
        />
        <div className="absolute inset-y-0 right-3 pl-3 flex items-center">
          <Link href="" onClick={handleSearch} className="text-primary">
            <UilSearch size="23" color="#32B7C5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Search