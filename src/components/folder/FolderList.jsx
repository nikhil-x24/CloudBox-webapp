import React from "react";
import FolderItem from "./FolderItem";
import Link from "next/link";

const FolderList = ({folders}) => {

    return (
        <div className="p-5 mt-5 rounded-lg text-[#01275C] bg-white">
            <h2 className="font-bold text-[12px] text-lg md:text-xl text-[#01275C] flex items-center justify-between">
                Recent Folders
                <Link href="/myfiles" className="text-sm text-[12px] text-red-500 cursor-pointer ">
                    View all
                </Link>
            </h2>
            <div className="mt-3 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {folders.map((item) => (
                    <FolderItem key={item.id} folder={item} />
                ))}
            </div>
        </div>
    );
};

export default FolderList;
