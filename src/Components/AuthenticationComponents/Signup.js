import React, { useContext } from "react";
import FormInputs from "./FormInputs";
import {
  GridContainer,
  GridItem,
  StyledButton,
  StyledInput,
  StyledText,
} from "../../Pages/Authentication/StyleAuthentication";
import SignUpContext from "../../Utils/SignUpContext/SignUpContext";

const Signup = ({ onClick, successfulSignUp }) => {
  const { title, step, setStep } = useContext(SignUpContext);

  const goToLogin = () => {
    onClick("Login");
    successfulSignUp(true);
  };
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <GridContainer
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <GridItem xs={1} />
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='h4' type='title'>
          Sign Up
        </StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='p'>{title[step]}</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <FormInputs from='signup' />
      </GridItem>
      <GridItem xs={1}>
        {step !== 2 ? (
          <StyledButton variant='contained' onClick={handleNext}>
            Next
          </StyledButton>
        ) : (
          <StyledButton variant='contained' register={true} onClick={goToLogin}>
            Register
          </StyledButton>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Signup;
