import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { HomeComponent } from "../components/HomeComponent";
import { useEffect } from "react";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import SEO from "../components/SEO";

export const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 40);
  }, []);

  return (
    <>
      <SEO
        title="Karan Kumar | Full Stack Developer Portfolio"
        description="Portfolio of Karan Kumar, a full stack developer building scalable React, Node.js, and MongoDB applications with modern UI and performance-focused architecture."
        keywords="Karan Kumar, full stack developer, React developer, Node.js developer, MongoDB, JavaScript portfolio, web developer India"
        canonical="https://imksh.online/"
        image="/images/profile.png"
      />
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
