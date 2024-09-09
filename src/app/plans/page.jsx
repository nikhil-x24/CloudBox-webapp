import React from "react";

const PlansPage = () => {

    return (
        <section className=" text-[#01275C] select-none body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-[#01275C] text-[#a6adba]">
                        Pricing
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#01275C] text-[#8b919d]">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical.
                    </p>
                    <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                        <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                            Monthly
                        </button>
                        <button className="py-1 px-4 focus:outline-none">
                            Annually
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* Free Account */}
                    <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 hover:border-[#01275C] border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                START
                            </h2>
                            <h1 className="text-5xl text-[#01275C] text-gray-400 pb-4 mb-4 border-b border-gray-200 leading-none">
                                Free
                            </h1>
                            <p className="flex items-center  text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Free 100 MB storage
                            </p>
                            <p className="flex items-center ] text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center  justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Create multiple folders
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Login with google
                            </p>
                            <button className="flex items-center mt-auto  text-white bg-[#01275C] border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                Current
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-auto"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="text-xs text-gray-500 mt-3">
                                You are currently using free account.
                            </p>
                        </div>
                    </div>
                    {/* Pro account */}
                    <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                                POPULAR
                            </span>
                            <h2 className="text-sm text-indigo-500 tracking-widest title-font mb-1 font-medium">
                                PRO
                            </h2>
                            <h1 className="text-5xl text-indigo-500  leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$5</span>
                                <span className=" text-indigo-500 text-lg ml-1 font-normal ">
                                    /mo
                                </span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Upto 1 GB storage
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Star important files
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Recover deleted files from trash
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                1 GB backup storage
                            </p>
                            <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                                Buy
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-auto"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="text-xs text-gray-500 mt-3">
                                75% users are using <b>Pro</b> account.
                            </p>
                        </div>
                    </div>
                    {/* Business account */}
                    <div className="p-4 hover:border-black  xl:w-1/3 md:w-1/2 w-full">
                        <div className="h-full hover:border-black p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 className="text-sm text-black tracking-widest title-font mb-1 font-medium">
                                BUSINESS
                            </h2>
                            <h1 className="text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$56</span>
                                <span className="text-lg  text-black ml-1 font-normal ">
                                    /mo
                                </span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Upto 100 GB storage
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Multi account login
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                Family account
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                10 GB backup storage
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        className="w-3 h-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>
                                High speed upload & download speed
                            </p>
                            <button className="flex bg-black items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                Buy
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 ml-auto"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="text-xs text-gray-500 mt-3">
                                Comming soon.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default PlansPage;
