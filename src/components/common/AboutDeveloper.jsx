import React from "react";
import Image from "next/image";

const AboutDeveloper = () => {
    return (
        <div className="p-2 mt-[120px] select-none rounded-lg border border-[white] shadow-md  w-full  text-[#01275C] bg-[#F5F9FD] text-center  flex flex-col items-center justify-center">
        <h1 className="font-thin select-none text-[30px] text-[#01275C]">About</h1>
            <Image
                className="rounded-full"
                src="/dev avatar.webp"
                alt="avatar"
                width={50}
                height={50}
            />
            <h3 className="font-bold text-lg mt-2">NIKHIL</h3>
            <p>Full Stack Developer </p>
            <a
                href="https://nikhilx24-portfolio.vercel.app/"
                target="_blank"
                className="text-[#266ED5] font-semibold hover:underline"
            >
                View Profile
            </a>
            <p className="mt-3">
                Connect me on{" "}
                <a
                    href="https://www.linkedin.com/in/nikhil301//"
                    target="_blank"
                    className="text-[#266ED5] hover:underline "
                >
                    LinkedIn
                </a>
            </p>
            <p>
                Connect me on {" "}
                <a
                    href="https://github.com/nikhil-x24"
                    target="_blank"
                    className="text-[#266ED5] hover:underline"
                >
                    Github
                </a>
            </p>
        </div>
    );
};

export default AboutDeveloper;
