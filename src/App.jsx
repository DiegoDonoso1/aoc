import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Coin from './components/Coin';
import HomePage from './pages/HomePage';
import Game from './pages/GamePage';
import AbrazoVirtual from './pages/AbrazoPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/azar" element={<Coin />} />
					<Route path="/juego" element={<Game />} />
					<Route path="/abrazo" element={<AbrazoVirtual />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
