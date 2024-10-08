import styles from "./page.module.css";
import Image from "next/image";

async function fetchHomePageData() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/homepages?populate=*"
      : "https://izhar-strapi.onrender.com/api/homepages?populate=*";

  const res = await fetch(currentEnvUrls, { next: { revalidate: 0 } });

  if (res.status !== 200) throw new Error("Failed to fetch data");

  return await res.json();
}

export default async function Home() {
  const data = await fetchHomePageData();
  console.log("DATA: ", data.data);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>COMING SOON!</h1>
        <div className={styles.imgContainer}>
          <Image
            src="https://res.cloudinary.com/db09icibj/image/upload/v1725571262/work-in-progress_t4jpbj.png"
            fill={true}
            alt="under construction"
          />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
