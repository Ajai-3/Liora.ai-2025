import React from "react";
import images from "../assets/images";
import useAOS from "../hooks/aosSetup";

const Description = () => {
  useAOS;
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
      >
        Create Ai <span className="text-white">Images</span>
      </h1>
      <p data-aos="fade-up" className="text-lg text-gray-400 mb-8">
        Create AI-Generated Images with Liora.AI
      </p>
      <div  data-aos="fade-up" className="flex flex-wrap sm:flex-nowrap gap-2 justify-center items-center sm:gap-6">
        <img
          
          src={images.image1}
          alt=""
          className="md:h-96 md:w-96 rounded-lg transition-all  hover:scale-105 duration-300 cursor-pointer"
        />
        <div className="relative">
          <div className="absolute inset-0 z-0 rounded-xl blur-xl opacity-60 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
          <p
            data-aos="fade-up"
            className="absolute top-7 left-5 z-10 sm:top-4 text-8xl sm:text-9xl"
          >
            ''
          </p>
          <p
            data-aos="fade-up"
            className="absolute bottom-16 left-0 z-10 border-b-2 border-dashed border-gray-500 w-full"
          ></p>
          <p
            data-aos="fade-up"
            className="text-sm sm:text-xl text-gray-400 bg-zinc-900 py-24 rounded-lg px-5 sm:px-10"
          >
            Experience the future of creativity with Liora.AI. Turn your text
            into stunning, high-quality images in just seconds. Whether you're
            crafting visuals for a project, presentation, or just for fun,
            Liora.AI makes it easy to bring your ideas to life with cutting-edge
            AI technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
