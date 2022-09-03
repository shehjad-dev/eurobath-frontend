import React, { useContext, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const [selectedProduct, setSelectedProduct] = useState("dsa");

    return <Component {...pageProps} />;
}

export default MyApp;
