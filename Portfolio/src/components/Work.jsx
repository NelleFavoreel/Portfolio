import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkData from "../../public/work.json";

function Work() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(WorkData);
	}, []);

	return (
		<div className="work-container">
			<h1>Mijn werk</h1>
			<div className="card-list">
				{data.map((item, index) => (
					<div key={item.Id} className={`card ${(index + 1) % 2 === 0 ? "card-right" : ""}`}>
						<img src={item.Img} alt={item.Title} />

						<div className="card-content">
							<h2>{item.Title}</h2>
							<p>{item.BasicDescription}</p>
							<Link to={`/Portfolio/work/${item.Id}`} className="details-link">
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
