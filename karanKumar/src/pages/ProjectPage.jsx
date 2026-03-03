import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../assets/data/projects.json";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import Challenge from "../assets/animations/assignmets.json";
import Learning from "../assets/animations/notes.json";
import Error404 from "./Error404";
import SEO from "../components/SEO";

const ProjectPage = () => {
  const { slug } = useParams();
  const location = useLocation().pathname;
  const MotionImg = motion.img;
  const MotionDiv = motion.div;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Error404 />;
  }

  return (
    <div className="section-container min-h-screen py-12 md:py-16">
      <SEO
        title={`${project.title} | Project Case Study - Karan Kumar`}
        description={project.excerpt || project.description}
        keywords={`${project.title}, ${project.tech.join(", ")}, developer case study, full stack project, Karan Kumar`}
        canonical={`https://imksh.online/project/${project.slug}`}
        image={project.img}
        type="article"
      />
      {/* PROJECT HERO */}
      <section className="soft-card rounded-3xl grid md:grid-cols-2 gap-10 md:gap-12 items-center p-6 md:p-10">
        {/* LEFT */}
        <div className="order-2 md:order-1">
          <p className="text-(--primary) text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            Project Overview
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="subtle-text text-base md:text-lg mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/8 border border-white/12 rounded-full text-sm backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href={project.live}
              target={project.status === "active" ? "_blank" : undefined}
              rel={
                project.status === "active" ? "noopener noreferrer" : undefined
              }
              aria-disabled={project.status !== "active"}
              className={`flex items-center gap-2 ${project.status === "active" ? "btn-gradient1 cursor-pointer" : "bg-white/20 text-white/70 cursor-not-allowed pointer-events-none"} px-6 py-3 rounded-lg font-semibold hover:scale-105 transition`}
            >
              <FaExternalLinkAlt />{" "}
              {project.status === "active" ? "Live" : "Paused"}
            </a>

            <a
              href={project.github === "private" ? "#" : project.github}
              target={project.github === "private" ? undefined : "_blank"}
              rel={
                project.github === "private" ? undefined : "noopener noreferrer"
              }
              aria-disabled={project.github === "private"}
              className={`flex items-center gap-2 border px-6 py-3 rounded-lg transition hover:scale-105 ${project.github === "private" ? "border-white/25 text-white/70 cursor-not-allowed pointer-events-none" : "hover:bg-(--primary)/20 border-(--primary) cursor-pointer"}`}
            >
              <FaGithub />{" "}
              {project.github === "private" ? "Private Repo" : "View Code"}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 md:order-2">
          <MotionImg
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.01, y: -10 }}
            src={project.img}
            alt="Project Screenshot"
            loading="lazy"
            decoding="async"
            className="relative rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10">
          Key Features
        </h2>

        <MotionDiv className="grid md:grid-cols-3 gap-8">
          {project.features.map((feature, index) => (
            <MotionDiv
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              key={index}
              className="soft-card p-6 rounded-xl"
            >
              <p className="subtle-text leading-relaxed">{feature}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </section>

      {/* CHALLENGES */}
      {project.challenges && (
        <section className="mt-24 relative soft-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Challenges</h2>

          <div className="flex justify-between gap-6 items-start">
            <p className="subtle-text leading-relaxed max-w-4xl">
              {project.challenges}
            </p>

            <Lottie
              animationData={Challenge}
              className="w-10 absolute sm:static top-0 right-0 sm:w-44 md:w-52 opacity-85"
            />
          </div>
        </section>
      )}

      {project?.learnings && (
        <section className="mt-24 relative soft-card rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Learnings</h2>
          <div className="flex justify-between gap-6 items-start">
            <p className="subtle-text leading-relaxed max-w-4xl">
              {project.learnings}
            </p>
            <Lottie
              animationData={Learning}
              className="w-16 absolute sm:static top-0 right-0 sm:w-52 md:w-64 opacity-85"
            />
          </div>
        </section>
      )}

      {/* MORE SCREENSHOTS */}
      {project?.images && (
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10">
            More Screens
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project?.images?.map((item, indx) => (
              <MotionDiv
                key={indx}
                whileHover={{ y: -4 }}
                className="soft-card rounded-2xl p-3"
              >
                <img
                  src={item}
                  alt="App Screen"
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl hover:scale-[1.02] transition duration-300 max-h-100 mx-auto border border-white/10"
                />
              </MotionDiv>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
