import React from 'react';

function Footer() {
	return (
		<footer className='d-flex flex-row row gap-5 ps-5 bg-dark text-light pt-3'>
			<div className='col-sm-2'>
				<h5>RANDOM GRÁFICA</h5>
				<p>Quem somos</p>
				<p>Serviços</p>
				<p>Portifolio</p>
				<p>Orçamentos</p>
			</div>
			<div className='col-sm-7'>
				<h5>ATENDIMENTO</h5>
				<p>(99) 9 9999-9999</p>
				<p>(99) 9 9999-9999</p>
				<p>email@email.com</p>
			</div>
			<div className='col-sm-2'>
				<h5>ENDEREÇOS</h5>
				<hr />
				<h6>LOJA 1</h6>
				<p>Rua tal da casa tal</p>
				<h6>LOJA 2</h6>
				<p>Rua pei da tei tei</p>
			</div>
		</footer>
	);
}

export default Footer;
