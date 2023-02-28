import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import National from "../../components/report/National";

export default function national({ inspectionForm, regions, districts }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <National
              inspectionForm={inspectionForm}
              regions={regions}
              districts={districts}
            />
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
    `${SERVER_BASE_URL}/api/v1/primary-data/community-data?token=${token}&page=${page}&searchText=${searchText}`
  ).then((res) => res.json());

  const inspectionForm = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/inspection-form`
  ).then((res) => res.json());

  const regions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/region`
  ).then((res) => res.json());
  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district`
  ).then((res) => res.json());



  return {
    props: {
      data,
      inspectionForm,
      regions,
      districts,
    },
  };
}
