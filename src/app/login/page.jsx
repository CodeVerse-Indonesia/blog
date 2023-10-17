"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Masuk dengan Google
        </div>
        <div className={styles.socialButton}>Masuk dengan Github</div>
        <div className={styles.socialButton}>Masuk dengan Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
