import { Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const Header = styled(Typography)`
  color: #4c84ff;
  font-family: Inter;
  font-style: normal;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 6px;
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
