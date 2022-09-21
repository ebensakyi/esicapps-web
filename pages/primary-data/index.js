import PrimaryData from "../../components/primary_data/PrimaryData";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function primary_data({
    inspectionForms,
  regions,
  districts,
  communities,
  electoralAreas,
  actions,
  analCleansings,
  cemeteryWorkers,
  drainTypes,
  drinkingWaterSources,
  effluentManagements,
  excretaContainments,
  excretaDisposals,
  facilities,
  frequencies,
  greyWaterDisposals,
}) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <PrimaryData
            inspectionForms ={inspectionForms}
              regions={regions}
              districts={districts}
              electoralAreas={electoralAreas}
              communities={communities}
              actions={actions}
              analCleansings={analCleansings}
              cemeteryWorkers={cemeteryWorkers}
              drainTypes={drainTypes}
              drinkingWaterSources={drinkingWaterSources}
              effluentManagements={effluentManagements}
              excretaContainments={excretaContainments}
              excretaDisposals={excretaDisposals}
              facilities={facilities}
              frequencies={frequencies}
              greyWaterDisposals={greyWaterDisposals}
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
  const inspectionForms = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/inspection-form`
  ).then((res) => res.json());
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

  const cemeteryWorkers = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/cemetery-workers`
  ).then((res) => res.json());

  const drainTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/drain-type`
  ).then((res) => res.json());

  const drinkingWaterSources = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/drinking-water-source-type`
  ).then((res) => res.json());

  const effluentManagements = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/effluent-management`
  ).then((res) => res.json());

  const excretaContainments = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/excreta-containment`
  ).then((res) => res.json());

  const excretaDisposals = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/excreta-containment`
  ).then((res) => res.json());

  const facilities = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/facility`
  ).then((res) => res.json());

  const frequencies = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/frequency`
  ).then((res) => res.json());

  const greyWaterDisposals = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/grey-water-disposal`
  ).then((res) => res.json());


  return {
    props: {
        inspectionForms,
      regions,
      districts,
      electoralAreas,
      communities,
      actions,
      analCleansings,
      cemeteryWorkers,
      drainTypes,
      drinkingWaterSources,
      effluentManagements,
      excretaContainments,
      excretaDisposals,
      facilities,
      frequencies,
      greyWaterDisposals,
    },
  };
}
