import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Table } from "./components/Table";

import styles from './styles/Home.module.css'
// 
export default function Home() {
  return (
    <main className="">
      <div className={styles.HomeContent} >
        <Header />
        <section className={styles.section}>
          <SearchBar />
          <Table />
        </section>

      </div>

    </main >
  );
}
