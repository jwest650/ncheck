import React from "react";

const Bio = () => {
    return (
        <div className="mx-auto md:w-[60%] py-10 space-y-5 px-5  ">
            <h4 className="font-bold text-2xl">
                The NCheck Bio Attendance system uses biometric identification
                of face, fingerprint and iris scanning to efficiently monitor,
                manage and register attendance.
            </h4>
            <p>
                Simple to use and easy to integrate, the NCheck Bio Attendance
                is a turnkey solution that is designed for everyday efficiency.
                By scanning either the face, fingerprint or iris, the bio
                attendance system quickly and accurately monitors attendance.
                The Bio Attendance system also prevents the fraudulent or
                incorrect attendance recording associated with other attendance
                systems such as timecards, fobs or registers.{" "}
            </p>
        </div>
    );
};

export default Bio;
