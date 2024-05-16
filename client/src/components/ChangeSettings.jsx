import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import toast from 'react-hot-toast';
import CustomButton from './CustomButton.jsx';

const ChangeSettings = (props) => {
  const navigate = useNavigate();
  const [changeBoolean, setChangeBoolean] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [changeUsername, setChangeUsername] = useState(false);

  // useState for form modifications (password modification)
	const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repNewPassword, setRepNewPassword] = useState('');

  // useState for form modifications (username modification)
	const [username, setUsername] = useState('');
  const [cuPassword, setCuPassword] = useState('');


  const handleChangePassword = async (event) => {
    event.preventDefault();
    
    if (newPassword == repNewPassword) {
      try {
        const response = await axios.put('/passmod',
        {
          email: props.user.email,
          password: password,
          new_password: newPassword
        },
        {withCredentials: true});
        
        console.log(response.status)
        if (response.status == 200) {
          /*alert('Login successful.');*/
          alert('Success');
          navigate('/login');
          navigate(0);
        }
      } catch (err) {
        alert(err);
      }
    } else {
      toast.error('Repeat password incorrect');
    }
  }


  const handleChangeUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('/usermod',
      {
        email: props.user.email,
        new_username: username,
        password: cuPassword
      },
      {withCredentials: true});
      
      console.log(response.status);
      if (response.status == 200) {
        alert('Success');
        navigate(0);
      }
    } catch (err) {
      alert(err);
    }
  }


  return (
    <div className='myprofile__button__container'>
      <span className='text-white'>Logged in as <strong>{props.user.name}; {props.user.email}</strong></span>
      {/* setUser(null) resets the context */}

      <div className='flex flex-col items-center justify-center mx-auto mt-5 w-2/6 gap-4'>
        <CustomButton 
          text = {'Log out'}
          width={'100%'}
          btn_style={'special'}
          onClick = {() => {{axios.get('/logout')}; props.setUser(null); navigate(0)}}
        />
        <CustomButton 
          text = {'Change account settings'}
          width={'100%'}
          onClick = {() => {setChangeBoolean(!changeBoolean); setChangePassword(false); setChangeUsername(false)}}
        />
      </div>
      <div className={`${changeBoolean ? 'flex' : 'hidden'} min-w-full flex justify-center`}>
        <div className='myprofile__stn'>
          <div 
          className={`myprofile__stn__opt ${changePassword && 'font-semibold'}
          animate__animated animate__fadeInDown`}
          onClick={() => {setChangePassword(!changePassword); setChangeUsername(false)}}> 
            Change password
          </div>
          <div className={`${changePassword ? 'flex' : 'hidden'} flex-col 
                animate__animated animate__fadeIn`}>
            <div className='flex justify-between items-center mx-3 py-2 gap-x-8 max-[500px]:flex-col'>            
              <label htmlFor='ic_psw'> Current password</label>
              <input className='input__default' type="password" id='ic_psw' placeholder='enter password...' 
              value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div 
            className='myprofile__stn__input__cntr'> 
              <label htmlFor='ic_n_psw'> New password</label>
              <input className='input__default' type="password" id='ic_n_psw' placeholder='enter new password...'
              value={newPassword} onChange={(event) => setNewPassword(event.target.value)}/>
            </div>
            <div 
            className='myprofile__stn__input__cntr'> 
              <label htmlFor='ic_rn_psw'> Repeat new password</label>
              <input className='input__default' type="password" id='ic_rn_psw' placeholder='enter new password...'
              value={repNewPassword} onChange={(event) => setRepNewPassword(event.target.value)}/>
            </div>
            <div className='flex flex-col mt-5'>
              <CustomButton text = {'Save changes'} btn_style={'confirm'} onClick={handleChangePassword} />
              <br />
              <CustomButton text = {'Cancel'} btn_style={'alert'} onClick={() => navigate(0)} />
            </div>
          </div>

          <div 
          className={`myprofile__stn__opt ${changeUsername && 'font-semibold'}
          animate__animated animate__fadeInDown`}
          onClick={() => {setChangeUsername(!changeUsername); setChangePassword(false)}}> 
            Change username
          </div>
          <div className={`${changeUsername ? 'flex' : 'hidden'} flex-col
                 animate__animated animate__fadeIn`}>
            <div
            className='myprofile__stn__input__cntr'>
              <label htmlFor='ic_n_user'> New username</label>
              <input className='input__default' type="text" id='ic_n_user' placeholder='enter username...'
              value={username} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div
            className='myprofile__stn__input__cntr'>
              <label htmlFor='ic_c_psw'> Confirm with password</label>
              <input className='input__default' type="password" id='ic_c_psw' placeholder='enter password...'
              value={cuPassword} onChange={(event) => setCuPassword(event.target.value)}/>
            </div>
            <div className='flex flex-col mt-5'>
              <CustomButton text = {'Save changes'} btn_style={'confirm'} onClick={handleChangeUsername} />
              <br />
              <CustomButton text = {'Cancel'} btn_style={'alert'} onClick={() => navigate(0)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeSettings