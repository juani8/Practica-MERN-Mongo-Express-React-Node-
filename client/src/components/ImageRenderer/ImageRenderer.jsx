import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import LoadingCircular from '../../components-secondary/LoadingCircular';
import './ImageRenderer.css'


const ImageRenderer = (props) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    // Fetch images from the API when the component mounts
    axios.get('http://localhost:4000/api/photo')
      .then(response => {
        const adaptedImages = response.data.slice(30-props.img_to_render, 30).map(image => ({
          id: image.id,
          author: image.author,
          url: image.url,
        }));   
        setImages(adaptedImages); // Set the state with the adaptedImages array
        setTimeout(() => {
          setIsLoading(false); // Set isLoading to false after 2 seconds
        }, 1000);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setIsLoading(false)
      });
  }, []);


  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          margin: "auto",
          width: "100%",
          borderRadius: "15px",
        }}
      >
        {isLoading ? (
          <div className='pt-32 m-auto'>
            <LoadingCircular />
          </div>
        ) : (
          images.map((image, index) => (
            <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className='display__options'>
              <Typography color={'white'}> {image.author} </Typography>
              <div className='image-container' style={{ width: '300px', height: '200px' }}>
                <img key={index} src={image.url} alt={`Image ${index}`} style={{ width: '300px', height: '200px' }}
                />
                <div className='image-title'>
                  <Typography>
                    Lorem ipsum
                  </Typography>
                </div>
                <div className='image-description'>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sequi, 
                    accusantium eligendi, maxime obcaecati aperiam fuga cumque nobis, facere sit excepturi! 
                    Ex esse earum tempora officiis deleniti quos dolorem! Consequatur.
                  </Typography>
                </div>
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default ImageRenderer