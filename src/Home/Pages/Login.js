import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
  Box,
  Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import CustomTextField from "../components/TextField/CustomTextField";
import login from "../images/login.svg";

// Redux Query
import { useUserLoginMutation } from "../../app/services/userCore";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["username", "o1kypuser"]);

  const [
    loginApiCall,
    { data: responseData, isLoading, isError, isSuccess, error },
  ] = useUserLoginMutation();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (userData.email.trim() === "") {
      toast.error("Please enter your email", {
        toastId: "loginEmailVal",
      });
      return;
    }

    if (userData.password.trim() === "") {
      toast.error("Please enter your password", {
        toastId: "loginPassVal",
      });
      return;
    }

    loginApiCall({
      email: userData.email,
      password: userData.password,
    });
  };

  if (isSuccess) {
    const token = responseData.token;
    const name = responseData.name;
    localStorage.setItem("username", responseData.name);
    localStorage.setItem("o1kypuser", responseData.token);

    setCookie("o1kypuser", token, { maxAge: 21600 });
    setCookie("username", name, { maxAge: 21600 });

    toast.success("Login Successfull", {
      toastId: "success",
    });

    navigate("/dashboard");
  } else if (isError) {
    if (error.status === "FETCH_ERROR") {
      toast.error("Error in connecting to backend. Contact admin.", {
        toastId: "unableToConnect",
      });
      return;
    }
    toast.error(error.data.message, {
      toastId: "invalidCred",
    });
  }

  return (
    <>
      {isLoading && (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1000,
          }}
          open={true}
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      <Modal
        sx={{ overflowY: "scroll" }}
        keepMounted
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form>
            <Grid
              container
              maxWidth={"md"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
              style={{
                backgroundColor: "rgba(40,44,75, 0.8)",
                padding: "3rem",
                boxShadow: 12,
              }}
            >
              <Grid item md={6} xs={12} display={{ md: "block", xs: "block" }}>
                <img
                  src={login}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                style={{ textAlign: "center", color: "#fff" }}
              >
                <Typography
                  variant="h4"
                  style={{
                    textAlign: "center",
                    marginTop: "3%",
                    fontWeight: "bold",
                  }}
                >
                  Know Your Prep
                </Typography>
                <CustomTextField
                  margin={"dense"}
                  fullWidth
                  name="email"
                  type="email"
                  label="Email"
                  onChange={handleInputs}
                  value={userData.email}
                  variant="filled"
                  color="secondary"
                  required
                />
                <CustomTextField
                  margin={"dense"}
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  onChange={handleInputs}
                  value={userData.password}
                  variant="filled"
                  color="secondary"
                  required
                />
                <button
                  className="btn-giveTest"
                  onClick={handleLogin}
                  style={{ marginTop: "1rem", position: "static" }}
                >
                  Login
                </button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        pauseOnHover
      />
    </>
  );
};

export default Login;
