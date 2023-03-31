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
import useSignUpContext from "../../Utils/SignUpContext/useSignUpContext";

const Signup = () => {
  const { title, step, setStep, data, setData, canContinue } =
    useSignUpContext();

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <GridContainer
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
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
          <StyledButton
            variant='contained'
            register={true}
            onClick={() => {
              console.log("registered");
            }}
          >
            Register
          </StyledButton>
        )}
      </GridItem>
    </GridContainer>
  );
};

export default Signup;
