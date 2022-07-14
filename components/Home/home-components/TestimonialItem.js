import React from "react";

const TestimonialItem = ({ obj: { title, role, name, review } }) => {
    return (
        <div className="text-center px-10 py-5 italic space-y-2">
            <h1 className="text-[#5F5F5F]">{title}</h1>
            <p className="font-bold capitalize">Review from: {review}</p>
            <p className="font-bold capitalize">{name}</p>
            <p className="capitalize text-[#C4C4C4]">{role}</p>
        </div>
    );
};

export default TestimonialItem;
