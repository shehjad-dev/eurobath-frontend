const ContactSection = () => {
    return (
        <div
            className="md:scroll-mt-10 scroll-mt-10 md:px-28 border-t-[1.3px] border-[#00AEEF] border-opacity-50"
            id="contact"
        >
            <div className="text-center md:mt-16 mt-8 scroll-smooth">
                <h1 className="xl:mb-3 sm:mb-[1rem] mb-[0.6rem] sm:text-4xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-5xl">
                    Contact Us
                </h1>
            </div>
            <section className="text-gray-600 body-font relative md:mb-14 scroll-smooth">
                <div className="container px-5 md:py-10 py-6 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            /* src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" */
                            /* src="https://maps.google.com/maps?q=eurobath&t=&z=15&ie=UTF8&iwloc=&output=embed" */
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=81 Bir Uttam C.R Datta Sarak, Hatirpool, Dhaka-1205&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>

                        {/* style="filter: grayscale(1) contrast(1.2) opacity(0.4);" */}
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    81 Bir Uttam C.R Datta Sarak, Hatirpool,
                                    Dhaka-1205
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-500 leading-relaxed">
                                    support@eurobath.gmail.com
                                </a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">
                                    +8801618600706
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-[#FF7F4E] text-lg mb-1 font-medium title-font">
                            We are waiting for your message
                        </h2>
                        {/* <p className="leading-relaxed mb-5 text-gray-600">
                            Post-ironic portland shabby chic echo park, banjo
                            fashion axe
                        </p> */}
                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="phone"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        {/* <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button> */}
                        <button className="items-center block md:px-10 px-6 md:py-4 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <a href="" className="flex flex-row justify-center">
                                <span className="pr-2">Contact </span>
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
                            </a>
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            We will get back to you as soon as we can
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
