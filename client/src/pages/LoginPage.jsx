import { React, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../context/UserContext';
import toast from 'react-hot-toast';


const LoginPage = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	async function handleLoginFunction(event) {
		event.preventDefault();
		
		if (!user) {
			try {
			const response = await axios.post('/login',

			{email, 
			password},

			{withCredentials: true});

			console.log(response.data);
			
			setUser(response.data);

			if (response.status == 200) {
				alert('Login successful.');
			}
			} catch (err) {
				toast.error('Login failed. ' + err);
			}
		}
	}


  return (
		<div className='mt-4 grow flex flex-col justify-around '>
      <div className='mb-64 text-white'>
				<h1 className='text-4xl text-white text-center py-4 mt-10'>Login</h1>
				<form className='max-w-xl mx-auto flex flex-col justify-around'
				onSubmit={handleLoginFunction}>
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
					<button className='p-3 text-white font-normal rounded-lg bg_default'>Login</button>
					<div className='py-2'></div>
					<div className='text-center py-2 text-gray-500'>
						Not registered yet? 
						<Link className='underline ml-1' to={'/register'}>
							Register now
						</Link>
					</div>
				</form>
			</div>
		</div>
  )
}

export default LoginPage;