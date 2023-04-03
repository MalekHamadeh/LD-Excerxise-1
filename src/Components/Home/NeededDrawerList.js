import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";

const NeededDrawerList = ({ items: { iconColor, text } }) => {
  //   useEffect(() => {
  //     console.log(item);
  //   }, [item]);
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

  return (
    <List>
      <ListItem>
        <ListItemButton
          sx={{
            color: handleColor(iconColor),
            justifyContent: "center",
          }}
        >
          <SquareRoundedIcon />
        </ListItemButton>
        <ListItemText primary={text} sx={{ color: "#fff" }} />
      </ListItem>
    </List>
  );
};

export default NeededDrawerList;
