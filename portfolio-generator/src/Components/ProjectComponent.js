import '../App.css';
import * as React from 'react';
import Button from '@mui/material-next/Button';
import 'boxicons/css/boxicons.min.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";



function ProjectComponent({ Image, Name, Desc, Period, Duration }) {

  return (
    <div style={styles.background}>
      <img src={Image} style={styles.image} alt="Project Image" />
      <div>
        <h3 style={styles.textContent}>
          {Name}
        </h3>
        <body style={styles.textContent}>
          {Desc}
        </body>
        <h6 style={styles.textContent}>
          {Period}
        </h6>
      </div>

    </div>
  );
}

const styles = {
  background: {
    width: '20rem',
    padding: '2rem',
    margin: '1rem'
  },
  avatar: {
    textAlign: "left"
  },
  image: {
    width: '100%',
    height: 'undefined',
  },
  textContent: {
    textAlign: 'left'
  }

};

export default ProjectComponent;
