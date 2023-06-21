import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import dynamic from "next/dynamic";

const Map = dynamic(()=>import("../../components/map/Map"),{
    ssr:false
})

export default function map({ data }) {
  return (
    // <div id="layout-wrapper">
    //   <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <Map
              data={data}
            
            />
          </div>
        </div>
      </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  const messages = await fetch(
    `${SERVER_BASE_URL}/api/v1/messaging/notification`
  ).then((res) => res.json());

//   const data = await fetch(`${SERVER_BASE_URL}/api/v1/map?session=${session}`).then((res) =>
//     res.json()
//   );

  return {
    props: {
     data : []
    },
  };
}
