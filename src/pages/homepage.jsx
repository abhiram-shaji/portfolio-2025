import React from "react";
import { Helmet } from "react-helmet";

// Common components
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

// Smaller homepage sections
import LogoContainer from "../components/homepage/homepageLogoContainer";
import Title from "../components/homepage/homepageTitle";
import Socials from "../components/homepage/homepageSocials";
import ProjectsSection from "../components/homepage/homepageProjectsSection";
import ArticleSection from "../components/homepage/homepageArticlesSection";
import WorksSection from "../components/homepage/homepageWorksSection";

// Data
import INFO from "../data/user";
import SEO from "../data/seo";

// CSS
import "./styles/homepage.css";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />

        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <LogoContainer />
          </div>

          <div className="homepage-container">
            {/* Title Section */}
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <Title />
              </div>
            </div>

            {/* Social Icons */}
            <Socials />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Articles & Works */}
            <div className="homepage-after-title">
              <ArticleSection />
              <WorksSection />
            </div>

            {/* Footer */}
            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
