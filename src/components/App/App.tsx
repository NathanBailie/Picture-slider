import 'normalize.css';
import './app.scss';
import morning from '../../resources/img/morning.jpg';
import noon from '../../resources/img/noon.jpg';
import day from '../../resources/img/day.jpg';
import evening from '../../resources/img/evening.jpg';
import midnight from '../../resources/img/midnight.jpg';
import night from '../../resources/img/night.jpg';
import uuid from 'react-uuid';
import { useState } from 'react';


const App: React.FC = () => {
	const sideBar = [
		{ dir: '230deg', color1: 'rgb(255 241 147)', color2: 'rgb(0 4 157)', text: 'Morning', textColor: '#c5dff5', id: uuid() },
		{ dir: '230deg', color1: 'rgb(220 217 241)', color2: 'rgb(7 162 221)', text: 'Noon', textColor: 'rgb(233 217 40)', id: uuid() },
		{ dir: '230deg', color1: 'rgb(235 235 235)', color2: 'rgb(187 113 21)', text: 'Day', textColor: '#4e4e4e', id: uuid() },
		{ dir: '230deg', color1: '#d3afc5', color2: 'SaddleBrown', text: 'Evening', textColor: '#ffcfcf', id: uuid() },
		{ dir: '230deg', color1: 'rgb(0 228 251)', color2: '#040026', text: 'Midnight', textColor: '#8ce5f3', id: uuid() },
		{ dir: '230deg', color1: 'rgb(130 249 255)', color2: 'black', text: 'Night', textColor: '#aedce3', id: uuid() },
	];
	const main = [
		{ src: night, alt: 'night', id: uuid() },
		{ src: midnight, alt: 'midnight', id: uuid() },
		{ src: evening, alt: 'evening', id: uuid() },
		{ src: day, alt: 'day', id: uuid() },
		{ src: noon, alt: 'noon', id: uuid() },
		{ src: morning, alt: 'morning', id: uuid() },
	];
	const [index, setIndex] = useState(1);
	const screenHeight = window.innerHeight;
	const picturesAmount: number = main.length;
	const [asideDistance, setAsideDistance] = useState(0);
	const [mainDistance, setMainDistance] = useState((picturesAmount - 1) * screenHeight);
	const sideBars = sideBar.map(bar => {
		const { dir, color1, color2, text, textColor, id } = bar;
		return (
			<div
				className='app__leftAsideBar'
				key={id}
				style={{ background: `linear-gradient(${dir}, ${color1}, ${color2}` }}
			>
				<h2
					style={{ color: `${textColor}` }}
				>{text}</h2>
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

	function onMoveSlidesDown(): void {
		if (index !== picturesAmount) {
			setAsideDistance(index * screenHeight);
			setMainDistance((m) => m - (index + 1 * screenHeight));
		};
		if (index === 5) {
			setMainDistance(0);
		};

		setIndex((i) => i + 1);
		if (index === picturesAmount) {
			setIndex(1);
			setAsideDistance(0);
			setMainDistance((picturesAmount - 1) * screenHeight)
		};
	};

	function onMoveSlidesUp(): void {
		setAsideDistance((a) => a - screenHeight);
		setMainDistance((m) => m + screenHeight)
		if (index === 1) {
			setMainDistance(0);
			setAsideDistance(screenHeight * (picturesAmount - 1));
		};

		setIndex((i) => i - 1);
		if (index === 1) {
			setIndex(picturesAmount)
		};
	};

	return (
		<div className="app">
			<div
				className="app__sideBars"
				style={{ transform: `translateY(-${asideDistance}px)` }}
			>
				{sideBars}
			</div>
			<div className="app__mainBars"
				style={{ transform: `translateY(-${mainDistance}px)` }}
			>
				{mainBars}
			</div>
			<div className="app__buttons">
				<button
					className="app__up"
					onClick={() => onMoveSlidesUp()}
				>
					&#11014;
				</button>
				<button
					className="app__down"
					onClick={() => onMoveSlidesDown()}
				>
					&#11015;
				</button>
			</div>
		</div>
	);
};

export default App;
