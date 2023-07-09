import React from "react";
import {
  AppBar,
  Box,
  Stack,
  styled,
  Container,
  Grid,
  Toolbar,
} from "@mui/material";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

import Circle from "../Circle";
import bg_final from "../../images/bg_homepage.png";
import "../TextContent/textStyle.css";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  fontFamily: "sans-serif",
});

const StackStyle = {
  color: "white",
  position: "absolute",
  top: "40vh",
  right: "3vw",
  lineHeight: "2px",
  fontSize: "2px",
};

const iconStyle = {
  color: "white",
};

const Home = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: "url(" + bg_final + ")",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "transparent" }}
        >
          <StyledToolbar flex={1}>
            <Box></Box>
          </StyledToolbar>
        </AppBar>

        <Container
          maxWidth={"lg"}
          className="content"
          style={{ marginTop: "2%", marginBottom: "10%" }}
        >
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            wrap={"wrap-reverse"}
          >
            <Grid item md={8} sm={7} xs={12} style={{ zIndex: "1" }}>
              <div className="head">
                <h6 className="sidehead">An O(1) Product</h6>
                <p className="heroName">
                  <span className="firsthead">Know Your </span>
                  <span className="firsthead">&nbsp;Prep</span>
                </p>
              </div>

              <Typography className="para">
                <Typography fontSize={"x-large"} fontWeight={"bold"}>
                  Afraid of the upcoming placements?
                </Typography>
                Know-Your-Prep is a tool that helps you judge your preparation
                for placements. Get detailed analysis of your strong and weak
                areas and see where you stand with our{" "}
                <b>Placement Readiness Score</b> and what to do next to succeed.
              </Typography>

              <div className="btn-container">
                <button
                  className="btn-giveTest"
                  onClick={(event) => (window.location.href = "/register")}
                >
                  Register
                </button>
                <button
                  className="btn-giveTest"
                  onClick={(event) => (window.location.href = "/login")}
                >
                  Login
                </button>
              </div>
            </Grid>
            <Grid item md={4} sm={5} xs={8}>
              <Circle />
            </Grid>
          </Grid>
        </Container>

        <Stack style={StackStyle}>
          <a
            href="https://www.linkedin.com/in/o-1-coding-club/?originalSubdomain=in"
            target="_blank"
          >
            <LinkedInIcon sx={iconStyle} />
          </a>

          <a href="https://t.me/+diEKUu4Y-oY3NDFl" target="_blank">
            <TelegramIcon sx={iconStyle} />
          </a>
          <a
            href="https://www.instagram.com/o1codingclub/?hl=en"
            target="_blank"
          >
            <InstagramIcon sx={iconStyle} />
          </a>

          <a
            href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
            target="_blank"
          >
            <YouTubeIcon sx={iconStyle} />
          </a>
        </Stack>
      </div>
    </>
  );
};

export default Home;
