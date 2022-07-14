import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { ImKey } from "react-icons/im";
import items from "./navItemsObj";
import NavItems from "./NavItems";
import { BiMenu } from "react-icons/bi";
const Nav = ({ showmenu, showbar }) => {
    return (
        <section className="flex text-white  items-center  px-5 py-1 cursor-pointer justify-between ">
            {/* left */}
            <h1 className="text-xl">
                <span className="text-3xl  font-extrabold">NCheck</span> <br />
                Bio Attendance
            </h1>
            {/* left menu */}
            <div className="lg:hidden text-3xl w-fit ml-auto cursor-pointer">
                {showbar && <BiMenu className="" onClick={() => showmenu()} />}
            </div>
            <div className="lg:flex text-[15px]  items-center xl:space-x-10  hidden lg:space-x-3 ">
                <section className="relative group  py-2">
                    <div className="flex  items-center ">
                        <p>Product</p>
                        <IoMdArrowDropdown className="text-xl" />
                    </div>
                    <div className=" hidden group-hover:block w-80  absolute top-[40px] bg-white text-[#8E8E8E] capitalize transition-all duration-700">
                        {items.product.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>
                <section className="relative py-2 group ">
                    <div className="flex  items-center">
                        <p>Industries</p>
                        <IoMdArrowDropdown className="text-xl" />
                    </div>
                    <div className=" hidden group-hover:block w-80  absolute top-[40px] bg-white text-[#8E8E8E] capitalize transition-all duration-700">
                        {items.industries.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>
                <section className="relative py-2 group ">
                    <div className="flex  items-center">
                        <p>How to</p>
                        <IoMdArrowDropdown className="text-xl" />
                    </div>
                    <div className=" hidden group-hover:block w-80  absolute top-[40px] bg-white text-[#8E8E8E] capitalize transition-all duration-700">
                        {items.howto.map((obj, i) => (
                            <NavItems key={i} value={obj} />
                        ))}
                    </div>
                </section>
                <div className="flex py-2 ">
                    <p>Pricing</p>
                </div>

                <section className="relative py-2 group ">
                    <div className="flex  items-center">
                        <p>Downloads</p>
                        <IoMdArrowDropdown className="text-xl" />
                    </div>
                    <div className=" hidden group-hover:block w-80  absolute top-[40px] bg-white text-[#8E8E8E] capitalize transition-all duration-700">
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
                {/* right */}
                <div className="flex relative py-2 ">
                    <BsHandbag className="text-xl " />
                    <div className="absolute -top-2 -right-4  w-5  h-5  text-center bg-[#00AEEF]   rounded-full text-sm ">
                        <span> 0</span>
                    </div>
                </div>
                <div className="py-2 ">
                    <button className="bg-[#a9cf54] uppercase font-bold px-3   py-1 rounded flex items-center ">
                        sign in
                        <ImKey className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Nav;
