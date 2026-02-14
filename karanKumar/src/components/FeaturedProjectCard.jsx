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
      className="relative rounded-3xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-xl mx-[5%]"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-purple-600/20 blur-3xl opacity-30"></div>

      <div className="relative grid md:grid-cols-2 gap-8 p-8 items-center">
        {/* LEFT - Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-20 rounded-2xl"></div>
          <img
            src={image}
            alt={title}
            className="relative rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT - Content */}
        <div className="flex flex-col gap-4">
          <p className="text-purple-400 font-semibold uppercase tracking-wide">
            Featured Client Project
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-4 py-1 text-sm bg-white/10 rounded-full backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                Live <FaExternalLinkAlt />
              </a>
            )}

            {github && github !== "private" && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-purple-500 px-6 py-2 rounded-lg hover:bg-purple-500/20 transition"
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