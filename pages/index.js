import { useRef, useState } from "react";
import styles from "./index.module.scss";
import Head from "next/head";
import WithoutSearchLayout from "@/layouts/WithoutSearchLayout/WithoutSearchLayout";
import { GoSearch } from "react-icons/go";
import ListYourProperty from "@/components/ListYourProperty/ListYourProperty";
import RecentlyListedRooms from "@/components/Rooms/RecentlyListedRooms";
import FullFurnishedRooms from "@/components/Rooms/FullFurnishedRooms";
import SemiFurnishedRooms from "@/components/Rooms/SemiFurnishedRooms";
import NoneFurnishedRooms from "@/components/Rooms/NoneFurnishedRooms";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home(props) {
  const inputRef = useRef("");
  const [searchInput, setSearchInput] = useState("");
  function handleSearchSubmit() {
    console.log(searchInput);
  }
  return (
    <>
      <Head>
        <title>Home Page | Room Rent</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WithoutSearchLayout>
          <section className={styles["hero-section"]}>
            <h2 className={styles["hero-section__title"]}>
              Find Perfect Room for free
            </h2>
            <from className={styles['search']} onSubmit={handleSearchSubmit}>
              <input
                type="text"
                ref={inputRef}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
              />
              <button type="submit" onClick={handleSearchSubmit}>
                <GoSearch
                  size="35px"
                  className={styles["search-icon"]}
                  aria-label="search rooms"
                />
              </button>
            </from>
          </section>
          <RecentlyListedRooms/>
          <ListYourProperty/>
          <FullFurnishedRooms/>
          <SemiFurnishedRooms/>
          <NoneFurnishedRooms/>
          <Testimonials/>
        </WithoutSearchLayout>
      </main>
    </>
  );
}
//todo: qna