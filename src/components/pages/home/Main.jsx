import React from 'react';
import Product from './Product';
import products from '../../../products';
import Slide from './Slide';

function Main() {
	return (
		<main>
			<Slide />
			<h1 className='text-center mb-5'>Produtos em destaque</h1>
			<div className='d-flex flex-row flex-wrap justify-content-start'>
				{products.map(product => (
					<Product
						chave={product.id}
						nome={product.nome}
						valor={product.valor}
						img={product.imgURL}
					/>
				))}
			</div>
		</main>
	);
}

export default Main;
