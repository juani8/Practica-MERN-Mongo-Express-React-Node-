import { React, useContext } from 'react'
import LandingPage from './LandingPage'
import UserHomePage from './UserHomePage'
import { UserContext } from '../context/UserContext'

const MainPage = () => {
  const { user, setUser, ready } = useContext(UserContext);

  return (
    <div>
      {!user && <LandingPage />}
      {user && <UserHomePage />}
    </div>
  )
}

export default MainPage