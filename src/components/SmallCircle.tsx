import React from "react";
import useDragger from "../hooks/useDragger";

const SmallCircle: React.FC = () => {
  
  useDragger("small-circle");

  return <div id="small-circle" className="small-circle"></div>
};

export default SmallCircle;