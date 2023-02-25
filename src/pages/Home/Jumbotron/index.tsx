import React from "react";

// import stylesheets
import "./jumbotron.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="content">
        <h1>HALIFAX WORDPRESS & WEB APP DEVELOPMENT</h1>
        <h2>
          Specializing in custom theme development. If you're a business seeking
          a web presence or are looking to hire, contact me <span>here</span>
        </h2>
        <button className="content-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Jumbotron;
