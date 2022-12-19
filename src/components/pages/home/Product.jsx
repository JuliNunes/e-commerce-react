import React from 'react';

function Product(props) {
	return (
		<div className='d-flex flex-column align-items-center ms-5'>
			<img
				src={props.img}
				alt='Imagem do produto'
				className='img-produto'
			/>
			<h5>{props.nome}</h5>
			<p>R$ {props.valor}</p>
		</div>
	);
}

export default Product;
