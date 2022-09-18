//hooks
import React from "react";
import Head from "next/head";
import Link from "next/link";

//style
import styles from '../../styles/AllLists.module.css';



export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      lists: users,
    },
  };
};

const AllLists = ({ lists }) => {

  return (
    <>
      <Head>
        <title>Next Lists | Lists</title>
        <meta name="keywords" content="next-lists" />
      </Head>
      <div>
        <h1>
          All Lists
        </h1>
        {
          lists.map(list => (
            <div key={list.id}>
              <Link href={`/allLists/${list.id}`}>
                <a className={styles.single}>
                  <h3>{list.name}</h3>
                </a>
              </Link>
            </div>
          ))
        }
      </div>
    </> 
   );
};
 
export default AllLists;