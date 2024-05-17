import React from "react";
import Logo from "../Assets/oodi-logo.png";
import Logo2 from "../Assets/F-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-white md:px-44 px-5 md:mt-24 mt-12">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            {/* logo  */}
            <li className="max-lg:border-b max-lg:pb-4   flex items-center ">
              <a>
                <img
                  src={Logo2}
                  alt="logo"
                  className="w-[34px] h-[41px] border border-[#39DB4A] rounded-xl mr-2 bg-[#39DB4A] p-1"
                />
              </a>
              <a>
                <img src={Logo} alt="logo" className="w-full h-[22px] " />
              </a>
            </li>
            <p className="mt-5 font-semibold text-lg text-[#555555]">
              Savor the artistry where <br /> every dish is a culinary <br />{" "}
              masterpiece
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-lg font-bold text-black uppercase">
                Main Menu
              </h2>
              <ul class="text-[#555555]  font-semibold">
                <li class="mb-4">
                  <a class="hover:underline">
                    Home 
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Offers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Menu
                  </a>
                </li>
                <li class="mb-4">
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Reservation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-bold text-black uppercase ">
                Useful Links
              </h2>
              <ul class="text-[#555555]  font-semibold">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    About Us
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-bold text-black uppercase">
                Contact Us
              </h2>
              <ul class="text-[#555555]  font-semibold">
                <li class="mb-4">
                  <a
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    class="hover:underline"
                  >
                    mishalaslam17@gmail.com
                  </a>
                </li>
              </ul>
            </div>
       
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-black sm:text-center">
            Copyright © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Dscode
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" class="text-[#39DB4A] hover:text-gray-900 ">
            <FaFacebook  />
              <span class="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-[#39DB4A] hover:text-gray-900  ms-5">
            <FaDiscord />
              <span class="sr-only">Discord community</span>
            </a>
            <a href="#" class="text-[#39DB4A] hover:text-gray-900  ms-5">
            <FaTwitter />
              <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-[#39DB4A] hover:text-gray-900  ms-5">
            <FaGithub />
              <span class="sr-only">GitHub account</span>
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
