import 'normalize.css';
import './app.scss';


const App: React.FC = () => {
	const sideBar = [
		{ deg: '229.99deg', color1: '#e1d9d9', percent1: '-26%', color2: '#c1b9b9', percent2: '145%', text: 'Purity' },
		{ deg: '215.32deg', color1: '#e7d9bf', percent1: '-1%', color2: '#626237', percent2: '124%', text: 'Atmospherics' },
		{ deg: '221.87deg', color1: '#ffae7e', percent1: '1%', color2: '#050476', percent2: '128%', text: 'Feather' },
		{ deg: '220.16deg', color1: '#fbfbfb', percent1: '-8%', color2: 'PeachPuff', percent2: '138%', text: 'Room' },
	];
	const main = [
		{ src: 'https://images.unsplash.com/photo-1674581764363-e6c7d7d61bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
		{ src: 'https://plus.unsplash.com/premium_photo-1669042646106-827cf2484ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80' },
		{ src: 'https://plus.unsplash.com/premium_photo-1672976833398-db9d54eec057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
		{ src: 'https://plus.unsplash.com/premium_photo-1668104454442-a251cc42ee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
	];


	return (
		<p>
			Работает
		</p>
	);
};

export default App;
