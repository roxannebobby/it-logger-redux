import React, { useState, useEffect } from 'react';

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	// useEffect is like "DidMount" in class components; this is what we want to happen right at app mounting
	useEffect(() => {
		getLogs();
		//eslint-disable-next-line
	}, []);
	console.log(logs);

	const getLogs = async () => {
		setLoading(true);
		const res = await fetch('/logs');
		// unlike axios here we need to set data to json type
		const data = await res.json();

		setLogs(data);
		setLoading(false);
	};

	if (loading) {
		return <h4>Loading...</h4>;
	}

	return (
		<>
			<ul className='collection with-header'>
				<li className='collection-header'>
					<h4 className='center'>System Logs</h4>
				</li>
				{!loading && logs.length === 0 ? (
					<p className='center'>No logs to show ... </p>
				) : (
					logs.map((log) => <li>{log.message}</li>)
				)}
			</ul>
		</>
	);
};

export default Logs;
