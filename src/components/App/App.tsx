import 'normalize.css';
import './app.scss';
import morning from '../../resources/img/morning.jpg';
import noon from '../../resources/img/noon.jpg';
import day from '../../resources/img/day.jpg';
import evening from '../../resources/img/evening.jpg';
import midnight from '../../resources/img/midnight.jpg';
import night from '../../resources/img/night.jpg';
import uuid from 'react-uuid';


const App: React.FC = () => {
	const sideBar = [
		{ dir: '230deg', color1: 'rgb(255 241 147)', color2: 'rgb(0 4 157)', text: 'Morning', id: uuid() },
		{ dir: '230deg', color1: 'rgb(220 217 241)', color2: 'rgb(7 162 221)', text: 'Noon', id: uuid() },
		{ dir: '230deg', color1: 'rgb(235 235 235)', color2: 'rgb(187 113 21)', text: 'Day', id: uuid() },
		{ dir: '230deg', color1: '#d3afc5', color2: 'SaddleBrown', text: 'Evening', id: uuid() },
		{ dir: '230deg', color1: 'rgb(0 228 251)', color2: '#040026', text: 'Midnight', id: uuid() },
		{ dir: '230deg', color1: 'rgb(130 249 255)', color2: 'black', text: 'Night', id: uuid() },
	];
	const main = [
		{ src: night, alt: 'night', id: uuid() },
		{ src: midnight, alt: 'midnight', id: uuid() },
		{ src: evening, alt: 'evening', id: uuid() },
		{ src: day, alt: 'day', id: uuid() },
		{ src: noon, alt: 'noon', id: uuid() },
		{ src: morning, alt: 'morning', id: uuid() },
	];
	const picturesAmount: number = main.length - 1;
	const sideBars = sideBar.map(bar => {
		const { dir, color1, color2, text, id } = bar;
		return (
			<div
				className='app__leftAsideBar'
				key={id}
				style={{ background: `linear-gradient(${dir}, ${color1}, ${color2}` }}
			>
				<h2>{text}</h2>
			</div>
		);
	});
	const mainBars = main.map(bar => {
		const { src, alt, id } = bar;
		return (
			<div
				className="app__mainBar"
				key={id}
			>
				<img src={src} alt={alt} />
			</div>
		);
	});


	return (
		<div className="app">
			<div
				className="app__sideBars"
			>
				{sideBars}
			</div>
			<div className="app__mainBars"
				style={{ transform: `translateY(-${picturesAmount * 100}vh)` }}
			>
				{mainBars}
			</div>
		</div>
	);
};

export default App;
