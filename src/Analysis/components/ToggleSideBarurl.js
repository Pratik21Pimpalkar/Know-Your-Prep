import React, { useState } from "react";
import "./ToggleSidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Assets/Logo/logo2.svg";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { NavBarData } from "./NavBarData";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import LogoutIcon from "@mui/icons-material/Logout";
const ToggleSidebar = ({ fetchSubject, subName, demoStatus }) => {
  const [isOpen, setIsopen] = useState(false);
  const [cookies, setCookie, RemoveCookie] = useCookies(["abcd"]);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const xyz = (key) => {
    ToggleSidebar();
    fetchSubject(key);
  };
  const handleLogOut = () => {
    RemoveCookie("o1kypuser");
    window.location.href = "/dashboard";
  };

  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <nav className="navbar navbar-expand-lg  shadow-md">
          <div className="container-fluid p-2">
            <div className="form-inline mr-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <MenuIcon />
              </div>
            </div>
            <h3
              style={{
                color: "white",
                marginRight: "auto",
                textTransform: "capitalize",
              }}
            >
              {subName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
            {/* <Button  className="mr-3" style={{backgroundColor:"#6f63e6",}} variant="contained" onClick={handleLogOut}>LOGOUT<LogoutIcon style={{    marginLeft: "0.2rem",
    paddingLeft: "0.2rem"}}/></Button> */}
            <Button
              className="mr-3"
              style={{ backgroundColor: "#6f63e6" }}
              variant="contained"
              onClick={demoStatus}
            >
              Start Demo
            </Button>
            <Link className="navbar-brand text-primary mr-0" to="/">
              <img
                className="brand-logo"
                src={Logo}
                alt="O(1) Coding Club"
                srcSet=""
              />
            </Link>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <Link to="/" className="navbar-brand text-primary mr-0">
              <img
                className="brand-logo"
                src={Logo}
                alt="O(1) Coding Club"
                srcSet=""
              />
            </Link>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <CloseIcon />
            </div>
          </div>
          <div className="sd-body">
            <div className="NavBarData">
              <ul className="NavBarList">
                {NavBarData.map((val, key) => {
                  return (
                    <li key={key} className="row">
                      <div id="icon" onClick={() => xyz(key)}>
                        {val.icon}
                        {"  "} {val.title}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default ToggleSidebar;
