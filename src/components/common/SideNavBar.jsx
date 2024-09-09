"use client";
import { cloud_icon } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sideMenu } from "@/data";
import CreateFolderModal from "../folder/CreateFolderModal";
import Link from "next/link";
import UploadFileModal from "../file/UploadFileModal";
import { useSession } from "next-auth/react";

const SideNavBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();
    const session = useSession();

    const onMenuClick = (item, index) => {
        setActiveIndex(index);
        // router.push(item.)
    };

    return (
        <div className="w-[150px] md:w-[260px] bg-[#06367A] h-screen sticky top-0 z-10 py-3 shadow-md ">
            {/* Logo */}
            <div className="flex justify-evenly items-center mb-3 gap-2">
                <Image
                    src={cloud_icon}
                    alt="logo"
                    className="cursor-pointer border-[3px] border-white rounded-full"
                    width={80}
                    height={100}
                    onClick={() => {
                        router.push("/");
                        setActiveIndex(0);
                    }}
                /> 
            </div>
            {/* Add New FIle button */}
            <button
                disabled={session.status === "unauthenticated"}
                onClick={() => window.upload_file.showModal()}
                className="flex disabled:cursor-not-allowed gap-2 items-center text-[13px] bg-blue-500 p-2 text-white  
         transition-all mt-5 w-full justify-center"
            >
                <div className="hover:scale-105 flex gap-2 items-between justify-center">
                <div className="flex  gap-3 items-center ml-[-15px] justify-center  cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#2196F3"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                </div>
                <span className="hidden mt-[3px] item-center justify-center text-[15px] md:inline ">File Upload</span>
                </div>
                
            </button>
            {/* Create new Folder button */}
            {/* <button className="btn" >open modal</button> */}
            <button
                disabled={session.status === "unauthenticated"}
                onClick={() => window.create_folder_modal.showModal()}
                className="flex disabled:cursor-not-allowed gap-2 items-center text-[13px] bg-sky-500 p-2 text-white px-3  transition-all mt-3 w-full justify-center"
            >
                <div className="hover:scale-105 flex gap-2 items-center justify-center">
                <div className="flex  gap-3 items-center ml-2 justify-center  cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00c2e0"
                    className="w-9 h-7 hover:scale-105"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                </svg>
                </div>
                
                <span className="hidden text-[15px] hover:scale-105 md:inline">Folder Upload</span>
                </div>
                
            </button>
            {/* Nav Menu */}
            <div className="mt-5 w-[170px] ml-5  bg-white  mb-4 h-[1px]" />
            <menu>
                {sideMenu.map((item, index) => (
                    <Link key={index} href={item.url}>
                        <h2
                            onClick={() => onMenuClick(item, index)}
                            className={`flex   gap-3 items-center p-3 mt-3  justify-center md:justify-start md:items-center lg:items-center text-white text-gray-500  cursor-pointer
                hover:bg-[#01275C] hover:transition-all hover:text-white ${
                    activeIndex == index ? "bg-[#01275C] text-white font-bold" : null
                }`}
                        >
                    <div className="flex   gap-3 items-center ml-6 justify-center  cursor-pointer">
                    <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#06367A"
                                // stroke="white"
                                className="w-9 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={item.logo}
                                />
                            </svg>
                    </div>
                            
                            <span className="hidden md:inline">
                                {item.name}
                            </span>
                        </h2>
                    </Link>
                ))}
            </menu>

            <dialog id="upload_file" className="modal">
                <UploadFileModal
                    closeModal={() => window.upload_file.close()}
                />
            </dialog>
            <dialog
                id="create_folder_modal"
                className="modal modal-bottom sm:modal-middle"
            >
                <CreateFolderModal />
            </dialog>
        </div>
    );
};

export default SideNavBar;
