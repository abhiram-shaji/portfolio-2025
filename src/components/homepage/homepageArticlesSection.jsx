import React from "react";
import Article from "./article"; // Or wherever your Article component is
import myArticles from "../../data/articles";

const HomepageArticlesSection = () => {
  return (
    <div className="homepage-articles">
      {myArticles.map((article, index) => (
        <div className="homepage-article" key={index}>
          <Article
            date={article().date}
            title={article().title}
            description={article().description}
            link={`/article/${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default HomepageArticlesSection;
