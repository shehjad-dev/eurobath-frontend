import Image from "next/image";
import Link from "next/link";
import demoLogo from "../assets/images/demoLogo.svg";
import MobileMenu from "./MobileMenu";

const NavBar = ({ isOpen, toggleMenu }) => {
    return (
        <div className="scroll-smooth">
            <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full sm:h-20 h-16 z-30 top-0 left-0 shadow-md">
                <div className="container flex flex-wrap justify-between items-center mx-auto overflow-hidden">
                    <Link href="/">
                        <a className="flex items-center">
                            <Image
                                src={demoLogo}
                                alt="Logo of Eurobath"
                                width={120}
                                height={50}
                            />
                        </a>
                    </Link>
                    <div className="flex md:order-2">
                        {/* <button
                            type="button"
                            className="text-white bg-[#FF7F4E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transtion ease-in duration-100"
                        > */}{" "}
                        <Link href={"/products"}>
                            <a className="text-white bg-[#FF7F4E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 transtion ease-in duration-100">
                                Products
                            </a>
                        </Link>
                        {/* </button> */}
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <Link href="/#about">
                                    <a className="block py-2 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact">
                                    <a className="block py-2 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {isOpen && (
                        <MobileMenu toggleMenu={toggleMenu} isOpen={isOpen} />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
