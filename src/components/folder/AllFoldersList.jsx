import React from "react";
import Link from "next/link";

const AllFoldersList = ({ folders, folderName }) => {
    const demofolders = [
        {
            id: 1,
            name: "Folder 1 ",
        },
        {
            id: 2,
            name: "Folder 2",
        },
        {
            id: 3,
            name: "Folder 3",
        },
        {
            id: 4,
            name: "Folder 4",
        },
        {
            id: 5,
            name: "Folder 5",
        },
    ];

    return (
        <div className="p-5 mt-5 m-2  bg-white rounded-lg">
            <h2 className="font-bold text-lg md:text-xl text-[#01275C]  flex items-center justify-between">
              Folder / {folderName} &gt;
            </h2>
            <div className="mt-3 m-2">
                {folders.length === 0 ? (
                    <h1 className=" font-bold select-none mt-5 text-[#01275C] text-center text-lg md:text-xl">
                        Upload File or Folder
                    </h1>
                ) : (
                    folders.map((item) => (
                        <AllFolderItem key={item.id} folder={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default AllFoldersList;

const AllFolderItem = ({ folder }) => {

    return (
        <Link
            href={{
                pathname: `/folder/${folder.id}`,
                query: { name: folder.name },
            }}
        >
            <div className="w-full  mt-3 flex justify-between items-center px-3 gap-3 cursor-pointer rounded-lg py-3  shadow-md bg-[#266ED5] hover:bg-[#06367A]  hover:shadow-md">
            <div className="flex flex-row gap-2 items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#266ED5"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                        />
                    </svg>
                    <h3 className="line-clamp-1 text-sm text-white">
                        {folder.name}
                    </h3>
            </div>
            <div className="">
                        
            </div>  
                        
            </div>
        </Link>
    );
};
