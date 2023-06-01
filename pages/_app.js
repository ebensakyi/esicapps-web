//import '../styles/globals.css'
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/Header";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  let userType = Cookies?.get("userType");
  console.log("userType",userType);

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
        <div id="layout-wrapper">
          {userType ? <Header /> : <></>}

          <Component {...pageProps} />
        </div>
      </>
    );
  }
}

export default MyApp;
