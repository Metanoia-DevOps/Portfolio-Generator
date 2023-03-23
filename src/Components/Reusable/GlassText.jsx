import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const GlassTypography = styled(Typography)(({ size, textAlign }) => ({
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  borderRadius: "10px",
  color: "white",
  padding: "10px",
  fontSize: `${size}px`,
  fontWeight: "bold",
  textAlign: textAlign,
}));

export default function GlassmorphismText({
  children,
  size = 24,
  textAlign = "left",
}) {
  const [fontSize, setFontSize] = useState();

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const newFontSize = width / size;
      setFontSize(newFontSize);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <GlassTypography size={fontSize} textAlign={textAlign}>
        {children}
      </GlassTypography>
    </div>
  );
}
