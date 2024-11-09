import React from "react";

const Contact = () => {
	return (
		<div className="contact-section">
			<div className="contact-info">
				<h1>Contact</h1>
				<p>
					<strong>Email:</strong> Nelle.favoreel@hotmail.com
				</p>
				<p>
					<strong>GSM:</strong> +32 472 87 30 51
				</p>
				<p>
					<strong>Moedertaal:</strong> Nederlands
				</p>
				<p>
					<strong>Adres:</strong> Bruineveld 96 <br /> 3010 Kessel-Lo
				</p>
			</div>

			<div className="contact-form">
				<h1>Stuur mij</h1>
				<form>
					<label>Email:</label>
					<input type="email" placeholder="Uw email" required />
					<label>Bericht:</label>
					<textarea placeholder="Uw bericht" required></textarea>
					<button type="submit">Verzenden</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
