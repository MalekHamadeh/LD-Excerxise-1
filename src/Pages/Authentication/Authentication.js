import React, { useState } from "react";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import logo from "../../Images/FrameRoundRush.svg";
import {
  Outline,
  StyledPaper,
  Header,
  HeaderWrapper,
  StyledLogo,
} from "./StyleAuthentication";

const Authentication = () => {
  const [signedUp, isSignedUp] = useState(true);

  return (
    <Outline>
      <HeaderWrapper>
        <StyledLogo src={logo} />
        <Header>The Optimized Workflow </Header>
        <Header>Out Of The Box</Header>
      </HeaderWrapper>
      <StyledPaper elevation='3'>
        {signedUp ? <Login /> : <Signup />}
      </StyledPaper>
    </Outline>
  );
};

export default Authentication;
