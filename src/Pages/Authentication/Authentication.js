import React, { useEffect, useState } from "react";
import ForgotPassword from "../../Components/AuthenticationComponents/ForgotPassword";
import Login from "../../Components/AuthenticationComponents/Login";
import Signup from "../../Components/AuthenticationComponents/Signup";
import logo from "../../Images/FrameRoundRush.svg";
import {
  Outline,
  StyledPaper,
  Header,
  HeaderWrapper,
  StyledLogo,
} from "./StyleAuthentication";
import { SignUpProvider } from "../../Utils/SignUpContext/SignUpContext";
import { PasswordProvider } from "../../Utils/PasswordContext/PasswordContext";

const Authentication = () => {
  const [screen, setScreen] = useState("Login");
  const [successfulPass, setSuccessfulPass] = useState(false);
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);

  const handleScreens = (string) => {
    setScreen(string);
  };

  const handleSucceed = (boolean) => {
    setSuccessfulPass(boolean);
  };
  const handleSuccessfulSignUp = (boolean) => {
    setSuccessfulSignUp(boolean);
  };

  return (
    <Outline>
      <HeaderWrapper>
        <StyledLogo src={logo} />
        <Header>The Optimized Workflow </Header>
        <Header>Out Of The Box</Header>
      </HeaderWrapper>
      <StyledPaper elevation={3}>
        {screen === "Login" ? (
          <Login
            onClick={handleScreens}
            successfulPass={successfulPass}
            successfulSignUp={successfulSignUp}
          />
        ) : screen === "SignUp" ? (
          <SignUpProvider>
            <Signup
              onClick={handleScreens}
              successfulSignUp={handleSuccessfulSignUp}
            />
          </SignUpProvider>
        ) : (
          <PasswordProvider>
            <ForgotPassword
              onClick={handleScreens}
              didSucceed={handleSucceed}
            />
          </PasswordProvider>
        )}
      </StyledPaper>
    </Outline>
  );
};

export default Authentication;
