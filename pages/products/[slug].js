import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import useHamburger from "../../hooks/useHamburger";
import client from "../api/api";
import SingleProduct from "../../components/singleProduct";

const MyProduct = ({ product }) => {
    const [isMenuOpen, handleToggle] = useHamburger();
    const [selectedProduct, setSelectedProduct] = useState(product);

    const [selectedImage, setSelectedImage] = useState(
        product.images[0].asset._ref
    );

    return (
        <div>
            <NavBar isOpen={isMenuOpen} toggleMenu={handleToggle} />
            {selectedProduct && (
                <SingleProduct
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            )}

            <Footer />
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const slug = context.query.slug;
    let product = {};
    if (!slug) {
        slug = null;
    } else if (slug) {
        try {
            const query = `*[ _type == "product" && slug.current=='${slug}']{ _id, name, slug {current}, _createdAt, description, images, category->{_id, slug {current}, title}, sub_category->{_id, slug, title}}`;

            const url = `https://ogzxacki.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;

            const directProduct = await client.fetch(query);
            product = directProduct[0];
        } catch (err) {
            console.log(err);
        }
    }

    return { props: { product } };
};

export default MyProduct;
