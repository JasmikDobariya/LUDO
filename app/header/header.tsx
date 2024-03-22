import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/images/logo.png'

export default function Header({onLoginClick , onLogoClick }:any) {

  return (
    <header className="fixed top-0 left-0 sm:w-[480px] w-full z-50 bg-white shadow-lg">
    <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
      <div className="cursor-pointer" onClick={onLogoClick}>
        <Image src={logo} width={60} height={60} alt="/" />
      </div>
      <div className="border-2 border-blue-700 px-6 py-1 rounded-md">
        <button onClick={onLoginClick}>Login</button>
      </div>
    </div>
  </header>

  )
}
