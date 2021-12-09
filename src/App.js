import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Logs from './components/logs/Logs';
import './App.css';
import SearchBar from './components/layout/SearchBar';

const App = () => {
	// initializes materialize javascript for modals
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<>
			<SearchBar />
			<div className='container'>
				<Logs />
			</div>
		</>
	);
};

export default App;
