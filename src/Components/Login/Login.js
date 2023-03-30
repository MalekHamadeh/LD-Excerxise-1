import React from "react";
import {
  GridItem,
  LoginGrid,
  StyledButton,
  StyledInput,
  Title,
  VerticalGridItem,
} from "./StyledLogin";

const Login = () => {
  return (
    <LoginGrid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      <GridItem item xs={1}>
        <Title variant='h3'>Login</Title>
      </GridItem>
      <GridItem item />
      {/* used to create whitespace between Title and Inputs*/}
      <GridItem item />
      <GridItem item />
      <GridItem item xs={1}>
        <StyledInput placeholder='Email' />
      </GridItem>
      <GridItem item xs={1}>
        <StyledInput placeholder='Password' />
      </GridItem>
      <GridItem item xs={1}>
        <StyledButton variant='contained'> Login </StyledButton>
      </GridItem>
      <VerticalGridItem item>
        <GridItem item>hello</GridItem>
        <GridItem item> bye</GridItem>
      </VerticalGridItem>
    </LoginGrid>
  );
};

export default Login;
