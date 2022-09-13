import Image from "next/image";
import Link from "next/link";
import demoLogo from "../assets/images/demoLogo.svg";

const Footer = () => {
    return (
        <div className="border-t-[1.3px] border-[#00AEEF] border-opacity-50 scroll-smooth">
            <footer className="container mx-auto pt-4 pr-4 pl-4 pb-0 sm:pt-6 sm:pr-6 sm:pl-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/">
                            <a className="flex items-center">
                                <Image
                                    src={demoLogo}
                                    alt="Logo of Eurobath"
                                    width={90}
                                    height={40}
                                />
                            </a>
                        </Link>
                        <div className="mt-4">
                            <div className="flex md:flex-row flex-col">
                                <div className="md:w-72 mb-4">
                                    <h3 className="text-blue-600 font-medium">
                                        Shop 1
                                    </h3>
                                    <address className="">
                                        <span className="font-medium">
                                            Euro Bath Address:
                                        </span>{" "}
                                        16/1 Bir Uttam C.R Datta Sarak,
                                        Hatirpool, Dhaka-1000.
                                    </address>
                                    <p>
                                        <span className="font-medium">
                                            Contact:
                                        </span>{" "}
                                        <a href="tel:+8801618600704">
                                            +88 01618600704
                                        </a>
                                    </p>
                                </div>
                                <div className="md:w-72 mb-4">
                                    <h3 className="text-blue-600 font-medium">
                                        Shop 2
                                    </h3>
                                    <address>
                                        <span className="font-medium">
                                            Eurobath Address:
                                        </span>{" "}
                                        81 Bir Uttam C.R Datta Sarak, Hatirpool,
                                        Dhaka-1205
                                    </address>
                                    <p>
                                        <span className="font-medium">
                                            Contact:
                                        </span>{" "}
                                        <a href="tel:+8801618600706">
                                            +88 01618600706
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col">
                                <div className="md:w-72 mb-4">
                                    <h3 className="text-blue-600 font-medium">
                                        Shop 3
                                    </h3>
                                    <address>
                                        <span className="font-medium">
                                            Eurobath Address:
                                        </span>{" "}
                                        41 Bir Uttam C.R Datta Sarak, Hatirpool,
                                        Dhaka-1205.
                                    </address>
                                    <p>
                                        <span className="font-medium">
                                            Contact:
                                        </span>{" "}
                                        <a href="tel:+8801618600710">
                                            +88 01618600710
                                        </a>
                                    </p>
                                </div>
                                <div className="md:w-72 mb-4">
                                    <h3 className="text-blue-600 font-medium">
                                        Shop 4
                                    </h3>
                                    <address>
                                        <span className="font-medium">
                                            S.N Trading Address:
                                        </span>{" "}
                                        68 Bir Uttam C.R Datta Sarak, Hatirpool,
                                        Dhaka-1205.
                                    </address>
                                    <p>
                                        <span className="font-medium">
                                            Contact:
                                        </span>{" "}
                                        <a href="tel:+8801618600701">
                                            +88 01618600701
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <p>
                            Shop 1: Euro Bath Address: 16/1 Bir Bttam C.R Datta
                            Sarak, Hatirpool, Dhaka-1000. Contact: +88
                            01618600704 Shop 2: Eurobath Address: 81 Bir Bttam
                            C.R Datta Sarak, Hatirpool, Dhaka-1205 Contact: +88
                            01618600706 Shop 3: Eurobath Address: 41 Bir Bttam
                            C.R Datta Sarak, Hatirpool, Dhaka-1205 Contact: +88
                            01618600710 Shop 4: S.N Trading Address: 68 Bir
                            uttam C.R Datta Sarak, Hatirpool, Dhaka-1205
                            Contact: +88 01618600701
                        </p> */}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:pr-4 pr-0 mb-4">
                        <div className="flex flex-col align-bottom justify-end">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Links
                            </h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="/#about">
                                        <a className="hover:text-blue-600 transition duration-75 ease-in-out transform">
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#contact">
                                        <a className="hover:text-blue-600 transition duration-75 ease-in-out transform">
                                            Contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col align-bottom justify-end">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Socials
                            </h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="/">
                                        <a className="hover:text-blue-600 transition duration-75 ease-in-out transform">
                                            Facebook
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="hover:text-blue-600 transition duration-75 ease-in-out transform">
                                            Instagram
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col align-bottom justify-end">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                CTA
                            </h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="/products">
                                        <a className="hover:text-blue-600 transition duration-75 ease-in-out transform">
                                            Products
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#testimonials">
                                        <a className="hover:text-blue-600 transition duration-75 ease-in-out transform">
                                            Testimonials
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="mt-6 mb-0 border-gray-200 sm:mx-auto lg:mt-8" />
            </footer>
            <div className="sm:flex sm:items-center sm:justify-between bg-[#FF7F4E] sm:p-6 p-4">
                <span className="text-sm sm:text-center text-white font-medium text-center flex items-center justify-center">
                    © 2022{" "}
                    <Link href="/">
                        <a className="text-white">Eurobath</a>
                    </Link>
                    . All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 justify-center sm:mt-0 items-center">
                    <a href="#" className="text-white hover:text-gray-900">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-white hover:text-gray-900">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
