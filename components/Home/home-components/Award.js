import React from "react";

const Award = () => {
    return (
        <section className="md:flex items-center py-10 md:px-20 px-5 group">
            <div className="w-1/2 h-1/2 rounded-full overflow-hidden p-4 transition group-hover:-translate-y-2 duration-300">
                <img
                    src="https://www.ncheck.net/wp-content/uploads/2021/04/award-winning-algorithms.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <h1 className="leading-relaxed md:text-md ">
                The{" "}
                <span className="font-bold text-black">
                    NCheck Bio Attendance system is powered by award winning
                    algorithms
                </span>{" "}
                developed by parent company, Neurotechnology. Neurotechnology is
                a developer of high-precision algorithms and software based on
                deep neural networks and other AI-related technologies. Since
                the first release of its fingerprint identification system in
                1991, the company has delivered more than 200 products and
                version upgrades. More than 3,000 system integrators, security
                companies and hardware providers in more than 140 countries
                integrate Neurotechnology &apos; s algorithms into their
                products. The company &apos; s algorithms have achieved top
                results in independent technology evaluations, including NIST
                MINEX, PFT, FRVT, IREX and FVC-onGoing.
            </h1>
        </section>
    );
};

export default Award;
