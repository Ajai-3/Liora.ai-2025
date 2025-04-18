import React from 'react';
import useAOS from '../hooks/aosSetup';

const GenerateButton = () => {
  useAOS();

  return (
    <div  className="flex flex-col items-center justify-center my-5 mb-20 sm:my-20">
      <h1
        data-aos="fade-up"
        className="text-3xl mb-4 sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
      >
         <span className='text-white'>See the magic </span>
        Try now.
      </h1>
      <div data-aos="fade-up" >
      <button className="text-xl sm:text-2xl text-white bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 py-1 px-6 rounded-full transition-all duration-700 hover:scale-105">
        Generate image ✨
      </button>
      </div>
    </div>
  );
};

export default GenerateButton;
