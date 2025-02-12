import React, { useState, useEffect } from "react";
import Logo from "../common/logo";

const LogoContainer = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(200); // Initial size
  const [oldLogoSize, setOldLogoSize] = useState(200);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset);

      // Reset to original size when at the top
      if (scroll === 0) {
        setLogoSize(200);
        setOldLogoSize(200);
        setStayLogo(false);
        return;
      }

      let newLogoSize = Math.max(50, 200 - scroll * 0.5);

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 50) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <div style={logoStyle}>
      <Logo width={logoSize} link={false} />
    </div>
  );
};

export default LogoContainer;
