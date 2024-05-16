import React from 'react'
import { Typography } from '@mui/material';
import astronaut from '../../assets/astronaut.svg'
import CustomButton from '../CustomButton';

const LandingFirstPart = ( props ) => {
  return (
    <div className = "LandingFirstPart flex justify-center items-center">
      <div className='container flex items-center justify-center gap-10'>
        <div className='container-izq'>
          <div>         
            <Typography
              variant="h2"
              color="white" 
              gutterBottom
              noWrap
              sx={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '10px' }}
            >
              Book Anytime, Anywhere:
              <br/>
              Explore the Power of 
              <br/>
              Booking
            </Typography>

            <div className='container-der flex gap-5 items-center ml-0'>
              <CustomButton text={'Authenticate now'} width='40vw' btn_style={'colorful'}/>
              <div className='hover:cursor-pointer text-gray-500' onClick={() => props.handleScrollToSecondPart()}>
                <Typography
                  style={{
                    color: 'white',
                    textDecoration: 'underline',
                    marginLeft: '0.25rem',
                    fontSize: '1.1rem',
                    '&:hover': {
                        cursor: 'pointer',
                        color: 'gray',
                    }
                  }}
                >
                  Learn More
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='container-der m-auto'>
          <img
            src={astronaut}
            alt="Imagen principal"
            style={{
              height: "70vh",
              maxWidth: "50vw",
              marginLeft: "4vw",
              margin: "auto"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default LandingFirstPart