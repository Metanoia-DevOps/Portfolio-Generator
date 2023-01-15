import '../App.css';
import * as React from 'react';
import Button from '@mui/material-next/Button';
import 'boxicons/css/boxicons.min.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import ProjectComponent from '../Components/ProjectComponent';



function ProjectsSegment() {

  return (
    <div id='work-segment'>
      <h2>
        Past Projects
      </h2>
      <br />
      <h5>What I did</h5>

      <div style={styles.container}>
        <ProjectComponent Image="https://img.freepik.com/premium-photo/work-home-concept-flatlay-aesthetic-minimalist-workspace-woman-write-notes-notebook_408798-8566.jpg" Name = 'Arduino' Desc = 'lorem ipsum' Period='Jan 2022' ></ProjectComponent>
        <ProjectComponent Image="https://img.freepik.com/premium-photo/work-home-concept-flatlay-aesthetic-minimalist-workspace-woman-write-notes-notebook_408798-8566.jpg" Name = 'Arduino' Desc = 'lorem ipsum' Period='Jan 2022' ></ProjectComponent>
        <ProjectComponent Image="https://img.freepik.com/premium-photo/work-home-concept-flatlay-aesthetic-minimalist-workspace-woman-write-notes-notebook_408798-8566.jpg" Name = 'Arduino' Desc = 'lorem ipsum' Period='Jan 2022' ></ProjectComponent>
        <ProjectComponent Image="https://img.freepik.com/premium-photo/work-home-concept-flatlay-aesthetic-minimalist-workspace-woman-write-notes-notebook_408798-8566.jpg" Name = 'Arduino' Desc = 'lorem ipsum' Period='Jan 2022' ></ProjectComponent>
        <ProjectComponent Image="https://img.freepik.com/premium-photo/work-home-concept-flatlay-aesthetic-minimalist-workspace-woman-write-notes-notebook_408798-8566.jpg" Name = 'Arduino' Desc = 'lorem ipsum' Period='Jan 2022' ></ProjectComponent>
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

export default ProjectsSegment;
