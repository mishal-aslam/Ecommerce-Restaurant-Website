import React from "react";
import Chef from "../Assets/pngwing 2.png";
import Rectangle from "../Assets/Rectangle 37.png";
const AboutUs = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 px-5 md:px-44 gap-x-12 gap-y-96 md:gap-y-0">
      {/* left side  */}
      <div style={{ position: "relative" }} className="">
        <img
          src={Rectangle}
          style={{
            width: "350px",
            height: "210px",
            position: "absolute",
            top: "240px",
          }}
          alt=""
        />
        <img
          src={Chef}
          style={{ height: "450px", width: "300px", position: "absolute" }}
          alt=""
        />
      </div>
      {/* right side  */}
      <div className="mt-24">
      <div className=" ">
        <p className="text-[#FF6868] text-lg font-bold">Testimonials</p>
        <h2 className="text-black font-bold md:text-5xl text-3xl mt-10 md:mb-12 mb-10">What Our Customers <br />Say About Us</h2>
        <p className="text-[#555555] text-base font-medium">“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
