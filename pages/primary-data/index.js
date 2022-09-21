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
  hazardousWasteDisposals,
  inspectionTypes,
  nuisances,
  ownershipTypes,
  pestSigns,
  respondentDesignations,
  services,
  structureTypes,
  subtypes,
  toiletPitPositions,
  toiletTypes,
  types,
  wasteCollectionTypes,
  wasteStorageReceptacles,
  wasteWaterContainments,
  waterSourceTypes,
  waterStorageTypes,
  waterSupplyTypes,
  waterTreatmentTypes,

}) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <PrimaryData
              inspectionForms={inspectionForms}
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
              hazardousWasteDisposals={hazardousWasteDisposals}
              inspectionTypes={inspectionTypes}
              nuisances={nuisances}
              ownershipTypes={ownershipTypes}
              pestSigns={pestSigns}
              respondentDesignations={respondentDesignations}
              services={services}
              structureTypes={structureTypes}
              subtypes={subtypes}
              toiletTypes={toiletTypes}
              toiletPitPositions={toiletPitPositions}
              types={types}
              wasteCollectionTypes={wasteCollectionTypes}
              wasteStorageReceptacles={wasteStorageReceptacles}
              wasteWaterContainments={wasteWaterContainments}
              waterSourceTypes={waterSourceTypes}
              waterStorageTypes={waterStorageTypes}
              waterSupplyTypes={waterSupplyTypes}
              waterTreatmentTypes={waterTreatmentTypes}
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

  const hazardousWasteDisposals = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/hazardous-waste-disposal`
  ).then((res) => res.json());

  const inspectionTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/inspection-type`
  ).then((res) => res.json());

  const nuisances = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/nuisance`
  ).then((res) => res.json());

  const ownershipTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/ownership-type`
  ).then((res) => res.json());

  const pestSigns = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/pest-sign`
  ).then((res) => res.json());

  const respondentDesignations = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/respondent-designation`
  ).then((res) => res.json());

  const services = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/services`
  ).then((res) => res.json());

  const structureTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/structure-type`
  ).then((res) => res.json());

  const subtypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/subtypes`
  ).then((res) => res.json());

  const toiletPitPositions = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/toilet-pit-position`
  ).then((res) => res.json());

  const toiletTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/toilet-type`
  ).then((res) => res.json());

  const types = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/types`
  ).then((res) => res.json());

  const wasteCollectionTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/waste-collection-type`
  ).then((res) => res.json());

  const wasteStorageReceptacles = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/waste-storage-receptacle`
  ).then((res) => res.json());

  const wasteWaterContainments = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/waste-water-containment`
  ).then((res) => res.json());

  const waterSourceTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-source-type`
  ).then((res) => res.json());

  const waterStorageTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-storage-type`
  ).then((res) => res.json());

  const waterSupplyTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-supply-type`
  ).then((res) => res.json());

  const waterTreatmentTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-treatment-type`
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

      hazardousWasteDisposals,
      inspectionTypes,
      nuisances,
      ownershipTypes,
      ownershipTypes,
      respondentDesignations,
      services,
      structureTypes,
      subtypes,
      toiletPitPositions,
      toiletTypes,
      types,
      wasteCollectionTypes,
      wasteStorageReceptacles,
      wasteWaterContainments,
      waterSourceTypes,
      waterStorageTypes,
      waterSupplyTypes,
      waterTreatmentTypes,
    },
  };
}
