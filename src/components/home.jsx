import React from "react";
import Faq from "./faq";
import Footer from "./footer";
import Intro from "./intro";
import Jumbotron from "./jumbotron";
import List from "./list";
import Navbar from "./navbar";
import Testimonial from "./testimonial";
import WhyUs from "./whyUs";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Intro registerPage/>
            <List/>
            <WhyUs/>
            <Testimonial/>
            <Jumbotron/>
            <Faq/>
            <Footer/>
        </>
    )
}

export default Home;