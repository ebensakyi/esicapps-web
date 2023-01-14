//import '../styles/globals.css'
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <NextNProgress height={6} color="#f2ae02" />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
