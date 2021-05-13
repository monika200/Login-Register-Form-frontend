import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from './endpoint';
const Forgot = () => {
	const [email, setEmail] = useState('');

	const postData = async (e) => {
		if (!email) {
			e.preventDefault();
			alert('Input Field should not be Empty');
		} else {
			const data = { email };
			const req = await fetch(`${BACKEND_ENDPOINT}/forgot`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'User Allowed') {
				localStorage.setItem('token', res.token);
				const M = window.M;
				M.toast({ html: res.message });
				window.location.href = `${FRONTEND_ENDPOINT}/home`;
			} else {
				const M = window.M;
				M.toast({ html: res.message });
			}
		}
	};

	return (
		<div className='container'>
			<h4 className='center purple-text text-lighten-1 '>
				Forgot your password.
			</h4>
			<div className='row margin-5'>
				<div className='col s12 l6 center formSize'>
					<h5 className='center cursive black-text '>
						Enter Your Email <i className='material-icons '></i>
					</h5>

					<div className='input-field '>
						
						<input
							id='email'
							type='text'
							className='validate '
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<p className='blue-text'>*Please Check Your Email to reset your Password</p>
					<Link
						to='#'
						className='waves-effect waves-light btn green'
						onClick={postData}
						onclick="M.toast({html: 'I am a toast'})"
					>
						Send Mail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Forgot;
