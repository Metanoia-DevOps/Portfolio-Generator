import React from "react";
import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const GlassCard = styled(Card)({
  borderRadius: "10px",
  backgroundColor: "rgba(200, 200, 200, 0.15)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  margin: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "24px",
  padding: "1rem",
});

export default GlassCard;
