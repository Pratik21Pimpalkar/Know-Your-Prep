import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import {
  useGetGraphDataQuery,
  useGetTestLinkQuery,
  useUserAnalyseMutation,
  useGetRanklistQuery,
} from "../../app/services/userCore";
import test from "../Assets/test.png";
import bulb from "../Assets/bulb.png";
import Logo from "../Assets/Logo/logo2.svg";

import Demo from "./demo";
import { NavBarData } from "../components/NavBarData";
import FooterNew from "../../Home/components/Footer/FooterNew";
import LineGraph from "../components/LineGraph";
import StackbarGraph from "../components/Stackbargraph";
import PieChart from "../components/PieChart";
import ComparisonChart from "../components/ComparisonChart";
import RankTableAK from "../components/RankTableAK";
import "../components/ToggleSidebar.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Instructions from "../components/Instructions";

const CardContents = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "#F4F4FF",
  minHeight: "25rem",
  maxHeight: "25rem",
  padding: "2rem",
});

const CardContentsMobile = styled(CardContent)({
  color: "#F4F4FF",
  padding: "2rem",
});

const Dashboard = () => {
  const [subName, setSubName] = useState("Overall");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([
    "username",
    "o1kypuser",
  ]);
  const name = cookies.username;
  const [demostatus, setDemostatus] = useState(true);
  const [testLink, setTestLink] = useState("#");
  const [isDisabledTestLinkBtn, setIsDisabledTestLinkBtn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [ranklistType, setRanklistType] = useState("global");

  const {
    data: dataTestLink,
    isLoading: isLoadingGetTestLink,
    isSuccess: isSuccessTestLink,
    isError: isErrorTestLink,
    error: errorTestLink,
  } = useGetTestLinkQuery();

  useEffect(() => {
    if (isErrorTestLink) {
      try {
        toast.error(errorTestLink.data.message, {
          toastId: "errorTestLink",
        });
        console.log("Error in getTestLink -", errorTestLink);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! Contact admin.", {
          toastId: "networkError1",
        });
      }
    } else if (isSuccessTestLink) {
      setIsDisabledTestLinkBtn(false);
      toast.success("Testlink fetched", {
        toastId: "successGraph",
      });
      setTestLink(dataTestLink.data.testLink);
    }
  }, [errorTestLink, isSuccessTestLink, isErrorTestLink]);

  const {
    data: dataGraph,
    isFetching: isFetchingGraph,
    isError: isErrorGraph,
    isSuccess: isSuccessGraph,
    error: errorGraph,
  } = useGetGraphDataQuery(subName);

  useEffect(() => {
    if (isSuccessGraph) {
      toast.success("Graphs generated", {
        toastId: "successGraph",
      });
    } else if (isErrorGraph) {
      try {
        toast.error(errorGraph.data.message, {
          toastId: "errorGraph",
        });
        console.log("Error in fetchGraphData -", errorGraph);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! Contact admin.", {
          toastId: "networkError2",
        });
      }
    }
  }, [errorGraph, isSuccessGraph, isErrorGraph]);

  const {
    data: dataRanklist,
    isFetching: isFetchingRanklist,
    isError: isErrorRanklist,
    isSuccess: isSuccessRanklist,
    error: errorRanklist,
  } = useGetRanklistQuery(ranklistType);

  useEffect(() => {
    if (isSuccessRanklist) {
      toast.success("Ranklist fetched", {
        toastId: "successRanklist",
      });
    } else if (isErrorRanklist) {
      try {
        toast.error(errorRanklist.data.message, {
          toastId: "errorRanklist",
        });
        console.log("Error in errorRanklist -", errorRanklist);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! Contact admin.", {
          toastId: "networkError3",
        });
      }
    }
  }, [errorRanklist, isSuccessRanklist, isErrorRanklist]);

  const [
    analyseApiCall,
    {
      data: dataAnalysis,
      isLoadingAnalysis,
      isErrorAnalysis,
      isSuccessAnalysis,
      errorAnalysis,
    },
  ] = useUserAnalyseMutation();

  const handleAnalysisApiCall = () => {
    analyseApiCall().then((value) => {
      toast.success(value.data.message, {
        toastId: "successAnalysis",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  };

  const handleLogOut = () => {
    removeCookie("o1kypuser");
    localStorage.removeItem("o1kypuser");
    localStorage.removeItem("username");
    navigate("/");
  };

  useEffect(() => {
    console.log("Triggered subName");
  }, [subName]);

  // useEffect(() => {
  //   if ("democookie" in cookies) {
  //     setDemostatus(false);
  //   } else {
  //     setDemostatus(true);
  //     setTimeout(() => {
  //       setCookie("democookie", "done");
  //     }, 100);
  //   }
  // }, [0]);
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div>
        {isFetchingGraph && (
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

        <div className="container-fluid mt-3 mb-3">
          <nav className="navbar navbar-expand-lg  shadow-md">
            <div className="container-fluid p-2">
              <div className="form-inline mr-auto">
                <div
                  className="btn btn-primary"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon />
                </div>
              </div>
              <h3
                style={{
                  color: "white",
                  marginRight: "auto",
                  textTransform: "capitalize",
                  textAlign: "center",
                }}
              >
                {subName}
              </h3>
              <Button
                href="https://chat.whatsapp.com/FoK6M7Kff4f3ewClTvIcqD"
                target={"_blank"}
                rel="noopener noreferrer"
                className="mr-3"
                style={{ backgroundColor: "#6f63e6", color: 'white' }}
                variant="contained"
              >
                Join WhatsApp Group
              </Button>
              <Button
                className="mr-3"
                style={{ backgroundColor: "#6f63e6" }}
                variant="contained"
                onClick={handleLogOut}
              >
                LOGOUT
                <LogoutIcon
                  style={{ marginLeft: "0.2rem", paddingLeft: "0.2rem" }}
                />
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
              <div
                className="btn btn-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="sd-body">
              <div className="NavBarData">
                <ul className="NavBarList">
                  {NavBarData.map((val, key) => {
                    return (
                      <li key={key} className="row">
                        <div
                          id="icon"
                          onClick={() => {
                            setSubName(val.title);
                            setIsOpen(!isOpen);
                          }}
                        >
                          {val.icon} {"  "} {val.title}
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
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>

        <Container maxWidth="xl">
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              style={{
                backgroundColor: "rgb(111, 99, 230)",
                color: "rgb(255, 255, 255)",
              }}
            >
              Instructions
            </DialogTitle>
            <DialogContent
              style={{
                backgroundColor: "rgb(111, 99, 230)",
              }}
            >
              <DialogContentText
                id="alert-dialog-description"
                style={{
                  color: "rgb(255, 255, 255)",
                }}
              >
                <Instructions />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>No</Button>
              <Button
                href={isDisabledTestLinkBtn ? "#" : testLink}
                target={isDisabledTestLinkBtn ? "" : "_blank"}
                onClick={() =>
                  isDisabledTestLinkBtn
                    ? toast.error("You have already attempted the test")
                    : ""
                }
                autoFocus
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <Grid container spacing={2} rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 1,
                  minWidth: 275,
                  backgroundColor: "#6F63E6",
                }}
              >
                <CardContents className="user-detail">
                  <EmojiPeopleIcon
                    sx={{
                      boxShadow: 2,
                      fontSize: "4rem",
                      borderRadius: "2rem",
                      backgroundColor: "#7468F0",
                      padding: "0.3rem",
                    }}
                  />
                  <h2> Hello, {name}</h2>
                  <p> Nice to meet you! </p>
                </CardContents>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Card
                  className="overall-analysis"
                  sx={{
                    boxShadow: 2,
                    minWidth: 275,
                    backgroundColor: "#4267ff",
                    textAlign: "center",
                  }}
                >
                  <CardContents className="user-detail">
                    <div
                      style={{
                        borderRadius: "50%",
                        background: "#fff",
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginBottom: "4%",
                        height: "100px",
                        width: "100px",
                      }}
                    >
                      <img
                        src={bulb}
                        alt="Test Section"
                        style={{ borderRadius: "50%" }}
                        height={"100%"}
                        width={"100%"}
                      />
                    </div>

                    <h2> Know Your Prep Test </h2>
                    <p> Practice Daily, Improve Forever </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: isDisabledTestLinkBtn
                            ? "#666666"
                            : "#000",
                          color: "#8ea4ff",
                          cursor: isDisabledTestLinkBtn ? "not-allowed " : "",
                        }}
                        // href={isDisabledTestLinkBtn ? "#" : testLink}
                        // target={isDisabledTestLinkBtn ? "" : "_blank"}
                        // onClick={() =>
                        //   isDisabledTestLinkBtn
                        //     ? toast.error("You have already attempted the test")
                        //     : ""
                        // }
                        // disabled={isDisabledTestLinkBtn}
                        onClick={isDisabledTestLinkBtn ? "" : handleOpenDialog}
                      >
                        Start Test
                      </Button>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#000", color: "#8ea4ff" }}
                        onClick={handleAnalysisApiCall}
                      >
                        Analyse Test
                      </Button>
                    </div>
                  </CardContents>
                </Card>
              </Box>
            </Grid>

            {isSuccessGraph && (
              <>
                <Grid item xs={12} sm={6} md={4}>
                  <Box>
                    <Card
                      className="overall-analysis"
                      sx={{
                        boxShadow: 2,
                        minWidth: 275,
                        backgroundColor: "#10153B",
                      }}
                    >
                      <CardContents>
                        <PieChart
                          PieChartLabel={Object.keys(
                            dataGraph.data.subjecttopic_wise_scores
                          )}
                          PieChartSeries={Object.values(
                            dataGraph.data.subjecttopic_wise_scores
                          )}
                        />
                      </CardContents>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box>
                    <Card
                      className="correct-analysis"
                      sx={{
                        boxShadow: 2,
                        minWidth: 275,
                        backgroundColor: "#10153B",
                      }}
                    >
                      <CardContentsMobile>
                        <StackbarGraph
                          StackBarLabel={Object.keys(
                            dataGraph.data.subjecttopic_wise_count
                          )}
                          StackBarSeries={Object.values(
                            dataGraph.data.subjecttopic_wise_count
                          )}
                        />
                      </CardContentsMobile>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box>
                    <Card
                      className="subjectWise-analysis"
                      sx={{
                        boxShadow: 2,
                        minWidth: 275,
                        backgroundColor: "#10153B",
                      }}
                    >
                      <CardContentsMobile>
                        <LineGraph
                          LineGraphLabel={Object.keys(
                            dataGraph.data.subjecttopic_wise_scores
                          )}
                          LineGraphSeries={Object.values(
                            dataGraph.data.subjecttopic_wise_scores
                          )}
                        />
                      </CardContentsMobile>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Box>
                    <Card
                      className="subjectWise-analysis"
                      sx={{
                        boxShadow: 2,
                        minWidth: 275,
                        backgroundColor: "#10153B",
                      }}
                    >
                      <CardContentsMobile>
                        <ComparisonChart
                          ComparisonChartLabel={Object.keys(
                            dataGraph.data.levelwise_count
                          )}
                          ComparisonChartSeries={Object.values(
                            dataGraph.data.levelwise_count
                          )}
                        />
                      </CardContentsMobile>
                    </Card>
                  </Box>
                </Grid>
              </>
            )}

            {isSuccessRanklist && (
              <Grid item xs={12}>
                <Box>
                  <Card
                    className="rankTable"
                    sx={{
                      boxShadow: 2,
                      minWidth: 275,
                      backgroundColor: "#10153B",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        onClick={() => setRanklistType("global")}
                        variant="contained"
                        color="secondary"
                        style={{
                          marginTop: "1rem",
                          marginLeft: "1rem",
                          background: "#f4f4ff",
                          color: "#6f63e6",
                        }}
                        className={
                          ranklistType === "global" ? "active-btn" : ""
                        }
                      >
                        Global Ranklist
                      </Button>
                    </div>
                    <CardContentsMobile>
                      <RankTableAK ListToShow={dataRanklist.data} name={name} />
                    </CardContentsMobile>
                  </Card>
                </Box>
              </Grid>
            )}
          </Grid>

          {/* {demostatus ? <Demo demoStatus={demostatus} /> : ""} */}

          <FooterNew />
        </Container>
      </div>
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
    </div>
  );
};

export default Dashboard;
