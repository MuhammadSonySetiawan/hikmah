import React from 'react'
import BgHeader from '../../components/Navbar/BgHeader'
import Logo from '@/app/components/Navbar/Logo';
import iconMakiyah from "../../../../public/asset/makiyyah.svg";
import iconBook from "../../../../public/asset/book.svg";
import Image from 'next/image';
import UilBrightnessEmpty from "@iconscout/react-unicons/icons/uil-brightness-empty";
import Footer from '@/app/components/Footer/Footer';

async function page({ params : { id } }) {
  console.log(id)
  const IdSurat = await fetch(`https://equran.id/api/v2/surat/${id}`);
  const ResultSurat = await IdSurat.json()
  console.log(ResultSurat.data.ayat);

  return (
    <div className="flex flex-col justify-center items-center">
      <BgHeader className="top-0" />
      <div className="relative py-2">
        <Logo />
      </div>

      <div className="w-3/4 h-full relative bg-gray-200 rounded-t-lg pt-1 shadow-lg">
        {/* start judul */}
        <div className="flex flex-col justify-center items-center pb-2">
          <h1 className="text-2xl font-semibold">{ResultSurat.data.nama}</h1>
          <h3 className="text-lg font-semibold">
            {ResultSurat.data.namaLatin}{" "}
            <span className="text-xs italic">({ResultSurat.data.arti})</span>
          </h3>

          <div className="flex justify-center items-center gap-3 text-[10px]">
            <div className=" flex px-[4px] py-[2px] rounded-lg gap-1 border border-gray-400 w-auto">
              <Image src={iconMakiyah} width={15} height={15} />
              <p>{ResultSurat.data.tempatTurun}</p>
            </div>
            <div className="flex items-center justify-center w-auto">
              <h1 className="font-extrabold text-xl text-[#828282]">.</h1>
            </div>

            <div className="flex px-[4px] py-[2px] rounded-lg gap-1 border border-gray-400">
              <Image src={iconBook} width={15} height={15} />
              <p>{ResultSurat.data.jumlahAyat} Surat</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center rounded-b-lg py-3 bg-white justify-center">
          <h3 className="text-lg mb-3">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h3>
          {ResultSurat.data.ayat.map((item, key) => {
            return (
              <div
                key={key}
                className="flex justify-between items-center w-full p-3 "
              >
                <div className="text-sm flex justify-start items-center w-2/4 mr-5 gap-2">
                  <div className="relative flex justify-center justify-items-center items-center">
                    <UilBrightnessEmpty
                      size="25"
                      className="text-[#32B7C5] relative"
                    />
                    <h2 className="absolute text-[8px]">{item.nomorAyat}</h2>
                  </div>
                  <div>
                    <p className="text-[#32B7C5]">{item.teksLatin}</p>
                    <p>{item.teksIndonesia}</p>
                  </div>
                </div>

                <h3 className="w-2/4 text-right">{item.teksArab}</h3>
              </div>
            );
          })}

         

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default page