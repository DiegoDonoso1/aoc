import React from 'react';
import menu from '../assets/img/menu-fill.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
							to="/"
						>
							Pendiente
						</Link>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<img src={menu} alt="menu_mobile" />
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xl">
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/"
								>
									<span className="ml-2">Home</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/azar"
								>
									<span className="ml-2">Azar</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/juego"
								>
									<span className="ml-2">Juego</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/abrazo"
								>
									<span className="ml-2">Abrazo</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
									to="/abrazoD"
								>
									<span className="ml-2">AbrazoD</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
