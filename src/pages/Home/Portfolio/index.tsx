import React from "react";

// import sub components
import PortfolioDefault from "./PortfolioDefault";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <PortfolioDefault
        screen="portfolio1.png"
        title="Agyle Intelligence"
        badge="2019"
        description="A platform for automating data collection and reporting throughout teams, operations and supply chains."
        design={true}
      />
      <PortfolioDefault
        screen="portfolio2.png"
        title="Hal-Con"
        badge="2015"
        description="A platform for automating data collection and reporting throughout teams, operations and supply chains."
        design={false}
      />
      <PortfolioDefault
        screen="portfolio3.png"
        title="Lady Slipper Cottages"
        badge="2015"
        description="Cottage rentals in Lady Slipper, Prince Edward Island."
        design={false}
      />
      <PortfolioDefault
        screen="portfolio4.png"
        title="Tweetmap"
        badge="2014"
        description="A web app that lets users view who is tweeting nearby. Using geocode data, each tweet is pinned on a map where it originated."
        design={false}
      />
    </div>
  );
};

export default Portfolio;
