import React from 'react';
import Search from './Searchbar';
import Myaccount from './Account';

function Header() {
	return (
		<header className='d-flex row justify-content-around'>
			<img
				src='https://cdn.freebiesupply.com/logos/large/2x/random-logo-png-transparent.png'
				alt='random logo'
				className='logo ms-2 pt-2 col-sm-2'
			/>
			<Search />
			<Myaccount />
		</header>
	);
}

export default Header;
