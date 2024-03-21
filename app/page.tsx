"use client"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../public/assets/images/logo.png'
import Image from 'next/image';
import Header from "./header/header";
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

export default function Home() {
  let settings = {
    dots: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallButtonClick = async () => {
    if (installPrompt) {
      try {
        await installPrompt.prompt();
        // Wait for the user to respond to the prompt
        const choiceResult = await installPrompt.userChoice;
        console.log(choiceResult); // Log the user's choice (e.g., 'accepted' or 'dismissed')
      } catch (error) {
        console.error('Error prompting installation:', error);
      }
    }
  };


  return (
    <><Header /><section>

      <div className=''>

        <div className='flex h-screen'>
          <div className='w-[480px] h-full p-4 border-r-2 border-black relative overflow-auto'>
            <div className='text-18px font-semibold py-4'>
              <h1>Our Tournaments</h1>
            </div>
            <div className='grid grid-cols-2 2xl:grid-cols-2 gap-4'>
              <div>
                <Image src={logo} width={210} height={210} alt='/' />
              </div>
              <div>
                <Image src={logo} width={210} height={210} alt='/' />
              </div>
              <div>
                <Image src={logo} width={210} height={210} alt='/' />
              </div>
              <div>
                <Image src={logo} width={210} height={210} alt='/' />
              </div>
            </div>
            {/* <div className='slider-container'>
              <Slider {...settings}>
                <div>
                  <Image src={logo} alt='/' />
                </div>
                <div>
                  <Image src={logo} alt='/' />
                </div>
              </Slider>
            </div> */}

            <div className='fixed bottom-0 left-0 sm:w-[480px] w-full bg-gradient-to-r from-purple-500 to-pink-500'>
              <div className='py-2 rounded-md text-center flex justify-center items-center'>
                <button id="download-app" onClick={handleInstallButtonClick}>DOWNLOAD OUR APP</button>
              </div>
              <div className='bg-slate-600 flex justify-between w-full p-4'>
                <div className="flex flex-col justify-center text-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958 512" className='pl-3'>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <button className="mt-1">Profile</button>
                </div>
                <div className="flex flex-col justify-center text-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958 512" className='pl-3'><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                  <button className="mt-1">Wallet</button>
                </div>
                <div className="flex flex-col justify-center text-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 958 512" className='pl-3'>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <button className="mt-1">History</button>
                </div>
                <div className="flex flex-col justify-center text-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='pl-3'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                  <button className="mt-1">Refer</button>
                </div>





              </div>
            </div>
          </div>
          <div className='hidden xl:flex xl:w-[65%] xl:h-full xl:justify-center xl:items-center'>
            <div className='flex flex-col text-2xl h-full font-semibold items-center justify-center'>
              <Image src={logo} width={310} height={310} alt='/' />
              <h1>JAIPURLUDO WIN REAL CASH</h1>
            </div>
          </div>
        </div>

      </div>
    </section></>
  );
}
