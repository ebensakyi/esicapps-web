import PrimaryData from "../../components/primary_data/PrimaryData";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function primary_data({
  regions,
  districts,
  communities,
  electoralAreas,
  actions,
  analCleansings,
}) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <PrimaryData
              regions={regions}
              districts={districts}
              electoralAreas={electoralAreas}
              communities={communities}
              actions={actions}
              analCleansings={analCleansings}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  // if (!token) {
  //     return {
  //         redirect: {
  //             destination: '/auth/login',
  //             permanent: true,
  //         },
  //     }
  // }
  const regions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/region`
  ).then((res) => res.json());

  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district`
  ).then((res) => res.json());

  const electoralAreas = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/electoral-area`
  ).then((res) => res.json());

  const communities = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/community`
  ).then((res) => res.json());

  const actions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/action`
  ).then((res) => res.json());

  const analCleansings = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/anal-cleansing-material`
  ).then((res) => res.json());
  return {
    props: {
      regions,
      districts,
      electoralAreas,
      communities,
      actions,
      analCleansings,
    },
  };
}
