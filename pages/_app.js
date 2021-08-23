import Head from "next/head";

import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>RohitFood</title>
        <meta name="description" content="Restaurant Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
