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
          <StyledAlert severity='warning'>
            Please make sure you have the correct email or password
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
      <VerticalGridItem>
        <LeftGridItem>
          <Button onClick={() => onClick("ForgotPassword")}>
            Forgot Password?
          </Button>
        </LeftGridItem>
        <RightGridItem>
          <Button onClick={() => onClick("SignUp")}>
            {" "}
            I dont have an account{" "}
          </Button>
        </RightGridItem>
      </VerticalGridItem>
    </GridContainer>
  );
};

export default Login;
