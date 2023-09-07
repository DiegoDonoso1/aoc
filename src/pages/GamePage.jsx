import { useState, useEffect } from 'react';
import avion from '../assets/img/avion.png';
import suerte from '../assets/img/lucky.svg';

import '../App.css';

function Game() {
	const [montoInicial, setMontoInicial] = useState('');
	const [monto, setMonto] = useState(0);
	const [saldo, setSaldo] = useState(10000);
	const [multiplicador, setMultiplicador] = useState(0);
	const [jugando, setJugando] = useState(false);
	const [juegoTerminado, setJuegoTerminado] = useState(false);
	const [saldoGanado, setSaldoGanado] = useState(0);
	const [mensaje, setMensaje] = useState('');

	useEffect(() => {
		let interval;

		if (jugando) {
			const duracionReal = Math.floor(Math.random() * 8000) + 2000; // Entre 2 y 10 segundos

			interval = setInterval(() => {
				const random = Math.random();
				const nuevoMultiplicador = random < 0.5 ? 0.6 : 0.5;
				setMonto((prevMonto) => prevMonto + prevMonto * nuevoMultiplicador);
				setMultiplicador(nuevoMultiplicador);
			}, 500); // Intervalo de 500 ms para actualizar el monto

			setTimeout(() => {
				clearInterval(interval);

				if (jugando && !juegoTerminado) {
					const gananciaActual = monto * multiplicador;
					setSaldoGanado(saldoGanado + gananciaActual);
				}
				setJugando(false);
			}, duracionReal);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [jugando, juegoTerminado, saldo, saldoGanado, monto, multiplicador]);

	const empezarJuego = () => {
		const montoInicialNumero = parseInt(montoInicial, 10);

		if (!isNaN(montoInicialNumero) && montoInicialNumero > 0) {
			if (montoInicialNumero <= saldo) {
				setSaldo(saldo - montoInicialNumero);
				setMonto(montoInicialNumero);
				setMontoInicial('');
				setJugando(true);
				setJuegoTerminado(false);
				setMensaje('');
			} else {
				alert('No tienes saldo suficiente para realizar esta apuesta.');
			}
		} else {
			alert('Ingresa un monto válido mayor que cero.');
		}
	};

	const retirarSaldo = () => {
		if (jugando) {
			const gananciaActual = monto;
			const nuevoSaldo = saldo + gananciaActual;
			setSaldo(nuevoSaldo);
			setJugando(false);

			if (nuevoSaldo > montoInicial) {
				setMensaje(
					`¡Ganaste $${gananciaActual.toFixed(
						0
					)} al retirar el saldo antes de perder!`
				);
			} else {
				setMensaje('Perdiste porque no pudiste retirar el saldo a tiempo.');
			}
		}
	};

	return (
		<div className=" flex flex-col items-center mt-0 md:mt-14 ">
			<img src={suerte} alt="" className="w-24 pb-10 " />
			<h2 className="text-center text-xl md:mb-4">
				Tal vez no sea el original y no dará dinero real pero siempre podrás
				canjear cualquiera de las opciones disponibles
			</h2>
			<h1 className="text-4xl mb-4">Monto actual: ${monto.toFixed(0)}</h1>
			<h2 className="text-2xl mb-4">Saldo: ${saldo.toFixed(0)}</h2>
			<div className="avion-container w-96 h-96 relative">
				<img
					src={avion}
					alt="Avión"
					className={`avion absolute bottom-0 left-0 transition-transform ${
						jugando ? 'animate-subirAvion' : ''
					} w-16 h-16`}
				/>
			</div>
			{jugando ? (
				<div>
					<p className="mb-4">
						La nave está subiendo el monto automáticamente...
					</p>
					<button
						className="bg-pastel-lavender text-black hover:bg-pastel-pink font-bold py-2 px-4 rounded"
						onClick={retirarSaldo}
					>
						Retirar saldo
					</button>
				</div>
			) : (
				<div>
					<input
						type="number"
						placeholder="Ingresa el monto a apostar"
						value={montoInicial}
						onChange={(e) => setMontoInicial(e.target.value)}
						className="w-44 h-10 border border-gray-300 rounded-md px-2 mr-2"
					/>
					<button
						className="bg-pastel-lavender text-black hover:bg-pastel-pink font-bold py-2 px-4 rounded"
						onClick={empezarJuego}
					>
						Empezar juego
					</button>
				</div>
			)}
			{mensaje && (
				<div className="mt-4 ">
					<p>{mensaje}</p>
				</div>
			)}
		</div>
	);
}

export default Game;
