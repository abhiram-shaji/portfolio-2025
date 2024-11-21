import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DeloitteNewSmall.png/220px-DeloitteNewSmall.png"
								alt="Deloitte"
								className="work-image"
							/>
							<div className="work-title">Deloitte Consulting</div>
							<div className="work-subtitle">
								Associate Analyst
							</div>
							<div className="work-duration">Jan 2022- Dec 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
