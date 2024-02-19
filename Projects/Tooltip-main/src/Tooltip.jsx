import React, { useState } from "react";
import "./Tooltip.css"; // Import your CSS file for styling

const Tooltip = ({ text, position, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <div className={`tooltip ${position}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
