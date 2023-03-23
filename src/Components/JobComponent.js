import "Pages/MainPage.css";
import * as React from "react";
import Button from "@mui/material-next/Button";
import "boxicons/css/boxicons.min.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function JobComponent({ JobTitle, Company, Period, Duration, Desc }) {
  return (
    <div style={styles.background}>
      <h3 style={styles.textContent}>{JobTitle}</h3>
      <h5 style={styles.textContent}>{Company}</h5>
      <body style={styles.textContent}>{Desc}</body>
      <i className="bx bxs-user" style={styles.avatar}></i>
    </div>
  );
}

const styles = {
  background: {
    width: "20rem",
    padding: "2rem",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  textContent: {
    textAlign: "left",
  },
  avatar: {
    alignSelf: "start",
  },
};

export default JobComponent;
