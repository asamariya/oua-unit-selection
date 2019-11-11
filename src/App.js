import React from 'react';
import './App.scss';

import {Header} from './components/Header';

function App() {
	const url = 'https://catalog.prd1.env.opendev.edu.au/v3/degree/CUR-LIB-DEG-2019';
	return (
		<div className="App">
			<Header url={url} />
		</div>
	);
}

export default App;
