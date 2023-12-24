import Image from 'next/image'
import React from 'react'
import BgImage from '../../../../public/asset/BG.png'

function Header() {
  return (
    <>
      <Image
        src={BgImage}
        alt='background-image'
        width={400}
        height={400}
        className="absolute w-full henphone:min-h-[400px] max-h-96 top-0"
      />
    </>
  );
}

export default Header