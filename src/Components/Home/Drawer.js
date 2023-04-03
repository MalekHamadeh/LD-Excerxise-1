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
import smallLogo from "../../Images/SmallLogo.svg";
import NeededDrawerList from "./NeededDrawerList";
import TeamIcon from "../../Images/teamIcon.svg";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import BrotliLogo from "../../Images/brotliLogo.svg";
import PersonalBoardIcon from "../../Images/personalBoardIcon.svg";
import HomeIcon from "../../Images/homeIcon.svg";
import SettingsIcon from "../../Images/settingsIcon.svg";

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

const StyledListItemText = styled(ListItemText)`
  & .MuiListItemText-primary {
    font-family: "Rubik", sans-serif;
  }
`;

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [nestedIsOpen, setNestedIsOpen] = React.useState(false);

  const [mainItems, setMainItems] = React.useState([
    {
      icon: BrotliLogo,
      text: "YellowTech Inc.",
    },
    {
      icon: PersonalBoardIcon,
      text: "Personal Dashboard",
    },
    {
      icon: HomeIcon,
      text: "Dashboard",
    },
    {
      icon: SettingsIcon,
      text: "Space Settings",
    },
  ]);

  const [subitems, setSubItems] = React.useState([
    {
      text: "Coraly Tech & Dev",
      iconColor: "Yellow",
      title: "Coraly",
    },
    {
      text: "Design Board",
      iconColor: "Red",
      title: "Coraly",
    },
    {
      text: "Growth Hacking",
      iconColor: "pink",
      title: "Coraly",
    },
    {
      text: "Website",
      iconColor: "Yellow",
      title: "Lasting Dynamics",
    },
    {
      text: "Growth Hacking",
      iconColor: "Red",
      title: "Lasting Dynamics",
    },
    {
      text: "UI/UX Design",
      iconColor: "Pink",
      title: "Lasting Dynamics",
    },
    {
      text: "VL - Tech & Dev",
      iconColor: "Yellow",
      title: "Vetrina Live",
    },
    {
      text: "VL - Growth Hacking",
      iconColor: "Red",
      title: "Vetrina Live",
    },
  ]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleNesetedDrawer = () => {
    setNestedIsOpen(!nestedIsOpen);
  };
  const groupedItems = subitems.reduce((acc, item) => {
    const { title } = item;
    if (title) {
      acc[title] = [...(acc[title] || []), item];
    }
    return acc;
  }, {});

  return (
    <Box>
      <CssBaseline enableColorScheme />
      <Drawer variant='permanent' open={open} sx={{ display: "flex" }}>
        <DrawerHeader>
          {open && <img src={smallLogo} alt='logo' />}
          <IconButton onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>

        <List>
          {mainItems.map(({ text, icon }, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
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
                  {icon && <img src={icon} alt='icon' />}
                </ListItemIcon>
                <StyledListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
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
                <img src={TeamIcon} alt='icon' />
              </ListItemIcon>
              <StyledListItemText
                primary='Teams'
                sx={{ opacity: open ? 1 : 0 }}
              />
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

                  {items.map((subitem, index) => {
                    return (
                      <ListItem>
                        <NeededDrawerList items={subitem} />
                      </ListItem>
                    );
                  })}
                </>
              );
            })}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "bottom",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "bottom",
                  color: "#fff",
                }}
              >
                <MenuIcon />
              </ListItemIcon>
              <StyledListItemText
                primary='Logout'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
