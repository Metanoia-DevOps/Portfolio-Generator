import "Pages/MainPage.css";
import * as React from "react";
import "boxicons/css/boxicons.min.css";
import { Box, Tab, Tabs, TextField, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import SkillsSegment from "Segments/SkillsSegment";
import WorksSegment from "Segments/WorksSegment";
import ProjectsSegment from "Segments/ProjectsSegment";
import HeroSegment from "Segments/HeroSegment";
import GlassCard from "Components/Reusable/GlassCard";
import GlassTextField from "Components/Reusable/GlassTextField";
import { styled } from "@mui/system";
import GlassButton from "Components/Reusable/GlassButton";
import { AnimatePresence, motion } from "framer-motion";
import GlassText from "Components/Reusable/GlassText";
import GlassDynamicForm from "Components/Reusable/GlassDynamicForm";
import GlassColorPicker from "Components/Reusable/GlassColorPicker";
import { getRoute } from "Utils/routes";
import { useNavigate } from "react-router";
import GlassUpload from "Components/Reusable/GlassUpload/GlassUpload";
import db from "Components/firebase";

//await db.collection("myCollection").get();

const Background = styled("div")({
  background:
    "linear-gradient(45deg, #92a8d1, #b2c8d9, #e0d2e4, #eaceb4, #a8cfd6)",
  height: "100%",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
});

const gridItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 20 },
};

const myObject = {
  name: "Ricky",
  age: 27,
  email: "ricky@example.com",
};

const SetupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log(data);
    const docRef = await db
      .collection("user preference")
      .doc("portfolio data")
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const workFieldFormat = {
    JobTitle: "",
    Company: "",
    Period: "",
    Duration: "",
    Desc: "",
  };
  const projectFieldFormat = {
    Image: "",
    Name: "",
    Desc: "",
    Period: "",
  };
  const skillFieldFormat = { Title: "", Proficiency: "", Desc: "" };
  const [workFields, setWorkFields] = useState([workFieldFormat]);
  const [skillFields, setSkillFields] = useState([skillFieldFormat]);
  const [projectFields, setProjectFields] = useState([projectFieldFormat]);
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    TitleProfession: "",
    Intro: "",
    Socials: "",
    Email: "",
  });
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box style={{ padding: "1rem" }}>
      <Background />
      <Box>
        <Grid container spacing={2}>
          <AnimatePresence layout>
            <Grid item xs={12} sm={12} md={12} lg={12} key={"SetupText"}>
              <GlassText>Setup</GlassText>
            </Grid>

            <Grid item xs={12} key={"UserDataForm"}>
              <Grid container spacing={2} sx={{ display: "flex" }}>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <GlassTextField
                    value={values.FirstName}
                    label={"First Name"}
                    name={"FirstName"}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <GlassTextField
                    value={values.LastName}
                    label={"Last Name"}
                    name={"LastName"}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <GlassTextField
                    value={values.Email}
                    label={"Email"}
                    name={"Email"}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <GlassTextField
                    label={"Title/Profession"}
                    name={"TitleProfession"}
                    value={values.TitleProfession}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <GlassTextField
                    label={"Introduction"}
                    name={"Intro"}
                    value={values.Intro}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <GlassTextField
                    label={"Link to social media"}
                    name={"Socials"}
                    value={values.Socials}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} key={"ProjectsText"}>
              <GlassText>Projects</GlassText>
            </Grid>

            <GlassDynamicForm
              key={"project"}
              inputFields={projectFields}
              setInputFields={setProjectFields}
              keyname={"project"}
              inputFieldFormat={projectFieldFormat}
            />

            <Grid item xs={12} key={"WorkText"}>
              <GlassText>Work Experience</GlassText>
            </Grid>

            <GlassDynamicForm
              key={"work"}
              inputFields={workFields}
              setInputFields={setWorkFields}
              keyname={"work"}
              inputFieldFormat={workFieldFormat}
            />

            <Grid item xs={12} key={"EducationText"}>
              <GlassText>Education History</GlassText>
            </Grid>
            <GlassDynamicForm
              key={"skill"}
              inputFields={skillFields}
              setInputFields={setSkillFields}
              keyname={"skill"}
              inputFieldFormat={skillFieldFormat}
            />
          </AnimatePresence>
        </Grid>

        <GlassColorPicker color={color} onChange={handleColorChange} />
        <GlassButton
          sx={{ width: "100%" }}
          type="button"
          onClick={() => {
            handleSubmit({
              ...values,
              work: workFields,
              skill: skillFields,
              project: projectFields,
            });
            // navigate(getRoute("Main"), {
            //   state: {
            //     ...values,
            //     work: workFields,
            //     skill: skillFields,
            //     project: projectFields,
            //   },
            // });
          }}
        >
          Generate!
        </GlassButton>
      </Box>
    </Box>
  );
};

export default SetupPage;
