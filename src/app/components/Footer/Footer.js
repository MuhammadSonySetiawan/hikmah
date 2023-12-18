import React from 'react'
import UilGithub from "@iconscout/react-unicons/icons/uil-github-alt";
import UilLinkedin from "@iconscout/react-unicons/icons/uil-linkedin";


function Footer() {
  return (
    <div className="bg-[#007B88] w-full h-20 flex justify-around items-center mt-3">
      <span className="text-[#85E6C5]">
        &#169;2023 Hidayah Al Quran, All Rights Reserved.{" "}
      </span>
      <div className='flex gap-1'>
        <UilGithub size={24} className="text-[#85E6C5]" />
        <UilLinkedin size={24} className="text-[#85E6C5]" />
      </div>
    </div>
  );
}

export default Footer
