import React from "react";
import Drawer from "../../Components/Home/Drawer";
import HeroSection from "../../Components/Home/HeroSection";
import { DrawerWrapper, HeroSectionWrapper, HomeWrapper } from "./StyleHome";
import { DrawerProvider } from "../../Utils/DrawerContext";

const Home = () => {
  return (
    <HomeWrapper>
      <DrawerWrapper>
        <Drawer />
      </DrawerWrapper>
      <HeroSectionWrapper>
        <HeroSection />
      </HeroSectionWrapper>
    </HomeWrapper>
  );
};

export default Home;
