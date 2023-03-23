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
import { Add, Remove } from "@mui/icons-material";
import GlassUpload from "./GlassUpload/GlassUpload";

const gridItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 20 },
};

const GlassDynamicForm = ({
  inputFields,
  setInputFields,
  inputFieldFormat,
  keyname,
  children,
}) => {
  const handleInputChange = (index, field, value) => {
    const values = [...inputFields];
    values[index][field] = value;
    setInputFields(values);
  };

  const handleAddFields = (fields) => {
    setInputFields(inputFields.concat(fields));
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <>
      {inputFields.map((inputField, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={`${keyname}-${index}`}>
          <motion.div
            variants={gridItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <GlassCard>
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                {children}
                {Object.keys(inputField).map((field) => {
                  if (field != "Image") {
                    return (
                      <GlassTextField
                        key={`${keyname}-${field}`}
                        name={field}
                        label={field}
                        variant="outlined"
                        value={inputField[field]}
                        onChange={(event) =>
                          handleInputChange(index, field, event.target.value)
                        }
                      />
                    );
                  } else {
                    return (
                      <GlassUpload
                        image={inputField[field]}
                        setImage={(value) => {
                          handleInputChange(index, field, value);
                        }}
                        key={`${keyname}-${field}`}
                      />
                    );
                  }
                })}
                <GlassButton
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  <Remove />
                </GlassButton>
              </Box>
            </GlassCard>
          </motion.div>
        </Grid>
      ))}
      <Grid item xs={12} key={`${keyname}-add-button`}>
        <GlassButton
          sx={{ width: "100%" }}
          type="button"
          onClick={() =>
            handleAddFields(
              Object.keys(inputFieldFormat).reduce(
                (obj, key) => ({ ...obj, [key]: "" }),
                {}
              )
            )
          }
        >
          <Add />
        </GlassButton>
      </Grid>
    </>
  );
};

export default GlassDynamicForm;
