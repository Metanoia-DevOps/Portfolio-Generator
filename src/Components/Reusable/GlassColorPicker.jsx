import React, { useState } from "react";
import { Popover, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { ChromePicker } from "react-color";

const ColorPickerButton = styled(Button)({
  background: "transparent",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "20px",
  height: "30px",
  minWidth: "50px",
  padding: "0",
  margin: "0 10px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(20px)",

  color: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.2)",
  },
});

const ColorPicker = ({ color, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (newColor) => {
    onChange(newColor.hex);
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-picker-popover" : undefined;

  return (
    <Box>
      <ColorPickerButton
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        Select Color
      </ColorPickerButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <ChromePicker color={color} onChange={handleChange} />
      </Popover>
    </Box>
  );
};

export default ColorPicker;
