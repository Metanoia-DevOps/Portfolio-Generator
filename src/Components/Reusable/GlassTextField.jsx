import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const GlassTextField = styled(TextField)({
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "none",
  borderRadius: "10px",
  color: "white",
  height: "50px",
  marginBottom: "20px",
  padding: "10px",
  fontSize: "16px",
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "16px",
    fontWeight: "bold",
    transform: "translate(14px, 16px) scale(1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.75)",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "bold",
  },
  "& .MuiInputBase-input": {
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
    paddingTop: "20px",
  },
  "& .MuiInputBase-input:focus": {
    outline: "none",
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.3)",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.7)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
});

export default GlassTextField;
