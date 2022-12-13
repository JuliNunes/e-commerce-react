import React from 'react';

function Search() {
	return (
		<div className='input-group w-50 h-25 pt-2 col-sm-7'>
			<input
				type='search'
				class='form-control rounded'
				placeholder='Buscar'
				aria-label='Buscar'
				aria-describedby='search-addon'
			/>
			<button type='button' class='btn btn-outline-primary'>
				buscar
			</button>
		</div>
	);
}

export default Search;
