import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Coin from './components/Coin';
import HomePage from './pages/HomePage';
import Game from './pages/GamePage';
import AbrazoVirtual from './pages/AbrazoPage';
import Footer from './components/Footer';

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
