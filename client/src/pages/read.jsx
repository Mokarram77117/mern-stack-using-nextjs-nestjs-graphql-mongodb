/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import GoHome from "../components/GoHome";
import styles from "../styles/Home.module.css";

function Read() {
  const router = useRouter();
  const query = router.query;
  const _id = query._id;
  const name = query.name;
  const image = query.image;
  const age = query.age;
  const title = query.title;

  return (
    <main className={styles.main}>
    <div className={styles.container}>
      <Head>
        <title>User details </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      

      <h2>ID : {_id}</h2>
      <h2>Profile Picture : <img src={image} height={100} width={100} /></h2>
      <h2>Name : {name}</h2>
      <h2>Age : {age}</h2>
      <h2>Title: {title}</h2>
    </div>
    <GoHome />
    </main>
  );
}

export default Read;
