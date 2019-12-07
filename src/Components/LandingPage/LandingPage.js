import React from "react";
import Carousel from "./Carousel/Carousel";
import Heading from "./Header";
import Form from "./Newsletter";
import Redirect from "./Redirect";
import AboutApp from "./About";
import Author from "./Author";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Heading />
      <Carousel />
      <Redirect />
      <AboutApp />
      <Form />
      <Author />
      <Footer />
    </div>
  );
};

export default LandingPage;