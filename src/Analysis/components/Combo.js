import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Bannerimg from "../Assets/banner.png";
import Comboleft from "../Assets/combo_left.png";
import ComboRight from "../Assets/combo_right.png";
import ComboMid from "../Assets/combo_mid.png";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "90%",
    margin: "0 auto",
  },
  mar: {
    marginTop: "2%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mar2: {
    marginTop: "6%",
  marginBottom:"2rem",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  imgBig: {
    width: "100%",
  marginBottom:"2rem",
    borderRadius:"10px",
  },
  imgSmall: {
    width: "100%",
  },
}));

export default function Combo() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <a href="https://www.o1codingclub.in/" target="_blank">
      <div className={classes.mar}>
        <img src={Bannerimg} className={classes.imgBig} />
      </div>

      <div className={classes.mar2}>
        <img src={Comboleft} className={classes.imgSmall} />
        <img src={ComboMid} className={classes.imgSmall} />
        <img src={ComboRight} className={classes.imgSmall} />
      </div>
      </a>
    </div>
  );
}
