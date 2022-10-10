import React from "react";
import useDragger from "../hooks/useDragger";

const PinkBox: React.FC = () => {
  
  useDragger("pink-box");

  return <div id="pink-box" className="box"></div>
};

export default PinkBox;