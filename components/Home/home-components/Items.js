import React from "react";

const Items = ({ obj: { image, title, body } }) => {
    return (
        <article className="border group border-gray-200 p-10 text-center bg-white relative ">
            <span className="absolute top-3 text-xs -right-3 bg-[#00AEEF]  px-2 p-1 text-white uppercase rounded-l-md z-10 font-bold ">
                trending feature
            </span>
            <div className="w-[12px] h-[18px] bg-[#3E3E3E] absolute top-5 -right-3 -skew-y-[30deg]"></div>
            <div className="w-32 h-32 rounded-full overflow-hidden  mx-auto transition group-hover:-translate-y-2 duration-300">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full bg-[#EFEFEF]"
                />
            </div>
            <h1 className="text-2xl font-bold py-2">{title}</h1>
            <p className="">{body}</p>
        </article>
    );
};

export default Items;
