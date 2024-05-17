"use client";
import React, { useState } from "react";
import { Box, IconButton, Stack } from "@chakra-ui/react";

import { FaChevronLeft , FaChevronRight  } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import Slider from "react-slick";
import Sandwhich from "../Assets/Egg salad.png";
import Dessert from "../Assets/Fattoush salad.png";
import Juice from "../Assets/Vegetable salad.png";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3, // Show 3 cards by default
  slidesToScroll: 2, // Scroll 2 cards at a time
  responsive: [
    {
      breakpoint: 768, // Breakpoint for mobile devices
      settings: {
        slidesToShow: 1, // Show 1 card on mobile
        slidesToScroll: 1, // Scroll 1 card at a time on mobile
      },
    },
  ],
};


export default function Speacial() {
  const [slider, setSlider] = useState(null);

  return (
    <div className="relative pt-20 md:px-24 px-2 mb-44">
        <div className="place-items-start grid">
        <p className="text-[#FF6868] text-lg font-bold"> Special Dishes</p>
        <h2 className="text-black font-bold md:text-5xl text-3xl mt-5 md:mb-20 mb-10">Standout Dishes <br />From Our Menu</h2>
        </div>
      {/* Left Icon */}
      <IconButton
  aria-label="left-arrow"
  variant=""
  _hover={{ color: "#FF6868" }}
  color={"#39DB4A"}
  position="absolute"
  right={200}
  top={200}
  transform={"translate(0%, -50%)"}
  zIndex={2}
  onClick={() => slider?.slickPrev()}
  // Add media query for mobile screens
  {...(window.innerWidth < 768 ? {
    right: 190,
    top: 220
  } : {})}
>
  <FaChevronLeft size="40px" />
</IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant=""
        _hover={{ color: "#FF6868" }}
        position="absolute"
        right={150}
        top={200}
        color={"#39DB4A"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        {...(window.innerWidth < 768 ? {
          right: 140,
          top: 220
        } : {})}
      >
        <FaChevronRight size="40px" />
      </IconButton>

      <Box
        position={"relative"}
        height={"100%"}
        width={"92%"}
        mx="auto"
        overflow={"hidden"}
        mr={12}
        ml={12}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
        <Box height={"100%"} pr={20} style={{ marginRight: "20px" }}>
            <Stack spacing={6} direction="column" height={"100%"} p={2}>
              <Box className="relative md:h-[380px] w-[300px]  h-[320px] md:w-[340px] bg-white shadow-lg rounded-3xl p-6">
                <IconButton
                  aria-label="favorite"
                  icon={<FaHeart />}
                  position="absolute"
                  top={4}
                  right={4}
                  bg="#39DB4A"
                  borderRadius="full"
                  boxShadow="md"
                  color="white"
                  padding={8}
                  roundedBottomLeft={8}
                  roundedTopRight={8}
                  _hover={{ bg: "" }}
                />
                <Box className="h-[140px] md:h-[200px] w-[140px] md:w-[200px] mx-auto mb-4">
                  <img
                    src={Sandwhich}
                    alt="Sandwich"
                    className="h-full w-full object-cover rounded-full"
                  />
                </Box>
                <Box className="flex flex-col items-start">
                  <h2 className="text-black text-lg md:text-xl font-bold mb-2">
                    Break Fast
                  </h2>
                  <p className="text-gray-600 mb-2 md:mb-4 text-base font-semibold">
                    Description of the item
                  </p>
                </Box>
                <Box className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold text-green-600 ">
                    <span className="text-[#FF6868] text-base md:text-lg">$</span>{" "}
                    24.00
                  </h2>
                  <div className="flex items-center gap-2 ">
                    <FaStar className="text-[#FFE605]" />
                    <h2 className="text-base md:text-lg font-semibold text-[#454545]">
                      4.5
                    </h2>
                  </div>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box height={"100%"} pr={20} style={{ marginRight: "20px" }}>
            <Stack spacing={6} direction="column" height={"100%"} p={2}>
              <Box className="relative md:h-[380px] w-[300px]  h-[320px] md:w-[340px] bg-white shadow-lg rounded-3xl p-6">
                <IconButton
                  aria-label="favorite"
                  icon={<FaHeart />}
                  position="absolute"
                  top={4}
                  right={4}
                  bg="#39DB4A"
                  borderRadius="full"
                  boxShadow="md"
                  color="white"
                  padding={8}
                  roundedBottomLeft={8}
                  roundedTopRight={8}
                  _hover={{ bg: "" }}
                />
                <Box className="h-[140px] md:h-[200px] w-[140px] md:w-[200px] mx-auto mb-4">
                  <img
                    src={Dessert}
                    alt="Sandwich"
                    className="h-full w-full object-cover rounded-full"
                  />
                </Box>
                <Box className="flex flex-col items-start">
                  <h2 className="text-black text-lg md:text-xl font-bold mb-2">
                  Vegetable salad
                  </h2>
                  <p className="text-gray-600 mb-2 md:mb-4 text-base font-semibold">
                    Description of the item
                  </p>
                </Box>
                <Box className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold text-green-600 ">
                    <span className="text-[#FF6868] text-base md:text-lg">$</span>{" "}
                    30.00
                  </h2>
                  <div className="flex items-center gap-2 ">
                    <FaStar className="text-[#FFE605]" />
                    <h2 className="text-base md:text-lg font-semibold text-[#454545]">
                      4.6
                    </h2>
                  </div>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box height={"100%"} pr={20} style={{ marginRight: "20px" }}>
            <Stack spacing={6} direction="column" height={"100%"} p={2}>
              <Box className="relative md:h-[380px] w-[300px]  h-[320px] md:w-[340px] bg-white shadow-lg rounded-3xl p-6">
                <IconButton
                  aria-label="favorite"
                  icon={<FaHeart />}
                  position="absolute"
                  top={4}
                  right={4}
                  bg="#39DB4A"
                  borderRadius="full"
                  boxShadow="md"
                  color="white"
                  padding={8}
                  roundedBottomLeft={8}
                  roundedTopRight={8}
                  _hover={{ bg: "" }}
                />
                <Box className="h-[140px] md:h-[200px] w-[140px] md:w-[200px] mx-auto mb-4">
                  <img
                    src={Juice}
                    alt="Juice"
                    className="h-full w-full object-cover rounded-full"
                  />
                </Box>
                <Box className="flex flex-col items-start">
                  <h2 className="text-black text-lg md:text-xl font-bold mb-2">
                  Egg vegi salad
                  </h2>
                  <p className="text-gray-600 mb-2 md:mb-4 text-base font-semibold">
                    Description of the item
                  </p>
                </Box>
                <Box className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold text-green-600 ">
                    <span className="text-[#FF6868] text-base md:text-lg">$</span>{" "}
                    44.00
                  </h2>
                  <div className="flex items-center gap-2 ">
                    <FaStar className="text-[#FFE605]" />
                    <h2 className="text-base md:text-lg font-semibold text-[#454545]">
                      4.1
                    </h2>
                  </div>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box height={"100%"} pr={20} style={{ marginRight: "20px" }}>
            <Stack spacing={6} direction="column" height={"100%"} p={2}>
              <Box className="relative md:h-[380px] w-[300px]  h-[320px] md:w-[340px] bg-white shadow-lg rounded-3xl p-6">
                <IconButton
                  aria-label="favorite"
                  icon={<FaHeart />}
                  position="absolute"
                  top={4}
                  right={4}
                  bg="#39DB4A"
                  borderRadius="full"
                  boxShadow="md"
                  color="white"
                  padding={8}
                  roundedBottomLeft={8}
                  roundedTopRight={8}
                  _hover={{ bg: "" }}
                />
                <Box className="h-[140px] md:h-[200px] w-[140px] md:w-[200px] mx-auto mb-4">
                  <img
                    src={Sandwhich}
                    alt="Sandwich"
                    className="h-full w-full object-cover rounded-full"
                  />
                </Box>
                <Box className="flex flex-col items-start">
                  <h2 className="text-black text-lg md:text-xl font-bold mb-2">
                  Fattoush salad
                  </h2>
                  <p className="text-gray-600 mb-2 md:mb-4 text-base font-semibold">
                    Description of the item
                  </p>
                </Box>
                <Box className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold text-green-600 ">
                    <span className="text-[#FF6868] text-base md:text-lg">$</span>{" "}
                    20.00
                  </h2>
                  <div className="flex items-center gap-2 ">
                    <FaStar className="text-[#FFE605]" />
                    <h2 className="text-base md:text-lg font-semibold text-[#454545]">
                      4.3
                    </h2>
                  </div>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Slider>
      </Box>
    </div>
  );
}
