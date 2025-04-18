import React from "react";
import useAOS from "../hooks/aosSetup";
import images from "../assets/images";

const Testimonials = () => {
  useAOS();
  const cardStyle = "relative bg-zinc-900 px-4 py-2 sm:px-5 sm:py-6 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 group";
  const cardHover = "absolute inset-0 z-0 rounded-xl opacity-0 blur-xl transition-all duration-300 group-hover:opacity-60 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-red-600"
  return (
    <div className="flex flex-col items-center justify-center my-10 py-0">
      <h1
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
      >
        <span className="text-white">Customer</span> testimonials
      </h1>
      <p data-aos="fade-up" className="text-lg text-gray-400 mb-8">
        What our users are sying.
      </p>

      <div data-aos="fade-up" className="flex gap-4 flex-wrap sm:flex-nowrap">
        <div className={cardStyle}>
        <div className={cardHover}></div>
        <div className="flex gap-2 mb-2 items-start">
                <img src={images.image1} alt="" className="rounded-full h-12 w-12" />
            <div>
            <h1>Name</h1>
            <p>*****</p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, unde impedit molestiae facere sint ducimus vel nam ipsam, esse modi perspiciatis quo possimus tenetur incidunt eligendi sit ut vitae.</p>
        </div>
        <div className={cardStyle}>
        <div className={cardHover}></div>
        <div className="flex gap-2 mb-2 items-start">
                <img src={images.image1} alt="" className="rounded-full h-12 w-12" />
            <div>
            <h1>Name</h1>
            <p>*****</p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, unde impedit molestiae facere sint ducimus vel nam ipsam, esse modi perspiciatis quo possimus tenetur incidunt eligendi sit ut vitae.</p>
        </div>
        <div className={cardStyle}>
        <div className={cardHover}></div>
            <div className="flex gap-2 mb-2 items-start">
                <img src={images.image1} alt="" className="rounded-full h-12 w-12" />
            <div>
            <h1>Name</h1>
            <p>*****</p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, unde impedit molestiae facere sint ducimus vel nam ipsam, esse modi perspiciatis quo possimus tenetur incidunt eligendi sit ut vitae.</p>
        </div>
        <div  className={cardStyle}>
        <div className={cardHover}></div>
        <div className="flex gap-2 mb-2 items-start">
                <img src={images.image1} alt="" className="rounded-full h-12 w-12" />
            <div>
            <h1>Name</h1>
            <p>*****</p>
            </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illum, unde impedit molestiae facere sint ducimus vel nam ipsam, esse modi perspiciatis quo possimus tenetur incidunt eligendi sit ut vitae.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
