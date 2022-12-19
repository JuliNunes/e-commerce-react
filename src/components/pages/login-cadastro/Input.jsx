import React, { StrictMode } from 'react';

function Input(props) {
	return (
		<StrictMode>
			<fieldset className='d-flex flex-column input-login'>
				<label>{props.label}</label>
				<input
					type={props.type}
					placeholder={props.placeholder}
					required
				/>
			</fieldset>
		</StrictMode>
	);
}

export default Input;
