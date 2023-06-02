import Header from "../../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../../config";
import AddDistrict from "../../../components/primary-data/AddDistrict";

export default function district({ data,regions }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <AddDistrict data={data}regions={regions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;

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
    `${SERVER_BASE_URL}/api/v1/primary-data/location/district?session=${session}&page=${page}&searchText=${searchText}`
  ).then((res) => res.json());

  const regions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/location/region?session=${session}&page=${page}&searchText=${searchText}`
  ).then((res) => res.json());

  //   const regions = await fetch(
  //     `${SERVER_BASE_URL}/api/v1/primary-data/region`
  //   ).then((res) => res.json());
  //   const districts = await fetch(
  //     `${SERVER_BASE_URL}/api/v1/primary-data/district`
  //   ).then((res) => res.json());
 console.log(data);
  return {
    props: {
    data,regions
    },
  };
}
