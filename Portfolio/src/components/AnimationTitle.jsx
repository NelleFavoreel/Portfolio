import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

function AnimationText() {
	const words = ["Photographer", "Frontend Developer"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [fade, setFade] = useState(false); // State voor fade-in en fade-out

	const props = useSpring({
		opacity: fade ? 0 : 1,
		config: { duration: 500 },
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(true); // Start de fade-out
			setTimeout(() => {
				setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
				setFade(false); // Start de fade-in na het veranderen van het woord
			}, 500); // Duur van de fade-out
		}, 2000); // Verander elke 2 seconden

		return () => clearInterval(interval);
	}, []);

	return <animated.h2 style={props}>{words[currentWordIndex]}</animated.h2>;
}

export default AnimationText;
