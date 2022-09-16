//hooks
import Head from 'next/head'
import Link from 'next/link';

//style
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Home page
      </h1>
      <p className={styles.text}>
        Excepteur duis dolor ex do est in sit est incididunt irure fugiat irure occaecat ex. Lorem exercitation mollit ullamco pariatur dolor. Ullamco laboris nostrud nostrud deserunt occaecat aute ad ex esse deserunt cillum enim irure aliquip. Minim aliqua Lorem eu adipisicing mollit.
      </p>
      <p className={styles.text}>
        Excepteur duis dolor ex do est in sit est incididunt irure fugiat irure occaecat ex. Lorem exercitation mollit ullamco pariatur dolor. Ullamco laboris nostrud nostrud deserunt occaecat aute ad ex esse deserunt cillum enim irure aliquip. Minim aliqua Lorem eu adipisicing mollit.
      </p>
      <Link href='/allLists/'>
        <a className={styles.btn}>See all lists</a>
      </Link>
    </div>
  );
};
