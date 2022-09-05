import React, { useEffect } from "react";
import PortableText from "react-portable-text";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const singleProduct = ({
    selectedProduct,
    setSelectedProduct,
    selectedImage,
    setSelectedImage,
}) => {
    const imageBuilder = imageUrlBuilder({
        baseUrl: "https://cdn.sanity.io",
        projectId: "ogzxacki",
        dataset: "production",
        token: "skFqdfoQprme7pMMehmFquJFNQEiOaPfycNBVcutXUa75dJr7FjY9yuZAs4MMZobcC3fCPa42XB2QNhxu6rURXueTLESZly3XrxIET04X44bf5ctAZpwtw61oC6pLqmWaEwcVjSr8aeAhx60EF6AsGvbWt26HUTTowzbi0qLyaDTc1aq0Ju7", // or leave blank for unauthenticated usage
        useCdn: true,
    });

    const urlFor = (source) => imageBuilder.image(source);
    return (
        <>
            <div className="flex flex-row md:container md:pt-8 pt-6 items-center md:pl-28 pl-4 mt-20 md:text-base text-[0.75rem]">
                <span>
                    <Link href="/products">
                        <a className="font-semibold mr-1 cursor-pointer">
                            Products
                        </a>
                    </Link>
                </span>
                <span className="mr-1">{" / "}</span>
                {selectedProduct.category.title !== null && (
                    <>
                        <span> {selectedProduct.category.title}</span>
                        <span className="mr-1">{" / "}</span>
                    </>
                )}
                {selectedProduct.sub_category !== null && (
                    <>
                        <span> {selectedProduct?.sub_category?.title}</span>
                        <span className="mr-1">{" / "}</span>
                    </>
                )}

                <span> {selectedProduct.name}</span>
            </div>
            <div className="">
                <div className="flex md:flex-row flex-col container md:pt-4 pt-3 mb-9 md:items-start md:w-max mx-auto items-center">
                    <div className="w-[50%] flex md:items-start items:center flex-col md:mr-16 mr-0">
                        <div className="flex items-center justify-center shadow-xl">
                            <img
                                src={`${urlFor(selectedImage)
                                    .width(300)
                                    .url()}`}
                                className="md:w-[20rem] md:h-[25rem] w-[35rem] object-center object-cover"
                            />
                        </div>

                        <div className="flex items-start mt-6">
                            {selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`${urlFor(image?.asset._ref)
                                        .width(300)
                                        .url()}`}
                                    className={`w-20 cursor-pointer h-28 object-center object-cover mr-2 border-2 ${
                                        selectedImage === image.asset._ref
                                            ? "border-blue-300"
                                            : "border-white"
                                    } rounded-md`}
                                    onClick={() =>
                                        setSelectedImage(image.asset._ref)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col md:ml-16 ml-0 md:w-96 md:mt-0 mt-4 w-full md:p-0 p-4">
                        <div className="bg-[#a8e4fa] py-1.5 px-6 rounded-full w-max mb-2">
                            <p className="text-xs text-blue-600">
                                <span className="font-semibold">Category:</span>{" "}
                                {selectedProduct.category === null
                                    ? "N/A"
                                    : selectedProduct.category.title}
                            </p>
                        </div>
                        <div className="bg-[#a8e4fa] py-1.5 px-6 rounded-full w-max">
                            <p className="text-xs text-blue-600">
                                <span className="font-semibold">
                                    Sub Category:
                                </span>{" "}
                                {selectedProduct.sub_category === null
                                    ? "N/A"
                                    : selectedProduct.sub_category.title}
                            </p>
                        </div>

                        <div className="text-xl font-bold text-neutral-600 mt-14">
                            {selectedProduct.name}
                        </div>
                        {/* <p className="mt-4">
                            {selectedProduct.description[0]?.children[0]?.text}
                        </p> */}
                        {selectedProduct.description !== null && (
                            <PortableText
                                content={selectedProduct.description}
                                serializers={{
                                    li: ({ children }) => (
                                        <li className="list-disc ml-4">
                                            {children}
                                        </li>
                                    ),
                                }}
                            />
                        )}

                        <a
                            className="items-center block text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer mt-16 md:px-10 px-6 md:py-4 py-2"
                            href={"/#contact"}
                        >
                            <span className="flex flex-row items-center justify-center">
                                <div className="flex flex-row justify-center">
                                    <span className="pr-2">Inquiry</span>
                                    <span className="w-3 h-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default singleProduct;
