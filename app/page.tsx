"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../public/assets/images/logo.png";
import logoFire from "../public/assets/images/logoFire.png";
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
        <div className=" flex justify-between items-center bg-[#DADFF5]  ">
          <div className="flex justify-center items-center w-full max-sm:hidden ">
            <Image src={logoFire} width={210} height={210} alt="/" />
          </div>
          <div className="flex justify-center items-center w-screen h-screen ">
            <div className={`w-[480px] max-h-screen overflow-y-auto scrollbar-thin border-4 border-solid rounded-xl border-[#94a2cc] scrollbar-thumb scrollbar-track pt-16 ${showHome ? 'pb-20' : ''}`}>
              
              <Header onLoginClick={handleLoginClick} onLogoClick={handleLogoClick} />
              {showHome ? (
                <div className="">
                  <div className="px-4">
                    <div className="flex justify-between items-center">
                      <div className="text-[16px] text-[#002395] font-semibold py-4">
                        <h1>Our Tournaments</h1>
                      </div>
                      <div className="text-[13px] text-[#656E8C] font-semibold py-4 justify-center items-center gap-1 flex">
                        <h1>Load More</h1>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM13.125 11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875C12.3342 11.875 12.1753 11.8092 12.0581 11.6919C11.9409 11.5747 11.875 11.4158 11.875 11.25V9.00859L7.94219 12.9422C7.88412 13.0003 7.81518 13.0463 7.73931 13.0777C7.66344 13.1092 7.58213 13.1253 7.5 13.1253C7.41788 13.1253 7.33656 13.1092 7.26069 13.0777C7.18482 13.0463 7.11588 13.0003 7.05782 12.9422C6.99975 12.8841 6.95368 12.8152 6.92226 12.7393C6.89083 12.6634 6.87466 12.5821 6.87466 12.5C6.87466 12.4179 6.89083 12.3366 6.92226 12.2607C6.95368 12.1848 6.99975 12.1159 7.05782 12.0578L10.9914 8.125H8.75C8.58424 8.125 8.42527 8.05915 8.30806 7.94194C8.19085 7.82473 8.125 7.66576 8.125 7.5C8.125 7.33424 8.19085 7.17527 8.30806 7.05806C8.42527 6.94085 8.58424 6.875 8.75 6.875H12.5C12.6658 6.875 12.8247 6.94085 12.9419 7.05806C13.0592 7.17527 13.125 7.33424 13.125 7.5V11.25Z" fill="#656E8C" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 2xl:grid-cols-2  gap-4">
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
                      </div>
                      <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                        <Image src={logo} alt="/" className=" w-full h-full" />
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
                  </div>
                  <div>
                    <Image src={logo} width={210} height={210} alt="/" />
                  </div>
                  <div className="fixed bottom-[4px] sm:w-[472px]  w-full ">
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
          </div>
          {/* <div className="max-sm:hidden border-l-4 border-[#cacaca]  flex w-[65%] justify-center items-center ">
            <div className="flex flex-col text-2xl font-semibold items-center justify-center">
              <Image src={logo} width={310} height={310} alt="/" />
              <h1>JAIPURLUDO WIN REAL CASH</h1>
            </div>
          </div> */}
          <div className="flex justify-end  items-end w-full h-screen max-sm:hidden">
            <div className=" p-9 flex flex-col gap-3">
              <button className="bg-[#BD0502] text-[15px] flex justify-start items-center gap-2 rounded-3xl text-white px-4  py-1">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2872 4.66797C14.9103 4.6714 16.4693 4.68647 18.1257 4.75282L18.713 4.77843C20.3808 4.85739 22.0471 4.99228 22.8736 5.22272C23.976 5.53241 24.8425 6.43605 25.1353 7.58151C25.6016 9.40045 25.6599 12.9506 25.6672 13.8097L25.6682 13.9878V14.0003C25.6682 14.0003 25.6682 14.0046 25.6682 14.0129L25.6672 14.1909C25.6599 15.05 25.6016 18.6002 25.1353 20.4191C24.8384 21.5688 23.9719 22.4725 22.8736 22.7779C22.0471 23.0083 20.3808 23.1432 18.713 23.2222L18.1257 23.2477C16.4693 23.3141 14.9103 23.3292 14.2872 23.3327L14.0137 23.3336H14.0016C14.0016 23.3336 13.9975 23.3336 13.9894 23.3336L13.7162 23.3327C12.3974 23.3254 6.88328 23.2658 5.12953 22.7779C4.02714 22.4682 3.16068 21.5646 2.86779 20.4191C2.4015 18.6002 2.34322 15.05 2.33594 14.1909V13.8097C2.34322 12.9506 2.4015 9.40045 2.86779 7.58151C3.16474 6.43181 4.0312 5.52818 5.12953 5.22272C6.88328 4.73474 12.3974 4.67523 13.7162 4.66797H14.2872ZM11.6682 9.91697V18.0836L18.6682 14.0003L11.6682 9.91697Z" fill="white" />
                </svg>
                You Tube
              </button>
              <button className="bg-[#25D366] text-[15px] flex justify-start items-center gap-2 rounded-3xl text-white  px-4  py-1">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.46401 21.5755L9.30952 22.0685C10.7221 22.8922 12.3274 23.332 14.0026 23.332C19.1573 23.332 23.336 19.1534 23.336 13.9987C23.336 8.84404 19.1573 4.66536 14.0026 4.66536C8.84794 4.66536 4.66927 8.84404 4.66927 13.9987C4.66927 15.6744 5.10937 17.2803 5.93356 18.6931L6.42634 19.5378L5.66394 22.3397L8.46401 21.5755ZM2.34081 25.6654L3.9181 19.8688C2.91222 18.1446 2.33594 16.1389 2.33594 13.9987C2.33594 7.55537 7.55928 2.33203 14.0026 2.33203C20.4459 2.33203 25.6693 7.55537 25.6693 13.9987C25.6693 20.442 20.4459 25.6654 14.0026 25.6654C11.8631 25.6654 9.85806 25.0895 8.13413 24.0842L2.34081 25.6654ZM9.7925 8.52508C9.94869 8.5141 10.1054 8.51242 10.2618 8.52005C10.325 8.52421 10.3879 8.53151 10.4508 8.53878C10.6366 8.56023 10.8409 8.67339 10.9096 8.82913C11.2577 9.61829 11.5954 10.412 11.9227 11.2099C11.9949 11.3861 11.9514 11.6144 11.814 11.8353C11.7442 11.9486 11.6346 12.1075 11.5077 12.27C11.3757 12.4389 11.0918 12.7493 11.0918 12.7493C11.0918 12.7493 10.9767 12.8872 11.0201 13.0588C11.037 13.1237 11.0909 13.2182 11.1397 13.2976C11.1668 13.3416 11.1919 13.3809 11.2082 13.4081C11.5068 13.9066 11.9081 14.412 12.3983 14.8872C12.5388 15.0234 12.6751 15.1623 12.8216 15.2914C13.368 15.7731 13.9861 16.1667 14.6536 16.4583L14.6596 16.4609C14.7582 16.5034 14.8088 16.5266 14.9531 16.5879C15.0259 16.6187 15.1003 16.6453 15.1768 16.6655C15.2044 16.6727 15.2328 16.6768 15.2612 16.6788C15.4499 16.6901 15.559 16.5691 15.6055 16.5134C16.4496 15.4909 16.5268 15.4241 16.5327 15.4246V15.4265C16.6436 15.3096 16.818 15.269 16.9737 15.2785C17.0447 15.2828 17.1154 15.2965 17.18 15.326C17.8005 15.609 18.8149 16.0505 18.8149 16.0505L19.4933 16.3555C19.6069 16.4103 19.7107 16.5395 19.7157 16.665C19.7187 16.743 19.7271 16.869 19.6992 17.0996C19.6627 17.4014 19.5709 17.7648 19.4797 17.9552C19.4155 18.0888 19.3324 18.2073 19.2358 18.3077C19.1048 18.4437 19.0075 18.5263 18.85 18.6437C18.7541 18.7151 18.7044 18.7487 18.7044 18.7487C18.5424 18.8509 18.451 18.902 18.2579 19.0047C17.9576 19.1647 17.6258 19.2566 17.286 19.2741C17.0693 19.2852 16.8533 19.3008 16.6368 19.2892C16.6273 19.2886 15.9739 19.1883 15.9739 19.1883C14.3151 18.7519 12.7809 17.9346 11.4935 16.801C11.2303 16.5693 10.9862 16.3186 10.7371 16.0706C9.69982 15.038 8.91458 13.9245 8.43843 12.8712C8.20363 12.3518 8.05495 11.7956 8.0526 11.2232C8.0483 10.5151 8.28012 9.82577 8.71143 9.2642C8.79646 9.1535 8.87716 9.03867 9.0164 8.9072C9.16385 8.76796 9.2577 8.69321 9.35879 8.64149C9.49354 8.57256 9.64155 8.53569 9.7925 8.52508Z" fill="white" />
                </svg>
                Whats App
              </button>
              <button className="bg-[#002395] text-[15px] flex justify-start items-center gap-2 rounded-3xl text-white  px-4  py-2">
                <svg width="26" height="24" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.16536 22.1667H23.832V14H26.1654V23.3333C26.1654 23.9777 25.643 24.5 24.9987 24.5H3.9987C3.35437 24.5 2.83203 23.9777 2.83203 23.3333V14H5.16536V22.1667ZM16.832 10.5H22.6654L14.4987 18.6667L6.33203 10.5H12.1654V3.5H16.832V10.5Z" fill="white" />
                </svg>
                Download App
              </button>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
