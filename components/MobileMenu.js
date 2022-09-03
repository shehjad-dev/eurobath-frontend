import Link from "next/link";

const MobileMenu = ({ toggleMenu, isOpen }) => {
    return (
        <div className="bg-white shadow-md absolute top-14 left-0 w-full sm:hidden animate-fade-in-down text-sm z-30 scroll-smooth">
            <li className="mx-4 my-6 list-none">
                <Link href="/#about">
                    <a
                        className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium block"
                        onClick={() => toggleMenu(!isOpen)}
                    >
                        About
                    </a>
                </Link>
            </li>
            <li className="mx-4 my-6 list-none">
                <Link href="/#contact">
                    <a
                        className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium block"
                        onClick={() => toggleMenu(!isOpen)}
                    >
                        Contact
                    </a>
                </Link>
            </li>
        </div>
    );
};

export default MobileMenu;
