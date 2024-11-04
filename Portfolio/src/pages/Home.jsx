import React from "react";
import { Link } from "react-router-dom";
import AnimationText from "../Components/AnimationTitle";
import Work from "../components/Work";

function Home() {
	return (
		<>
			<div className="title">
				<h1>Nelle Favoreel</h1>
				<AnimationText></AnimationText>
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
			<div>
				<Work></Work>
			</div>
		</>
	);
}

export default Home;
