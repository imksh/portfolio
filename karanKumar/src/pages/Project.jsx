import data from "../assets/data/projects.json";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

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
      <h1 className="text-3xl text-center font-bold my-8">All Projects</h1>
      <div className="flex justify-between w-[95%] md:w-[80%] mx-auto">
        <div className="relative flex justify-center items-center w-auto">
          <IoIosSearch className="absolute left-2" size={20} />
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
            className="border py-2 md:pr-4 pl-8 rounded-2xl md:w-[400px]"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 w-20 md:w-auto  rounded md:rounded-2xl md:px-4"
        >
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-16">
        {filteredData.map((curr, index) => (
          <Card key={index} {...curr} input={input} />
        ))}
      </div>
    </>
  );
};
export default Project;
