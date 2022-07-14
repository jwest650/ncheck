import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPlay, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="pb-10 text-white relative">
            <section className="md:flex md:space-x-40 space-y-3 text-white pt-20 px-5">
                <div className="space-y-2 font-light ">
                    <h1 className="font-bold text-lg mb-5">
                        General information
                    </h1>
                    <p>About the company</p>
                    <p>Visit Neurotechnology website</p>
                    <p>Blog</p>
                    <p>Contacts</p>
                    <p>News</p>
                </div>
                <div className="space-y-2 font-light">
                    <h1 className="font-bold text-lg mb-5">Quick start</h1>
                    <p>Quick start guide</p>
                    <p>Documentation</p>
                    <p>Payroll integration</p>
                    <p>Attendance reports</p>
                    <p>Supported devices</p>
                    <p>FAQ</p>
                </div>
                <div className="space-y-2 font-light">
                    <h1 className="font-bold text-lg mb-5">
                        Legal information
                    </h1>
                    <p>Terms and conditions</p>
                    <p>Privacy policy</p>
                    <p>Data transfer agreement</p>
                </div>
                <div className="space-y-2 font-light">
                    <h1 className="font-bold text-lg mb-5">Perks</h1>
                    <p>Register as a distributor</p>
                    <p>Customer references</p>
                </div>
            </section>
            <div className="text-2xl flex text-white space-x-3 ml-7 my-5">
                <FaFacebookF />
                <FaTwitter />
                <FaPlay />
                <FaLinkedinIn />
            </div>
            <p className="text-center py-10 text-[#8F9DAA]">
                NCheck Bio Attendance © 2016 - 2022 Neurotechnology. All rights
                reserved.
            </p>
        </div>
    );
};

export default Footer;
