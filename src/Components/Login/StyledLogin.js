import styled from "styled-components";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";

export const LoginGrid = styled(Grid)``;
export const GridItem = styled(Grid)``;
export const VerticalGridItem = styled(Grid)`
  display: flex;
  flex-direction: row;
  width: 30vw;
`;

export const LeftGridItem = styled(Grid)`
  margin-left: 0;
`;
export const RightGridItem = styled(Grid)`
  margin-right: 0;
`;

// the && opertator is used because Material-Ui has a higher specificity than our CSS so in order to override the MaterialUI CSS we use && instead of !important
export const Title = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
  }
`;

export const StyledInput = styled(TextField)`
  width: 30vw;
`;
export const StyledButton = styled(Button)`
  width: 30vw;
  height: 6vh;
`;

export const StyledAlert = styled(Alert)`
  width: 28vw;
  && {
    color: #fd5461;
    background: #f4f6fc;
    font-family: "Rubik", sans-serif;
  }
  && .MuiSvgIcon {
    fill: #fd5461;
  }
`;
