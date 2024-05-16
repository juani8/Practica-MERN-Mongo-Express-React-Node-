import { React, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import logo from '../assets/plane-up-solid.svg';
import glass from '../assets/magnifying-glass-solid.svg';
import bars from '../assets/bars-solid.svg';
import user_logo from '../assets/circle-user-regular.svg';
import xmark from '../assets/xmark-solid.svg';

import PopUp from './PopUp';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { user, setUser, ready } = useContext(UserContext);
  {/*boton del menu minimizado del navbar*/}
  const [toggle, setToggle] = useState(false);
  {/*ventana seleccionada actualmente*/}
  const [actual, setActual] = useState("home");

  const navigate = useNavigate();

  const notLoggedInOptions = [
    {'text':'Main page', 'route':'/'},
    {'text':'Login', 'route':'/login'},
    {'text':'Register', 'route':'/register'}
  ];

  const loggedInOptions = [
    {'text':'Logout', 'action': logout},
    {'text':'My account', 'route': '/account'}
  ];

  function logout() {
    axios.get('/logout');
    setUser(null);
    navigate('/');
    navigate(0);
  };

  return (
    <div className='px-4'>
      <header className='flex justify-between items-center h-150 text-white'>
        <Link to={'/'} onClick={() => setActual('home')} className="flex items-center gap-1">
          <img src={logo} alt="" className='filter invert w-6 h-6 mx-2 inline align-middle' onClick={() => navigate('/')} />
          <span className='max-[350px]:hidden font-bold text-xl align-middle'>booking</span>
        </Link>
				<div className='max-[730px]:hidden flex gap-2 justify-center border-white border-2
                        rounded-full py-3 px-4 font-medium'>
					<div>Anywhere</div>
          <div className="flex border-l border-gray-300"></div>
					<div>Any week</div>
          <div className="flex border-l border-gray-300"></div>
					<div> 
						<span>Add guests</span>
						<button className='ml-2 rounded-full pb-0 px-1 border border-black bg_default'>
              <img src={glass} alt='' className="w-4 h-4 m-0 inline mb-1 logo-img" />
            </button>
					</div>
				</div>

        <div className ={`${!!ready ? 'bg_default' : 'bg-inherit border-white border-2'}
                        flex gap-3 items-center p-6 rounded-full py-3 right-0 px-4 mr-0 
                        font-medium cursor-pointer text-3 max-w-[135px]`}
                        onClick={() => setToggle(!toggle)}>
          <img src={toggle ? xmark : bars} alt="" className="filter invert w-5 h-5" />
          <img src={user_logo} alt="" className="filter invert min-w-[20px] h-[20px] right-0 on:border-none" />
          <p className={`${(!ready) && 'hidden'} text-ellipsis overflow-hidden`}>
            {user?.name}
          </p>
        </div>
      </header>
      
      <div style = {{  
        height: '.2vw',
        backgroundColor: 'white',
        margin: '20px .5rem'
      }}>
      </div>

      {toggle && (<PopUp
        options = {ready ? loggedInOptions : notLoggedInOptions}
        actual = {actual}
        setActual = {setActual}
        setToggle = {setToggle} 
        />)
      }
    </div>
  )
}

export default Header;