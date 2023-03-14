import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  if (typeof window !== 'undefined') {
    //here `window` is available
  }
  return (
    <Html
      lang="en"
      data-layout="vertical"
      data-topbar="light"
      data-sidebar="dark"
      data-sidebar-size="lg"
    >
      <Head>



      
      <link rel="stylesheet" href="/assets/libs/glightbox/css/glightbox.min.css"/>

        <link
          href="/assets/libs/swiper/swiper-bundle.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="/assets/libs/jsvectormap/css/jsvectormap.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <script async src="/assets/js/layout.js"></script>
        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/assets/css/app.min.css" rel="stylesheet" type="text/css" />
        <link
          href="/assets/css/custom.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />

        <NextScript />

        <script
          async
          src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
        ></script>
        <script async src="/assets/libs/simplebar/simplebar.min.js"></script>
        <script async src="/assets/libs/node-waves/waves.min.js"></script>
        <script async src="/assets/libs/feather-icons/feather.min.js"></script>
        <script
          async
          src="/assets/js/pages/plugins/lord-icon-2.1.0.js"
        ></script>
        <script async src="/assets/js/plugins.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>

        <script async src="/assets/libs/apexcharts/apexcharts.min.js"></script>

        <script
          async
          src="/assets/libs/jsvectormap/js/jsvectormap.min.js"
        ></script>
        <script
          async
          src="/assets/libs/jsvectormap/maps/world-merc.js"
        ></script>

        <script async src="/assets/libs/swiper/swiper-bundle.min.js"></script>


    <script src="/assets/libs/glightbox/js/glightbox.min.js"></script>

    <script src="/assets/libs/isotope-layout/isotope.pkgd.min.js"></script>

    <script src="/assets/js/pages/gallery.init.js"></script>

   
      
        <script async src="/assets/js/app.js"></script>
      </body>
    </Html>
  );
}
