import { Button, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

//#region HomePage Styling
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  height: 100vh;
`;
export const DrawerWrapper = styled.div`
  flex-shrink: 0;
`;
export const HeroSectionWrapper = styled.div`
  margin: 2rem;
  margin-top: 0;
  flex-grow: 1;
`; // for the HeroSection component called in HomePage
//#endregion

//#region HeroSection Component
export const StyledHeroWrapper = styled.div`
display: flex
flex-direction: rows;
height: 100%;
`;

export const StyledHeroHeader = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderTitle = styled(Typography)`
  && {
    margin-left: 3rem;
    font-size: 1.5rem;
    font-family: "Rubik", sans-serif;
  }
`;

export const StyledHeaderTitleWrapper = styled.div``;
export const StyledHeaderIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 2rem;
  margin-right: 2rem;
`;

export const StyledSmallBtn = styled(IconButton)`
  && {
    background-color: ${({ color }) =>
      color === "primary" ? "#4C84FF" : color === "warning" && "#F7C101"};
    color: #fff;
    border-radius: 25%;
    &:hover {
      background-color: ${({ color }) =>
        color === "primary" ? "#2b6cfb" : color === "warning" && "#D6A802"};
    }
  }
`;

export const StyledHeroBody = styled.div`
  height: calc(100% - 7%);
  width: 100%;
`;
//#endregion
