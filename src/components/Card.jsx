import styles from "./Projects.module.css";
import { useEffect, useState } from "react";
export const Card = (props) => {
  const { title, desc, tech, img, link, input } = props;
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
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <figure>
          <img src={img} alt={title} />
        </figure>
      </div>
      <div className={styles.desc}>
        <h3>
          <span>{name.before}</span>
          <span style={{ color: "#b620bd" }}>{name.match}</span>
          <span>{name.after}</span>
        </h3>
        <p>{desc}</p>
        <p>
          <strong>Tech:</strong> {tech}
        </p>
        <a href={link}>
          <button>Open</button>
        </a>
      </div>
    </div>
  );
};
