import React from "react";
import styles from "./menuPost.module.css";
import Link from "next/link";

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <img
              src="/project1.png"
              alt=""
              srcset=""
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Web Dev</span>
          <h3 className={styles.postTitle}>
            Membuat Website Portofolio Sederhana
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Muhamad Naufal - </span>
            <span className={styles.date}>14.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <img
              src="/project2.png"
              alt=""
              srcset=""
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Web Dev</span>
          <h3 className={styles.postTitle}>Membuat Portal Login Sederhana</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Muhamad Naufal - </span>
            <span className={styles.date}>13.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <img
              src="/project1.png"
              alt=""
              srcset=""
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Web Dev</span>
          <h3 className={styles.postTitle}>
            Membuat Website Portofolio Sederhana
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Muhamad Naufal - </span>
            <span className={styles.date}>14.10.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <img
              src="/project1.png"
              alt=""
              srcset=""
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Web Dev</span>
          <h3 className={styles.postTitle}>
            Membuat Website Portofolio Sederhana
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Muhamad Naufal - </span>
            <span className={styles.date}>14.10.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
