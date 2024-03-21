"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import logo from '../../public/assets/images/logo.png'
import { Landingheader } from '../header/landingheader';


export default function Page_2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Landingheader />
      <section>
        <div className='flex '>
          <div className='w-[480px]  h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:pt-16'  onClick={() => { setIsOpen(false)}}>
            <div className='text-5xl '>
              <h1>page-2</h1>
            </div>
          </div>
          <div className='max-sm:hidden border-l-4 border-[#cacaca] flex w-[65%] justify-center items-center '>
            <div className='flex flex-col text-2xl font-semibold items-center justify-center'>
              <Image src={logo} width={310} height={310} alt='/' />
              <h1>JAIPURLUDO WIN REAL CASH</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
