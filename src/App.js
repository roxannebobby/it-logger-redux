import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import './App.css';

const App = () => {
	// initializes materialize javascript for modals
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<>
			<SearchBar />
			<div className='container'>
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<Logs />
			</div>
		</>
	);
};

export default App;
