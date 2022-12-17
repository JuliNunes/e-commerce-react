import React, { StrictMode } from 'react';
import { Link } from 'react-router-dom';

function Myaccount() {
	return (
		<StrictMode>
			<div className='col-sm-2 pt-2 d-flex justify-content-evenly h-50'>
				<Link to='/login' className='btn btn-primary'>
					Entrar
				</Link>
				<Link to='/cadastro' className='btn btn-primary'>
					Cadastrar
				</Link>
			</div>
		</StrictMode>
	);
}

export default Myaccount;
