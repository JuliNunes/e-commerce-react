import React from 'react';
import Search from './Searchbar';
import Myaccount from './Account';
import Navbar from './Navbar';

function Header() {
	return (
		<header className='d-flex row justify-content-around'>
			<img
				src='https://cdn.worldvectorlogo.com/logos/random.svg'
				alt='random logo'
				className='logo ms-2 pt-2 col-sm-2'
			/>
			<Search />
			<Myaccount />
			<Navbar />
		</header>
	);
}

export default Header;
