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

//#region Styles used in the Login and SignUp components

export const GridContainer = styled(Grid)``;
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
  }
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

//#endregion
