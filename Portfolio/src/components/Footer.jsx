import React from "react";

// Import your social media icons here if they are in your project
// You can use Font Awesome, or any other icon library, or provide your own icons
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div>
					<h1>Nelle Favoreel</h1>
				</div>

				<div>
					<div className="social-icons">
						<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
							<FaInstagram />
						</a>
						<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a href="https://github.com/" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
						<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
							<FaTwitter />
						</a>
					</div>
					<p>© 2024 Nelle Favoreel</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
