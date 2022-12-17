import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Main from './pages/home/Main';
import Produto from './pages/produto/Produto';
import Login from './pages/login/Login';
import Footer from './Footer';

function App() {
	return (
		<StrictMode>
			<div>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/produto' element={<Produto />} />
						<Route path='/login' element={<Login />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</StrictMode>
	);
}

export default App;
