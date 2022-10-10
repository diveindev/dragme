import React from "react";
import useDragger from "../hooks/useDragger";

const Circle: React.FC = () => {
  
  useDragger("circle");

  return <div id="circle" className="circle"></div>
};

export default Circle;