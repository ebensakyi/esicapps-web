import Data from "../../components/submitted-data/Data";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function data({
  data,
  regions,
  districts,
  electoralAreas,
  communities,
}) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <Data
              data={data}
              regions={regions}
              districts={districts}
              electoralAreas={electoralAreas}
              communities={communities}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  const { published } = context.query;
  const filterBy = context.query.filterBy ;
  const filterValue = context.query.filterValue;
  const from = context.query.from || "undefined";
  const to = context.query.to || "undefined";

  const page = context.query.page || 1;
  const searchText = context.query.searchText || "undefined";
  const inspectionFormId = context.query.inspectionFormId || 1;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }

  const data = await fetch(
    `${SERVER_BASE_URL}/api/v1/submitted-data/data?token=${token}&published=${published}&page=${page}&searchText=${searchText}&inspectionFormId=${inspectionFormId}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}
   `
  ).then((res) => res.json());

  const regions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/region?token=${token}`
  ).then((res) => res.json());
  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district?token=${token}`
  ).then((res) => res.json());
  const electoralAreas = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/electoral-area?token=${token}`
  ).then((res) => res.json());
  const communities = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/community?token=${token}`
  ).then((res) => res.json());
  return {
    props: {
      data,
      regions,
      districts,
      electoralAreas,
      communities,
    },
  };
}
