import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Info = () => {
    return (
        <div className="text-white text-xs ">
            <section className="p-2 md:w-[60%] mx-auto space-y-5 py-5 text-lg">
                <h1 className="md:text-2xl font-bold">
                    Not just your average fingerprint scanner
                </h1>
                <p>
                    Many institutions will have experimented with fingerprint
                    time clocks in the past, without much success. Whether it be
                    the software failing to identify users consistently, or the
                    expensive hardware limiting the scalability of the systems,
                    it is easy to understand why these systems were unpopular.
                </p>
                <h1 className="md:text-2xl font-bold">NCheck is different</h1>
                <p>
                    Quite simply, NCheck offers the most accurate, yet simple to
                    use time clock software on the market
                </p>
                <div className="ml-5 space-y-4">
                    <article className="flex">
                        <div>
                            <AiOutlineCheck className="text-white md:text-2xl" />
                        </div>
                        <p className="ml-5">
                            No more expensive, bespoke hardware* Your staff can
                            use mobile phones, laptops or tablets to mark
                            attendance
                        </p>
                    </article>
                    <article className="flex">
                        <div>
                            <AiOutlineCheck className="text-white md:text-2xl" />
                        </div>
                        <p className="ml-5">
                            Award Winning Accuracy The system is powered by
                            class-leading algorithms developed by
                            Neurotechnology
                        </p>
                    </article>
                    <article className="flex">
                        <div>
                            <AiOutlineCheck className="text-white md:text-2xl" />
                        </div>
                        <p className="ml-5">
                            Flexible around your requirements
                        </p>
                    </article>
                </div>
                <p className="py-10 text-sm">
                    *For fingerprint or iris identification, the system requires
                    an external fingerprint reader or iris scanner, both of
                    which can be purchased from www.biometricsupply.com
                </p>
            </section>
        </div>
    );
};

export default Info;
