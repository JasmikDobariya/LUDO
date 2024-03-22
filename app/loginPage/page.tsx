import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
    return (
        <section>
            <div className="bg-[url('/assets/images/bgimg.webp')] bg-cover bg-center h-screen w-full p-0" >
                <div className='flex flex-col gap-7 justify-center items-center h-full  backdrop-blur-sm '>
                    <div className='text-3xl text-white font-bold'>
                        <h1>
                            Sign in
                        </h1>
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <div className='flex border-2 rounded-lg'>
                            <div className='bg-slate-400 sm:w-28 flex items-center p-2 text-center '>
                                <span>+91</span>
                            </div>
                            <div className=' '>
                                <input type="text" className='p-2' />
                            </div>
                        </div>
                    </div>
                    <Link href='/landingPage' className='w-[75%]'>
                        <div className='bg-blue-400  text-center font-semibold p-2 cursor-pointer hover:bg-blue-800 hover:text-white'>
                            <button>Continue</button>
                        </div>
                    </Link>
                </div>
            </div>

        </section>
    )
}
