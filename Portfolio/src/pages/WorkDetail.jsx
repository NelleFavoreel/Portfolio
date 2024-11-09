import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
		<div className="work-detail">
			<h1>{item.Title}</h1>
			<img src={item.Img} alt={item.Title} />
			<p>{item.FullDescription}</p>
			<div className="info">
				<p>Year: {item.Year}</p>
				<p>Details: {item.Details}</p>
			</div>
		</div>
	);
}

export default WorkDetail;
