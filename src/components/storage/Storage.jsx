import React from "react";
import AccountInfo from "./AccountInfo";
import StorageInfo from "./StorageInfo";
import { useRouter } from "next/navigation";

const Storage = () => {
    const router = useRouter();
    return (
        <div>
            <AccountInfo />
            <StorageInfo />
            <div className="p-6 select-none   border border-[white] shadow-md bg-[#F7DAE6] rounded-lg text-center mt-7 bottom-0 ">
                <h2 className=" font-thin select-none text-[27px] text-[#01275C] ">
                    Need More Space?
                </h2>
                <h2 className="text-[12px] text-[#01275C] ">
                    Get more space my upgrading the plan
                </h2>
                <button
                    className="bg-white border-[#01275C]  border-[2px] p-2 px-4 text-[14px] text-[#01275C] cursor-pointer rounded-lg mt-3"
                    onClick={() => router.push("/plans")}
                >
                    Upgrade Plan
                </button>
            </div>
        </div>
    );
};

export default Storage;
