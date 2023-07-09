import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Stackbargraph from "../../../Analysis/components/Stackbargraph";
import Data from "../../../app/DummyData/Data";
import LineGraph from "../../../Analysis/components/LineGraph";
import PieChart from "../../../Analysis/components/PieChart";
import ComparisonChart from "../../../Analysis/components/ComparisonChart";

const FeaturePosition = {
  color: "white",
  marginBottom: "4rem",
};
const FeatureParagraph = {
  background: "-webkit-linear-gradient(38deg, #ffffff, #c5c5c5, #4e4747)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  padding: "5rem 2rem",
  fontSize: "19px",
};
const dummyData = Data[0];

const FeatureSection = () => {
  return (
    <>
      <Container maxWidth="lg" style={FeaturePosition}>
        <Typography
          variant="h2"
          gutterBottom={true}
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <div className="section-title">
            <h2 style={{ fontSize: "2.5rem" }}>Features</h2>
            <span className="section-separator"></span>
          </div>
        </Typography>

        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <Stackbargraph
              StackBarLabel={dummyData.stackgraph.labels}
              StackBarSeries={dummyData.stackgraph.series}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">
                  Number of Correct and Incorrect Answers
                </h3>
                Analyse the number of correct and incorrect answers per subject
                and get to know where you need to work on.
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems={"center"}
          rowSpacing={1}
          columnSpacing={5}
          wrap={"wrap-reverse"}
        >
          <Grid item xs={12} sm={12} md={7} order={{ md: 2, lg: 1 }}>
            <Box sx={{ height: "max-content" }}>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Subject-wise Performance</h3>
                Graphically track your strongest and weakest subject based on
                your performance in the test so that you always have a chance to
                improve and work on your weak topics.
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} order={{ md: 1, lg: 2 }}>
            <LineGraph
              LineGraphLabel={dummyData.linegraph.labels}
              LineGraphSeries={dummyData.linegraph.series}
            />
          </Grid>
        </Grid>

        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={5}>
            <PieChart
              PieChartLabel={dummyData.piechart.labels}
              PieChartSeries={dummyData.piechart.series}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Overall Analysis:</h3>
                Analyse your contribution per subject based upon the questions
                you solved in <br />
                ● General Aptitude <br />
                ● Database Management System <br />
                ● Data Structures & Algorithms <br />
                ● Operating Systems <br />
                ● Computer Network <br />
                ● Object Oriented Programming <br />
                ● C, C++, Java, Python <br />
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid container alignItems={"center"} rowSpacing={1} columnSpacing={5}>
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <div style={FeatureParagraph}>
                <h3 className="heading-desktop">Level-Wise Performance</h3>
                Graphically track your strongest and weakest subject based on
                your performance in the test so that you always have a chance to
                improve and work on your weak topics.
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <ComparisonChart
              ComparisonChartLabel={dummyData.comparisonchart.labels}
              ComparisonChartSeries={dummyData.comparisonchart.series}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FeatureSection;
