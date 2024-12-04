import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Work() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/work.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => setData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="work-container">
			<h1>Work</h1>
			<div className="card-list">
				{data.map((item, index) => (
					<div key={item.Id} className={`card ${(index + 1) % 2 === 0 ? "card-right" : ""}`}>
						{/* Zwarte vlak voor de afbeelding */}
						<img src={item.Img} alt="" />

						{/* Paarse vlak voor de tekst */}
						<div className="card-content">
							<h2>{item.Title}</h2>
							<p>{item.BasicDescription}</p>
							<Link to={`/work/${item.Id}`} className="details-link">
								&gt;
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Work;
