import styles from "./Projects.module.css";
export const Card = (props) => {
    const {title, desc, tech, img, link} = props;
    return(
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <figure>
                    <img src={img} alt={title} />
                </figure>
            </div>
            <div className={styles.desc}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p><strong>Tech:</strong> {tech}</p>
                <a href={link}><button>Open</button></a>
            </div>
        </div>
    )
}