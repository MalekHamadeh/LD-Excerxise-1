import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import styled from "styled-components";

const NeededDrawerList = ({ items: { iconColor, text } }) => {
  const handleColor = (color) => {
    if (color === "Yellow") {
      return "#EEC301";
    }
    if (color === "Red") {
      return "#E7374F";
    }
    if (color === "Pink") {
      return "#FC91AD";
    }
  };
  const StyledListItemText = styled(ListItemText)`
    & .MuiListItemText-primary {
      font-size: 0.79rem;
      font-family: "Rubik", sans-serif;
    }
  `;

  const StyledItemIcon = styled(SquareRoundedIcon)`
    color: ${handleColor(iconColor)};
  `;

  return (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton justifyContent='center' alignItems='center'>
          <StyledItemIcon />
          <StyledListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default NeededDrawerList;
