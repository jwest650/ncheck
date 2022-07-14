import React from "react";

const Content = () => {
    return (
        <section className="text-white p-2  md:flex flex-1 justify-between">
            <div className=" mt-3">
                <h2 className="md:text-5xl text-3xl font-bold leading-tight ">
                    Biometric Time and <br /> Attendance System
                </h2>
                <p className="my-4">
                    The accurate and efficient solution to registration, time
                    management and attendance.
                </p>

                {/* buttons */}
                <div className="space-x-2">
                    <button className="px-6 py-3 bg-[#00AEEF] rounded-lg text-lg capitalize">
                        cloud
                    </button>
                    <button className="px-6 py-3 bg-[#00AEEF] rounded-lg text-lg capitalize">
                        on-premises
                    </button>
                    <button className="px-6 py-3 bg-[#a9cf54] rounded-lg text-lg md:mt-5">
                        Try for free
                    </button>
                </div>

                {/* featured */}
                <div className="w-[350px] h-36 flex bg-white text-black mt-20 group">
                    <img
                        src="https://www.ncheck.net/wp-content/uploads/2021/07/ncheck-e1627367224773.webp"
                        alt=""
                        className="w-1/2 h-full "
                    />
                    <div className="ml-2 p-3 ">
                        <h5 className=" text-md">Featured article</h5>
                        <hr className="w-5 border-b my-3 group-hover:w-16 transition-all duration-500 border-blue-800" />
                        <p className="text-xl font-bold ">
                            Working from <br /> home
                        </p>
                    </div>
                </div>
            </div>

            {/* image */}
            <div className="mt-5">
                <img
                    src="https://www.ncheck.net/wp-content/uploads/2019/07/multibiometric-ncheck-on-cloud.png"
                    alt=""
                    className="w-full h-[85%] object-contain"
                />
            </div>
        </section>
    );
};

export default Content;
