import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, CodeVerse Indonesia</b> Temukan Banyak Hal Baru
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/project1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Membuat Website Portofolio Sederhana.
          </h1>
          <p className={styles.postDesc}>
            Seorang developer dan pekerjaan yang lain sangat diperlukan adanya
            sebuah Portofolio. Portofolio ini akan membantu memberikan
            penjelasan dan kemampuan kepada calon klien. Isi dari Portofolio
            berupa pengenalan diri, kemampuan yang dimilikidan hal - hal lain
            yang akan menarik minat para calon klien mereka
          </p>
          <button className={styles.button}>Baca Selanjutnya</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
