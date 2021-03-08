import Link from "next/link";
import { useEffect, useState } from "react";

import styles from '../styles/components/users.module.css';

export default function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("https://api-linkshare.herokuapp.com/api/users");
      setUsers(await response.json());
    }
    fetchMyAPI();
  }, [users]);

  return (
    <div className={styles.link}>
      {users.map((row) => (
        <Link key={row._id} href={`/${row.name}`}>
          <a>{row.name}</a>
        </Link>
      ))}
    </div>
  );
}
