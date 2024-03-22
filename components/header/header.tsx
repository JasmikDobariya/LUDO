import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/images/logo.png'
import header_logo from '../../public/assets/images/header_logo.png'

export default function Header({ onLogoClick }: any) {

  return (
    <header className="fixed top-[4px] sm:w-[471px] min-w-[371px] rounded-t-xl  bg-white  shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-center items-center">
        <div className="cursor-pointer" onClick={onLogoClick}>
          <Image src={header_logo} alt="/" />
        </div>
      </div>
    </header>

  )
}
