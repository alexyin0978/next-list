//components
import Layout from '../hoc/Layout';

//style
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
