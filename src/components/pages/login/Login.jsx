import React, { StrictMode } from 'react';

function Login() {
	return (
		<StrictMode>
			<div className='d-flex flex-column align-items-center'>
				<h1>Entre na sua conta</h1>
				<form className='d-flex flex-column align-items-center'>
					<fieldset className='d-flex flex-column input-login'>
						<label>Usuário</label>
						<input type='text' />
					</fieldset>
					<fieldset className='d-flex flex-column input-login'>
						<label>Senha</label>
						<input type='password' />
					</fieldset>
					<input
						type='submit'
						className='btn btn-success mt-3'
						value='ENTRAR'
					/>
				</form>
			</div>
		</StrictMode>
	);
}

export default Login;
