import styles from "./page.module.css";

async function fetchHomePageData() {
  const res = await fetch("http://localhost:1337/api/homepages?populate=*", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  if (res.status !== 200) throw new Error("Failed to fetch data");
  return data;
}

export default async function Home() {
  const data = await fetchHomePageData();
  console.log("DATA: ", data.data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>COMING SOON!</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
