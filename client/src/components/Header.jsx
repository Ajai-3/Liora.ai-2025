import React from "react";
import useAOS from "../hooks/aosSetup"
import images from "../assets/images";

const Header = () => {
    useAOS();
    const image = "h-32 w-32 transition-all duration-700 hover:scale-105 cursor-pointer rounded-lg"
  return (
    <div className="flex flex-col relative justify-center sm:pt-32">
      <div data-aos="fade-up" className="flex flex-col justify-center items-center">
        <p className="py-1 px-3 mb-6 backdrop-blur-sm bg-white/10 rounded-full w-fit">
          Your imagination, visualized ✨.
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          Turn text to
        </h1>
        <p className="text-4xl sm:text-6xl mb-2 font-bold text-center">
          <span className="text-[#eb1650]">image</span>, in seconds
        </p>
        <p className="text-xl sm:text-2xl text-center text-gray-400 w-66 sm:w-[700px] font-light mb-6  sm:px-0">
          Tap into the full potential of AI with our intuitive and powerful
          tools, designed to help you turn your ideas into reality effortlessly.
        </p>

        <button className="text-xl sm:text-2xl bg-black py-1 px-6 rounded-full transition-all duration-700 hover:scale-105">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            Genarate image{" "}
          </span>
          ✨
        </button>
        <div>
          <div data-aos="fade-up" className="flex gap-6 justify-center py-4 flex-wrap">
            <img src={images.image1} alt="" className={image} />
            <img src={images.image1} alt="" className={image} />
            <img src={images.image1} alt="" className={image} />
            <img src={images.image1} alt="" className={image} />
            <img src={images.image1} alt="" className={image} />
            <img src={images.image1} alt="" className={image}  />
          </div>
        </div>
        <p className="text-gray-400">Images generated with Liora.Ai</p>
      </div>
 
    </div>
  );
};

export default Header;
