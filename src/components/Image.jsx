
import styles from "./Certificates.module.css"
export const Image = (props) => {
    const {img,title} = props;
  return (
    <div className={styles.imgDiv}>
      <img src={img} alt={title} />
    </div>
  );
};