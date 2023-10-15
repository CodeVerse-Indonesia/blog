import Link from "next/link";
import styles from "./comment.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Komen</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Tulis Komenmu" />
          <button className={styles.button}>Kirimkan</button>
        </div>
      ) : (
        <Link href="/login">Masuk Terlebih dahulu untuk Komen</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img
              src="/logo.png"
              alt="user"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>Muhamad Naufal B</div>
              <div className={styles.date}>14.20.2023</div>
            </div>
          </div>
          <p className={styles.desc}>Wiiihh Sangat Keren dan membantu sekali</p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img
              src="/food.png"
              alt="user"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>Muhamad Naufal B</div>
              <div className={styles.date}>14.20.2023</div>
            </div>
          </div>
          <p className={styles.desc}>Wiiihh Sangat Keren dan membantu sekali</p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img
              src="/coding.png"
              alt="user"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>Muhamad Naufal B</div>
              <div className={styles.date}>14.20.2023</div>
            </div>
          </div>
          <p className={styles.desc}>Wiiihh Sangat Keren dan membantu sekali</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
