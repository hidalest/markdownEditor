import React from "react";
import './Hamburger.scss'

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isActive, className }) => {
  const activeButton = isActive ? "active" : "";
  return (
    <button className={`hamburger ${className}`}>
      <span className="bar-1"></span>
      <span className="bar-2"></span>
      <span className="bar-3"></span>
    </button>
  );
};

interface HamburgerButtonProps {
  isActive: boolean,
  className: string
}

export default HamburgerButton;
