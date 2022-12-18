import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import dynamic from 'next/dynamic'

const MapView = dynamic(() => import('../../components/map/MapView'), {
  ssr: false,
});
export default function map({ regions, districts, messages, users }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <MapView/>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { token } = context.req.cookies;

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: true,
//       },
//     };
//   }
//   const messages = await fetch(
//     `${SERVER_BASE_URL}/api/v1/messaging/notification`
//   ).then((res) => res.json());

//   const users = await fetch(`${SERVER_BASE_URL}/api/v1/user`).then((res) =>
//     res.json()
//   );

//   const regions = await fetch(
//     `${SERVER_BASE_URL}/api/v1/primary-data/region`
//   ).then((res) => res.json());
//   const districts = await fetch(
//     `${SERVER_BASE_URL}/api/v1/primary-data/district`
//   ).then((res) => res.json());

//   return {
//     props: {
//       users,
//       regions,
//       districts,
//       messages,
//     },
//   };
// }