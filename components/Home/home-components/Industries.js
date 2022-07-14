import React from "react";
import Items from "./Items";
import { industries } from "./industriesObj";
import IndustryItems from "./IndustryItems";
const Industries = () => {
    return (
        <section className="p-5 ">
            <div>
                <h1 className="md:text-5xl text-center my-3 font-bold text-3xl">
                    Applications and Industries
                </h1>
                <p className="text-center">
                    Our biometric time attendance system can be successfully
                    used by various businesses and institutions.
                </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4 mt-20  ">
                {industries.map((obj, i) => (
                    <IndustryItems obj={obj} key={i} />
                ))}
            </div>
        </section>
    );
};

export default Industries;
