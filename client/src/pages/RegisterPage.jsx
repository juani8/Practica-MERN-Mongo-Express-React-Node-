import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const RegisterPage = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	// on submit, we need to grab an event, 
	// prevent default ao it doesnt reload the page
	async function handleRegisterUser(event) {
		event.preventDefault();
		
		try{
			await axios.post('/register', {
				name, 
				email,
				password,
			});
			toast.success('Registration successful.');
		} catch (err) {
			toast.error('Registration failed.');
		}

		navigate('/login');
		navigate(0);

	};

	return (
		<div className='mt-4 grow flex flex-col justify-around text-white'>
			<div className='mb-64'>
				<h1 className='text-4xl text-center py-4 mt-10'>Register</h1>
				<form action='' className='max-w-xl mx-auto flex flex-col justify-around' 
					onSubmit={handleRegisterUser}>
					<label htmlFor="i_name" className='p-4 border rounded-lg font-medium flex flex-col'> 
						Name: 
						<input type='text' placeholder='Enter your name...'  id='i_name' 
							className='font-normal focus:outline-none bg-transparent'
							value={name} 
							onChange={(event) => setName(event.target.value)}/>
					</label>
					<div className='py-2'></div>
					<label htmlFor="i_email" className='p-4 border rounded-lg font-medium flex flex-col'> 
						Email: 
						<input type='email' placeholder='Enter your email...'  id='i_email' 
							className='font-normal focus:outline-none bg-transparent'
							value={email} 
							onChange={(event) => setEmail(event.target.value)}/>
					</label>
					<div className='py-2'></div>
					<label htmlFor="i_psw" className='p-4 border rounded-lg font-medium flex flex-col'> 
						Password:
						<input type='password' placeholder='Enter your password...' id='i_psw' 
							className='font-normal focus:outline-none bg-transparent'
							value={password} 
							onChange={(event) => setPassword(event.target.value)}/>
					</label>
					<div className='py-2'></div>
					<button className='p-3 text-white font-normal rounded-lg bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
					<div className='py-2'></div>
					<div className='text-center py-2 text-gray-500'>
						Already registered? 
						<Link className='underline ml-1' to={'/login'}>
							Login now
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage;