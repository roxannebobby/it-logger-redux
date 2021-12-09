import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and Tech ' });
		} else {
			console.log(message, tech, attention);
			// clear fields
			setMessage('');
			setTech('');
			setAttention(false);
		}
	};

	return (
		<div
			id='edit-log-modal'
			className='modal'
			style={{ width: '75%', height: '85%' }}
		>
			<div className='modal-content'>
				<h4>Enter System Log</h4>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							placeholder='Enter message text...'
							onChange={(e) => setMessage(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<select
							type='dropdown'
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => setTech(e.target.value)}
						>
							<option value='' disabled>
								Select Technician
							</option>
							<option value='John Doe'>John Doe</option>
							<option value='Sam Smith'>Sam Smith</option>
							<option value='Sara Wilson'>Sara Wilson</option>
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='waves-effect waves-light blue btn'
				>
					Enter
				</a>
			</div>
		</div>
	);
};
export default EditLogModal;
