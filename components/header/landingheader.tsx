import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../public/assets/images/logo.png';
import Link from 'next/link';

export function Landingheader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isInsideToggle, setIsInsideToggle] = useState(false);
    const toggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!isInsideToggle && isOpen && toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, isInsideToggle]);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    const handleToggleClick = () => {
        setIsInsideToggle(true);
    };

    return (
        <header className="fixed top-0 left-0 sm:w-[480px] w-full z-50 bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
                <div className='flex'>
                    <div onClick={toggleContent} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 858 512" className='w-8 h-8' ><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>
                    <Link href='landingPage'>
                        <div className='cursor-pointer'>
                            <Image src={logo} width={50} height={50} alt='/' />
                        </div>
                    </Link>
                </div>
                <div className='  rounded-md flex gap-5 '>
                    <button className='border-2 border-blue-700 px-6 py-1 rounded-md' >Cash</button>
                </div>
            </div>
            {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40" />}
            <div ref={toggleRef} className={`bg-white fixed top-0 left-0 w-[280px] h-full z-50 overflow-hidden transition-all duration-300 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} onClick={handleToggleClick}>
                <div className='flex flex-col justify-start gap-5 py-10 px-5'>
                    <Link href='/page-1'>
                        <div className='hover:bg-amber-200 p-5 cursor-pointer'>
                            <span>Page-1</span>
                        </div>
                    </Link>
                    <Link  href='/page-2'>
                        <div className='hover:bg-amber-200 p-5 cursor-pointer'>
                            <span>Page-2</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header >
    );
}

