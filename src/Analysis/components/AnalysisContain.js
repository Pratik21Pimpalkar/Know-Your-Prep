import React from "react";
import LeetCode from "./LeetCode";
import LineGraph from "./LineGraph";
import StackbarGraph from "./StackbarGraph";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const StyledGrid=styled(Grid,{})({
  color: "#6b8068",
  backgroundColor:"#232531",

  borderRadius:"2rem", 
})


const Analysis = () => {
  return (
    <>
      <Grid
      boxShadow={1}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        justifySelf="center"
        spacing={2}
        xs={11}
        sx={{
          margin:1,
          padding: 1
        }}
      >
        <StyledGrid
          container
          item
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12} sm={4}>
            <LeetCode />
          </Grid>
          <Grid boxShadow={1}item xs={12} sm={5.5}>
            <LineGraph />
          </Grid>
        </StyledGrid>
        <Grid item xs={12} sm={8}>
          <StackbarGraph />
        </Grid>
      </Grid>
      
    </>
  );
};

export default Analysis;
