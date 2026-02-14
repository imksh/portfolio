import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { HomeComponent } from "../components/HomeComponent";
import { useEffect } from "react";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

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
      <FeaturedProjectCard
        title="Shri Baglamukhi – Official Puja & Anushthan Website"
        description="Spiritual service platform for online puja booking and temple information."
        tech={["React", "Node.js", "Express", "MongoDB", "Netlify", "Render"]}
        image="/images/shri-baglamukhi/1.png"
        live="https://shribaglamukhi.com"
        github="private"
      />
      <Portfolio />
    </>
  );
};
