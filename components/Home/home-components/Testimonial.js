import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialItem from "./TestimonialItem";
import testimonials from "./testimonialObj";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonial = () => {
    return (
        <div className="md:p-10  md:text-md">
            <section className="p-10">
                <h1 className="md:text-5xl text-3xl font-bold text-center">
                    Client testimonials
                </h1>
                <Carousel
                    className=" md:p-10 "
                    showThumbs={false}
                    showIndicators={false}
                    renderArrowPrev={(clickHandler, hasPrev) =>
                        hasPrev && (
                            <button
                                onClick={clickHandler}
                                className="absolute left-0 top-7 z-10  bg-[#00AEEF] rounded text-white p-3  cursor-pointer"
                            >
                                <IoIosArrowBack />
                            </button>
                        )
                    }
                    renderArrowNext={(clickHandler, hasNext) =>
                        hasNext && (
                            <button
                                className="absolute right-0 top-7 bg-[#00AEEF] rounded text-white z-10  p-3 cursor-pointer"
                                onClick={clickHandler}
                            >
                                <IoIosArrowForward />
                            </button>
                        )
                    }
                >
                    {testimonials.map((obj, i) => (
                        <TestimonialItem key={i} obj={obj} />
                    ))}
                </Carousel>

                <div className="text-center italic text-sm text-[#A2A2A2]">
                    <p>
                        - The Capterra logo is a service mark of Gartner, Inc.
                        and/or its affiliates and is used herein with
                        permission. All rights reserved.
                    </p>
                    <p>
                        - The SoftwareAdvice logo is a service mark of Gartner,
                        Inc. and/or its affiliates, and is used herein with
                        permission. All rights reserved.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
