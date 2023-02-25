import React from "react";

// import sub components
import BasicCard from "./BasicCard";
import StandardCard from "./StandardCard";
import PremiumCard from "./PremiumCard";

// import stylesheets
import "./pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-header">
        <h1>PRICING PER BUILD</h1>
      </div>
      <div className="pricing-cards">
        <BasicCard />
        <StandardCard />
        <PremiumCard />
      </div>
    </div>
  );
};

export default Pricing;
