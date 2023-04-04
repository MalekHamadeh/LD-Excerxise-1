import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { MenuBookTwoTone } from "@mui/icons-material";
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
import MenuIcon from "../../Images/menuIcon.svg";
import InfoIcon from "../../Images/infoIcon.svg";
import LogOutIcon from "../../Images/logoutIcon.svg";
import { Collapse, Icon } from "@mui/material";

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

const StyledDivider = styled(Divider)`
  &. MuiDivider-root {
    color: "#fff";
  }
`;

const StyledLogo = styled(Icon)`
  background-image: url(${smallLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
`;

const StyledListItem = styled(ListItem)`
  display: block;
`;

const StyledListItemButton = styled(ListItemButton)`
  minHeight: 48,
  justifyContent: ${({ open }) => (open ? "initial" : "center")},

`;

const StyledListItemIcon = styled(ListItemIcon)`
  minWidth: 0,
  mr: ${({ open }) => (open ? 3 : "auto")},
  color: "#fff",
  justifyContent: "center",
`;

const StyledListItemText = styled(ListItemText)`
  & .MuiListItemText-primary {
    font-family: "Rubik", sans-serif;
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`;

const StyledIconButton = styled(IconButton)`
  color: "#fff";
`;
const StyledListItemFooter = styled(ListItem)` 
    && {
    background-color: black,
    position:absolute,
    height:6vh,
    top:64.2vh
    }
`;
const VerticalList = styled(List)``;
const VerticalListItem = styled(ListItem)`
  flex-direction: ${({ open }) => (open ? "row" : "column")};
  justify-content: ${({ open }) => (open ? "space-between" : "intial")};
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
    <Box sx={{ height: "100vh" }}>
      <CssBaseline enableColorScheme />
      <Drawer
        variant='permanent'
        open={open}
        sx={{ display: "flex", height: "100vh" }}
      >
        <DrawerHeader>
          {open && <StyledLogo />}
          <StyledIconButton onClick={handleDrawer}>
            <img src={MenuIcon} alt='icon' />
          </StyledIconButton>
        </DrawerHeader>

        <List>
          {mainItems.map(({ text, icon }, index) => (
            <StyledListItem disablePadding key={index}>
              <StyledListItemButton open={open}>
                <StyledListItemIcon open={open}>
                  {icon && <img src={icon} alt='icon' />}
                </StyledListItemIcon>
                <StyledListItemText primary={text} open={open} />
              </StyledListItemButton>
            </StyledListItem>
          ))}
        </List>
        <StyledDivider />
        <List>
          <StyledListItem disablePadding>
            <StyledListItemButton open={open} onClick={handleNesetedDrawer}>
              <StyledListItemIcon open={open}>
                <img src={TeamIcon} alt='icon' />
              </StyledListItemIcon>
              <StyledListItemText primary='Teams' open={open} />
              {open ? nestedIsOpen ? <ExpandLess /> : <ExpandMore /> : null}
            </StyledListItemButton>
          </StyledListItem>
          {open &&
            nestedIsOpen &&
            Object.entries(groupedItems).map(([name, items]) => {
              return (
                <>
                  <List dense>
                    <StyledListItem>
                      <StyledListItemText primary={name} open={open} />
                    </StyledListItem>
                  </List>

                  {items.map((subitem) => {
                    return (
                      <StyledListItem disablePadding>
                        <NeededDrawerList items={subitem} />
                      </StyledListItem>
                    );
                  })}
                </>
              );
            })}

          <StyledListItemFooter disablePadding open={open}>
            <VerticalList disablePadding>
              <VerticalListItem open={open}>
                <StyledIconButton>
                  <img src={InfoIcon} alt='icon' />
                </StyledIconButton>
                <StyledIconButton>
                  <img src={InfoIcon} alt='icon' />
                </StyledIconButton>
                <StyledIconButton>
                  <img src={LogOutIcon} alt='icon' />
                </StyledIconButton>
              </VerticalListItem>
            </VerticalList>
          </StyledListItemFooter>
        </List>
      </Drawer>
    </Box>
  );
}
