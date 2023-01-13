import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Community from "../../components/primary_data/Community";

export default function community({ data }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <Community data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  const page = context.query.page || 1
  const searchText = context.query.searchText || ""
  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  // const data = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/community-data`).then(
  //   (res) => res.json()
  // );



  const data = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/community-data?token=${token}&page=${page}&searchText=${searchText}`).then(
    (res) => res.json()
  );

  //   const users = await fetch(`${SERVER_BASE_URL}/api/v1/user`).then((res) =>
  //     res.json()
  //   );

  //   const regions = await fetch(
  //     `${SERVER_BASE_URL}/api/v1/primary-data/region`
  //   ).then((res) => res.json());
  //   const districts = await fetch(
  //     `${SERVER_BASE_URL}/api/v1/primary-data/district`
  //   ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
