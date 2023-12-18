import Image from 'next/image'
import React from 'react'

import BgImage from '../../../../public/asset/BG.png'

import Logo from './Logo';

// import { MagnifyingGlass } from "@phosphor-icons/react";
// import MenuNavbar from './menuNavbar';

function Header() {
  return (
    <div className="">
      <Image
        src={BgImage}
        width={400}
        height={400}
        className="absolute w-full henphone:min-h-[400px] max-h-96"
        // style={{zIndex:-10}}
      />

      <Logo />
    </div>
  );
}

export default Header