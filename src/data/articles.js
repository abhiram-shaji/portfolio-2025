import React from "react";

function article_1() {
	return {
		date: "12 Feb 2025",
		title: "The Future of Full-Stack Development",
		description:
			"Full-stack development is evolving rapidly with new technologies like AI and cloud computing. Discover the trends shaping the industry.",
		keywords: [
			"Full-Stack Development Trends",
			"Web Development 2025",
			"Modern Web Technologies",
			"Future of Full-Stack Development",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid blue;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">The landscape of full-stack development is shifting with AI-driven automation, low-code platforms, and serverless architectures. Developers must stay ahead by mastering frameworks like Next.js, integrating AI APIs, and leveraging cloud-native solutions.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}



const myArticles = [article_1];

export default myArticles;
