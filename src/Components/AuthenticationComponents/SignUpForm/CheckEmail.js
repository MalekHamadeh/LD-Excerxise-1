import React from "react";
import {
  GridContainer,
  GridItem,
  StyledInput,
} from "../../../Pages/Authentication/StyleAuthentication";

const CheckEmail = () => {
  return (
    <GridContainer>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter your email' />
      </GridItem>
    </GridContainer>
  );
};

export default CheckEmail;
