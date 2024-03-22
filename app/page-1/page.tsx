"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import logo from '../../public/assets/images/logo.png'
import { Landingheader } from '../../components/header/landingheader';
import { BottomBar } from '@/components/bottombar/BottomBar';


export default function Page_1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Landingheader />
      <section>
        <div className='flex '>
          <div className='w-[480px]  h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:pt-16' onClick={() => { setIsOpen(false) }}>
            <div className='flex justify-center items-center w-full h-screen'>
              <h1 className='text-5xl'>Hello page-1</h1>
            </div>
            <div className='fixed bottom-0 left-0 sm:w-[480px] w-full bg-gradient-to-r from-purple-500 to-pink-500'>
              <BottomBar />
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
