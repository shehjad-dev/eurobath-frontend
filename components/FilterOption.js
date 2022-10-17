import React from "react";
import Link from "next/link";

const FilterOption = ({ categories }) => {
    return (
        <div
            className={`px-3 py-2 border-2 border-blue-400 w-[15rem] mx-auto flex flex-col rounded-md absolute top-[50px] z-20 bg-white animate-fade-in-down`}
        >
            <ul className="flex flex-col gap-y-3 py-2">
                {categories != undefined && categories.length != 0 ? (
                    <>
                        {categories.map((item, index) => (
                            <Link href={`/categories/${item._id}`} key={index}>
                                <a className="px-3 py-2 hover:bg-gray-200 rounded-sm transition-all ease-in duration-100  w-full">
                                    {item.title}
                                </a>
                            </Link>
                        ))}
                    </>
                ) : (
                    <p>"No categories"</p>
                )}
            </ul>
        </div>
    );
};

export default FilterOption;
