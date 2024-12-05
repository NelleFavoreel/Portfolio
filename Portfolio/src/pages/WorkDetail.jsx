import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/DetailWork.css";
import { Link } from "react-router-dom";

function WorkDetail() {
	const { id } = useParams(); // Get the ID from the URL
	const [item, setItem] = useState(null);

	useEffect(() => {
		fetch("/work.json")
			.then((response) => response.json())
			.then((data) => {
				// Find the item with the matching ID
				const foundItem = data.find((workItem) => workItem.Id === parseInt(id, 10));
				setItem(foundItem);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, [id]);

	if (!item) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="work-detail">
				<Link to={`/`} className="Work-link">
					Ga terug
				</Link>
				<div className="work-title">
					<div>
						<h1>{item.Title}</h1>
						<h3>{item.Description}</h3>
						<div className="info">
							<p>Jaar: {item.Year}</p>
							<p>Technologie: {item.Technologie}</p>
						</div>
						<button>{item.linkGithup} Githup Link</button>
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
		</>
	);
}

export default WorkDetail;
