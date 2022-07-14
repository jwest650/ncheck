import React from "react";

const BiometricItems = ({ obj: { title, image, body } }) => {
    return (
        <div className="flex my-5 group">
            <div className="w-28 h-28  transition group-hover:-translate-y-2 duration-300">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="ml-6">
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default BiometricItems;
