import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturedProjectCard = ({
  title,
  description,
  tech = [],
  image,
  live,
  github,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="section-container relative rounded-3xl overflow-hidden soft-card"
    >
      <div className="relative grid md:grid-cols-2 gap-8 p-8 items-center">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="relative rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-(--primary) font-semibold uppercase tracking-wide">
            Featured Client Project
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>

          <p className="subtle-text leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-3 mt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm bg-white/10 border border-white/12 rounded-full backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-gradient1 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                Live <FaExternalLinkAlt />
              </a>
            )}

            {github && github !== "private" && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-(--primary) px-6 py-2 rounded-lg hover:bg-(--primary)/20 transition"
              >
                Code <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
