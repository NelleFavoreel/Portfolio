import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimationText from "../Components/AnimationTitle";
import Work from "../components/Work";
import Line from "../assets/line1.png";
import Line2 from "../assets/line2.png";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Layer1 from "../assets/Layer1.png";
import Layer2 from "../assets/Layer2.png";
import Layer3 from "../assets/Layer3.png";
import Box from "../assets/White.png";
import { useInView } from "react-intersection-observer";
import ProfilePicture from "../../public/assets/ProfilePicture.png";

function Home() {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
		console.log(window.pageYOffset);
	};
	const { ref, inView } = useInView({
		triggerOnce: true, // Zorg ervoor dat de component maar één keer wordt geobserveerd
		threshold: 0.3, // Zorg ervoor dat de component volledig in beeld is voordat de actie wordt uitgevoerd
	});
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<Parallax pages={5.2} className="project">
				<ParallaxLayer offset={0} speed={0} className="header">
					<div className="title">
						<h1>Nelle Favoreel</h1>
						<AnimationText />
					</div>
					<div className="profilePicture">
						<img src={ProfilePicture} alt="foto" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer className="lines" offset={0.8} speed={0.2}>
					<img src={Layer3} style={{ width: "120%" }} alt="Layer 3" />
				</ParallaxLayer>
				<ParallaxLayer className="lines" offset={0.72} speed={0.1}>
					<img src={Layer1} style={{ width: "100%" }} alt="Layer 1" />
				</ParallaxLayer>

				<ParallaxLayer className="lines" offset={0.71} speed={0.4}>
					<img src={Layer2} style={{ width: "100%" }} alt="Layer 2" />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.36}>
					<div className="profile">
						<h1>Profiel</h1>
						<div className="second">
							<div>
								<p>
									Mijn naam is Nelle, ik ben 20 jaar en studeer Multimedia aan de Erasmushogeschool Brussel. In mijn studie en persoonlijke projecten heb ik een sterke passie ontwikkeld voor zowel app- als webontwikkeling. Ik werk graag met
									technologieën zoals Swift voor het ontwikkelen van iOS-apps en met front-end tools zoals React en Vue voor moderne, interactieve websites.
								</p>
							</div>
							<div>
								<p>
									Ik ben continu op zoek naar nieuwe uitdagingen en mogelijkheden om mijn vaardigheden uit te breiden. Innovatie, creativiteit en een leergierige houding zijn kernwaarden die mij drijven om constant beter te worden in mijn vakgebied.
									Met een nieuwsgierige blik op de toekomst, kijk ik ernaar uit om mijn kennis verder te verdiepen en toe te passen in de snel veranderende wereld van technologie.
								</p>
							</div>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={4}>
					<img className="box" src={Box} alt="" />
				</ParallaxLayer>
				<ParallaxLayer offset={1.8} speed={0.4}>
					<div ref={ref} className={`work-visible ${inView ? "in-view" : ""}`}>
						{/* Werk alleen zichtbaar maken wanneer volledig in beeld */}
						{inView && <Work />}
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={3.8} speed={0.4}>
					<div className="education">
						<h1>Studies</h1>
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
				</ParallaxLayer>
				<ParallaxLayer offset={3.7} speed={0.4}>
					<Skills></Skills>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0.4}>
					<Contact />
					<div className="footer-container">
						<Footer />
						<img src={Layer1} alt="Background Layer" className="background-image" />
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default Home;
