import React from "react";
import {
  GridContainer,
  GridItem,
  StyledInput,
} from "../../../Pages/Authentication/StyleAuthentication";

const CompanyInformation = () => {
  return (
    <GridContainer direction='column' gap={1}>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter Company Name' />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter Company Address' />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter Company Phone Number' />
      </GridItem>
      <GridItem xs={1}>
        <StyledInput placeholder='Enter Company Email' />
      </GridItem>
    </GridContainer>
  );
};

export default CompanyInformation;
