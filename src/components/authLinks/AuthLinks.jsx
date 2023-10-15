"use client";

import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  // sementara
  const status = "notauthenticated";
  return (
    <>
      {status == "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Masuk
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Tulis
          </Link>
          <span className={styles.link}>Keluar</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Tentang</Link>
          <Link href="/">Kontak</Link>
          {status == "notauthenticated" ? (
            <Link href="/login">Masuk</Link>
          ) : (
            <>
              <Link href="/write">Tulis</Link>
              <span>Keluar</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
