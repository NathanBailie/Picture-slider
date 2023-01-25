import 'normalize.css';
import './app.scss';
import uuid from 'react-uuid';


const App: React.FC = () => {
	const sideBar = [
		{ deg: '229.99deg', color1: '#e1d9d9', percent1: '-26%', color2: '#c1b9b9', percent2: '145%', text: 'Purity', id: uuid() },
		{ deg: '215.32deg', color1: '#e7d9bf', percent1: '-1%', color2: '#626237', percent2: '124%', text: 'Atmospherics', id: uuid() },
		{ deg: '221.87deg', color1: '#ffae7e', percent1: '1%', color2: '#050476', percent2: '128%', text: 'Feather', id: uuid() },
		{ deg: '220.16deg', color1: '#fbfbfb', percent1: '-8%', color2: 'PeachPuff', percent2: '138%', text: 'Room', id: uuid() },
	];
	const main = [
		{ src: 'https://images.unsplash.com/photo-1674581764363-e6c7d7d61bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', id: uuid() },
		{ src: 'https://plus.unsplash.com/premium_photo-1669042646106-827cf2484ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80', id: uuid() },
		{ src: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', id: uuid() },
		{ src: 'https://plus.unsplash.com/premium_photo-1668104454442-a251cc42ee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', id: uuid() },
	];
	const picturesAmount: number = main.length;

	const sideBars = sideBar.map(bar => {
		const { deg, color1, percent1, color2, percent2, text, id } = bar;
		return (
			<div
				className='app__leftAsideBar'
				key={id}
				style={{ background: `linear-gradient(${deg}, ${color1} ${percent1}, ${color2} ${percent2}` }}
			>
				<h2>{text}</h2>
			</div>
		);
	});
	const mainBars = main.map(bar => {
		const { src, id } = bar;
		return (
			<div
				className="app__mainBar"
				key={id}
				style={{ backgroundImage: `url(${src})` }}
			>
			</div>
		);
	});
	console.log(mainBars)


	return (
		<div className="app">
			<div
				className="app__sideBars"
			// style={{ transform: `translateY(-${picturesAmount * 100}vh)` }}
			>
				{sideBars}
			</div>
			<div className="app__mainBars">
				{mainBars}
			</div>
		</div>
	);
};

export default App;
