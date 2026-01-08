import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { HomeComponent } from "../components/HomeComponent";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 40);
  }, []);

  return (
    <>
      <HomeComponent />
      <About />
      <Portfolio />
    </>
  );
};
