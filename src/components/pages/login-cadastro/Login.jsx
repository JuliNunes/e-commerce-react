import React, { StrictMode } from 'react';
import Input from './Input';

function Login() {
	return (
		<StrictMode>
			<div className='d-flex flex-column align-items-center'>
				<h1>Entre na sua conta</h1>
				<form className='d-flex flex-column align-items-center'>
					<Input
						label='E-mail'
						type='text'
						placeholder='E-mail do usuário'
					/>
					<Input
						label='Senha'
						type='password'
						placeholder='Senha do usuário'
					/>
					<input
						type='button'
						value='Entrar'
						className='btn btn-success mt-3'
					/>
				</form>
			</div>
		</StrictMode>
	);
}

export default Login;
