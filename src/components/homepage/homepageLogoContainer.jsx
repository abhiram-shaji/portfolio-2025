import React from "react";
import Logo from "../common/logo";

const LogoContainer = () => {
  const logoStyle = {
    display: "flex",
    position: "relative",

  };

  return (
    <div style={logoStyle}>
      <Logo width={200} link={false} />
    </div>
  );
};

export default LogoContainer;
