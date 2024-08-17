import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState([]);

  useEffect(() => {}, []);
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Hello world
      </div>
    </main>
  );
}
