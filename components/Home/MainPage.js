import React, { useEffect, useRef, useState } from "react";
import Nav from "./home-components/Nav";
import Bio from "./home-components/Bio";
import Logo from "./home-components/Logo";
import Content from "./home-components/Content";
import About from "./home-components/About";
import Info from "./home-components/Info";
import Feature from "./home-components/Feature";
import Award from "./home-components/Award";
import Industries from "./home-components/Industries";
import TryForFree from "./home-components/TryForFree";
import Biometric from "./home-components/Biometric";
import Testimonial from "./home-components/Testimonial";
import Footer from "./home-components/Footer";
import { IoIosArrowUp } from "react-icons/io";
import Menu from "./home-components/Menu";
import { AiOutlineClose } from "react-icons/ai";
const MainPage = () => {
    const [show, setshow] = useState(true);
    const [showbar, setbar] = useState(true);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > 200) {
            setshow(true);
        } else {
            setshow(false);
        }
    };
    const windowSize = () => {
        const size = window.innerWidth;
        console.log(size);
        if (size > 1024) {
            ref.current.style.width = "0";
            mainref.current.style.marginRight = "0";
            document.body.style.backgroundColor = "white";
            setbar(true);
        }
    };
    const ref = useRef();
    const mainref = useRef();
    const showmenu = () => {
        ref.current.style.width = "50%";
        mainref.current.style.marginRight = "50%";
        document.body.style.cssText = "background-color:rgba(0,0,0,0.10)";
        setbar(false);
    };
    const close = () => {
        setbar(true);
        ref.current.style.width = "0";
        mainref.current.style.marginRight = "0";
        document.body.style.backgroundColor = "white";
    };

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setshow(false);
            }, 3000);
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", windowSize);
    }, [show]);
    return (
        <div className="relative">
            <main
                className="relative text-sm md:text-lg transition-all duration-700"
                ref={mainref}
            >
                <Logo />

                {show && (
                    <div
                        onClick={scrollToTop}
                        className="border-2 rounded fixed text-blue-400 bottom-2 right-10 border-blue-400 w-fit p-4 cursor-pointer z-10"
                    >
                        <IoIosArrowUp />
                    </div>
                )}
                {/* first screen */}

                <header className="bg-[#3E6CDC]  w-full relative">
                    <Nav showmenu={showmenu} showbar={showbar} />

                    <Content />
                </header>

                {/* bio */}
                <section className="bg-[#FBFBFB] w-full h-full">
                    <Bio />
                </section>
                {/* about */}
                <section>
                    <About />
                </section>
                {/* info*/}
                <section className="bg-[#3F6CDD]">
                    <Info />
                </section>

                {/* feature */}
                <section className="bg-[#FBFBFB]">
                    <Feature />
                </section>
                {/* awards */}
                <section className="bg-[#F7F7F7]">
                    <Award />
                </section>
                {/* application and industries */}
                <section className="bg-[#FBFBFB] ">
                    <Industries />
                </section>
                {/* try for free */}
                <section className="bg-[#F7F7F7] ">
                    <TryForFree />
                </section>
                {/* biometric attendeace */}
                <section className="bg-[#FBFBFB]">
                    <Biometric />
                </section>
                {/* testimonials */}
                <section className="bg-[#FBFBFB]">
                    <Testimonial />
                </section>

                <footer className="bg-[#202436] relative">
                    <Footer />
                </footer>
            </main>
            {/* right menu */}
            <div
                className="bg-[#3E6CDC] w-0 h-full  fixed top-0 right-0 text-white transition-all duration-700 overflow-y-auto  "
                ref={ref}
            >
                <AiOutlineClose
                    onClick={close}
                    className="text-4xl ml-auto p-2 cursor-pointer"
                />

                <Menu />
            </div>
        </div>
    );
};

export default MainPage;
