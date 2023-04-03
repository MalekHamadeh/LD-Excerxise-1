import React, { useContext } from "react";
import {
  GridContainer,
  GridItem,
  StyledButton,
  StyledText,
} from "../../Pages/Authentication/StyleAuthentication";
import FormInputs from "./FormInputs";
import PasswordContext from "../../Utils/PasswordContext/PasswordContext";

const ForgotPassword = ({ onClick }) => {
  const { title, step, setStep, data, setData, canContinue } =
    useContext(PasswordContext);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const returnToLogin = () => {
    onClick("Login");
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
          Forgot your password
        </StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <StyledText variant='p'>{title[step]}</StyledText>
      </GridItem>
      <GridItem xs={1} />
      <GridItem xs={1}>
        <FormInputs from='forgot' />
      </GridItem>
      {step !== 1 && (
        <>
          <GridItem xs={1}>
            <StyledButton variant='contained' onClick={handleNext}>
              Next
            </StyledButton>
          </GridItem>
          <GridItem xs={1}>
            <StyledButton variant='text' onClick={returnToLogin}>
              Go back
            </StyledButton>
          </GridItem>
        </>
      )}
      {step === 1 && (
        <GridItem xs={1}>
          <StyledButton variant='contained' onClick={returnToLogin}>
            Set New Password
          </StyledButton>
        </GridItem>
      )}
    </GridContainer>
  );
};

export default ForgotPassword;
