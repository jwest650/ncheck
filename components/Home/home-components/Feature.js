import React from "react";
import { features } from "./featureObject";
import Items from "./Items";

const Feature = () => {
    return (
        <div>
            <section className="text-center px-5 py-10">
                <h1 className="text-5xl font-bold my-3">Powerful features</h1>
                <p className="mb-20">
                    Unique features of our product take time and attendance
                    software to the next level.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((obj, i) => (
                        <Items key={i} obj={obj} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Feature;
