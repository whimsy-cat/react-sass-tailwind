import React from "react";

// import stylesheets
import "./home.scss";

// import components
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Carousel from "./Carousel";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import ContactForm from "./Contact";

// import store
import useStore from "../../useStore";

const Home = () => {
  const { name, update } = useStore();
  return (
    <div className="container">
      <Header name={name} />
      <Jumbotron />
      <Carousel />
      <Portfolio />
      <Pricing />
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
