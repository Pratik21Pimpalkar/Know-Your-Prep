import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import login from "../../images/login.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    key: "",
    college: "",
  });

  const [loading, setLoading] = useState(false);
  const [clgList, setClgList] = useState([
    "Shri Ramdeobaba College of Engineering and Management",
  ]);
  const [testlink, setTestLink] = useState("");
  let navigate = useNavigate();
  const getCollegeName = async () => {
    const fetchNames = await axios.get(`http://localhost:8000/college_list`);
    setClgList(fetchNames.data.clg_names);
  };
  const getTestlink = async () => {
    const link = await axios.get(`http://localhost:8000/testlink`);
    setTestLink(link.data.link);
  };
  useEffect(() => {
    getTestlink();
    getCollegeName();
  }, []);

  let key, value;
  const handleInputs = (e) => {
    key = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [key]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      userData.name.length == 0 ||
      userData.email.length == 0 ||
      userData.mobile.length != 10 ||
      userData.college.length == 0 ||
      userData.key.length == 0
    ) {
      setLoading(false);
      toast.error("Fields Empty");
    } else {
      axios
        .post(`http://localhost:8000/auth/register`, userData)
        .then((res) => {
          setLoading(false);
          toast.success("User Register Successfully");
          setUserData({
            name: "",
            email: "",
            mobile: "",
            key: "",
            college: "",
          });
          window.location = testlink;
          props.handleClose();
        })
        .catch(function (error) {
          setLoading(false);
          if (error.response.data === "EMAIL ALREADY EXIST")
            toast.error("Email Already Exist.");
          else if (error.response.data === "INVALID DATA")
            toast.warn("Please fill all the fields.");
          else if (error.response.data === "WRONG KEY")
            toast.warn("Wrong Key.");
          else {
            // console.log(error.response);
            toast.warn("Something goes wrong. Please try again.");
          }
          // props.handleClose();
        });
    }
  };

  return (
    <>
      <Container
        maxWidth={"md"}
        style={{
          backgroundColor: "#fff",
          borderRadius: "1rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
          style={{ padding: "3rem" }}
        >
          <Grid item md={6} xs={6} display={{ md: "block", xs: "none" }}>
            <img
              src={login}
              alt=""
              srcSet=""
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              margin={"dense"}
              fullWidth
              type="email"
              onChange={handleInputs}
              value={userData.email}
              name="email"
              id="standard-basic"
              label="Email"
              variant="filled"
              color="secondary"
              required
            />
            <TextField
              margin={"dense"}
              fullWidth
              onChange={handleInputs}
              value={userData.name}
              name="name"
              color="secondary"
              id="standard-basic"
              label="Student's Name"
              variant="filled"
              required
            />
            <TextField
              margin={"dense"}
              fullWidth
              onChange={handleInputs}
              name="key"
              type="password"
              color="secondary"
              value={userData.key}
              id="standard-basic"
              label="Key"
              variant="filled"
              required
            />
            <TextField
              margin={"dense"}
              color="secondary"
              fullWidth
              select
              onChange={handleInputs}
              value={userData.college}
              name="college"
              id="standard-basic"
              label="College Name"
              variant="filled"
              required
            >
              {clgList.map((option, key) => (
                <MenuItem key={key} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Typography style={{ textAlign: "center", fontSize: "10" }}>
              Your college not in list?{" "}
              <a
                href="https://www.linkedin.com/in/o-1-coding-club"
                target={"_blank"}
              >
                Contact Us
              </a>
            </Typography>
            <TextField
              margin={"dense"}
              color="secondary"
              fullWidth
              onChange={handleInputs}
              value={userData.mobile}
              name="mobile"
              id="standard-basic"
              label="Mobile"
              type="number"
              variant="filled"
              required
            />
            <Button
              variant="contained"
              color="secondary"
              size={"lg"}
              onClick={submitData}
              style={{ marginTop: "1rem" }}
            >
              {loading ? (
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={true}
                >
                  <CircularProgress color="secondary" />
                </Backdrop>
              ) : (
                <span>Give Test</span>
              )}
            </Button>
          </Grid>
        </Grid>
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
      </Container>
    </>
  );
};

export default RegisterForm;
