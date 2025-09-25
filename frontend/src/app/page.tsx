import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Auth System</h1>
        <p className={styles.description}>Simple authentication system</p>
      </main>
    </div>
  );
}
