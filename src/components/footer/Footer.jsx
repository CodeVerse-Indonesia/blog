import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="CodeVerse" width={50} height={50} />
          <h1 className={styles.logoText}>CodeVerse Indonesia</h1>
        </div>
        <p className={styles.desc}>
          Terima Kasih yang sudah mampir ke blog kami. Semoga dengan adanya blog
          ini, akan mempermudah kalian dalam pembelajaran dan meningkatkan
          keinginan kalian dalam belajar dalam dunia teknologi informasi
        </p>
        <div className={styles.icons}>
          <img src="/facebook.png" alt="Facebook" width={24} height={24} />
          <img src="/instagram.png" alt="Instagram" width={24} height={24} />
          <img src="/tiktok.png" alt="Tiktok" width={24} height={24} />
          <img src="/youtube.png" alt="Youtube" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Tentang</Link>
          <Link href="/">Kontak</Link>
          <Link href="/">Belajar</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Web Dev</Link>
          <Link href="/">Multimedia</Link>
          <Link href="/">Mobile Dev</Link>
          <Link href="/">Artificial Intelligence</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
