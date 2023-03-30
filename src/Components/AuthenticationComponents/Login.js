import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  GridItem,
  GridContainer,
  StyledButton,
  StyledInput,
  VerticalGridItem,
  LeftGridItem,
  RightGridItem,
  StyledAlert,
  StyledText,
} from "../../Pages/Authentication/StyleAuthentication";

const Login = ({ onClick }) => {
  const [incorrect, isIncorrect] = useState(false);
  const incorrectCredantials = () => {
    isIncorrect(!incorrect);
  };
  return (
    <GridContainer
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
        <StyledText variant='h4' type='title'>
          Login
        </StyledText>
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
    </GridContainer>
  );
};

export default Login;
