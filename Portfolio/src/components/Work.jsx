import React, { useState, useEffect } from "react";

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
		<>
			<div className="carts">
				<div className="content">
					<h1>Work</h1>
					<ul className="card-list">
						{data.map((item) => (
							<li key={item.Id} className="card">
								<span>
									<div className="content">
										<h2>{item.Title}</h2>
										<img src={item.Img} alt="" />
										<p>{item.BasicDescription}</p>
										<div className="info">
											<p>{item.Year}</p>
											<p>{item.Details}</p>
										</div>
									</div>
								</span>
							</li>
						))}
					</ul>
					<h4>Zie meer</h4>
				</div>
			</div>
		</>
	);
}

export default Work;
