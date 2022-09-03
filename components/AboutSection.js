import Image from "next/image";
import aboutImg from "../assets/images/aboutImg.jpg";

const AboutSection = () => {
    return (
        <section>
            {/* <div class="px-4 py-12 mx-auto container sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-red-300"> */}
            <div
                className="px-4 pt-12 md:pb-12 pb-0 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 md:scroll-mt-16 scroll-mt-14"
                id="about"
            >
                <div className="flex flex-wrap mx-auto max-w-7xl items-center justify-center">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div className="">
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="absolute top-0 rounded-full bg-blue-200 left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                                <div className="absolute rounded-full bg-blue-100 bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                <div className="relative">
                                    <Image
                                        src={aboutImg}
                                        alt="About Link Image"
                                        /* width={288}
                                        height={288} */
                                        className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                                    />
                                    {/* <img
                                        class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                                        alt="hero"
                                        src="/assets/images/placeholders/squareCard.png"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start lg:mt-0 mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="xl:mb-8 sm:mb-6 mb-4 text-xs font-bold tracking-widest text-[#FF7F4E] uppercase">
                            {" "}
                            We never compromise{" "}
                        </span>
                        <h1 className="xl:mb-8 sm:mb-[1rem] mb-[0.6rem] sm:text-4xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-5xl">
                            About Us
                        </h1>
                        <p className="xl:mb-8 sm:mb-[1rem] mb-[0.6rem] text-base leading-relaxed text-left text-gray-500">
                            We focus on your needs and your needs only. <br />{" "}
                            You deserve the perfect bathroom.
                        </p>
                        <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                            <div className="mt-3 rounded-lg sm:mt-0">
                                <button className="items-center block md:px-10 px-6 md:py-4 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    <a href="">About Us</a>
                                </button>
                            </div>
                            {/* <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    See features
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
