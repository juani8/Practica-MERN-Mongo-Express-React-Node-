import React from 'react'
import ImageRenderer from '../ImageRenderer/ImageRenderer'
import CustomButton from '../CustomButton'
import fire from '../../assets/fire.svg'
import { Typography, Grid } from '@mui/material';
import redirect from '../../assets/redirect.svg'
import arrow_down from '../../assets/arrow_down.svg'
import { Link, useNavigate } from 'react-router-dom';

const HomeFirstPart = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-10 mx-16 max-h-screen'>
      <section className='flex'>
        <Typography
          variant="h4"
          color="white"
          noWrap
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '2px' }}
        > 
          Trending destinations
        </Typography>
        <img src={fire} alt="fire" className='ml-3 w-8' />
        <img src={fire} alt="fire" className='w-8' />
      </section>
      <ImageRenderer img_to_render={4} />
      <section className='flex justify-between'>
        <CustomButton text={'See more destinations'} img={redirect} width={'18vw'} btn_style={'colorful'} className='pt-8' onClick={() => navigate('/destinations/list')}/>
        <section className='flex mt-16 mr-20 items-center gap-4'>
          <img src={arrow_down} alt="arrow" className='w-16 filter invert' />
          <Typography
            variant="h4"
            color="white"
            noWrap
            sx={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '2px' }}
          > 
            Watch out for your saved 
            <br />
            destinations!
          </Typography>
        </section>
      </section>
            
    </div>
  )
}

export default HomeFirstPart