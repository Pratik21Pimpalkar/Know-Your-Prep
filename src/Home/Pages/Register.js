import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  MenuItem,
  Backdrop,
  CircularProgress,
  Box,
  Modal,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import register from "../images/Register.svg";
import {
  useUserRegisterMutation,
  useGetCollegeNamesQuery,
} from "../../app/services/userCore";

import CustomTextField from "../components/TextField/CustomTextField";

const Register = () => {
  let navigate = useNavigate();
  const branchNames = [
    "Aeronautical Engineering",
    "Aerospace Engineering",
    "Agriculture Engineering",
    "Artificial intelligence",
    "Artificial intelligence and machine learning",
    "Automobile Engineering",
    "Biomedical Engineering",
    "Biotechnology Engineering",
    "Ceramic Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Communications Engineering",
    "Computer Science Engineering",
    "Construction Engineering",
    "Cyber security",
    "Data Science",
    "Electrical Engineering",
    "Electronics & Communication Engineering",
    "Electronics Engineering",
    "Environmental Engineering",
    "Industrial Engineering",
    "Information Technology",
    "Marine Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Metallurgical Engineering",
    "Mining Engineering",
    "Petroleum Engineering",
    "Power Engineering",
    "Production Engineering",
    "Robotics Engineering",
    "Structural Engineering",
    "Telecommunication Engineering",
    "Textile Engineering",
    "Tool Engineering",
    "Transportation Engineering",
  ];

  const graduationYears = [
    2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
  ];

  const [
    registerUser,
    {
      isLoading: isLoadingUserRegister,
      isError: isErrorUserRegister,
      isSuccess: isSuccessUserRegister,
      error: errorUserRegister,
    },
  ] = useUserRegisterMutation();

  const {
    data: dataCollegeNames,
    isLoading: isLoadingGetCollegeNames,
    isSuccess: isSuccessCollegeNames,
  } = useGetCollegeNamesQuery();

  const [userData, setUserData] = useState({
    name: "",
    mobileno: "",
    college: "",
    branch: "",
    graduationYear: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  let key, value;
  const handleInputs = (e) => {
    key = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [key]: value });
  };
  const KeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter") submitData();
  };
  const submitData = (e) => {
    e.preventDefault();

    if (
      userData.name.length === 0 ||
      userData.college.length === 0 ||
      userData.mobileno.length === 0 ||
      userData.email.length === 0 ||
      userData.password.length === 0 ||
      userData.branch.length === 0 ||
      userData.graduationYear === 0
    ) {
      toast.error("Please fill all fields", {
        toastId: "validationError1",
      });
      return;
    }

    if (userData.mobileno.length !== 10) {
      toast.error("Mobile no. is not 10 digits", {
        toastId: "validationError2",
      });
      return;
    }

    if (userData.password.length < 8) {
      toast.error("Password needs to be atleast 8 characters", {
        toastId: "validationError3",
      });
      return;
    }

    if (userData.password !== confirmPassword) {
      toast.error("Password and confirm password do not match", {
        toastId: "validationError4",
      });
      return;
    }

    registerUser(userData);
  };

  useEffect(() => {
    if (isSuccessUserRegister) {
      toast.success(
        "User Registered Successfully. Check your mail for verification code!",
        {
          toastId: "registerSuccess",
        }
      );
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } else if (isErrorUserRegister) {
      toast.error(errorUserRegister.data.message, {
        toastId: "registerError",
      });
    }
  }, [isSuccessUserRegister, isErrorUserRegister]);

  return (
    <>
      {(isLoadingUserRegister || isLoadingGetCollegeNames) && (
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
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <form>
          <Box
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <Container
              maxWidth={"lg"}
              style={{
                backgroundColor: "rgba(40,44,75, 0.8)",
                boxShadow: 12,
                paddingTop: "1rem",
                color: "white",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Know Your Prep
              </Typography>
              <Grid
                container
                spacing={4}
                justifyContent={"center"}
                alignItems={"center"}
                style={{ padding: "1rem" }}
              >
                <Grid item md={6} display={{ md: "block", xs: "none" }}>
                  <img
                    src={register}
                    alt=""
                    srcSet=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <CustomTextField
                    margin={"dense"}
                    fullWidth
                    onChange={handleInputs}
                    value={userData.name}
                    name="name"
                    color="secondary"
                    // id="standard-basic"
                    label=" Your Name"
                    variant="filled"
                    required
                  />

                  <CustomTextField
                    margin={"dense"}
                    color="secondary"
                    fullWidth
                    onChange={handleInputs}
                    value={userData.mobileno}
                    name="mobileno"
                    // id="standard-basic"
                    label="WhatsApp number"
                    type="number"
                    variant="filled"
                    required
                  />

                  <CustomTextField
                    margin={"dense"}
                    color="secondary"
                    fullWidth
                    select
                    onChange={handleInputs}
                    value={userData.college}
                    name="college"
                    // id="standard-basic"
                    label="College Name"
                    variant="filled"
                    required
                  >
                    {isSuccessCollegeNames &&
                      dataCollegeNames.colleges.map((option, key) => (
                        <MenuItem key={key} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                  </CustomTextField>

                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: "10",
                      color: "#fff",
                    }}
                  >
                    Your college not in list?{" "}
                    <a
                      href="https://www.linkedin.com/in/o-1-coding-club"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      DM us
                    </a>
                  </Typography>

                  <CustomTextField
                    margin={"dense"}
                    color="secondary"
                    fullWidth
                    select
                    onChange={handleInputs}
                    value={userData.branch}
                    name="branch"
                    // id="standard-basic"
                    label="Branch Name"
                    variant="filled"
                    required
                  >
                    {branchNames.map((option, key) => (
                      <MenuItem key={key} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </CustomTextField>

                  <CustomTextField
                    margin={"dense"}
                    color="secondary"
                    fullWidth
                    select
                    onChange={handleInputs}
                    value={userData.graduationYear}
                    name="graduationYear"
                    // id="standard-basic"
                    label="Graduation Year"
                    variant="filled"
                    required
                  >
                    {graduationYears.map((option, key) => (
                      <MenuItem key={key} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </CustomTextField>

                  <CustomTextField
                    margin={"dense"}
                    fullWidth
                    type="email"
                    onChange={handleInputs}
                    value={userData.email}
                    name="email"
                    // id="standard-basic"
                    label="Email"
                    variant="filled"
                    color="secondary"
                    autoComplete="none"
                    required
                  />

                  <CustomTextField
                    margin={"dense"}
                    fullWidth
                    type="password"
                    onChange={handleInputs}
                    value={userData.password}
                    name="password"
                    // id="standard-basic"
                    label="Password"
                    variant="filled"
                    color="secondary"
                    autoComplete="none"
                    required
                  />

                  <CustomTextField
                    margin={"dense"}
                    fullWidth
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    name="confirmPassword"
                    // id="standard-basic"
                    label="Confirm Password"
                    variant="filled"
                    color="secondary"
                    required
                  />
                </Grid>
                <button
                  className="btn-giveTest"
                  onKeyDown={KeyDown}
                  onClick={submitData}
                  style={{ marginTop: "1rem", position: "static" }}
                >
                  Register
                </button>
              </Grid>
            </Container>
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
            />
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default Register;
