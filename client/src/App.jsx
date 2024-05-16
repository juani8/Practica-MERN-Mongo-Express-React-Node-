import './Global.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import Layout from './Layout';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import { UserContextProvider } from './context/UserContext';
import { Toaster } from 'react-hot-toast';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import DestinationsPage from './pages/DestinationsPage';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className='App'>
      <Toaster />
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element = {<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path='/account/:subpage?' element = {<AccountPage />} />
              <Route path='/account/:subpage/:action' element = {<AccountPage />} />
              <Route path='/destinations/list' element = {<DestinationsPage />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App;
