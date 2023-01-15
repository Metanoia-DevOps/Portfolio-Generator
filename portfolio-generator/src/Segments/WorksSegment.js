import '../App.css';
import * as React from 'react';
import Button from '@mui/material-next/Button';
import 'boxicons/css/boxicons.min.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import JobComponent from '../Components/JobComponent';



function WorksSegment() {

  return (
    <div id='work-segment'>
      <h2>
        Work Experiences
      </h2>
      <br />
      <h5>Where I Worked</h5>

      <div style={styles.container}>
        <JobComponent JobTitle = 'Position worked in company' Company = 'Microsoft' Period = 'Jan 2022' Duration = '8 Months' Desc = "Lorem Ipsum" ></JobComponent>
        <JobComponent JobTitle = 'Position worked in company' Company = 'Microsoft' Period = 'Jan 2022' Duration = '8 Months' Desc = "Lorem Ipsum" ></JobComponent>
        <JobComponent JobTitle = 'Position worked in company' Company = 'Microsoft' Period = 'Jan 2022' Duration = '8 Months' Desc = "Lorem Ipsum" ></JobComponent>
        <JobComponent JobTitle = 'Position worked in company' Company = 'Microsoft' Period = 'Jan 2022' Duration = '8 Months' Desc = "Lorem Ipsum" ></JobComponent>
        <JobComponent JobTitle = 'Position worked in company' Company = 'Microsoft' Period = 'Jan 2022' Duration = '8 Months' Desc = "Lorem Ipsum" ></JobComponent>
        <JobComponent JobTitle = 'Position worked in company' Company = 'Microsoft' Period = 'Jan 2022' Duration = '8 Months' Desc = "Lorem Ipsum" ></JobComponent>

      </div>
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

export default WorksSegment;
