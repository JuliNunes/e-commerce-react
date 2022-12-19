import React, { StrictMode } from 'react';
import Input from './Input';

function Cadastro() {
	return (
		<StrictMode>
			<div className='row d-flex justify-content-center'>
				<div className='d-flex flex-column align-items-center col-sm-4'>
					<h1>Dados da conta</h1>
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
				<div className='d-flex flex-column align-items-center col-sm-4'>
					<h1>Endereço</h1>
					<Input label='Cidade' type='text' placeholder='Cidade' />
					<Input label='Bairro' type='text' placeholder='Bairro' />
					<Input
						label='Endereço'
						type='text'
						placeholder='Rua e número'
					/>
					<Input label='CEP' type='number' placeholder='CEP' />
					<input
						type='submit'
						value='CADASTRAR'
						className='btn btn-warning mt-3 mb-5'
					/>
				</div>
			</div>
		</StrictMode>
	);
}

export default Cadastro;
