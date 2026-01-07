import data from "../data/projects.json";
import { Card } from "../components/Card";
import styles from "../components/Projects.module.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Project = () => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    const newData = data.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(newData);

    if (filter === "") return;
    const filtered = data.filter((item) =>
      item.tech.toLowerCase().includes(filter)
    );
    setFilteredData(filtered);
  }, [input, filter]);

  return (
    <>
      <h1 className={styles.header}>All Projects</h1>
      <div className={styles.inputDiv}>
        <div className={styles.searchDiv}>
          <input
            type="text"
            placeholder="Search"
            value={input}
            enterKeyHint="search"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Search") {
                e.target.blur(); 
              }
            }}
          />
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter</option>
          <option value="react">React</option>
          <option value="native">React Native</option>
          <option value="javascript">Javascript</option>
          <option value="java">Java</option>
          <option value="node">Node.js</option>
          <option value="spring">Spring Boot</option>
          <option value="mongo">MongoDB</option>
          <option value="sql">MySQl</option>
        </select>
      </div>
      <div className={styles.projectContainer}>
        {filteredData.map((curr, index) => (
          <Card key={index} {...curr} input={input} />
        ))}
      </div>
    </>
  );
};
export default Project;
