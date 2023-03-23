import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const GlassButton = styled(Button)({
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "none",
  color: "white",
  height: "50px",
  padding: "0 30px",
  marginBottom: "20px",
  fontSize: "16px",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.4)",
  },
  "&:focus": {
    outline: "none",
    boxShadow:
      "0 0 0 4px rgba(255, 255, 255, 0.3), inset 0 0 0 3px rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
  },
  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },
});

export default GlassButton;
