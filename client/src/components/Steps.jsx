import React from "react";
import useAOS from "../hooks/aosSetup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeLowVision,
  faMagic,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const Steps = () => {
  useAOS();

  const cardStyle =
    "group will-change-transform flex items-center gap-6 text-sm bg-zinc-900 px-6 py-2 mb-4 cursor-pointer transition-transform duration-300 hover:scale-105";

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
      >
        <span className="text-white">How</span> it works
      </h1>
      <p data-aos="fade-up" className="text-lg text-gray-400 mb-8">
        Transform Words Into Stunning Images
      </p>

      <div data-aos="fade-up">
        <div className={cardStyle}>
          <FontAwesomeIcon
            className="text-white text-2xl"
            icon={faEyeLowVision}
          />
          <div>
            <h2 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 inline-block">
              Describe your vision
            </h2>
            <p className="text-gray-500 mt-1">
              Type a phrase, sentence, or paragraph that describes the image you
              want to create.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div className={cardStyle}>
          <FontAwesomeIcon className="text-white text-2xl" icon={faMagic} />
          <div>
            <h2 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 inline-block">
              Watch the magic
            </h2>
            <p className="text-gray-500 mt-1">
              Our AI, Liora, will transform your text into a high-quality,
              unique image in seconds ......
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div className={cardStyle}>
          <FontAwesomeIcon className="text-white text-2xl" icon={faDownload} />
          <div>
            <h2 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 inline-block">
              Download and share
            </h2>

            <p className="text-gray-500 mt-1">
              Instantly download your creation or share it with the world
              directly from our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
