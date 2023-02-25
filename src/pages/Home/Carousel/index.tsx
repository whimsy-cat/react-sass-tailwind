import React from "react";
import { useState } from "react";
// import stylesheets
import "./carousel.scss";
import ReactSimplyCarousel from "react-simply-carousel";

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	return (
		<div className="carousel">
			<ReactSimplyCarousel
				activeSlideIndex={activeSlideIndex}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={1}
				itemsToScroll={1}
				forwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						display: 'flex',
						transform: 'scaleY(1.8)',
						flexDirection: 'column',
						justifyContent: 'center',
						alignSelf: 'center',
						backgroundColor: 'white',
						border: 'none',
						borderRadius: '50%',
						color: '#DDD8F6',
						cursor: 'pointer',
						fontSize: '38px',
						fontWeight: '900',
						width: 30,
					},
					children: <span>{`>`}</span>,
				}}
				backwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						display: 'flex',
						transform: 'scaleY(1.8)',
						flexDirection: 'column',
						justifyContent: 'center',
						alignSelf: 'center',
						backgroundColor: 'white',
						border: 'none',
						borderRadius: '50%',
						color: '#DDD8F6',
						cursor: 'pointer',
						fontSize: '38px',
						fontWeight: '900',
						width: 35,
					},
					children: <span>{`<`}</span>,
				}}
				responsiveProps={[
					{
						itemsToShow: 3,
						itemsToScroll: 1,
						minWidth: 1000,
					},
				]}
				speed={400}
				easing="linear"
			>
				{/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
				<div className="carousel-wrapper">
					<div>svg's here</div>
					<h1>DESIGN + DEVELOPMENT</h1>
					<p>Clean, modern designs-optimized for performance search engines, and converting users to customers</p>
				</div>
				<div className="carousel-wrapper">
					<div>svg's here</div>
					<h1>CONTENT MANAGEMENT</h1>
					<p>Clean, modern designs-optimized for performance search engines, and converting users to customers</p>
				</div>
				<div className="carousel-wrapper">
					<div>svg's here</div>
					<h1>WEBSITE AUDITS</h1>
					<p>Clean, modern designs-optimized for performance search engines, and converting users to customers</p>
				</div>
				<div className="carousel-wrapper">
					<div>svg's here</div>
					<h1>ECOMMERCE</h1>
					<p>Clean, modern designs-optimized for performance search engines, and converting users to customers</p>
				</div>
				<div className="carousel-wrapper">
					<div>svg's here</div>
					<h1>ANALYTICS</h1>
					<p>Clean, modern designs-optimized for performance search engines, and converting users to customers</p>
				</div>
				<div className="carousel-wrapper">
					<div>svg's here</div>
					<h1>MOBILE-FRIENDLY</h1>
					<p>Clean, modern designs-optimized for performance search engines, and converting users to customers</p>
				</div>
			</ReactSimplyCarousel>
		</div >
	);
  return (
    <div className="carousel">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display: "flex",
            transform: "scaleY(1.8)",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            color: "#DDD8F6",
            cursor: "pointer",
            fontSize: "38px",
            fontWeight: "900",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            display: "flex",
            transform: "scaleY(1.8)",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            color: "#DDD8F6",
            cursor: "pointer",
            fontSize: "38px",
            fontWeight: "900",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 1000,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className="carousel-wrapper">
          <div>svg's here</div>
          <h1>DESIGN + DEVELOPMENT</h1>
          <p>
            Clean, modern designs-optimized for performance search engines, and
            converting users to customers
          </p>
        </div>
        <div className="carousel-wrapper">
          <div>svg's here</div>
          <h1>CONTENT MANAGEMENT</h1>
          <p>
            Clean, modern designs-optimized for performance search engines, and
            converting users to customers
          </p>
        </div>
        <div className="carousel-wrapper">
          <div>svg's here</div>
          <h1>WEBSITE AUDITS</h1>
          <p>
            Clean, modern designs-optimized for performance search engines, and
            converting users to customers
          </p>
        </div>
        <div className="carousel-wrapper">
          <div>svg's here</div>
          <h1>ECOMMERCE</h1>
          <p>
            Clean, modern designs-optimized for performance search engines, and
            converting users to customers
          </p>
        </div>
        <div className="carousel-wrapper">
          <div>svg's here</div>
          <h1>ANALYTICS</h1>
          <p>
            Clean, modern designs-optimized for performance search engines, and
            converting users to customers
          </p>
        </div>
        <div className="carousel-wrapper">
          <div>svg's here</div>
          <h1>MOBILE-FRIENDLY</h1>
          <p>
            Clean, modern designs-optimized for performance search engines, and
            converting users to customers
          </p>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
};

export default Carousel;
