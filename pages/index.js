import { useState } from "react";
import NavBar from "../components/NavBar";
import useHamburger from "../hooks/useHamburger";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurProductsSection from "../components/OurProductsSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import heroBg from "../assets/images/heroBg.webp";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [isMenuOpen, handleToggle] = useHamburger();
    return (
        <>
            <NavBar isOpen={isMenuOpen} toggleMenu={handleToggle} />
            <HeroSection />
            <OurProductsSection />
            <AboutSection />
            {/* <TestimonialSection /> */}
            <ContactSection />
            <Footer />
        </>
    );
}
