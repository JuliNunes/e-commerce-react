import React from 'react';
import Produto from './Products';
import products from './../products';

function Main() {
	return (
		<main>
			<h1 className='text-center mb-5'>Produtos em destaque</h1>
			<div className='d-flex flex-row flex-wrap justify-content-start'>
				{products.map(produto => (
					<Produto
						chave={produto.id}
						nome={produto.nome}
						valor={produto.valor}
						img={produto.imgURL}
						alt={produto.imgALT}
					/>
				))}
			</div>
		</main>
	);
}

export default Main;
