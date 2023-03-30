import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  GridContainer,
  GridItem,
  StyledAlert,
  StyledButton,
  StyledInput,
  StyledText,
  Title,
} from "../../Pages/Authentication/StyleAuthentication";

const Signup = () => {
  const [user, isUser] = useState(false);

  return (
    <GridContainer
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      <GridItem item xs={1} />
      <GridItem item xs={1} />
      <GridItem item xs={1}>
        <StyledText variant='h4' type='title'>
          Sign Up
        </StyledText>
      </GridItem>
      <GridItem item xs={1} />
      <GridItem item xs={1}>
        <StyledText variant='p'>
          {!user
            ? "Let's validate your email first"
            : "This email is already used in RoundRush"}
        </StyledText>
      </GridItem>
      <GridItem item xs={1} />
      <GridItem item xs={1}>
        {!user && <StyledInput placeholder='Insert your email' />}
      </GridItem>
      <GridItem item xs={1}>
        <StyledButton variant='contained'>
          {!user ? "next" : "Click here for authentication"}
        </StyledButton>
      </GridItem>
    </GridContainer>
  );
};

export default Signup;
