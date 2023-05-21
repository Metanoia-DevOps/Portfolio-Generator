import "Pages/MainPage.css";
import * as React from "react";
import Button from "@mui/material-next/Button";
import "boxicons/css/boxicons.min.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function SkillsSegment() {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    // loaderUrl: "./unity/webgl-test.loader.js",
    // dataUrl: "./unity/webgl-test.data",
    // frameworkUrl: "./unity/webgl-test.framework.js",
    // codeUrl: "./unity/webgl-test.wasm",
    loaderUrl: "./Build/MetanoiaWebgl.loader.js",
    dataUrl: "./Build/MetanoiaWebgl.data",
    frameworkUrl: "./Build/MetanoiaWebgl.framework.js",
    codeUrl: "./Build/MetanoiaWebgl.wasm",
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
    <div id="skills-segment">
      <i className="bx bxs-trophy"></i>
      <h5>top 90% of the marketplace</h5>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label={<h3 className="tab-label">Web Dev</h3>} />
          <Tab label={<h3 className="tab-label">AR/VR</h3>} />

          <Tab label={<h3 className="tab-label">UI/UX</h3>} />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <h4>HTML CSS REACTJS ANGULARJS THREEJS</h4>
            <h5>Perserverant Resilient Productive</h5>
            <br></br>
            <h5>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h5>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Unity style={{ width: "100%" }} unityProvider={unityProvider} />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <h2>The third tab</h2>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default SkillsSegment;
