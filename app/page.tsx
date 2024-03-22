"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../public/assets/images/logo.png";
import Image from "next/image";
import Header from "../components/header/header";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import LoginPage from "./loginPage/page";
import { BottomBar } from "../components/bottombar/BottomBar";

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

  const [showHome, setShowHome] = useState(true);



  const handleLoginClick = () => {
    setShowHome(false);
  };
  const handleLogoClick = () => {
    setShowHome(true);
  };

  // const [installPrompt, setInstallPrompt] = useState<any>(null);
  // useEffect(() => {
  //   const handleBeforeInstallPrompt = (event: any) => {
  //     event.preventDefault();
  //     setInstallPrompt(event);
  //   };

  //   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

  //   return () => {
  //     window.removeEventListener(
  //       "beforeinstallprompt",
  //       handleBeforeInstallPrompt
  //     );
  //   };
  // }, []);

  // const handleInstallButtonClick = async () => {
  //   if (installPrompt) {
  //     try {
  //       await installPrompt.prompt();
  //       const choiceResult = await installPrompt.userChoice;
  //       console.log(choiceResult);
  //     } catch (error) {
  //       console.error("Error prompting installation:", error);
  //     }
  //   }
  // };

  return (
    <>

      <section>
        <div className="flex ">
          <div className={`w-[480px] max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb scrollbar-track md:pt-16 ${showHome ? 'pb-20' : ''}`}>
            <Header onLoginClick={handleLoginClick} onLogoClick={handleLogoClick} />
            {showHome ? (
              <div className="p-4">
                <div className="text-18px font-semibold py-4">
                  <h1>Our Tournaments</h1>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-2 gap-4">
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                </div>
                <div className="slider-container mt-5  py-5   ">
                  <Slider {...settings}>
                    <div>
                      <Image src={logo} alt="/" />
                    </div>
                    <div>
                      <Image src={logo} alt="/" />
                    </div>
                  </Slider>
                </div>
                <div>
                  <Image src={logo} width={210} height={210} alt="/" />
                </div>
                <div className="fixed bottom-0 left-0 sm:w-[480px] w-full bg-gradient-to-r from-purple-500 to-pink-500">
                  {/* <div
                    className="py-2 rounded-md text-center flex justify-center items-center cursor-pointer"
                    onClick={handleInstallButtonClick}
                  >
                    <button>DOWNLOAD OUR APP</button>
                  </div> */}
                  <BottomBar />
                </div>
              </div>
            ) : (
              <div>
                <LoginPage />
              </div>
            )}
          </div>
          <div className="max-sm:hidden border-l-4 border-[#cacaca]  flex w-[65%] justify-center items-center ">
            <div className="flex flex-col text-2xl font-semibold items-center justify-center">
              <Image src={logo} width={310} height={310} alt="/" />
              <h1>JAIPURLUDO WIN REAL CASH</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
