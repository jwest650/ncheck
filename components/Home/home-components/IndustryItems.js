import React from "react";

const IndustryItems = ({ obj: { title, image } }) => {
    return (
        <div className="border border-gray-200 text-center p-8 bg-white transition group">
            <img
                src={image}
                alt=""
                className="w-20 h-20 mx-auto transition group-hover:-translate-y-2 duration-300"
            />
            <h1 className="font-bold capitalize pt-10 text-xl">{title}</h1>
        </div>
    );
};

export default IndustryItems;
