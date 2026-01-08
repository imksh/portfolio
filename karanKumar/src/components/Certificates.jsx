import data from "../assets/data/certificates.json";
import { Image } from "./Image";

export const Certificates = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-16">
        {data.map((curr, index) => (
          <Image key={index} {...curr} />
        ))}
      </div>
    </>
  );
};
