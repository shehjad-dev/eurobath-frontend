import Image from "next/image";
import Link from "next/link";
import featuredOne from "../assets/images/featuredOne.jpg";
import featuredTwo from "../assets/images/featuredTwo.jpg";
import featuredThree from "../assets/images/featuredThree.jpg";
import featuredFour from "../assets/images/featuredFour.jpg";

const OurProductsSection = () => {
    return (
        <div className="mb:pb-16 pb-4 border-t-[1.2px] md:pt-10 pt-2 scroll-smooth border-b-[1.3px] border-[#00AEEF] border-opacity-50">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10 md:px-28">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <p className="xl:mb-8 sm:mb-6 mb-4 text-xs font-bold tracking-widest text-[#FF7F4E] uppercase">
                                Top Grossing
                            </p>
                            {/* <p className="text-xl leading-5 text-gray-600">
                                Top Grossing
                            </p> */}
                            <h1 className="xl:mb-8 sm:mb-[1rem] mb-[0.6rem] sm:text-4xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-5xl">
                                Products
                            </h1>
                            {/* <h1 className="text-3xl xl:text-4xl font-bold leading-7 xl:leading-9 text-gray-800">
                                Shop By Category
                            </h1> */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 w-full">
                            <div className="relative flex justify-center items-start h-full w-full">
                                <Image
                                    src={featuredOne}
                                    alt="Featured Product Img 1"
                                    /* width={288}
                                        height={288} */
                                    className="object-center object-cover h-full w-full"
                                />
                                {/* <img
                                    className="object-center object-cover h-full w-full"
                                    src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
                                    alt="girl-image"
                                /> */}
                                {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                                    Women
                                </button> */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="relative flex justify-center items-start h-full w-full">
                                    <Image
                                        src={featuredThree}
                                        alt="Featured Product Img 1"
                                        /* width={288}
                                        height={288} */
                                        className="object-center object-cover h-full w-full"
                                    />
                                    {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                                        Shoes
                                    </button> */}
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                                <div className="relative flex justify-center items-end h-full w-full">
                                    <Image
                                        src={featuredTwo}
                                        alt="Featured Product Img 1"
                                        /* width={288}
                                        height={288} */
                                        className="object-center object-cover h-full w-full"
                                    />
                                    {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                                        Watches
                                    </button> */}
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                            </div>
                            <div className="relative justify-center items-start h-full w-full flex md:mt-0 mt-4">
                                <Image
                                    src={featuredFour}
                                    alt="Featured Product Img 1"
                                    /* width={288}
                                        height={288} */
                                    className="object-center object-cover h-full w-full"
                                />
                                {/*  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                                    Women
                                </button> */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                        </div>

                        <div className="mt-3 rounded-lg sm:mt-0">
                            <a
                                className="items-center block md:px-10 px-6 md:py-4 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                                href={"/products"}
                            >
                                <span className="flex flex-row">
                                    <div className="flex flex-row">
                                        <span className="pr-2">
                                            See All Products{" "}
                                        </span>
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
            </div>
        </div>
    );
};

export default OurProductsSection;
