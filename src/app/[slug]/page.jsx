import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Comments from "@/components/comment/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Membuat Website Portofolio Sederhana</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img
                src="project1.png"
                alt="projek 1"
                fill
                className={styles.userImageContainer}
              />
            </div>
            <div className={styles.userTextContainer}>
              <div className={styles.username}>Muhamad Naufal</div>
              <div className={styles.date}>14.10.2023</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="project1.png"
            alt="projek 1"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Apakah Anda seorang seniman, desainer, fotografer, atau
              profesional kreatif yang ingin memamerkan karya Anda kepada dunia?
              Membuat website portofolio sederhana bisa menjadi langkah pertama
              yang luar biasa dalam memperluas jangkauan dan meningkatkan
              visibilitas kreativitas Anda. Di dalam blog ini, kita akan
              menjelajahi langkah-langkah dasar untuk menciptakan website
              portofolio sederhana yang akan mengesankan calon klien, majikan
              potensial, atau bahkan penggemar Anda.
            </p>
            <h2>Mengapa Anda Butuh Website Portofolio?</h2>
            <p>
              Sebelum kita memulai, pertama-tama kita harus memahami mengapa
              memiliki website portofolio sangat penting dalam era digital ini.
              Ini adalah alat yang kuat untuk:
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
