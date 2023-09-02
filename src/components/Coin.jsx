import { useState } from 'react';
import cara from '../assets/img/cara.png';
import sello from '../assets/img/sello.png';
import moneda from '../assets/img/coin.svg';
import '../App.css'; // Asegúrate de importar tu archivo CSS global

const Coin = () => {
	const [spinning, setSpinning] = useState(false);
	const [result, setResult] = useState(null);

	const flipCoin = () => {
		setSpinning(true);
		setResult(null);

		setTimeout(() => {
			const randomSide = Math.random() < 0.5 ? 'cara' : 'sello';
			setSpinning(false);
			setResult(randomSide);
		}, 2000); // Cambia este valor para controlar la duración de la animación.
	};

	return (
		<div className="flex flex-col items-center mt-0 md:mt-12">
			<div className=" md:w-6/12 flex flex-col  items-center ">
				<img src={moneda} alt="" className="w-24 pb-4 " />
				<h2 className="text-xl text-center">
					Tuviste, tienes y tendrás decisiones difíciles, pero no te juzgues
					tanto por tus elecciones, lo haces lo mejor que puedes, te equivocaras
					y acertaras, en ocasiones solo se puede saltar y tener fe. Y cuando no
					se pueda te dejo esta moneda y que sea lo que el azar y el destino
					decidan.
				</h2>
			</div>
			<div className={`mt-4 relative w-32 h-32 coin-container `}>
				{spinning && (
					<div className={`coin-spin w-full h-full absolute animate-flip-coin`}>
						<img src={sello} alt="Cara" className={`coin-image`} />
					</div>
				)}
			</div>

			{result && (
				<div className="md:mt-4 mt-0 text-2xl font-bold  text-center">
					<img src={result == 'cara' ? cara : sello} alt="" className="w-32" />
					<p>{result === 'cara' ? 'Cara' : 'sello'}</p>
				</div>
			)}

			<button
				onClick={flipCoin}
				disabled={spinning}
				className={`bg-pastel-lavender mt-4 text-black hover:bg-pastel-pink font-bold py-2 px-4 rounded ${
					spinning ? 'cursor-not-allowed' : ''
				}`}
			>
				Lanzar moneda
			</button>
		</div>
	);
};

export default Coin;
