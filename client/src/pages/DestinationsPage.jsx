import React from 'react'
import ImageRenderer from '../Components/ImageRenderer/ImageRenderer'
import { Typography, Grid } from '@mui/material';

const DestinationsPage = () => {
  return (
    <div className='mx-10'>
      <div className='mx-10 mt-10'>
        <Typography
          variant="h4"
          color="white"
          noWrap
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '2px' }}
        >
          All destinations
        </Typography>
      </div>
      <ImageRenderer img_to_render={30}/>
    </div>
  )
}

export default DestinationsPage