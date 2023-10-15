import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const menuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Informatika
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Robotika
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Multimedia
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Artificial Intelligent
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Web Dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.style}`}>
        Mobile Dev
      </Link>
    </div>
  );
};

export default menuCategories;
