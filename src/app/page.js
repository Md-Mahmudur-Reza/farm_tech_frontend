import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "@/module/common/navbar/Navbar";
import Index from "@/module/Index/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Index />
    </main>
  );
}
