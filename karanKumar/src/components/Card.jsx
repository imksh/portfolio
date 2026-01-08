import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Card = (props) => {
  const { title, desc, tech, img, link, input } = props;
  const [name, setName] = useState({ before: title, match: "", after: "" });
  const width = window.innerWidth;

  useEffect(() => {
    const i = title.toLowerCase().indexOf(input?.toLowerCase());
    if (i === -1) {
      return;
    }

    setName({
      before: title.slice(0, i),
      match: title.slice(i, i + input.length),
      after: title.slice(i + input.length),
    });
  }, [input, title]);

  return (
    <div
      className={`bg-[#1a1d3c] p-4 rounded-2xl ${
        width > 500 ? "customHover" : "customInnerHover"
      } relative flex flex-col h-full`}
    >
      <div className="w-full object-contain min-h-[40%]">
        <img src={img} alt={title} className="w-full object-contain"/>
      </div>
      <div className="px-2 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-2xl my-2">
            <span>{name.before}</span>
            <span style={{ color: "#b620bd" }}>{name.match}</span>
            <span>{name.after}</span>
          </h3>
          <p className="my-2">{desc}</p>
          <p>
            <strong>Tech:</strong> {tech}
          </p>
        </div>

        <a href={link}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-8 py-2 rounded-lg btn-gradient1 mt-8 customHover"
          >
            Open
          </motion.button>
        </a>
      </div>
    </div>
  );
};
