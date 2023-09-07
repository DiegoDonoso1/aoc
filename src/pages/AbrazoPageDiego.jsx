// AbrazoVirtual.js
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import abrazo from '../assets/img/penguin.svg';
import carta from '../assets/img/carta.svg';
import ContactoD from '../components/contacto/ContactoD';

const AbrazoVirtualD = () => {
	const [abrazoEnviado, setAbrazoEnviado] = useState(false);

	// Función que se llama cuando se completa el envío del formulario
	const handleContactFormSubmit = () => {
		setAbrazoEnviado(true);
	};

	useEffect(() => {
		const stateMessage = document.getElementById('state-message');

		setTimeout(() => {
			stateMessage.innerHTML = '&nbsp;';
		}, 6000);
	}, []);

	return (
		<main className="flex flex-col md:flex-row items-center justify-center mt-0 md:mt-24">
			<div className="md:w-1/2 p-4 flex flex-col items-center justify-center">
				<h2>Diego</h2>
				<img src={carta} alt="carta_icon" className="w-24 " />
				<h2 className="text-center mb-10 font-semibold text-xl ">
					Hay momentos donde solo se necesita un abrazo y algún mensaje, este
					formulario guardara esas ocasiones y las enviara a una cuenta para
					recordarlas. También se pueden expresar lo que se crea conveniente.
				</h2>

				{abrazoEnviado ? (
					// Muestra el contenido de abrazo una vez que abrazoEnviado es true
					<>
						<h1 className="text-4xl mt-8 mb-10">Enviando abrazo virtual</h1>
						<div>
							<img id="me" src={abrazo} alt="" className="mt-8 mb-14" />
						</div>
						<Loading />
						<h2
							id="result"
							className={`mt-8 mb-10 text-2xl ${
								abrazoEnviado ? '' : 'invisible'
							}`}
						>
							Abrazo enviado!
						</h2>
					</>
				) : (
					<ContactoD onFormSubmit={handleContactFormSubmit} />
				)}
			</div>
		</main>
	);
};

export default AbrazoVirtualD;
