"use client";
import { loadingContext } from "@/context/LoadingContext";
import { toastContext } from "@/context/ToastContext";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useContext, useEffect } from "react";

const AccountInfo = () => {
    const ss = useSession();
    const { data: session } = useSession();

    const { setShowToastMsg } = useContext(toastContext);

    const { setLoading } = useContext(loadingContext);
    useEffect(() => {
        if(ss.status === 'loading') {
            setLoading(true);
        }
        else {
            setLoading(false);
        }
    }, [session])

    const handleLogout = (e) => {
        e.preventDefault();
        signOut();
        setShowToastMsg("Signing out.");
    };

    return (
        <div>
            {session ? (
                <div className="flex justify-between p-4 rounded-lg border border-[white] shadow-md bg-[#BDE5EB] items-center">
                    <div className="flex gap-4 items-center ">
                        <Image
                            src={session.user.image}
                            alt="user-image"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div className="text-[#01275C]">
                            <h2 className="text-[25px] font-thin text-[#01275C] ">
                                {session.user.name}
                            </h2>
                            <h2 className="text-[14px] mt-[-4px] font-light">
                                {session.user.email}
                            </h2>
                        </div>
                    </div>
                    <div className="bg-blue-200  border-white border-[3px] p-2 rounded-full cursor-pointer shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            onClick={handleLogout}
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-500  hover:animate-pulse transition-all "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                            />
                        </svg>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default AccountInfo;
