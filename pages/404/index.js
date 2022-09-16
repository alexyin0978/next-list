//hooks
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";



const NotFound = () => {

  const router = useRouter();

  //3秒後自動跳轉回首頁
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (  
    <>
      <Head>
        <title>Next List | 404</title>
        <meta name="keywords" content="next-lists" />
      </Head>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h1>The page cannot be found.</h1>
        <p>Go back to
          <Link href='/'>
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
}
//7
 
export default NotFound;