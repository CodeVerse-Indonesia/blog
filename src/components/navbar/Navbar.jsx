import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src="/facebook.png" alt="Facebook" width={24} height={24} />
        <img src="/instagram.png" alt="Instagram" width={24} height={24} />
        <img src="/tiktok.png" alt="Tiktok" width={24} height={24} />
        <img src="/youtube.png" alt="Youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <img src="/logo.png" alt="logo" width={40} height={50} />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Kontak
        </Link>
        <Link href="/" className={styles.link}>
          Tentang
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
