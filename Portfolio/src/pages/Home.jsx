import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimationText from "../Components/AnimationTitle";
import Work from "../components/Work";
import Line from "../assets/line1.png";
import Line2 from "../assets/line2.png";

function Home() {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="title">
				<h1>Nelle Favoreel</h1>
				<AnimationText />
			</div>
			<div className="profile">
				<h1>Profile</h1>
				<div className="second">
					<div>
						<h4>
							Mijn naam is Nelle, ik ben 20 jaar en studeer Multimedia aan de Erasmushogeschool Brussel. In mijn studie en persoonlijke projecten heb ik een sterke passie ontwikkeld voor zowel app- als webontwikkeling. Ik werk graag met technologieën
							zoals Swift voor het ontwikkelen van iOS-apps en met front-end tools zoals React en Vue voor moderne, interactieve websites.
						</h4>
					</div>
					<div>
						<h4>
							Ik ben continu op zoek naar nieuwe uitdagingen en mogelijkheden om mijn vaardigheden uit te breiden. Innovatie, creativiteit en een leergierige houding zijn kernwaarden die mij drijven om constant beter te worden in mijn vakgebied. Met
							een nieuwsgierige blik op de toekomst, kijk ik ernaar uit om mijn kennis verder te verdiepen en toe te passen in de snel veranderende wereld van technologie.
						</h4>
					</div>
				</div>
			</div>
			<img
				className="lineImg"
				src={Line}
				alt=""
				style={{
					transform: `translateY(${offsetY * -0.2}px)`,
				}}
			/>
			<div>
				<Work />
			</div>
			<div className="lineImg2-container">
				<img
					className="lineImg2"
					src={Line2}
					alt=""
					style={{
						transform: `translateY(${offsetY * -0.15}px)`,
					}}
				/>
			</div>
			<div className="education">
				<h1>Education</h1>
				<div className="schoolInfo">
					<div>
						<h3>Erasmushogeschool Brussel</h3>
					</div>
					<div>
						<h3>
							2020-heden <br /> Mutimedia & creatieve technologie
						</h3>
					</div>
				</div>
				<div className="schoolInfo">
					<div>
						<h3>ColomaPlus (Mechelen)</h3>
					</div>
					<div>
						<h3>
							2019-2020 <br /> Fotografie
						</h3>
					</div>
				</div>
				<div className="schoolInfo">
					<div>
						<h3>Paridaens (Leuven)</h3>
					</div>
					<div>
						<h3>
							2017-2019 <br /> Humane wetenschappen
						</h3>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
