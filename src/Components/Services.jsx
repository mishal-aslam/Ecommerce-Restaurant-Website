import React from "react";
import icon1 from "../Assets/fi-rr-salad.png";

const Services = () => {
  return (
    <div className="px-5 md:px-44 pt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12">
      {/* left side   */}
      <div className="mt-24">
        <div className=" ">
          <p className="text-[#FF6868] text-lg font-bold">Our Story & Services</p>
          <h2 className="text-black font-bold md:text-5xl text-3xl mt-10 md:mb-12 mb-10">
          Our Culinary Journey  And Services
          </h2>
          <p className="text-[#555555] text-base font-medium">
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <div className="md:mt-12 mt-6 flex items-center">
            <button className="text-white font-bold md:text-xl text-base bg-[#39DB4A] md:py-2 py-1 md:px-6 px-3 rounded-3xl hover:bg-[#50b85c]">
              {" "}
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5   mt-24">
        <div className=" h-[200px] w-[220px] bg-white rounded-3xl shadow-md text-center   p-4">
          <img src={icon1} alt="image" className="w-[64px] h-[64px] mb-4 m-auto mt-2" />
          <h2 className="text-lg font-bold mb-3 text-[#5FE26C] ">Catering</h2>
          <p className="text-sm text-center  text-[#5FE26C] font-semibold">
          Delight your guests with our flavors and  presentation
          </p>
        </div>
        <div className=" h-[200px] w-[220px] bg-white rounded-3xl shadow-md text-center   p-4">
          <img src={icon1} alt="image" className="w-[64px] h-[64px] mb-4 m-auto mt-2" />
          <h2 className="text-lg font-bold mb-3 text-[#5FE26C] ">Catering</h2>
          <p className="text-sm text-center  text-[#5FE26C] font-semibold">
          Delight your guests with our flavors and  presentation
          </p>
        </div>
        <div className=" h-[200px] w-[220px] bg-white rounded-3xl shadow-md text-center   p-4">
          <img src={icon1} alt="image" className="w-[64px] h-[64px] mb-4 m-auto mt-2" />
          <h2 className="text-lg font-bold mb-3 text-[#5FE26C] ">Catering</h2>
          <p className="text-sm text-center  text-[#5FE26C] font-semibold">
          Delight your guests with our flavors and  presentation
          </p>
        </div>
        <div className=" h-[200px] w-[220px] bg-white rounded-3xl shadow-md text-center   p-4">
          <img src={icon1} alt="image" className="w-[64px] h-[64px] mb-4 m-auto mt-2" />
          <h2 className="text-lg font-bold mb-3 text-[#5FE26C] ">Catering</h2>
          <p className="text-sm text-center  text-[#5FE26C] font-semibold">
          Delight your guests with our flavors and  presentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
