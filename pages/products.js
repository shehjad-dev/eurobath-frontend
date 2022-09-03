import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AllProducts from "../components/AllProducts";
import useHamburger from "../hooks/useHamburger";

const Products = () => {
    const [isMenuOpen, handleToggle] = useHamburger();

    return (
        <>
            <NavBar isOpen={isMenuOpen} toggleMenu={handleToggle} />
            <div className="md:mt-20 mt-16">
                <AllProducts />
            </div>
            <Footer />
        </>
    );
};

export default Products;
