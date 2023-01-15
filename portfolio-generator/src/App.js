import './App.css';
import * as React from 'react';
import Button from '@mui/material-next/Button';
import 'boxicons/css/boxicons.min.css';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import SkillsSegment from './Segments/SkillsSegment';
import WorksSegment from './Segments/WorksSegment';
import ProjectsSegment from './Segments/ProjectsSegment';
import HeroSegment from './Segments/HeroSegment';



function App() {
  const { unityProvider, UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate } = useUnityContext({
    loaderUrl: "./unity/webgl-test.loader.js",
    dataUrl: "./unity/webgl-test.data",
    frameworkUrl: "./unity/webgl-test.framework.js",
    codeUrl: "./unity/webgl-test.wasm",
  });

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    detachAndUnloadImmediate().catch((reason) => {
      console.log(reason);
    });
    setTabIndex(newTabIndex);
  };

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  return (
    <div className="App">
      <header className="App-header">
        <HeroSegment></HeroSegment>
        <SkillsSegment></SkillsSegment>
        <WorksSegment></WorksSegment>
        <ProjectsSegment></ProjectsSegment>
      </header>
    </div>
  );
}

export default App;
