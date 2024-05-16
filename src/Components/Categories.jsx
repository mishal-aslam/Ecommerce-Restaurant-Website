import React from "react";
import Burger from "../Assets/burger.png";
import Sandwhich from "../Assets/sandwhich.png";
import Dessert from "../Assets/dessert.png";
import Juice from "../Assets/juice.png";

const Categories = () => {
  return (
    <div className="md:mt-52 mt-16 mb-44 md:px-32 px-5">
        <div className="place-items-center grid">
        <p className="text-[#FF6868] text-lg font-bold"> Customer Favorites</p>
        <h2 className="text-black font-bold md:text-5xl text-3xl mt-5 md:mb-20 mb-10">Popular Catagories</h2>
        </div>
        
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center gap-8 px-9 md:px-0">
        <div className="h-[250px] w-[250px] bg-white shadow-xl rounded-3xl place-items-center grid -gap-6">
          <img src={Burger} alt="" className="bg-[#C1F1C6] rounded-full py-4" />
          <div className="-gap-8">
            <h2 className="text-black text-xl font-bold">Main Dish</h2>
            <p className="text-[#555555]  ml-2">(86 dishes)</p>
          </div>
        </div>
        <div className="h-[250px] w-[250px] bg-white shadow-xl rounded-3xl place-items-center grid -gap-6">
          <img src={Sandwhich} alt="" className="bg-[#C1F1C6] rounded-full py-7 px-3" />
          <div className="-gap-8">
            <h2 className="text-black text-xl font-bold">Break Fast</h2>
            <p className="text-[#555555]  ml-2">(12 break fast)</p>
          </div>
        </div>
        <div className="h-[250px] w-[250px] bg-white shadow-xl rounded-3xl place-items-center grid -gap-6">
          <img src={Dessert} alt="" className="bg-[#C1F1C6] rounded-full py-4 px-3" />
          <div className="-gap-8">
            <h2 className="text-black text-xl font-bold">Main Dish</h2>
            <p className="text-[#555555]  ml-2">(38 dessert)</p>
          </div>
        </div>
        <div className="h-[250px] w-[250px] bg-white shadow-xl rounded-3xl place-items-center grid -gap-6">
          <img src={Juice} alt="" className="bg-[#C1F1C6] rounded-full py-5 px-7" />
          <div className="-gap-8">
            <h2 className="text-black text-xl font-bold">Browse All</h2>
            <p className="text-[#555555]  ml-2">(255 items)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
