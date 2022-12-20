import './App.css';
import * as React from 'react';
import Button from '@mui/material-next/Button';
import 'boxicons/css/boxicons.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='hero-segment'>
          <div id='hero-header'>
          <i className='bx bxl-instagram'></i>
          <h4 id='name-logo'>Ricky</h4>
          <div className='row-container'>
            <h5>MENU</h5>
          <i class='bx bx-menu' ></i>
          </div>
          </div>
          <h1>Craftmanship</h1>
          <h4 style={{paddingBlock:'2rem'}}>The blend between creativity and technology</h4>
          <Button variant="contained" color="#FFFFFF" style={{paddingBlock: '1.5rem', paddingInline: '3rem'}}><h4>Download My Resume</h4></Button>
        </div>
        <div id='skills-segment'>
          <h4>HTML CSS REACTJS ANGULARJS THREEJS</h4>
          <h5>Perserverant Resilient Productive</h5>
          <h5>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h5>
        </div>
        <div id='work-segment'>
          <h2>
            Work Experiences
          </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
