import { createContext, useEffect, useState } from "react";
import Dashboard from "../Components/Home/Dashboard";
import PersonalBoard from "../Components/Home/PersonalBoard";
import Settings from "../Components/Home/Settings";
import YellowTech from "../Components/Home/YellowTech";
import Objectives from "../Components/Home/Objectives";
import BrotliLogo from "../Images/brotliLogo.svg";
import PersonalBoardIcon from "../Images/personalBoardIcon.svg";
import HomeIcon from "../Images/homeIcon.svg";
import SettingsIcon from "../Images/settingsIcon.svg";

const DrawerContext = createContext({});

export const DrawerProvider = ({ children }) => {
  const [mainItems, setMainItems] = useState([
    {
      icon: BrotliLogo,
      title: "YellowTech Inc.",
      component: <YellowTech />,
    },
    {
      icon: PersonalBoardIcon,
      title: "Personal Board",
      component: <PersonalBoard />,
    },
    {
      icon: HomeIcon,
      title: "Dashboard",
      component: <Dashboard />,
    },
    {
      icon: SettingsIcon,
      title: "Space Settings",
      component: <Settings />,
    },
  ]);
  const [subitems, setSubItems] = useState([
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

  const [data, setData] = useState({
    title: "Objectives",
    component: <Objectives />,
  });

  const handleChanges = (title, component) => {
    setData({
      title,
      component,
    });
  };

  return (
    <DrawerContext.Provider
      value={{
        mainItems,
        subitems,
        data,
        handleChanges,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
