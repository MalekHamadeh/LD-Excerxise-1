import React from "react";
import {
  GridContainer,
  GridItem,
  StyledInput,
} from "../../../Pages/Authentication/StyleAuthentication";

const CreateAccount = () => {
  return (
    <GridContainer direction='column' gap={1}>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter Username' />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter password' />
      </GridItem>
    </GridContainer>
  );
};

export default CreateAccount;
