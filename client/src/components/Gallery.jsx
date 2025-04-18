import React from "react";
import images from "../assets/images";

const Gallery = () => {

    const galleryImageClass =
    "h-full w-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110 hover:brightness-75 cursor-pointer";
  

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-15 py-0">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
        >
          Gallery of
          <span className="text-white"> Imagination </span>
        </h1>
        <p data-aos="fade-up" className="text-lg text-gray-400 mb-8">
        Images created by users using Liora.Ai.
        </p>
      </div>

      <div className="flex justify-around flex-wrap">
        <div className="flex flex-col gap-5">
          <div data-aos="fade-up" className="w-60 h-80 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
          <div data-aos="fade-up" className="w-60 h-72 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div data-aos="fade-up" className="w-60 h-[450px] overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
          <div data-aos="fade-up" className="w-60 h-72 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div data-aos="fade-up" className="w-60 h-56 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
          <div data-aos="fade-up" className="w-60 h-28 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
          <div data-aos="fade-up" className="w-60 h-28 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
          <div data-aos="fade-up" className="w-60 h-32 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div data-aos="fade-up" className="w-60 h-72 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
          <div data-aos="fade-up" className="w-60 h-72 overflow-hidden rounded-lg">
            <img src={images.image1} alt="" className={galleryImageClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
