import data from "../data/certificates.json";
import { Image } from "./Image";
import styles from "./Certificates.module.css"

export const Certificates = () => {
  return (
    <>
      <div className={styles.certificatesContainer}>
        {data.map((curr, index) => (
          <Image key={index} {...curr} />
        ))}
      </div>
    </>
  );
};
