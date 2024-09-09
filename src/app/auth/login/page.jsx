"use client";

import { loadingContext } from "@/context/LoadingContext";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import Image from "next/image";

const LoginPage = () => {
    const session = useSession();
    const router = useRouter();

    const { setLoading } = useContext(loadingContext);
    useEffect(() => {
        if (session.status === "loading") {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [session]);

    if (session.status === "loading") {
        return (
            <p className="mt-20 text-center text-xl font-bold">Loading...</p>
        );
    }

    if (session.status === "authenticated") {
        router.push("/");
    }
    // unauthenticated
    return (
        // <div className="w-full h-screen flex justify-center items-center">
        //     <div className="px-6 sm:px-0 max-w-sm">
        //         <button
        //             onClick={() => signIn("google")}
        //             type="button"
        //             className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        //         >
        //             <svg
        //                 className="mr-2 -ml-1 w-4 h-4"
        //                 aria-hidden="true"
        //                 focusable="false"
        //                 data-prefix="fab"
        //                 data-icon="google"
        //                 role="img"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 viewBox="0 0 488 512"
        //             >
        //                 <path
        //                     fill="currentColor"
        //                     d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        //                 ></path>
        //             </svg>
        //             Sign in with Google<div></div>
        //         </button>
        //     </div>
        // </div>
        <div className="text-[#01275C] m-10 mt-[50px] shadow-md bg-white rounded-xl  flex justify-center items-center flex-row ">
            <div className="flex flex-col w-2/4 h-full bg-white  ">
                <div className="text-[#01275C]  w-full flex item-center flex-col justify-center p-6">
                    <h1 className="text-[40px] ">All your files <br/>  in  one place</h1>
                    <p className="text-[#72A3E7]">Free file storage for everyone. Store your documents, music, image etc.</p>
                </div>

                <div className=" flex flex-col pl-6 gap-3  items-start justify-start rounded-md  ">
                    {/* <p
                        tabIndex={0}
                        role="heading"
                        aria-label="Login to continue"
                        className="text-2xl font-extrabold leading-6 flex flex-col  bg-red-400 items-center"
                    >
                        
                    </p> */}
                    <div className="text-[25px] font-extrabold leading-6 flex flex-col  items-center">
                        <h1>Start Uploading</h1>
                    </div>
                    <div>
                    <button
                        aria-label="Continue with google"
                        role="button"
                        onClick={() => signIn("google")}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border bg-[#266ED5] rounded-lg hover:bg-[#01275C] border-[#266ED5]  flex items-center "
                    >
                        <svg
                            width={19}
                            height={20}
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                                fill="#34A853"
                            />
                            <path
                                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                                fill="#EB4335"
                            />
                        </svg>
                        <p className="text ml-3 font-medium  text-white">
                            Continue with Google
                        </p>
                    </button>

                    </div>
                    
                </div>
            </div>
            <div className="w-fit h-full  pt-[-40px] rounded-lg">
            <Image
                className="h-full w-full rounded-br-lg rounded-tr-lg"
                src="/landing.png"
                alt="landing"
                width={700}
                height={550}
            />
                    
            </div>
            
        </div>
    );
};

export default LoginPage;
