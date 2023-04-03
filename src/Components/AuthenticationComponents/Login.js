import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  GridItem,
  GridContainer,
  StyledButton,
  StyledInput,
  StyledAlert,
  StyledText,
} from "../../Pages/Authentication/StyleAuthentication";

const Login = ({ onClick, successfulPass }) => {
  const [incorrect, isIncorrect] = useState(false);
  const incorrectCredantials = () => {
    isIncorrect(!incorrect);
  };
  const goToSignUp = () => {
    onClick("SignUp");
  };
  const goToForgotPassword = () => {
    onClick("ForgotPassword");
  };

  return (
    <GridContainer
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      {/* used to create whitespace between Title and Inputs*/}
      <GridItem />
      <GridItem />
      <GridItem xs={1}>
        <StyledText variant='h4' type='title'>
          Login
        </StyledText>
      </GridItem>
      <GridItem />
      <GridItem>
        {incorrect && (
          <StyledAlert severity='error'>
            Please make sure you have the correct email or password
          </StyledAlert>
        )}
        {successfulPass && (
          <StyledAlert severity='success'>
            Password was reset Successfully
          </StyledAlert>
        )}
      </GridItem>
      <GridItem xs={1}>
        <StyledInput placeholder='Email' />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput placeholder='Password' />
      </GridItem>
      <GridItem xs={1}>
        <StyledButton variant='contained' onClick={incorrectCredantials}>
          Login
        </StyledButton>
      </GridItem>
      <GridItem>
        <GridContainer direction='row' gap={30}>
          <GridItem>
            <Button onClick={goToForgotPassword}>Forgot Password?</Button>
          </GridItem>
          <GridItem>
            <Button onClick={goToSignUp}>I dont have an account</Button>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );
};

export default Login;
