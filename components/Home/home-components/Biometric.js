import React from "react";
import BiometricItems from "./BiometricItems";
import { biometric } from "./biometricObj";
const Biometric = () => {
    return (
        <div className="md:p-10 ">
            <section>
                <h1 className="font-bold text-2xl  md:text-5xl text-center py-5 ">
                    Biometric attendance system vs <br /> other attendance
                    systems
                </h1>
                <div className="grid md:grid-cols-2">
                    {biometric.map((obj, i) => (
                        <BiometricItems key={i} obj={obj} />
                    ))}
                </div>
            </section>
            <section className="pt-32 md:px-10">
                <h1 className="text-center font-bold text-2xl md:text-5xl my-10">
                    Why NCheck Bio Attendance?
                </h1>
                <div className="md:flex ">
                    <div className="w-[90%] h-[90%]">
                        <img
                            src="https://www.ncheck.net/wp-content/uploads/2019/07/multibiometric-ncheck-vertical.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="ml-5 md:p-10 space-y-5">
                        <p>
                            NCheck Bio Attendance is a ready-to-use biometric
                            time clock software with 3 different modalities –
                            face, finger, and iris. The product was released in
                            2012 by Neurotechnology, a company with almost 30
                            years of experience in the fields of artificial
                            intelligence and biometrics. That is why our
                            algorithms are among the best in the market. All the
                            modalities can be used alone or combined to get
                            extremely high accuracy.
                        </p>
                        <p>
                            For those willing to prevent cheating on the system,
                            we offer liveness detection. It validates that a
                            real person performs a check-in or check-out. Our
                            biometric time and attendance software can be
                            successfully applied in any business or project that
                            requires attendance management, access control, or
                            working time, overtime and holiday time calculation.
                            Customers really like the easy installation of the
                            system and customizable comprehensive reports.
                            NCheck time attendance system suits both people
                            working in the same location and premises and those
                            working out of office – employees who work remotely,
                            have business trips, visit customers, or travel to
                            exhibitions and conferences, also builders or field
                            workers by tracking their location.
                        </p>
                        <p>
                            Moreover, the NCheck biometric attendance software
                            can detect and recognize more than one person in the
                            picture, which simplifies and speeds up the
                            registration process. For projects where people do
                            not interact with the system, we offer a biometric
                            identification solution to identify them in
                            real-time from the video stream, without any need to
                            stop and wait for the camera to take a picture. For
                            customers having specific needs and requirements, we
                            offer a product customization service. Just contact
                            us, shortly describe your project and we will do our
                            best to adjust our biometric time and attendance
                            system to your needs.
                        </p>
                        <p>
                            Looks like NCheck Bio Attendance is a suitable
                            solution for you? Try it for free!
                        </p>
                        <div className="md:flex justify-between space-y-2">
                            <button className="uppercase bg-[#00AEEF] text-white md:ml-14 rounded p-4 text-xs font-bold">
                                register and try free cloud subscription
                            </button>
                            <button className="uppercase bg-[#00AEEF] text-white  rounded p-4 text-xs font-bold">
                                downlod 30-day free on premises trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="md:text-5xl text-3xl font-bold py-20 text-center">
                    Benefits of NCheck Bio Attendance
                </h1>
                <div className="md:flex items-center ">
                    <div className="w-full h-full flex-1">
                        <img
                            src="https://www.ncheck.net/wp-content/uploads/2019/07/multibiometric-ncheck-on-premises.png"
                            alt=""
                            className="w-full h-full "
                        />
                    </div>
                    <div className="space-y-5 text-lg ml-5 md:w-[59%] p-2">
                        <p>
                            <span className="font-bold">
                                Multiple modalities
                            </span>{" "}
                            - you can choose the modality depending on your
                            operational needs, and employee’s check-in and
                            check-out process. It does not bind with a single
                            Biometric. If one modality fails to identify, or for
                            any other reason does not recognize, the other
                            modality helps the user to check-in or out at the
                            location without any problem.
                        </p>
                        <p>
                            <span className="font-bold">
                                Access via mobile platforms
                            </span>
                            - NCheck allows access via smartphone platforms
                            (Windows, Android Mobile, iOS, etc). Unlike
                            fingerprints, human faces are the only biometric
                            modalities that do not require any special hardware.
                            Any Smartphone which has a built-in camera can
                            perform face verification. The compatibility with
                            mobile devices makes NCheck biometric attendance
                            software ever more convenient.
                        </p>
                        <p>
                            <span className="font-bold">
                                Greater level of accuracy
                            </span>{" "}
                            - multi-biometric attendance system provides higher
                            accuracy in the decision making by combining more
                            than one trait from different sensors. In this way,
                            it also creates a highly robust biometric
                            identification system.
                        </p>
                        <p>
                            <span className="font-bold">
                                Enhanced security{" "}
                            </span>{" "}
                            - by combining more than one modality NCheck makes
                            It is difficult to spoof the multi-modal biometric
                            attendance system for attackers. This is excellent
                            for organizations that require enhanced levels of
                            access security in certain areas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Biometric;
