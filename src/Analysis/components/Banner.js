import React from "react";
import "./Banner.css";
import { Container, Typography } from "@mui/material";
import Combo from "./Combo";

const Banner = () => {
  // console.log(apti);
  return (
    <div className="banner-container">
      <div className="banner">
        <Container maxWidth="lg">
          <div
            style={{
              display: "flex",
              gap: "6rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Combo />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
