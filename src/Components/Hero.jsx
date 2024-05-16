import React from "react";
import Polygon from "../Assets/Polygon1.png";
import Circle from "../Assets/Rectangle 9.png";
import Intersect from "../Assets/Intersect.png";
import Noodles from "../Assets/Mask group.png";
import Group1 from "../Assets/Group1.png";
import Salad from "../Assets/Mask group2.png";

const Hero = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-12 md:px-24 md:ml-8 ml-1 px-5">
            {/* left side  */}
            <div className="md:mt-36 mt-5">
                <h1 className="text-5xl text-black font-extrabold leading-tight">
                    Dive into Delights <br className="md:block hidden" />
                    Of Delectable <span className="text-[#39DB4A]">Food</span>
                </h1>
                <p className="text-[#4A4A4A] text-base font-semibold md:mt-10 mt-6">
                    Where Each Plate Weaves a Story of Culinary{" "}
                    <br className="md:block hidden" /> Mastery and Passionate
                    Craftsmanship
                </p>
                <div className="md:mt-12 mt-6 flex items-center">
                    <button className="text-white font-bold md:text-xl text-base bg-[#39DB4A] md:py-2 py-1 md:px-6 px-3 rounded-3xl">
                        {" "}
                        Order Now
                    </button>
                    <button className="ml-2 transition-all duration-300 text-[#4D4D4D] font-bold md:text-xl text-base bg-white py-1 md:py-2 md:px-6 px-3  rounded-3xl hover:bg-[#39DB4A] hover:text-white">
                        {" "}
                        Watch Video
                    </button>
                    <div className="bg-[#FFFFFF] rounded-full p-3 shadow-md  ml-4 cursor-pointer">
                        <img src={Polygon} className="w-[20px] h-[20px]   m-auto" alt="" />
                    </div>
                </div>
            </div>
            {/* right side  */}
            <div className="md:mt-8  mt-20 ">
                <div>
                    <img src={Circle} className="" alt="" />
                    <img
                        src={Intersect}
                        className="md:mt-8 mt-20 md:top-[6%] top-[52%] md:right-28 right-4 md:h-[655px] h-[400px] w- absolute"
                        alt=""
                    />
                </div>
                <div className=" flex gap-9 left-[600px]  absolute top-[115%]">
                    <div className="flex bg-white p-4 rounded-2xl shadow-2xl w-[330px]">
                        <img
                            src={Noodles}
                            alt="NoodlesImage"
                            className="w-[98px] h-[98px]"
                        />
                        <img
                            src={Group1}
                            alt="NoodlesImage"
                            className="w-[150px] h-[92px] ml-5"
                        />
                    </div>
                    <div className="flex bg-white p-4 rounded-2xl shadow-2xl w-[330px]">
                        <img src={Salad} alt="NoodlesImage" className="w-[98px] h-[98px]" />
                        <img
                            src={Group1}
                            alt="NoodlesImage"
                            className="w-[150px] h-[92px] ml-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
