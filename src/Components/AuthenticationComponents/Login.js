import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  GridItem,
  GridContainer,
  StyledButton,
  StyledInput,
  StyledAlert,
  StyledText,
} from "../../Pages/Authentication/StyleAuthentication";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";

const Login = ({ onClick, successfulPass, successfulSignUp }) => {
  const [incorrect, isIncorrect] = useState(false);
  const [showAlert, shouldShowAlert] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Navigate = useNavigate();

  const handleEmail = (e) => {
    emailRef.current.value = e.target.value;
  };
  const handlePassword = (e) => {
    passwordRef.current.value = e.target.value;
  };

  const canLogin = () => {
    emailRef.current.value !== undefined &&
    passwordRef.current.value !== undefined
      ? Navigate("/home")
      : isIncorrect(true);
  };

  const goToSignUp = () => {
    onClick("SignUp");
  };
  const goToForgotPassword = () => {
    onClick("ForgotPassword");
  };

  const alertController = () => {
    if (incorrect) {
      return (
        <Alert
          isError
          message='Please make sure you have the correct email or password'
        />
      );
    } else if (successfulPass) {
      return <Alert isSuccess message='Password was reset Successfully' />;
    } else if (successfulSignUp) {
      return <Alert isSuccess message='Account created Successfully' />;
    }
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
      <GridItem>{alertController()}</GridItem>
      <GridItem xs={1}>
        <StyledInput
          placeholder='Email'
          ref={emailRef}
          onChange={handleEmail}
        />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput
          placeholder='Password'
          ref={passwordRef}
          onChange={handlePassword}
        />
      </GridItem>
      <GridItem xs={1}>
        <StyledButton variant='contained' onClick={canLogin}>
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
