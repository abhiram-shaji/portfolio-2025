import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

const ReadArticle = () => {
        const navigate = useNavigate();
        const { slug } = useParams();

        const index = Number(slug) - 1;
        const articleFn = myArticles[index];

        useEffect(() => {
                window.scrollTo(0, 0);
                if (!articleFn) {
                        navigate("/404");
                }
        }, [articleFn, navigate]);

        if (!articleFn) {
                return null;
        }

        const ArticleStyle = styled.div`
                ${articleFn().style}
        `;

	return (
		<React.Fragment>
			<Helmet>
                                <title>{`${articleFn().title} | ${INFO.main.title}`}</title>
                                <meta name="description" content={articleFn().description} />
                                <meta name="keywords" content={articleFn().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
                                                                        {articleFn().date}
								</div>
							</div>

							<div className="title read-article-title">
                                                                {articleFn().title}
							</div>

							<div className="read-article-body">
                                                                <ArticleStyle>{articleFn().body}</ArticleStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
