import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FRONTEND_ENDPOINT } from './endpoint';
const Navbar = () => {
	const [home, setHome] = useState(false);
	const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		let M = window.M;
		M.AutoInit();
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, {});
		});

		const tokenHandler = () => {
			const token = localStorage.getItem('Login');
			if (token) {
				setIsToken(true);
			} else {
				setIsToken(false);
			}
		};
		tokenHandler();

		if (isToken) {
			setLogin(true);
			console.log(isToken);
		} else {
			setLogin(false);
		}
	}, [isToken, login]);
	const handleHome = () => {
		setHome(true);
		setLogin(false);
	};
	const handleLogin = () => {
		setHome(false);
		setLogin(true);
	};
    const handleRegister = () => {
		setHome(false);
		setLogin(false);
		setRegister(true);
	};
	const handleLogout = () => {
		localStorage.removeItem('Login');
		setLogin(false);
		window.location.href = `${FRONTEND_ENDPOINT}/home`;
	};
	return (
		<div>
			<nav className='black'>
				<div className='nav-wrapper container '>
					<Link to='#' className=' cursive'>
						Eazr Task
					</Link>
					<Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</Link>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to='/home' className={home ? 'bold' : ''} onClick={handleHome}>
								Home
							</Link>
						</li>
                        <li>
							<Link to='/register' className={register ? 'bold' : ''} onClick={handleRegister}>
								Register
							</Link>
						</li>
						<li>
							<Link
								to='/login'
								className={login ? 'hide' : 'waves-effect waves-light btn pink lighten-1'}
								onClick={handleLogin}
							>
								<i className='material-icons right'>login</i>Login
							</Link>
						</li>

						<li>
							<Link
								to='/login'
								className={!isToken ? 'hide' : 'waves-effect waves-light btn pink lighten-1'}
								onClick={handleLogout}
							>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
                <li>
					<Link to='/register'>Register</Link>
				</li>
				<li>
					<Link to='/login' className={!isToken ? 'hide' : ''} onClick={handleLogout}>
						Logout
					</Link>
				</li>

				<li>
					<Link to='/login' className={login ? 'hide' : ''} onClick={handleLogin}>
						<i className='material-icons right'>login</i>Login
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;