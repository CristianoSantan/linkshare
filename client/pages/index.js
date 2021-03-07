import Link from 'next/link';
import { useState } from 'react';

import styles from "../styles/pages/Home.module.css";

import Users from "../components/users";
import Form from "../components/form";

export default function Home() {

  return (
    <div className={styles.container}>
      <Form />
      <Users />
    </div>
  );
}