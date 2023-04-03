import styled from "styled-components";
import {
  Box,
  Paper,
  Alert,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

//#region Styles for the static authentication Page
export const Header = styled(Typography)`
  && {
    color: #4c84ff;
    font-family: Inter;
    font-style: normal;
    font-size: 12px;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: center;
  margin-top: 2%;
`;

export const StyledLogo = styled.img`
  margin-bottom: 2%;
`;

export const Outline = styled(Box)`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #e8f0fe 100%);
  height: 100vh;
  overflow: hidden;
`;

export const StyledPaper = styled(Paper)`
  height: 60vh;
  width: 40vw;
  margin-left: 30%;
  margin-top: 3%;
`;
//#endregion

//#region Styles used in the Login and SignUp and Forgot Password components

export const GridContainer = styled(Grid).attrs({ container: true })``;
export const GridItem = styled(Grid).attrs({ item: true })``;

// the && opertator is used because Material-Ui has a higher specificity than our CSS so in order to override the MaterialUI CSS we use && instead of !important
export const StyledText = styled(Typography)`
  && {
    font-family: "Rubik", sans-serif;
    color: ${({ type }) => (type === "title" ? "#000000" : "#5A6171")};
  }
`;

export const StyledInput = styled(TextField)`
  width: 30vw;
`;
export const StyledButton = styled(Button)`
  width: 30vw;
  height: 6vh;
  && {
    font-family: "Rubik", sans sheriff;
    text-transform: none;
    background-color: ${({ register }) => register && "#29C293"};
    &:hover {
      background-color: ${({ register }) => register && "#29C293"};
    }
  }
`;

export const StyledAlert = styled(Alert)(({ severity }) => ({
  width: "28vw",
  "&&": {
    color: severity === "error" ? "#fd5461" : "#29C293",
    background: "#f4f6fc",
    fontFamily: "Rubik, sans-serif",
  },
}));

//#endregion
