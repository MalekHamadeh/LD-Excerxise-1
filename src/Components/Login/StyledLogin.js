import styled from "styled-components";
import { Button, Grid, TextField, Typography } from "@mui/material";

export const LoginGrid = styled(Grid)`
  && {

`;
export const GridItem = styled(Grid)``;
export const VerticalGridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// the && opertator is used because Material-Ui has a higher specificity than our CSS so in order to override the MaterialUI CSS we use && instead of !important
export const Title = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
  }
`;

export const StyledInput = styled(TextField)`
  width: 20vw;
`;
export const StyledButton = styled(Button)`
  width: 20vw;
  height: 6vh;
`;
