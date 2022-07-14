import React, { useState } from "react";
import TryForFreeItems from "./TryForFreeItems";
import { server, client } from "./tryforfreeObj";

const TryForFree = () => {
    const [active, setactive] = useState("client");
    const classes = "bg-[#00AEEF]  rounded-full py-2 px-6  text-white";
    const selected = active == "server" ? server : client;
    const text = active == "server" ? "On-premise Server " : "Standard client";
    const text2 = active == "server" ? "Sign up Cloud" : "Lite client";
    return (
        <div className="p-10">
            <section className="text-center space-y-8">
                <h1 className="text-3xl font-bold uppercase">try for free</h1>
                <div className="rounded-full bg-[#DDDDDD] w-fit py-2      mx-auto cursor-pointer space-x-1 text-[#535353]">
                    <span
                        onClick={() => setactive("server")}
                        className={active == "server" ? classes : "px-3"}
                    >
                        Sever
                    </span>
                    <span
                        onClick={() => setactive("client")}
                        className={active == "client" ? classes : "px-3"}
                    >
                        Client
                    </span>
                </div>
                <div className="font-bold text-xl">
                    <h1>Download and install</h1>
                    <h1>
                        <span className="text-[#00AEEF]">{text}</span> or free{" "}
                        <span className="text-[#00AEEF]">{text2}</span>
                    </h1>
                </div>
            </section>
            <div className="md:flex justify-center my-10 ">
                {selected.map((obj, i) => (
                    <TryForFreeItems key={i} obj={obj} />
                ))}
            </div>
            <div className="space-y-5">
                <h1 className="text-center text-xl ">
                    Select NCheck trial license in{" "}
                    <span className="text-[#23B8F0]">License Manager </span>to
                    use{" "}
                    <span className="text-[#23B8F0]">
                        NCheck Standard Client
                    </span>{" "}
                    for one month free
                </h1>
                <p>
                    1. Select a PC or a device meeting{" "}
                    <span className="text-[#23B8F0]">minimum requirements</span>{" "}
                </p>
                <p>
                    2. Make sure that the internet connectivity is available.
                    Trial license connects to our licensing server to activate
                    and validate the trial license.
                </p>
                <div className="bg-[#FEF8EA] p-4 ">
                    <span className="text-[#B08E61] ml-10">
                        Note: If your trial is not activated in above
                        conditions, you can request trial license code from our
                        <a href="#" className="underline text-[#8A5B20]">
                            {" "}
                            support email.
                        </a>
                        <span className="font-bold ml-4 text-[#8A5B20]">x</span>
                    </span>
                </div>
                <div className="">
                    You can upgrade your trail usage to purchasing a license and
                    activate it with{" "}
                    <span className="text-[#23B8F0] capitalize">
                        license manager.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TryForFree;
