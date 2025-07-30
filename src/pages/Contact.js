import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		title: "",
		message: "",
	});

	const [status, setStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const now = new Date().toLocaleString();
		const submission = { ...formData, time: now };

		setStatus("sending");

		console.log("Sending with EmailJS:", {
			service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
			template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
			publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
		});

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				submission,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)

			.then(() => {
				setStatus("success");
				setFormData({ name: "", email: "", title: "", message: "" });
			})

			.catch((error) => {
				console.log("EmailJS error", error);
				setStatus("error");
			});
	};

	return (
		<div>
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit} className="contact-form">
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>

				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<label>Subject:</label>
				<input
					type="text"
					name="title"
					value={formData.title}
					onChange={handleChange}
					required
				/>

				<label>Message:</label>
				<textarea
					name="message"
					rows="4"
					value={formData.message}
					onChange={handleChange}
					required
				/>

				{status === "sending" && <p>Sending...</p>}
				{status === "success" && (
					<p className="success-msg">✅ Message sent!</p>
				)}
				{status === "error" && (
					<p className="error-msg">
						❌ Something went wrong. Please try again.
					</p>
				)}

				<button type="submit">Send</button>
			</form>
		</div>
	);
}
export default Contact;
