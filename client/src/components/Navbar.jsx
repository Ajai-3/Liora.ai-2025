import React, { useContext } from "react";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faUser } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-2 sm:px-10 md:px-14 lg:px-28 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/")
        }}
        className="flex gap-0 sm:gap-1 md:gap-2 items-center py-4 cursor-pointer"
      >
        <img src={images.logo} alt="Logo" className="h-8 w-8 lg:h-10 lg:w-10" />
        <p className="text-xl font-bold sm:text-xxl md:text-2xl lg:text-3xl">
          Liora.Ai
        </p>
      </div>

      {user ? (
        <div className="flex items-center gap-3">
          <button onClick={() =>  navigate('/buy')} className="flex items-center gap-2 border-[1.8px] border-white rounded-full pl-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <FontAwesomeIcon className="pr-1" icon={faCoins} size="1x" /> : 77
            <p className="bg-black py-1 px-2 sm:px-3 rounded-full transition duration-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                Upgrade
              </span>
            </p>
          </button>

          <div className="flex gap-1 items-center relative group cursor-pointer">
            <p className="max-sm:hidden">Hi, Aiswarya</p>
            <FontAwesomeIcon className="pr-1" icon={faUser} size="1x" />
            <div className="absolute hidden group-hover:block top-0 right-0 z-10 pt-10">
              <ul>
                <li className="bg-black px-4 py-1 rounded-full hover:text-red-600">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 sm:gap-5 items-center">
          <div
  onClick={() => navigate("/buy")}
  className="flex gap-1 items-center cursor-pointer text-white "
>
  <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-700 hover:to-red-700 transition">Buy credits</span>
  <FontAwesomeIcon icon={faCoins} size="1x" />
</div>

          <button className="px-6 py-1 outline outline-2 outline-white rounded-full hover:bg-gradient-to-r from-blue-700 via-purple-700 to-red-700">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
