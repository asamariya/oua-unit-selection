import React from 'react';
import './App.scss';

import { DegreeProvider } from './components/DegreeContext';
import { Header } from './components/Header';
import DegreeExplorer from './components/DegreeExplorer'

const App = () => {

	return (
		<div className="App">
			<DegreeProvider>
				<Header />
				<DegreeExplorer />
			</DegreeProvider>
		</div>
	);
}

export default App;
