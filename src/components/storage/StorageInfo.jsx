"use client";
import { app } from "@/config/Firebase";
import { loadingContext } from "@/context/LoadingContext";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";

const StorageInfo = () => {
    const session = useSession();
    const db = getFirestore(app);

    const [totalSizeUsed, setTotalSizeUsed] = useState(0);
    let totalSize = 0;

    const { setLoading } = useContext(loadingContext);
    useEffect(() => {
        if (session.status === "loading") {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [session]);

    useEffect(() => {
        if (session.status === "authenticated") {
            getAllFiles();
        }
    }, [session]);

    const getAllFiles = async () => {
        const q = query(
            collection(db, "files"),
            where("createdBy", "==", session.data.user.email)
        );
        const querySnapshot = await getDocs(q);
        // setFileList([]);
        querySnapshot.forEach((doc) => {
            totalSize = totalSize + doc.data()["size"];
            // setFileList((fileList) => [...fileList, doc.data()]);
        });

        setTotalSizeUsed((totalSize / 1024 ** 2).toFixed(2));
    };

    return (
        <div className="mt-7 p-5 rounded-lg border border-[white] shadow-md bg-[#D7D7FF] ">
        <p className="text-[#01275C] text-[14px]">Your Storage</p>
            <h2 className="text-[25px] text-[#01275C]  font-bold">
                {totalSizeUsed} MB{" "}
                <span className="text-[14px]  font-light ">used of </span> 100 MB
            </h2>
            <div className="w-full bg-white rounded-md   h-2.5 flex">
                <div className={`bg-[#266ED5] rounded-l-md  h-2.5 w-[5%]`}></div>
                {/* <div className="bg-green-600 h-2.5 w-[35%]"></div>
                <div className="bg-yellow-400 h-2.5 w-[15%]"></div> */}
            </div>
        </div>
    );
};

export default StorageInfo;
