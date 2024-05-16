"use client";
import React, { useState } from "react";
import Logo from "../Assets/oodi-logo.png";
import Logo2 from "../Assets/F-logo.png";
import Closebtn from "../Assets/svg/Closebtn";
import OpenMenu from "../Assets/svg/OpenMenu";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:px-20  px-0">
      <header className=" bg-white font-[sans-serif] tracking-wide relative z-50">
        <div className="flex flex-wrap justify-between px-10 py-3 relative">
          {/* full screnn logo  */}
          <li className="max-lg:border-b max-lg:pb-4 px-3  flex items-center ">
            <a href="javascript:void(0)">
              <img
                src={Logo2}
                alt="logo"
                className="w-[34px] h-[41px] border border-[#39DB4A] rounded-xl mr-2 bg-[#39DB4A] p-1"
              />
            </a>
            <a href="javascript:void(0)">
              <img src={Logo} alt="logo" className="w-full h-[22px] " />
            </a>
          </li>

          <div
            id="collapseMenu"
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={handleToggleMenu}
            >
              <Closebtn />
            </button>
            {/* navigation menu  */}
            <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 mt-3">
              <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden flex items-center">
                <a href="javascript:void(0)">
                  <img
                    src={Logo2}
                    alt="logo"
                    className="w-[34px] h-[41px] border border-[#39DB4A] rounded-xl mr-2 bg-[#39DB4A] p-1"
                  />
                </a>
                <a href="javascript:void(0)">
                  <img src={Logo} alt="logo" className="w-full h-[22px] " />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#39DB4A] text-[#39DB4A] font-semibold block text-[15px]"
                >
                  Home
                </a>
              </li>

              {/* dropdown menu list  */}
              <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#39DB4A] hover:fill-[#39DB4A] text-gray-600 font-semibold text-[15px] block"
                >
                  Menu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block  text-[#39DB4A]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      fill="#39DB4A"
                      data-original="#39DB4A"
                    />
                  </svg>
                </a>
                <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Furniture Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Electronic Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Fashion Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Shoes Store
                    </a>
                  </li>
                </ul>
              </li>
              {/* /////////////////// */}
              {/* dropdown menu list  */}
              <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#39DB4A] hover:fill-[#39DB4A] text-gray-600 font-semibold text-[15px] block"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block  text-[#39DB4A]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      fill="#39DB4A"
                      data-original="#39DB4A"
                    />
                  </svg>
                </a>
                <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Furniture Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Electronic Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Fashion Store
                    </a>
                  </li>
                  <li className="border-b py-3">
                    <a
                      href="javascript:void(0)"
                      className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                    >
                      Shoes Store
                    </a>
                  </li>
                </ul>
              </li>
              {/* /////////////////// */}

              <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#39DB4A] text-gray-600 font-semibold text-[15px] block"
                >
                  Blog
                </a>
              </li>
            </ul>
            {/* /////// */}
          </div>

          <div id="toggleOpen" className="flex ml-auto lg:hidden">
            <button onClick={handleToggleMenu}>
              <OpenMenu />
            </button>
          </div>

          <div className="flex justify-center items-center gap-x-7 ">
            <div className="md:block hidden">
              <input
                type="search"
                className="peer cursor-pointer relative z-10 h-10 w-6 rounded-full border bg-transparent pl-10 outline-none focus:w-full focus:cursor-text focus:border-[#39DB4A] focus:pl-16 focus:pr-4"
              />
              <CiSearch className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#39DB4A] peer-focus:stroke-[#39DB4A]" />
            </div>
            <HiOutlineShoppingBag className="w-[24px] h-[24px] md:block hidden" />
            <div className="md:block hidden">
              <div className="bg-[#39DB4A] rounded-2xl py-1 px-3 flex gap-x-2 items-center ">
                <MdOutlinePhoneInTalk className="text-white h-5 w-5 md:block hidden" />
                <button className=" text-white text-base font-bold md:block hidden">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
