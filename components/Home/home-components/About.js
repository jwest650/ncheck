import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const About = () => {
    return (
        <div className=" bg-[#F7F7F7] ">
            <h1 className="font-bold text-5xl py-10 p-5">
                The benefits of the NCheck Biometric Attendance System
            </h1>
            <section className="md:flex ">
                <article className="space-y-5 p-5 flex-1">
                    <h3 className="font-bold text-2xl ">For the institution</h3>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">Cost Effective</span> -
                            No ID cards, badges or other equipment is needed for
                            the system users, they just use biometrics.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">
                                High accuracy and security
                            </span>
                            - Identification based on multi modal biometrics
                            allows achieving very high accuracy and is a
                            reliable fraud prevention.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">
                                No &quot;buddy punching&quot;
                            </span>
                            - Nobody can do a fake check-in or check-out in
                            favor of another employee / user / attendee.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">
                                Useful integrations
                            </span>{" "}
                            - NCheck provides flexible data exporting to a range
                            of payroll systems
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">
                                Increase the efficiency of attendance monitoring
                            </span>
                            - The use of passive recognition and identification
                            using surveillance cameras enables large work forces
                            to be monitored with ease
                        </p>
                    </div>
                </article>
                {/* right */}
                <article className=" space-y-5 flex-1 p-5">
                    <h3 className="font-bold text-2xl ">For the user</h3>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">Easy to Use</span> -
                            Never worry about a lost or forgotten time card or
                            fob
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold"> Accurate</span>- Ensure
                            your attendance is accurately monitored
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">Anytime, Anywhere</span>
                            - Log your attendance wherever you are using a
                            personal smart phone
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">
                                Contact less attendance -
                            </span>
                            Multi-modality scanning offers a more hygienic
                            solution to attendance monitoring
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <AiOutlineCheck className="text-green-800 text-2xl" />
                        </div>
                        <p className="ml-5">
                            <span className="font-bold">
                                Off-line attendance
                            </span>
                            - Never worry about missed wages in remote areas
                            where internet connectivity is a challenge
                        </p>
                    </div>
                </article>
            </section>
            <h1 className="text-center font-bold text-3xl py-10 p-5">
                How does the NCheck Bio Attendance System work?
            </h1>
            <div className="mx-auto w-fit pb-10">
                <button className="bg-[#00aeef] p-3 rounded w-60 text-white">
                    Read the quick start guide
                </button>
            </div>
        </div>
    );
};

export default About;
