import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/DetailWork.css";

import { Link } from "react-router-dom";

function WorkDetail() {
	const { id } = useParams(); // Haal het ID uit de URL
	const [item, setItem] = useState(null);

	useEffect(() => {
		fetch("/Portfolio/work.json") // Werk de fetch URL bij
			.then((response) => {
				// Controleer of de response een succesvolle status heeft
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				// Zoek het item met de bijbehorende ID
				const foundItem = data.find((workItem) => workItem.Id === parseInt(id, 10));
				setItem(foundItem);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [id]); // Herhaal de fetch wanneer het ID verandert

	if (!item) {
		return <div>Loading...</div>;
	}

	return (
		<div className="work-detail">
			<div className="work-title">
				<div className="infoText">
					<div>
						<Link to={`/`} className="Work-link">
							&lt; Ga terug
						</Link>
					</div>
					<div>
						<h1>{item.Title}</h1>
						<h3>{item.Description}</h3>
						<div className="info">
							<p>Jaar: {item.Year}</p>
							<p>Technologie: {item.Technologie}</p>
						</div>
						<a className="button" href={item.linkGithup}>
							Github link
						</a>
					</div>
				</div>
				<img src={item.Img} alt={item.Title} />
			</div>
			<p>{item.FullDescription}</p>

			<div className="under-pictures">
				<img src={item.Img1} alt="" />
				<img src={item.Img2} alt="" />
				<img src={item.Img3} alt="" />
			</div>
		</div>
	);
}

export default WorkDetail;
