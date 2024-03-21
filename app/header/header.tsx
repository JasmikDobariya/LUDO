import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/images/logo.png'

export default function Header({onLoginClick , onLogoClick }:any) {

  return (
    <section>
      <div className='flex md:absolute z-10'>
        <div className='w-[480px] top-0'>
          <div className='bg-white '>
            <div className='  px-5 py-3 shadow-lg  flex justify-between items-center'>
              <div className='cursor-pointer' onClick={onLogoClick}>
                <Image src={logo} width={60} height={60} alt='/' />
              </div>
              <div className='border-2 border-blue-700 px-6 py-1 rounded-md'>
                <button onClick={onLoginClick}>Login</button>
              </div>
            </div>
          </div>


        </div>
      </div>

    </section>
  )
}
