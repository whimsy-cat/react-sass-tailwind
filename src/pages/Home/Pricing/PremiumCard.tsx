import React from "react";

// import stylesheets
import "./pricing.scss";

// import buttons
import Button from "../../../components/Buttons";

const PremiumCard = () => {
  return (
    <div className="premium-card">
      <h1>PREMIUM</h1>
      <h2>Website Audit</h2>
      <h2>Design</h2>
      <h2>Development</h2>
      <h2>Backups</h2>
      <h2>Analytics</h2>
      <h2>Live Chat</h2>
      <h2>Search Engine Optimization</h2>
      <h2>Content Management</h2>
      <h2>Maintenance Agreement</h2>
      <h2>eCommerce</h2>
      <h2>Email Setup</h2>
      <h2>Hosting</h2>
      <Button type="btn-premium" title="Request quote" />
    </div>
  );
};

export default PremiumCard;
