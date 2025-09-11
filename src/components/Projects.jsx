import data from "../data/projects.json";
import { Card } from "./Card";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <>
      <div className={styles.projectContainer}>
        {data.map((curr, index) => (
          <Card key={index} {...curr} />
        ))}
      </div>
    </>
  );
};
