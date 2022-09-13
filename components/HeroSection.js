const HeroSection = () => {
    return (
        <div className="bg-[url('../assets/images/heroBg.webp')] bg-blend-overlay bg-fixed w-full h-[80vh] bg-cover bg-no-repeat bg-left-bottom md:bg-center sm:mt-20 mt-16 scroll-smooth">
            <div className="container h-full flex items-center justify-center sm:px-0 px-4 mx-auto">
                <div className="bg-gradient-to-b from-[#FF7F4E] to-gray-600 w-full h-[80vh] opacity-75 z-10 absolute overflow-hidden"></div>
                <div className="w-max z-20">
                    <h1 className="text-white font-bold sm:text-[3.3rem] xs:text-[1.8rem] sm:leading-normal leading-8 text-[1.4rem] text-center drop-shadow-lg">
                        One stop solution for your bathroom interiors
                    </h1>
                    <p className="text-white mt-4 opacity-70 italic md:text-[1.4rem] sm:leading-normal leading-5 xs:text-[1rem] text-[0.9rem] text-center drop-shadow-md">
                        &quot;We would love to be a part of your journey and
                        build you a great looking bathroom&quot;
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
