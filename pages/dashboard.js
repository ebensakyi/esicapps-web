import { SERVER_BASE_URL } from "../config";
import Dashboard from "../components/Dashboard";

export default function dashboard({
  dashboardData,
  regions,
  districts,
  electoralAreas,
  communities,
}) {
  return (
    // <div id="layout-wrapper">
    //   <Header />

    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <Dashboard
            dashboardData={dashboardData}
            regions={regions}
            districts={districts}
            electoralAreas={electoralAreas}
            communities={communities}
          />
        </div>
      </div>
    </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;
  const filterBy = context?.query?.filterBy;
  const filterValue = context?.query?.filterValue;
  const from = context?.query?.from || "undefined";
  const to = context?.query?.to || "undefined";


  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }

  // const userSession = await getSession(session);

  // console.log("userSession ",userSession);

  const dashboardData = await fetch(
    `${SERVER_BASE_URL}/api/v1/dashboard?session=${session}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}`
  ).then((res) => res.json());
  const regions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/region?session=${session}`
  ).then((res) => res.json());
  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district?session=${session}`
  ).then((res) => res.json());
  const electoralAreas = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/electoral-area?session=${session}`
  ).then((res) => res.json());
  const communities = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/community?session=${session}`
  ).then((res) => res.json());
  return {
    props: {
      dashboardData,
      regions,
      districts,
      electoralAreas,
      communities,
    },
  };
}
