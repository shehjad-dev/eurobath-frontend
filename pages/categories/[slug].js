import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AllProducts from "../../components/AllProducts";
import useHamburger from "../../hooks/useHamburger";
import client from "../api/api";

const Categories = ({ products, categories }) => {
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
    const slug = context.query.slug;
    let products = [];
    let categories = [];
    if (!slug) {
        slug = null;
    } else if (slug) {
        try {
            const query = `*[_type == "product" && category._ref == '${slug}']`;
            const allProducts = await client.fetch(query);
            products = allProducts;
            const categoryQuery = `*[ _type == "category" ]`;
            const allCategories = await client.fetch(categoryQuery);

            categories = allCategories;
        } catch (err) {
            console.log(err);
        }
    }

    return { props: { products, categories } };
};

export default Categories;
