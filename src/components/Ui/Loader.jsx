import React from "react";
import "../../styles/loader.css";
const Loader = ({ height = "h-6", width = "w-6" }) => {
  return (
    <>
      <span className={`loader ${height} ${width}`}></span>
    </>
  );
};

export default Loader;
