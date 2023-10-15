import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kategori Populer</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <img
            src="/style.png"
            alt="styles"
            width={32}
            height={32}
            className={styles.image}
          />
          Informatika
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <img
            src="/style.png"
            alt="styles"
            width={32}
            height={32}
            className={styles.image}
          />
          Robotika
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <img
            src="/style.png"
            alt="styles"
            width={32}
            height={32}
            className={styles.image}
          />
          Multimedia
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          <img
            src="/style.png"
            alt="styles"
            width={32}
            height={32}
            className={styles.image}
          />
          Artificial Intelligent
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <img
            src="/style.png"
            alt="styles"
            width={32}
            height={32}
            className={styles.image}
          />
          Web Dev
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <img
            src="/style.png"
            alt="styles"
            width={32}
            height={32}
            className={styles.image}
          />
          Mobile Dev
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
