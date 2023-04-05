import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import smallLogo from "../../Images/SmallLogo.svg";
import NeededDrawerList from "./NeededDrawerList";
import TeamIcon from "../../Images/teamIcon.svg";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "../../Images/menuIcon.svg";
import InfoIcon from "../../Images/infoIcon.svg";
import LogOutIcon from "../../Images/logoutIcon.svg";
import { Icon } from "@mui/material";
import DrawerContext from "../../Utils/DrawerContext";

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

const StyledDrawer = styled(MuiDrawer, {
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
  background-color: #fff;
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

export default function Drawer() {
  const { mainItems, subitems, data, handleChanges } =
    React.useContext(DrawerContext);

  const [open, setOpen] = React.useState(false);
  const [nestedIsOpen, setNestedIsOpen] = React.useState(false);

  const groupedItems = subitems.reduce((acc, item) => {
    const { title } = item;
    if (title) {
      acc[title] = [...(acc[title] || []), item];
    }
    return acc;
  }, {});

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleNested = () => {
    setNestedIsOpen(!nestedIsOpen);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <CssBaseline enableColorScheme />
      <StyledDrawer
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
          {mainItems.map(({ icon, title, component }, index) => (
            <StyledListItem
              disablePadding
              key={index}
              onClick={() => handleChanges(title, component)}
            >
              <StyledListItemButton open={open}>
                <StyledListItemIcon open={open}>
                  {icon && <img src={icon} alt='icon' />}
                </StyledListItemIcon>
                <StyledListItemText primary={title} open={open} />
              </StyledListItemButton>
            </StyledListItem>
          ))}
        </List>
        <StyledDivider />
        <List>
          <StyledListItem disablePadding>
            <StyledListItemButton open={open} onClick={handleNested}>
              <StyledListItemIcon open={open}>
                <img src={TeamIcon} alt='icon' />
              </StyledListItemIcon>
              <StyledListItemText primary='Teams' open={open} />
              {open ? nestedIsOpen ? <ExpandLess /> : <ExpandMore /> : null}
            </StyledListItemButton>
          </StyledListItem>
          {open &&
            nestedIsOpen &&
            Object.entries(groupedItems).map(([name, items], index) => {
              return (
                <>
                  <List dense key={index}>
                    <StyledListItem>
                      <StyledListItemText primary={name} open={open} />
                    </StyledListItem>
                  </List>

                  {items.map((subitem, index) => {
                    return (
                      <StyledListItem disablePadding key={index}>
                        <NeededDrawerList items={subitem} index={index} />
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
      </StyledDrawer>
    </Box>
  );
}
