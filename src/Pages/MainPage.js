import "Pages/MainPage.css";
import * as React from "react";
import Button from "@mui/material-next/Button";
import "boxicons/css/boxicons.min.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import SkillsSegment from "Segments/SkillsSegment";
import WorksSegment from "Segments/WorksSegment";
import ProjectsSegment from "Segments/ProjectsSegment";
import HeroSegment from "Segments/HeroSegment";
import { useLocation } from "react-router";
import db from "Components/firebase";

function MainPage() {
  // const location = useLocation();

  // const {
  //   unityProvider,
  //   UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  // } = useUnityContext({
  //   loaderUrl: "./unity/webgl-test.loader.js",
  //   dataUrl: "./unity/webgl-test.data",
  //   frameworkUrl: "./unity/webgl-test.framework.js",
  //   codeUrl: "./unity/webgl-test.wasm",
  // });

  // const [tabIndex, setTabIndex] = useState(0);

  // const handleTabChange = (event, newTabIndex) => {
  //   detachAndUnloadImmediate().catch((reason) => {
  //     console.log(reason);
  //   });
  //   setTabIndex(newTabIndex);
  // };

  // useEffect(() => {
  //   return () => {
  //     detachAndUnloadImmediate().catch((reason) => {
  //       console.log(reason);
  //     });
  //   };
  // }, [detachAndUnloadImmediate]);

  const [portfolioData, setPortfolioData] = useState();

  const getData = async () => {
    const docData = await db
      .collection("user preference")
      .doc("portfolio ricky data")
      .get()
      .then((data) => {
        setPortfolioData(data.data());
        // console.log(data.data());
      })
      .catch((error) => {
        console.error("Error retrieving document: ", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {portfolioData ? (
          <>
            <HeroSegment
              Name={portfolioData?.FirstName}
              HeroText={portfolioData?.HeroText}
              HeroTagline={portfolioData.HeroTagline}
            ></HeroSegment>
            <SkillsSegment></SkillsSegment>
            <WorksSegment workHistory={portfolioData?.work}></WorksSegment>
            <ProjectsSegment
              projects={portfolioData?.project}
            ></ProjectsSegment>
          </>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
}

export default MainPage;
