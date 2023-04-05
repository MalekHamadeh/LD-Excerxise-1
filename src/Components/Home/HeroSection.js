import React, { useState } from "react";
import {
  StyledHeaderIconWrapper,
  StyledHeaderTitle,
  StyledHeaderTitleWrapper,
  StyledHeroBody,
  StyledHeroHeader,
  StyledHeroWrapper,
  StyledSmallBtn,
} from "../../Pages/Home/StyleHome";
import { Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DrawerContext from "../../Utils/DrawerContext";

const HeroSection = () => {
  const [shouldShowIcon, setShouldShowIcon] = useState(true);
  const { data } = React.useContext(DrawerContext);
  return (
    <StyledHeroWrapper>
      <StyledHeroHeader>
        <StyledHeaderTitleWrapper>
          <StyledHeaderTitle>{data.title}</StyledHeaderTitle>
        </StyledHeaderTitleWrapper>
        {shouldShowIcon && (
          <StyledHeaderIconWrapper>
            <StyledSmallBtn color='warning'>
              <NotificationsNoneIcon />
            </StyledSmallBtn>
            <StyledSmallBtn color='primary'>
              <AddIcon />
            </StyledSmallBtn>
          </StyledHeaderIconWrapper>
        )}
      </StyledHeroHeader>
      <Divider />
      <StyledHeroBody>{data.component}</StyledHeroBody>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
