import '../App.css';
import * as React from 'react';
import Button from '@mui/material-next/Button';
import 'boxicons/css/boxicons.min.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import JobComponent from '../Components/JobComponent';



function HeroSegment() {

  return (
    <div id='hero-segment'>
      <div id='hero-header'>
        <i className='bx bxl-instagram'></i>
        <h4 id='name-logo'>Ricky</h4>
        <div className='row-container'>
          <h5>MENU</h5>
          <i className='bx bx-menu' ></i>
        </div>
      </div>
      <h1>Craftmanship</h1>
      <h4 style={{ paddingBlock: '2rem' }}>The blend between creativity and technology</h4>
      <Button variant="contained" color="#FFFFFF" style={{ paddingBlock: '1.5rem', paddingInline: '3rem' }}><h4>Download My Resume</h4></Button>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },

};

export default HeroSegment;
