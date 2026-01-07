import data from "../data/projects.json";
import { Card } from "./Card";
import styles from "./Projects.module.css";
import {useNavigate} from "react-router-dom"

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.projectContainer}>
        {data.slice(0, 6).map((curr, index) => (
          <Card key={index} {...curr} />
        ))}
      </div>
      {data.length > 6 && 
      <div className={styles.viewMore}>
        <button  onClick={() => navigate("/project")}>View More Projects</button>
        </div>}
    </>
  );
};
