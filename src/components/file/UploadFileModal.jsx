"use client";
import { toastContext } from "@/context/ToastContext";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { app } from "@/config/Firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { loadingContext } from "@/context/LoadingContext";

const UploadFileModal = ({ closeModal }) => {
    const { data: session } = useSession();
    const [folderId, setFolderId] = useState(0);
    const pathname = usePathname();
    const { setShowToastMsg } = useContext(toastContext);
    const {setLoading} = useContext(loadingContext)

    useEffect(() => {
        if (pathname.startsWith("/folder")) {
            const id = pathname.split("/").at(-1);
            setFolderId(id);
        } else {
            setFolderId(0);
        }
    }, [pathname]);

    const db = getFirestore(app);
    const storage = getStorage(app);
    const docId = Date.now();
    const onFileUpload = async (file) => {
        setLoading(true);
        const fileRef = ref(storage, "/files/" + file.name);
        uploadBytes(fileRef, file)
            .then((snapshot) => {
                console.log("Uploaded a blob or file!");
            })
            .then((res) => {
                getDownloadURL(fileRef).then(async (downloadURL) => {
                    await setDoc(doc(db, "files", docId.toString()), {
                        id: docId,
                        name: file.name,
                        type: file.name.split(".").at(-1),
                        size: file.size,
                        modifiedAt: file.lastModified,
                        createdBy: session.user.email,
                        parentFolderId: folderId,
                        fileUrl: downloadURL,
                    });

                    closeModal(true);
                    setShowToastMsg("File uploaded");
                    setLoading(false);
                });
            });
    };

    return (
        <div>
            <form
                method="dialog"
                className="modal-box bg-white p-9 items-center w-[360px]"
            >
                <button className="btn btn-sm btn-circle btn-ghost text-[#01275C] absolute right-2 top-2">
                    ✕
                </button>
                <div className="w-full  items-center flex flex-col justify-center gap-3">
                    <div className="flex items-center justify-center w-full">
                        <label className="flex bg-[#F5F9FD] flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer dark:hover:bg-[#F5F9FD] dark:bg-[#F5F9FD] ">
                            <div className="flex bg-[#F5F9FD] flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-[#06367A] dark:text-[#01275C]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-[#06367A] dark:text-[#01275C]">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-[#06367A] dark:text-[#01275C]">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    onFileUpload(e.target.files[0])
                                }
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadFileModal;
