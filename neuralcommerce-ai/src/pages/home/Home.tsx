import React from "react";
import styles from './Home.module.scss';
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";
import Capabilities from "../../components/sections/capabilities/Capabilities";
import Engine from "../../components/sections/engine/Engine";
import Enterprise from "../../components/sections/enterprise/Enterprise";
import Hero from "../../components/sections/hero/Hero";
import Pricing from "../../components/sections/pricing/Pricing";

const Home = () => {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                <Hero />
                <Capabilities />
                <Engine />
                <Enterprise />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}

export default Home