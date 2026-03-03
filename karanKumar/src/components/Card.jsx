import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { title, excerpt, tech, img, slug, input } = props;
  const [name, setName] = useState({ before: title, match: "", after: "" });

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
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col h-full w-full relative"
    >
      <Link
        to={`/project/${slug}`}
        className="soft-card p-4 rounded-2xl customHover flex flex-col h-full pb-8"
      >
        <div className="w-full object-contain min-h-[40%] rounded-xl overflow-hidden border border-white/10">
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full object-contain transition duration-300 hover:scale-[1.03]"
          />
        </div>
        <div className="px-2 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="font-bold text-2xl my-2">
              <span>{name.before}</span>
              <span style={{ color: "#b620bd" }}>{name.match}</span>
              <span>{name.after}</span>
            </h3>
            <p className="my-2 subtle-text">{excerpt}</p>
            <p>
              <strong>Tech:</strong>
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              {tech.map((item, indx) => (
                <span
                  key={indx}
                  className="px-4 py-2 bg-white/8 border border-white/12 rounded-full text-sm backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* <Link to={`/project/${slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="px-8 py-2 rounded-lg btn-gradient1 mt-8 customHover"
            >
              Open
            </motion.button>
          </Link> */}
        </div>
      </Link>
    </motion.div>
  );
};
