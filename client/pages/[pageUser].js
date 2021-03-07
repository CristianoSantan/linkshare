import { useRouter } from "next/router";

import styles from '../styles/pages/pageUser.module.css';

export default function User() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <p>This page is for <b>{router.query.pageUser}</b></p>
      <button>share</button>
    </div>
  );
}
