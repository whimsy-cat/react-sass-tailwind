import React from "react";

// import stylesheets
import "./pricing.scss";

// import buttons
import Button from "../../../components/Buttons";

const BasicCard = () => {
  return (
    <div className="basic-card">
      <h1>BASIC</h1>
      <h2>Website Audit</h2>
      <h2>Design</h2>
      <h2>Development</h2>
      <Button type="btn-basic" title="Request quote" />
    </div>
  );
};

export default BasicCard;
