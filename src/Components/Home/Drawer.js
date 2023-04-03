import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import smallLogo from "../../Images/SmallLogo.svg";
import NeededDrawerList from "./NeededDrawerList";
import PeopleIcon from "@mui/icons-material/People";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#31394E",
  color: "#fff",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#31394E",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  background: "#31394E",
  "& .MuiIconButton-root": {
    color: "#fff",
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  background: "#fff",
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(true);
  const [nestedIsOpen, setNestedIsOpen] = React.useState(true);

  const [items, setItems] = React.useState([
    {
      text: "Frontend",
      iconColor: "Yellow",
      title: "Programming",
    },
    {
      text: "python",
      iconColor: "Pink",
      title: "Programming",
    },
    {
      text: "pizza",
      iconColor: "Red",
      title: "Cooking",
    },
    {
      text: "burger",
      iconColor: "Yellow",
      title: "Cooking",
    },
    {
      text: "pepsi",
      iconColor: "Pink",
      title: "Drinks",
    },
  ]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleNesetedDrawer = () => {
    setNestedIsOpen(!nestedIsOpen);
  };
  const groupedItems = items.reduce((acc, item) => {
    const { title } = item;
    if (title) {
      acc[title] = [...(acc[title] || []), item];
    }
    return acc;
  }, {});

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline enableColorScheme />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          {open && <img src={smallLogo} alt='logo' />}
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <StyledDivider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={handleNesetedDrawer}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Teams' sx={{ opacity: open ? 1 : 0 }} />
              {open ? nestedIsOpen ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItemButton>
          </ListItem>
          {open &&
            nestedIsOpen &&
            Object.entries(groupedItems).map(([name, items]) => {
              return (
                <>
                  <ListItem>
                    <ListItemText primary={name} />
                  </ListItem>

                  {items.map((subitem) => {
                    return (
                      <ListItem>
                        <NeededDrawerList items={subitem} />
                      </ListItem>
                    );
                  })}
                </>
              );
            })}
        </List>
      </Drawer>
    </Box>
  );
}
