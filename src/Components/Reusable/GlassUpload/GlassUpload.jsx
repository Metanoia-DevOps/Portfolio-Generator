import React, { useState } from "react";
import "./GlassUpload.css";
import GlassCard from "../GlassCard";
import GlassButton from "../GlassButton";

const GlassUpload = ({ image, setImage }) => {
  const handleUpload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <GlassCard sx={{ display: "flex", flexDirection: "column" }}>
      <div
        className="glass-upload"
        style={{ backgroundImage: `url(${image})` }}
      >
        <input type="file" onChange={handleUpload} />
      </div>
      <GlassButton
        sx={{ width: "auto", marginBottom: "5px", marginTop: "10px" }}
        onClick={() => {
          setImage("");
        }}
      >
        Remove
      </GlassButton>
    </GlassCard>
  );
};

export default GlassUpload;
