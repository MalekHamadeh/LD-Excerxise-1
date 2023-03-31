import React, { useState } from "react";
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

const Authentication = () => {
  const [screen, setScreen] = useState("Login");

  const handleScreens = (string) => {
    setScreen(string);
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
          <Login onClick={handleScreens} />
        ) : screen === "SignUp" ? (
          <Signup />
        ) : (
          <ForgotPassword onClick={handleScreens} />
        )}
      </StyledPaper>
    </Outline>
  );
};

export default Authentication;
