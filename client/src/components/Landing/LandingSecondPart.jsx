import React from 'react'
import './Landing.css'
import { Typography } from '@mui/material';
import computer from '../../assets/computer.svg'
import demo from '../../assets/demo.png'
import CustomButton from '../CustomButton';

const LandingSecondPart = () => {
  return (
    <div className = "secondLanding flex overflow-hidden">
      <section className = "flex flex-col justify-center items-center gap-10 m-auto pt-10">
        <section className='container-izq flex-col'>
          <Typography
            variant="h3"
            color="rgba(33, 39, 113, 1)" 
            gutterBottom
            noWrap
            sx={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '10px' }}
          >
            Find Your Ideal Stay with Our 
            <br />
            Simple Booking Platform
          </Typography>
          <div className='flex flex-row gap-20'>
            <Typography
              variant="h6"
              color="rgba(33, 39, 113, 1)" 
              gutterBottom
              noWrap
              sx={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '10px', alignItems: 'center' }}
            >
              Find your ideal stay with ease. 
              <br />
              Our comprehensive search filters 
              <br />
              and user-friendly interface make 
              <br />
              it simple to browse and book 
              <br />
              accommodations that suit your 
              <br />
              preferences and budget.
            </Typography>

            <div className='container-der flex flex-col justify-evenly'>
              <CustomButton text={'Authenticate now'}/>
              <CustomButton text={'Authenticate now'}/>
            </div>
          </div>
        </section>
        
        <section className='mx-auto'>
          <img
            src={computer}
            alt="Imagen secundaria"
            style={{
              height: "30vh",
              maxWidth: "50vw",
              marginLeft: "4vw",
              margin: "auto"
            }}
          />
        </section>
      </section>
      <section className='m-auto w-4/7'>
      <section className='preview-container m-auto'>
          <img
            src={demo}
            alt="Imagen preview"
            className='preview-image'
          />
        </section>
      </section>
    </div>
  )
}

export default LandingSecondPart