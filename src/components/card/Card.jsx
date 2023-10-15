import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/project1.png" alt="Projek 1" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>14.10.2023 - </span>
          <span className={styles.category}>WEB DEV</span>
        </div>
        <Link href="/">
          <h1>Membuat Website Portofolio Sederhana</h1>
        </Link>
        <p className={styles.desc}>
          Seorang developer dan pekerjaan yang lain sangat diperlukan adanya
          sebuah Portofolio. Portofolio ini akan membantu memberikan penjelasan
          dan kemampuan kepada calon klien...
        </p>
        <Link href="/" className={styles.link}>
          Baca Selanjutnya
        </Link>
      </div>
    </div>
  );
};

export default Card;
