"use client";

function SearchBar() {
    return (
        <div className="text-[#01275C]">
            <div className="flex gap-3  bg-white  text-[#01275C] p-2 rounded-[20px] items-center w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#01275C"
                    className="w-4 h-4 text-gray-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    onKeyDown={(e) =>
                        e.key == "Enter" && console.log(e.target.value)
                    }
                    className=" text-[#01275C] bg-transparent font-light  outline-none w-full text-[14px] "
                />
            </div>
        </div>
    );
}

export default SearchBar;
