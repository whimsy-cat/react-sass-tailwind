import React from "react";

// import stylesheets
import "./buttons.scss";

interface ButtonProps {
  type: string;
  title: string;
}

const BtnBasic = ({ type, title }: ButtonProps) => {
  return (
    <div className="button">
      <button className={type}>{title}</button>
    </div>
  );
};

export default BtnBasic;
