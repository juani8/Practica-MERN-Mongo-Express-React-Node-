import { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import LandingFirstPart from '../components/Landing/LandingFirstPart';
import LandingSecondPart from '../components/Landing/LandingSecondPart';
import { UserContext } from '../context/UserContext';

const LandingPage = () => {
  const refSecondPart = useRef(null);

  const handleScrollToSecondPart = () => {
    console.log(refSecondPart.current)
    scroll.scrollTo(refSecondPart.current.offsetTop, {
      duration: 500,
      smooth: true,
    }
    );
  }

  return (
    <div>
      <LandingFirstPart handleScrollToSecondPart = {handleScrollToSecondPart}/>
      <div ref={refSecondPart}>
        <LandingSecondPart/>
      </div>
    </div>
  )
}

export default LandingPage;