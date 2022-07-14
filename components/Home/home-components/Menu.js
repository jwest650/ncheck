import React from "react";
import { BsHandbag } from "react-icons/bs";
import { ImKey } from "react-icons/im";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import NavItems from "./NavItems";
import items from "./navItemsObj";
const Menu = () => {
    return (
        <div className="text-white p-5 space-y-4">
            <button className="bg-[#a9cf54] uppercase font-bold px-5   py-1 rounded md:flex items-center justify-center w-[80%] mx-auto  ">
                sign in
                <ImKey className=" ml-2 hidden md:block" />
            </button>
            <div className="flex relative py-2 w-fit mx-auto">
                <BsHandbag className="text-xl " />
                <div className="absolute -top-2 -right-4  w-5  h-5  text-center bg-[#00AEEF]   rounded-full text-sm ">
                    <span> 0</span>
                </div>
            </div>
            <div className=" text-[13px] lg:space-x-3 cursor-pointer ">
                <section className="relative group  py-2">
                    <div className="flex justify-between  items-center ">
                        <p>Product</p>
                        <AiOutlinePlus className="text-lg group-hover:hidden" />
                        <AiOutlineMinus className="text-lg hidden group-hover:block" />
                    </div>
                    <div className=" hidden group-hover:block w-fit   bg-[#436FDD] text-white capitalize transition-all duration-700">
                        {items.product.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>
                <section className="relative py-2 group ">
                    <div className="flex justify-between  items-center">
                        <p>Industries</p>
                        <AiOutlinePlus className="text-lg group-hover:hidden" />
                        <AiOutlineMinus className="text-lg hidden group-hover:block" />
                    </div>
                    <div className="hidden  group-hover:block w-80   bg-[#436FDD] text-white capitalize transition-all duration-700">
                        {items.industries.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>
                <section className="relative py-2 group ">
                    <div className="flex justify-between items-center">
                        <p>How to</p>
                        <AiOutlinePlus className="text-lg group-hover:hidden" />
                        <AiOutlineMinus className="text-lg hidden group-hover:block" />
                    </div>
                    <div className=" hidden group-hover:block w-80  bg-[#436FDD] text-white capitalize transition-all duration-700">
                        {items.howto.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>
                <div className="flex py-2 ">
                    <p>Pricing</p>
                </div>

                <section className="relative py-2 group ">
                    <div className="flex justify-between items-center">
                        <p>Downloads</p>
                        <AiOutlinePlus className="text-lg group-hover:hidden" />
                        <AiOutlineMinus className="text-lg hidden group-hover:block" />
                    </div>
                    <div className=" hidden group-hover:block w-80  bg-[#436FDD] text-white capitalize transition-all duration-700">
                        {items.download.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>

                <div className="flex  items-center py-2">
                    <p>About</p>
                </div>
                <div className="flex  items-center py-2">
                    <p>Contact us</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;
