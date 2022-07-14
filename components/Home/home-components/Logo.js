import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div className="w-52  h-[70px] relative">
            <Image
                src="https://www.neurotechnology.com/res/neurotechnology-retina.png"
                alt=""
                objectFit="contain"
                layout="fill"
            />
        </div>
    );
};

export default Logo;
