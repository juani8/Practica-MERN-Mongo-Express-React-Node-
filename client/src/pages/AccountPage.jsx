import React, { useRef, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PlacesPage from './PlacesPage';
import ChangeSettings from '../components/ChangeSettings.jsx';
import profile_logo from '../assets/user-lock-solid.svg';
import bookings_logo from '../assets/list-ul-solid.svg';
import accomodations_logo from '../assets/building-user-solid.svg';
import LoadingCircular from '../components-secondary/LoadingCircular.jsx';

const AccountPage = () => {
  const [actual, setActual] = useState(0);
  const {ready, user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  // agarras los parametros que vienen de la url
  // should be called in the first render
  var {subpage} = useParams();

  if (subpage == undefined) {
    subpage = '/'
  }

  // si el userContext todavia no cargo...
  if (!ready) {
    return <LoadingCircular />
  };

  // si el userContext cargo pero no esta registrado el usuario
  if (ready && !user){
    return navigate('/login')
  };

  const features = [
    {'subpage':'My profile', 'img':profile_logo, 'route':'/account'},
    {'subpage':'Bookings', 'img':bookings_logo, 'route':'/account/bookings'},
    {'subpage':'Accomodations', 'img':accomodations_logo, 'route':'/account/places'}
  ]

  return (
    <div className='justify-around grow'>
      <nav className='w-full flex mt-8 gap-8 justify-center max-[600px]:flex-col'>
        {features.map((feature, index) => (
          <Link 
          className = {`myprofile__subpages ${index === actual && 'bg_default text-white border-2'}`} 
          to = {feature.route} 
          onClick={() => setActual(index)}>
            <img src={feature.img} className={`${index === actual && 'logo-img'}`} />
            <p className='m-auto'>{feature.subpage}</p> 
          </Link>         
        ))}
      </nav>

      {subpage === '/' && <ChangeSettings user = {user} setUser = {setUser} />}

      {subpage === 'bookings' && <PlacesPage />}

    </div>
  )
  
};

export default AccountPage;