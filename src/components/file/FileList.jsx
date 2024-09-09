import React from "react";
import FileItem from "./FileItem";
import Link from "next/link";

const FileList = ({ files }) => {
    const demofiles = [
        {
            id: 1,
            name: "UX Principal.docx",
            type: "docx",
            size: "6272 kB",
            modifiedAt: "2020-09-09",
        },
        {
            id: 2,
            name: "Data Structure.pdf",
            type: "pdf",
            size: "672 kB",
            modifiedAt: "2020-09-09",
        },
        {
            id: 3,
            name: "smaple Image.png",
            type: "image",
            size: "400 kB",
            modifiedAt: "2020-09-09",
        },
        {
            id: 4,
            name: "React Principal.docx",
            type: "docx",
            size: "6272 kB",
            modifiedAt: "2020-09-09",
        },
    ];

    return (
        <div className=" select-none p-4  mt-5 bg-white rounded-lg shadow-md">
            <h2 className="font-bold text-lg md:text-xl text-[#01275C]  flex items-center justify-between">
                Recent Files
                <Link
                    href="/myfiles"
                    className="text-sm text-red-500   cursor-pointer "
                >
                   
                </Link>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 text-[13px] font-semibold border-b-[1px] mb-3 pb-2 mt-3 border-[#01275C] text-[#01275C] ">
                <h2>Name</h2>
                <div className="grid grid-cols-3 ">
                    <h2>Modified</h2>
                    <h2>Size</h2>
                    <h2></h2>
                </div>
            </div>

            {files.length === 0 ? (
                <h1 className="font-bold gap-5 mt-5 text-center text-lg md:text-xl text-[#01275C] ">
                    Upload a new file
                </h1>
            ) : (
                files.map((item, index) => (
                    <div key={index}>
                        <FileItem file={item} key={index} />
                    </div>
                ))
            )}
        </div>
    );
};

export default FileList;
