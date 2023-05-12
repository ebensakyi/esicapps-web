import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PrimaryData = ({
  inspectionForms,
  regions,
  districts,
  // electoralAreas,
  communities,
  actions,
  cemeteryWorkers,
  drainTypes,
  drinkingWaterSources,
  effluentManagements,
  excretaContainments,
  excretaDisposals,
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
}) => {
  const [regionName, setRegionName] = useState();
  const [districtName, setDistrictName] = useState();
  // const [electoralAreaName, setElectoralAreaName] = useState();
  const [communityName, setCommunityName] = useState();

  const [regionAbbrv, setRegionAbbrv] = useState();
  const [regionId, setRegionId] = useState();
  const [districtId, setDistrictId] = useState();
  const [electoralAreaId, setElectoralAreaId] = useState();
  const [typeId, setTypeId] = useState();

  const [actionName, setActionName] = useState();
  const [analCleansingName, setAnalCleansingName] = useState();
  const [cemeteryWorkerName, setCemeteryWorkerName] = useState();
  const [drainTypeName, setDrainTypeName] = useState();
  const [drinkingWaterSourceName, setDrinkingWaterSourceName] = useState();
  const [effluentManagementName, setEffluentManagementName] = useState();
  const [excretaContainmentName, setExcretaContainmentName] = useState();
  const [excretaDisposalName, setExcretaDisposalName] = useState();
  // const [facilityName, setFacilityName] = useState();
  const [inspectionFormId, setInspectionFormId] = useState();
  // const [frequencyName, setFrequencyName] = useState();
  const [greyWaterDisposalName, setGreyWaterDisposalName] = useState();

  const [hazardousWasteDisposalName, setHazardousWasteDisposalName] =
    useState();
  const [inspectionTypeName, setInspectionTypeName] = useState();
  const [nuisanceName, setNuisanceName] = useState();
  const [ownershipTypeName, setOwnershipTypeName] = useState();
  const [respondentDesignationName, setRespondentDesignationName] = useState();
  const [serviceName, setServiceName] = useState();
  const [structureTypeName, setStructureTypeName] = useState();
  const [subtypeName, setSubtypeName] = useState();
  const [toiletPitPositionName, setToiletPitPositionName] = useState();
  const [toiletTypeName, setToiletTypeName] = useState();
  const [typeName, setTypeName] = useState();
  const [wasteCollectionTypeName, setWasteCollectionTypeName] = useState();
  const [wasteStorageReceptacleName, setWasteStorageReceptacleName] =
    useState();
  const [wasteWaterContainmentName, setWasteWaterContainmentName] = useState();
  const [waterSourceTypeName, setWaterSourceTypeName] = useState();
  const [waterStorageTypeName, setWaterStorageTypeName] = useState();
  const [waterSupplyTypeName, setWaterSupplyTypeName] = useState();
  const [waterTreatmentTypeName, setWaterTreatmentTypeName] = useState();

  const [pestsSignName, setPestsSignName] = useState();

  const [nuisanceId, setNuisanceId] = useState();

  const router = useRouter();

  const addRegion = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: regionName,
        abbrv: regionAbbrv,
      };

      const response = await axios.post("/api/v1/primary-data/region", {
        data,
      });

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addDistrict = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: regionName,
        regionId,
        abbrv: regionAbbrv,
      };

      const response = await axios.post("/api/v1/primary-data/district", {
        data,
      });

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  // const addElectoralArea = async (e) => {
  //   try {
  //     e.preventDefault();
  //     let data = {
  //       name: electoralAreaName,
  //       districtId,
  //     };

  //     const response = await axios.post("/api/v1/primary-data/electoral-area", {
  //       data,
  //     });

  //     router.replace(router.asPath);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addCommunity = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: communityName,
        electoralAreaId,
      };

      const response = await axios.post("/api/v1/primary-data/community", {
        data,
      });

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addAction = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: actionName,
      };

      const response = await axios.post("/api/v1/primary-data/action", {
        data,
      });

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addAnalCleansing = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: actionName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/anal-cleansing-material",
        {
          data,
        }
      );

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addCemeteryWorker = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: cemeteryWorkerName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/cemetery-workers",
        {
          data,
        }
      );
      setCemeteryWorkerName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addDrainType = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: drainTypeName,
      };

      const response = await axios.post("/api/v1/primary-data/drain-type", {
        data,
      });

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addDrinkingWaterSource = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: drinkingWaterSourceName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/drinking-water-source-type",
        {
          data,
        }
      );
      setDrinkingWaterSourceName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addEffluentManagement = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: effluentManagementName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/effluent-management",
        {
          data,
        }
      );

      setEffluentManagementName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addExcretaContainment = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: excretaContainmentName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/excreta-containment",
        {
          data,
        }
      );

      setExcretaContainmentName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addExcretaDisposal = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: excretaDisposalName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/excreta-disposal",
        {
          data,
        }
      );

      setExcretaDisposalName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  // const addFacility = async (e) => {
  //   try {
  //     e.preventDefault();
  //     let data = {
  //       name: facilityName,
  //       inspectionFormId,
  //     };

  //     const response = await axios.post("/api/v1/primary-data/facility", {
  //       data,
  //     });

  //     setFacilityName("");
  //     router.replace(router.asPath);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const addFrequency = async (e) => {
  //   try {
  //     e.preventDefault();
  //     let data = {
  //       name: frequencyName,
  //     };

  //     const response = await axios.post("/api/v1/primary-data/frequency", {
  //       data,
  //     });

  //     setFrequencyName("");
  //     router.replace(router.asPath);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addGreyWaterDisposal = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: greyWaterDisposalName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/grey-water-disposal",
        {
          data,
        }
      );

      setGreyWaterDisposalName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addHazardousWasteDisposal = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: hazardousWasteDisposalName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/hazardous-waste-disposal",
        {
          data,
        }
      );

      setHazardousWasteDisposalName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addInspectionType = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: inspectionTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/inspection-type",
        {
          data,
        }
      );

      setInspectionTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addNuisance = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: nuisanceName,
      };

      const response = await axios.post("/api/v1/primary-data/nuisance", {
        data,
      });

      setNuisanceName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNuisance = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: nuisanceName,
        id: nuisanceId,
      };

      console.log(data);
      const response = await axios.put("/api/v1/primary-data/nuisance", {
        data,
      });

      setNuisanceName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addOwnershipType = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: ownershipTypeName,
      };

      const response = await axios.post("/api/v1/primary-data/ownership-type", {
        data,
      });

      setOwnershipTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addRespondentDesignation = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: respondentDesignationName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/respondent-designation",
        {
          data,
        }
      );

      setRespondentDesignationName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addService = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: serviceName,
      };

      const response = await axios.post("/api/v1/primary-data/services", {
        data,
      });

      setServiceName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addStructureType = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: structureTypeName,
      };

      const response = await axios.post("/api/v1/primary-data/structure-type", {
        data,
      });

      setStructureTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addSubtype = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: subtypeName,
      };

      const response = await axios.post("/api/v1/primary-data/subtypes", {
        data,
      });

      setSubtypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addToiletPitPosition = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: toiletPitPositionName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/toilet-pit-position",
        {
          data,
        }
      );

      setToiletPitPositionName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addToiletType = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: toiletTypeName,
      };

      const response = await axios.post("/api/v1/primary-data/toilet-type", {
        data,
      });

      setToiletTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addTypeName = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: typeName,
      };

      const response = await axios.post("/api/v1/primary-data/types", {
        data,
      });

      setTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addWasteCollectionType = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: wasteCollectionTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/waste-collection-type",
        {
          data,
        }
      );

      setWasteCollectionTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addWasteStorageReceptacle = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: wasteStorageReceptacleName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/waste-storage-receptacle",
        {
          data,
        }
      );

      setWasteStorageReceptacleName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addWasteWaterContainment = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: wasteWaterContainmentName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/waste-water-containment",
        {
          data,
        }
      );

      setWasteWaterContainmentName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addWaterSource = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: waterSourceTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/water-source-type",
        {
          data,
        }
      );

      setWaterSourceTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addWaterStorage = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: waterStorageTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/water-storage-type",
        {
          data,
        }
      );

      setWaterStorageTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  const addWaterSupply = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: waterSupplyTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/grey-water-disposal",
        {
          data,
        }
      );

      setWaterSupplyTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addWaterTreatment = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: waterTreatmentTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/grey-water-disposal",
        {
          data,
        }
      );

      setWaterSupplyTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

  const addPestsSign = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: waterSupplyTypeName,
      };

      const response = await axios.post(
        "/api/v1/primary-data/grey-water-disposal",
        {
          data,
        }
      );

      setWaterSupplyTypeName("");
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row">
      <div className="col-xxl-12">
        <h5 className="mb-3">Primary Data</h5>
        <div className="card">
          <div className="card-body">
            {/* <p className="text-muted">
              Use <code>flex-column</code> className to create Vertical nav tabs.
            </p> */}
            <div className="row">
              <table
                id="fixed-header"
                className="table table-bordered dt-responsive nowrap table-striped align-middle"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Data</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Regions</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Districts</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Actions</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>

                  <tr>
                    <td>Cemetery Workers</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Drain Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Drinking Water Sources</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Effluent Managements</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Excreta Containments</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Excreta Disposals</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Grey Water Disposals</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Hazardous Waste Disposals</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Inspection Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Nuisances</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ownership Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Pest Signs</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Respondent Designations</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Structure Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Premises types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                  <td>Premises sub-types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Toilet Pit Positions</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Toilet Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Waste Collection Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Waste Storage Receptacles</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Waste Water Containments</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Water Source Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Water Storage Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Water Supply Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Water Treatment Types</td>
                    <td>
                      <button className="badge bg-success">Edit</button>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            {/*end row*/}
          </div>
          {/* end card-body */}
        </div>
        {/* end card */}
      </div>
    </div>
  );
};

export default PrimaryData;
