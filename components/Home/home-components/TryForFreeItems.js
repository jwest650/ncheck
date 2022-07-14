import React from "react";

const TryForFreeItems = ({
    obj: { title, text1, text2, text3, text4, head, btn },
}) => {
    return (
        <div className="mx-5 py-10  px-10 md:w-[32%]  shadow-2xl mt-5 text-sm font-light space-y-10 text-center bg-white rounded-lg ">
            <h1 className="font-bold text-2xl">{title}</h1>
            <h1 className="bg-[#0095CC] w-fit px-2 rounded capitalize  text-white text-md mx-auto">
                {head}
            </h1>
            <div>
                <p className="border-b border-gray-300 p-2">{text1} </p>
                <p className="border-b border-gray-300 p-2">{text2} </p>
                <p className="border-b border-gray-300 p-2">{text3} </p>
                <p className="p-2">{text4} </p>
            </div>
            <button className="bg-[#00AEEF] p-4  m-10 text-white px-5 rounded uppercase font-bold">
                {btn}
            </button>
        </div>
    );
};

export default TryForFreeItems;
