import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  GridItem,
  LoginGrid,
  StyledButton,
  StyledInput,
  Title,
  VerticalGridItem,
  LeftGridItem,
  RightGridItem,
  StyledAlert,
} from "./StyledLogin";

const Login = ({ onClick }) => {
  const [incorrect, isIncorrect] = useState(false);
  const incorrectCredantials = () => {
    isIncorrect(!incorrect);
  };
  return (
    <LoginGrid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      {/* used to create whitespace between Title and Inputs*/}
      <GridItem item />
      <GridItem item />
      <GridItem item xs={1}>
        <Title variant='h4'>Login</Title>
      </GridItem>
      <GridItem item />
      <GridItem item>
        {incorrect && (
          <StyledAlert severity='warning'>
            Please make sure you have the correct email or password
          </StyledAlert>
        )}
      </GridItem>
      <GridItem item xs={1}>
        <StyledInput placeholder='Email' />
      </GridItem>
      <GridItem item xs={1}>
        <StyledInput placeholder='Password' />
      </GridItem>
      <GridItem item xs={1}>
        <StyledButton variant='contained' onClick={incorrectCredantials}>
          Login
        </StyledButton>
      </GridItem>
      <VerticalGridItem item>
        <LeftGridItem item>
          <Button>Forgot Password?</Button>
        </LeftGridItem>
        <RightGridItem item>
          <Button onClick={() => onClick()}> I dont have an account </Button>
        </RightGridItem>
      </VerticalGridItem>
    </LoginGrid>
  );
};

export default Login;
