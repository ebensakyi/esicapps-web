import Header from "../../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../../config";
import AddElectoralArea from "../../../components/primary-data/AddElectoralArea";

export default function electoralArea({ data, districts }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <AddElectoralArea data={data} districts={districts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  const page = context.query.page || 1;
  const searchText = context.query.searchText || "";
  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }

  const data = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/location/electoral-area?token=${token}&page=${page}&searchText=${searchText}`
  ).then((res) => res.json());

  //   const users = await fetch(`${SERVER_BASE_URL}/api/v1/user`).then((res) =>
  //     res.json()
  //   );

  //   const regions = await fetch(
  //     `${SERVER_BASE_URL}/api/v1/primary-data/region`
  //   ).then((res) => res.json());
  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district?token=${token}`
  ).then((res) => res.json());

  return {
    props: {
      data,
      districts,
    },
  };
}
