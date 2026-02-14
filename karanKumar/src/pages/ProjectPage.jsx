import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../assets/data/projects.json";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import Challenge from "../assets/animations/assignmets.json";
import Learning from "../assets/animations/notes.json";

const ProjectPage = () => {
  const { slug } = useParams();
  const location = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const project = projects.find((item) => item.slug === slug);

  return (
    <div className="min-h-screen px-6 md:px-16 py-16">
      {/* PROJECT HERO */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-gray-300 text-lg mb-6">{project.description}</p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href={project.live}
              target={project.live === "active" ? "_blank" : ""}
              className={`flex items-center gap-2 ${project.status === "active" ? "bg-linear-to-r from-purple-500 to-pink-500 cursor-pointer" : "bg-slate-300 cursor-not-allowed"} px-6 py-3 rounded-lg font-semibold hover:scale-105 transition`}
            >
              <FaExternalLinkAlt />{" "}
              {project.status === "active" ? "Live" : "Paused"}
            </a>

            <a
              href={project.github === "private" ? "#" : project.github}
              target={project.github === "private" ? "" : "_blank"}
              className={`flex items-center gap-2 border  px-6 py-3 rounded-lg  transition hover:scale-105 ${project.github === "private" ? "border-slate-300 cursor-not-allowed" : "hover:bg-purple-500/20 border-purple-500 cursor-pointer"}`}
            >
              <FaGithub />{" "}
              {project.github === "private" ? "Private Repo" : "View Code"}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 md:order-2">
          <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-3xl"></div>
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.01, y: -10 }}
            src={project.img}
            alt="Project Screenshot"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>

        <motion.div className="grid md:grid-cols-3 gap-8">
          {project.features.map((feature, index) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              key={index}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10"
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CHALLENGES */}
      {project.challenges && (
        <section className="mt-24 relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Challenges</h2>

          <div className="flex justify-between ">
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {project.challenges}
            </p>

            <Lottie
              animationData={Challenge}
              className="w-10 absolute sm:static top-0 right-0  sm:w-50"
            />
          </div>
        </section>
      )}

      {project?.learnings && (
        <section className="mt-24 relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Learnings</h2>
          <div className="flex justify-between ">
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {project.learnings}
            </p>
            <Lottie
              animationData={Learning}
              className="w-20 absolute sm:static top-0 right-0  sm:w-70"
            />
          </div>
        </section>
      )}

      {/* MORE SCREENSHOTS */}
      {project?.images && (
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">More Screens</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project?.images?.map((item, indx) => (
              <img
                key={indx}
                src={item}
                alt="App Screen"
                className="rounded-xl hover:scale-105 transition duration-300 max-h-100 mx-auto"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectPage;
