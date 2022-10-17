import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AllProducts from "../components/AllProducts";
import useHamburger from "../hooks/useHamburger";
import client from "./api/api";

const Products = ({ products, categories }) => {
    const [isMenuOpen, handleToggle] = useHamburger();

    return (
        <>
            <NavBar isOpen={isMenuOpen} toggleMenu={handleToggle} />

            <div className="md:mt-20 mt-16">
                <AllProducts products={products} categories={categories} />
            </div>
            <Footer />
        </>
    );
};

export const getServerSideProps = async (context) => {
    let products = [];
    let categories = [];

    try {
        const query = `*[ _type == "product" ]`;
        const allProducts = await client.fetch(query);
        const categoryQuery = `*[ _type == "category" ]`;
        const allCategories = await client.fetch(categoryQuery);

        categories = allCategories;
        products = allProducts;
    } catch (err) {
        console.log(err);
    }

    return { props: { products, categories } };
};

export default Products;
