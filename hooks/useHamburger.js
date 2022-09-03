import { useState } from "react";

const useHamburger = (resetInterval = null) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    };

    return [isOpen, toggleMenu];
};

export default useHamburger;
