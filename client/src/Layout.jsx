import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

const layout = () => {
  const location = useLocation();

  // Function to determine background color based on the route
  const getBackgroundColor = () => {
    if (location.pathname.startsWith('/account')) {
      return 'secondarybackground'; // Background color for specific route
    } else {
      return 'mainbackground'; // Default background color
    }
  };

  return (
    <div className={`${getBackgroundColor()} pt-4 flex flex-col min-h-screen`}>
      <Header />
      <Outlet />
    </div>
  )
}

export default layout;