import React from "react";
import styled from "styled-components";
import { Button, Container, Grid } from "@mui/material";

const PageNotFound = () => {
  return (
    <Wrapper>
      <Error>
        <h2>#404 Page Not Found</h2>
        <Button size="large "variant="outlined">Back to Home</Button>
      </Error>
    </Wrapper>
  );
};
const Error = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  border-radius: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default PageNotFound;
