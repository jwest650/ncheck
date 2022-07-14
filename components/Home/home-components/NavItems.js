import React from "react";

const NavItems = ({ value }) => {
    return (
        <p className="lg:border-b pl-2  lg:pl-5 py-3  lg:border-gray-200  lg:hover:bg-gray-200  ">
            {value}
        </p>
    );
};

export default NavItems;
