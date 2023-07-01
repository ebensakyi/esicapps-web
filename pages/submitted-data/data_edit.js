import { SERVER_BASE_URL } from "../../config";
import DataEdit from "../../components/submitted-data/DataEdit";

export default function data_edit({ data }) {
  return (
    // <div id="layout-wrapper">
    //   <Header />

    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <DataEdit data={data} />
        </div>
      </div>
    </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;
  const { id } = context.query;
  const inspectionFormId = context.query.inspectionFormId || 1;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  const submittedData = await fetch(
    `${SERVER_BASE_URL}/api/v1/submitted-data/data-view?id=${id}&?session=${session}&inspectionFormId=${inspectionFormId}`
  ).then((res) => res.json());

  const waterSupply = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-supply-type?session=${session}`
  ).then((res) => res.json());

  const waterSources = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-source-type?session=${session}`
  ).then((res) => res.json());
  const waterStorages = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-storage-type?session=${session}`
  ).then((res) => res.json());

  const waterTreatment = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-treatment-type?session=${session}`
  ).then((res) => res.json());

  const drinkingWaterSources = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/water-source-type?session=${session}`
  ).then((res) => res.json());

  const drainType = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/drain-type?session=${session}`
  ).then((res) => res.json());

  const effluentManagement = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/effluent-management?session=${session}`
  ).then((res) => res.json());

  const excretaContainment = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/excreta-containment?session=${session}`
  ).then((res) => res.json());

  const excretaDisposalMethod = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/excreta-disposal-method?session=${session}`
  ).then((res) => res.json());

  const greyWaterDisposal = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/grey-water-disposal?session=${session}`
  ).then((res) => res.json());

  const toiletType = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/toilet-type?session=${session}`
  ).then((res) => res.json());

  const wasteReceptacle = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/waste-receptacle?session=${session}`
  ).then((res) => res.json());

  const unservicedWasteDisposal = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/unserviced-waste-disposal?session=${session}`
  ).then((res) => res.json());

  const nuisanceDetected = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/nuisance?session=${session}`
  ).then((res) => res.json());

  const action = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/action?session=${session}`
  ).then((res) => res.json());
  ///////////////////////
  const waterSupplyOptions = waterSupply.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const waterSourcesOptions = waterSources.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const waterStoragesOptions = waterStorages.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const waterTreatmentOptions = waterTreatment.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const drinkingWaterSourcesOptions = drinkingWaterSources.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const drainTypeOptions = drainType.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const effluentManagementOptions = effluentManagement.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const excretaContainmentOptions = excretaContainment.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const excretaDisposalMethodOptions = excretaDisposalMethod.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const greyWaterDisposalOptions = greyWaterDisposal.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const toiletTypeOptions = toiletType.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const wasteReceptacleOptions = wasteReceptacle.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const unservicedWasteDisposalOptions = unservicedWasteDisposal.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const nuisanceDetectedOptions = nuisanceDetected.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  const actionOptions = action.map((data) => {
    return {
      value: data.id,
      label: data.name,
    };
  });
  return {
    props: {
      data: {
        submittedData,
        waterSupplyOptions,
        waterSourcesOptions,
        waterStoragesOptions,
        waterTreatmentOptions,
        drinkingWaterSourcesOptions,
        drainTypeOptions,
        effluentManagementOptions,
        excretaContainmentOptions,
        excretaDisposalMethodOptions,
        greyWaterDisposalOptions,
        toiletTypeOptions,
        wasteReceptacleOptions,
        unservicedWasteDisposalOptions,
        nuisanceDetectedOptions,
        actionOptions,
      },
    },
  };
}
