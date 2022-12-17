import React, { StrictMode } from 'react';
import Search from './Searchbar';
import Myaccount from './Account';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<StrictMode>
			<header className='d-flex row justify-content-around'>
				<Link className='logo h-25' to='/'>
					<img
						src='https://cdn.worldvectorlogo.com/logos/random.svg'
						alt='random logo'
						className='logo ms-2 pt-5 col-sm-2'
					/>
				</Link>
				<Search />
				<Myaccount />
				<Navbar />
			</header>
		</StrictMode>
	);
}

export default Header;
