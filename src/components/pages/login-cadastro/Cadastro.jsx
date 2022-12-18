import React, { StrictMode } from 'react';
import Input from './Input';

function Cadastro() {
	return (
		<StrictMode>
			<div className='d-flex flex-column align-items-center'>
				<h1>Cadastre sua conta</h1>
				<Input
					label='Nome completo'
					type='text'
					placeholder='ex.: João da Silva Junior'
				/>
				<Input
					label='E-mail'
					type='email'
					placeholder='ex.: joaojr@hotmail.com.br'
				/>
				<Input
					label='Confirmar E-mail'
					type='email'
					placeholder='Repita o E-mail'
				/>
				<Input
					label='Senha'
					type='password'
					placeholder='Crie uma senha'
				/>
				<Input
					label='Confirmar senha'
					type='password'
					placeholder='Repita a senha'
				/>
			</div>
		</StrictMode>
	);
}

export default Cadastro;
