"use client";
import { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Judul" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <img src="/plus.png" alt="Tambah" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <img src="/image.png" alt="Gambar" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <img src="/external.png" alt="Upload" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <img src="/video.png" alt="Video" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tuliskan Artikel Kamu"
        />
      </div>
      <button className={styles.publish}>Kirimkan</button>
    </div>
  );
};

export default WritePage;
