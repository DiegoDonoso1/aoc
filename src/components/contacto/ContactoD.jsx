import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacto.css';

// eslint-disable-next-line react/prop-types
export default function ContactoD({ onFormSubmit }) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_fdafu5n',
				'template_65wef1p',
				form.current,
				'_EurKF-FOetxoo0Kp'
			)
			.then(
				(result) => {
					console.log(result.text);
					onFormSubmit();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
			<div className="mb-4">
				<label
					className="block text-gray-700 text-lg font-bold mb-2"
					htmlFor="user_name"
				>
					Nombre de quien envía
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					name="user_name"
					id="user_name"
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700  font-bold mb-2 text-lg"
					htmlFor="from_name"
				>
					Para quien es
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
					name="from_name"
					id="from_name"
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-lg font-semibold mb-2"
					htmlFor="message"
				>
					Mensaje
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					name="message"
					id="message"
					rows="5"
				></textarea>
			</div>
			<div className="mb-6">
				<button
					className="bg-pastel-lavender text-black hover:bg-pastel-pink font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Send
				</button>
			</div>
		</form>
	);
}
