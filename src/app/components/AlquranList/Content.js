"use client";
import React, { useState } from "react";
import UilBrightnessEmpty from "@iconscout/react-unicons/icons/uil-brightness-empty";
import iconMakiyah from "../../../../public/asset/makiyyah.svg";
import iconBook from "../../../../public/asset/book.svg";
import Image from "next/image";
import Link from "next/link";

async function Content() {
  const [nameSurat, setNameSurat] = useState();

  const response = await fetch("https://equran.id/api/v2/surat");
  const listQuran = await response.json();

  // const surat = listQuran?.data?.map((item) => {
  //   return item.namaLatin;
  // });

  // console.log(surat)

  return (
    <>
      <div className="relative w-full grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center items-center">
        {listQuran.data?.map((item, key) => {
          return (
            <Link
              href={`/surat/${item.nomor}`}
              key={key}
              className="w-80 h-20 bg-white rounded flex justify-between items-center gap-2 shadow-lg py-6 px-4"
            >
              <div className="flex gap-2">
                <div className="relative flex justify-center justify-items-center items-center">
                  <UilBrightnessEmpty
                    size="50"
                    className="text-[#32B7C5] relative"
                  />
                  <h2 className="absolute text-[10px]">{item.nomor}</h2>
                </div>
                <div>
                  <h2 className="text-sm mb-1">
                    {item.namaLatin}{" "}
                    <span className="text-[#32B7C5] italic">({item.arti})</span>
                  </h2>
                  <div className="flex items-center gap-1 text-[8px]">
                    <div className="flex w-16 p-1.5 bg-gray-100 rounded-lg gap-1">
                      <Image src={iconMakiyah} alt="IconMakiyah" width={15} height={15} />
                      <p>{item.tempatTurun}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <h1 className="font-extrabold text-xl text-[#828282]">
                        .
                      </h1>
                    </div>

                    <div className="flex p-1.5 bg-gray-100 rounded-lg gap-1">
                      <Image src={iconBook} alt="iconBook" width={15} height={15} />
                      <p>{item.jumlahAyat} Surat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <h3>{item.nama}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Content;
