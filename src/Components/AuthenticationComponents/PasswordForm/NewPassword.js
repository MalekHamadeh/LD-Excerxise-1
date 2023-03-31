import React from "react";
import {
  GridContainer,
  GridItem,
  StyledInput,
} from "../../../Pages/Authentication/StyleAuthentication";

const NewPassword = () => {
  return (
    <GridContainer>
      <GridItem>
        <StyledInput placeholder='Enter your new password' />
      </GridItem>
    </GridContainer>
  );
};

export default NewPassword;
