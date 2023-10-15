import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPost from "../menuPost/MenuPost";
import MenuCategories from "../menuCategroies/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Populer */}
      <h2 className={styles.subtitle}>{"Apa yang Viral?"}</h2>
      <h1 className={styles.title}>Populer Banget</h1>
      <MenuPost withImage={false} />
      {/* Categories */}
      <h2 className={styles.subtitle}>Dipilih Menurut Kategori</h2>
      <h1 className={styles.title}>Kategori</h1>
      <MenuCategories />
      {/* Second Section */}
      <h2 className={styles.subtitle}>Dipilih Sama Editor</h2>
      <h1 className={styles.title}>Pilihan Editor</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
