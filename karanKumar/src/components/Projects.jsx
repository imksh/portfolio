import data from "../assets/data/projects.json";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-16">
        {data.slice(0, 6).map((curr, index) => (
          <Card key={index} {...curr} />
        ))}
      </div>
      {data.length > 6 && (
        <div className="flex justify-center items-center my-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-8 py-4 rounded-lg btn-gradient1 customHover"
           onClick={() => navigate("/project")}>
            View More Projects
          </motion.button>
        </div>
      )}
    </>
  );
};
