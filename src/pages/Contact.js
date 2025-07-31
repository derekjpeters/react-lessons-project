import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
		setStatus("sending");

		const now = new Date().toLocaleString();
		const submission = { ...formData, time: now };

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				submission,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setStatus("success");
				setFormData({ name: "", email: "", title: "", message: "" });
			})
			.catch((error) => {
				console.error("EmailJS error", error);
				setStatus("error");
			});
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
			<h2 className="text-3xl font-bold mb-6 text-indigo-800">Contact Us</h2>

			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4"
			>
				{["name", "email", "title"].map((field) => (
					<div key={field}>
						<label className="block text-sm font-semibold text-gray-700 capitalize">
							{field}:
						</label>
						<input
							type={field === "email" ? "email" : "text"}
							name={field}
							value={formData[field]}
							onChange={handleChange}
							required
							className="w-full mt-1 p-2 border border-gray-300 rounded"
						/>
					</div>
				))}

				<div>
					<label className="block text-sm font-semibold text-gray-700">
						Message:
					</label>
					<textarea
						name="message"
						rows="4"
						value={formData.message}
						onChange={handleChange}
						required
						className="w-full mt-1 p-2 border border-gray-300 rounded"
					/>
				</div>

				{status === "sending" && <p className="text-blue-600">Sending...</p>}
				{status === "success" && (
					<p className="text-green-600 font-medium">✅ Message sent!</p>
				)}
				{status === "error" && (
					<p className="text-red-600 font-medium">
						❌ Something went wrong. Please try again.
					</p>
				)}

				<button
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
				>
					Send
				</button>
			</form>
		</div>
	);
}

export default Contact;
