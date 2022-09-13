import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AllProducts from "../components/AllProducts";
import useHamburger from "../hooks/useHamburger";
import client from "./api/api";

const Products = ({ products }) => {
    const [isMenuOpen, handleToggle] = useHamburger();

    return (
        <>
            <NavBar isOpen={isMenuOpen} toggleMenu={handleToggle} />
            <div className="md:mt-20 mt-16">
                <AllProducts products={products} />
            </div>
            <Footer />
        </>
    );
};

export const getServerSideProps = async (context) => {
    let products = [];

    try {
        const query = `*[ _type == "product" ]`;
        const allProducts = await client.fetch(query);
        products = allProducts;
    } catch (err) {
        console.log(err);
    }

    return { props: { products } };
};

export default Products;
