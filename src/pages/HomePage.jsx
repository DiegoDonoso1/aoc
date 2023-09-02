import Corazon from '../components/corazon/Corazon';
import '../App.css';

export default function HomePage() {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="h-80 flex justify-center items-center md:mt-28 mt-0">
					<Corazon />
				</div>
				<div className="w-6/12">
					<p className="text-center text-xl">
						Para la chica de bonitos ojitos, la mujer fuerte, la niña tierna, la
						joven soñadora, la muchacha confundida que verá esto, decirle que lo
						hace increíble y todo saldrá bien, y si es que no, siempre tendrá en
						quien apoyarse y volver a levantarse más fuerte. Este corazón estará
						latiendo siempre en esta página, como yo siempre estaré para ti.
					</p>
				</div>
			</div>
		</>
	);
}
