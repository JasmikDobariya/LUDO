"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import logoFire from "/public/assets/images/logoFire.png";
import Slider from "react-slick";

export default function Landing() {
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

    return (
        <>
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
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                        <div className="border border-[#8d99c0] rounded-3xl sm:h-[250px] sm:w-[210px]  overflow-hidden ">
                            <Image src={logoFire} alt="/" className=" w-full h-full" />
                        </div>
                    </div>
                    <div className="slider-container mt-5  py-5   ">
                        <Slider {...settings}>
                            <div>
                                <Image src={logoFire} alt="/" />
                            </div>
                            <div>
                                <Image src={logoFire} alt="/" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div>
                    <Image src={logoFire} width={210} height={210} alt="/" />
                </div>
                {/* <div
                    className="py-2 rounded-md text-center flex justify-center items-center cursor-pointer"
                    onClick={handleInstallButtonClick}
                  >
                    <button>DOWNLOAD OUR APP</button>
                  </div> */}
            </div>
        </>
    )
}
