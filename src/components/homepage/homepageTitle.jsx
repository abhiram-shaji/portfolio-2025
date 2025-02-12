import React from "react";
import INFO from "../../data/user";

const HomepageTitle = () => {
  return (
    <>
      <div className="title homepage-title">{INFO.homepage.title}</div>
      <div className="subtitle homepage-subtitle">
        {INFO.homepage.description}
      </div>
    </>
  );
};

export default HomepageTitle;
