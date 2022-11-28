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
              <div className="col-md-6">
                {/* Accordions Bordered */}

                <div
                  className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box accordion-secondary"
                  id="accordionBordered"
                >
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_region"
                        aria-expanded="false"
                        aria-controls="accor_borderedExamplecollapse1"
                      >
                        Region
                      </button>
                    </h2>
                    <div
                      id="accor_region"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample1"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add region</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      onChange={(e) =>
                                        setRegionName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Abbreviation
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      onChange={(e) =>
                                        setRegionAbbrv(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addRegion(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Abbrv</th>

                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {regions.map((region) => (
                                    <tr key={region.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{region.name}</td>
                                      <td>{region.abbrv}</td>
                                      <td>{region.createdAt}</td>
                                      <td>
                                        <button className="badge bg-danger">
                                          Cancelled
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_mmda"
                        aria-expanded="false"
                        aria-controls="accor_borderedExamplecollapse1"
                      >
                        MMDAs
                      </button>
                    </h2>
                    <div
                      id="accor_mmda"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample1"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add MMDA</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={districtName}
                                      onChange={(e) =>
                                        setDistrictName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Abbreviation
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      onChange={(e) =>
                                        setDistrictAbbrv(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="readonlyInput"
                                      className="form-label"
                                    >
                                      Select Region
                                    </label>

                                    <select
                                      className="form-select"
                                      id="inputGroupSelect02"
                                      value={regionId}
                                      onChange={(e) =>
                                        setRegionId(Number(e.target.value))
                                      }
                                    >
                                      <option selected>Choose...</option>
                                      {regions.map((r) => (
                                        <option key={r.id} value={r.id}>
                                          {r.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addDistrict(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Abbrv</th>

                                    <th scope="col">Region</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {districts.map((district) => (
                                    <tr key={district.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{district.name}</td>
                                      <td>{district.abbrv}</td>
                                      <td>{district.Region.name}</td>
                                      <td>
                                        <button className="badge bg-danger">
                                          Cancelled
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample2"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_electoral_area"
                        aria-expanded="false"
                        aria-controls="accor_electoral_area"
                      >
                        Electoral Area
                      </button>
                    </h2>
                    <div
                      id="accor_electoral_area"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample2"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add Electoral Area</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={electoralAreaName}
                                      onChange={(e) =>
                                        setElectoralAreaName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="readonlyInput"
                                      className="form-label"
                                    >
                                      Select District
                                    </label>

                                    <select
                                      className="form-select"
                                      id="inputGroupSelect02"
                                      value={districtId}
                                      onChange={(e) =>
                                        setDistrictId(Number(e.target.value))
                                      }
                                    >
                                      <option selected>Choose...</option>
                                      {districts.map((d) => (
                                        <option key={d.id} value={d.id}>
                                          {d.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addElectoralArea(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">District</th>

                                    <th scope="col">Region</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {electoralAreas.map((ea) => (
                                    <tr key={ea.id}>
                                      <td>{ea.name}</td>
                                      <td>{ea.abbrv}</td>
                                      <td>{ea.District.name}</td>

                                      <td>{ea.District.Region.name}</td>
                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_community"
                        aria-expanded="false"
                        aria-controls="accor_community"
                      >
                        Community
                      </button>
                    </h2>
                    <div
                      id="accor_community"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add Community</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={communityName}
                                      onChange={(e) =>
                                        setCommunityName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="readonlyInput"
                                      className="form-label"
                                    >
                                      Select District
                                    </label>

                                    <select
                                      className="form-select"
                                      id="inputGroupSelect02"
                                      value={electoralAreaId}
                                      onChange={(e) =>
                                        setElectoralAreaId(
                                          Number(e.target.value)
                                        )
                                      }
                                    >
                                      <option selected>Choose...</option>
                                      {districts.map((ea) => (
                                        <option key={ea.id} value={ea.id}>
                                          {ea.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCommunity(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Electoral Area</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {communities.map((c) => (
                                    <tr key={c.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{c.name}</td>
                                      {/* <td>{c.District.name}</td> */}
                                      {/* <td>{c.District.name}</td>

                                      <td>{c.District.Region.name}</td> */}
                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_action"
                        aria-expanded="false"
                        aria-controls="accor_action"
                      >
                        Actions
                      </button>
                    </h2>
                    <div
                      id="accor_action"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add Action</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={actionName}
                                      onChange={(e) =>
                                        setActionName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addAction(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {actions.map((a) => (
                                    <tr key={a.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{a.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_anal_cleansing"
                        aria-expanded="false"
                        aria-controls="accor_anal_cleansing"
                      >
                        Anal cleansing
                      </button>
                    </h2>
                    <div
                      id="accor_anal_cleansing"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={analCleansingName}
                                      onChange={(e) =>
                                        setAnalCleansingName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addAnalCleansing(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_cemetery_workers"
                        aria-expanded="false"
                        aria-controls="accor_cemetery_workers"
                      >
                        Cemetery workers
                      </button>
                    </h2>
                    <div
                      id="accor_cemetery_workers"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={cemeteryWorkerName}
                                      onChange={(e) =>
                                        setCemeteryWorkerName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {cemeteryWorkers.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_drain_type"
                        aria-expanded="false"
                        aria-controls="accor_drain_type"
                      >
                        Drain Type
                      </button>
                    </h2>
                    <div
                      id="accor_drain_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={drainTypeName}
                                      onChange={(e) =>
                                        setDrainTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addDrainType(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {drainTypes.map((d) => (
                                    <tr key={d.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{d.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_drinking_water"
                        aria-expanded="false"
                        aria-controls="accor_drinking_water"
                      >
                        Drinking Water Source
                      </button>
                    </h2>
                    <div
                      id="accor_drinking_water"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={drinkingWaterSourceName}
                                      onChange={(e) =>
                                        setDrinkingWaterSourceName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addDrinkingWaterSource(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {drinkingWaterSources.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_effluent_mgt"
                        aria-expanded="false"
                        aria-controls="accor_effluent_mgt"
                      >
                        Effluent Management
                      </button>
                    </h2>
                    <div
                      id="accor_effluent_mgt"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={effluentManagementName}
                                      onChange={(e) =>
                                        setEffluentManagementName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addEffluentManagement(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {effluentManagements.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_excreta_containment"
                        aria-expanded="false"
                        aria-controls="accor_excreta_containment"
                      >
                        Excreta Containment
                      </button>
                    </h2>
                    <div
                      id="accor_excreta_containment"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={excretaContainmentName}
                                      onChange={(e) =>
                                        setExcretaContainmentName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addExcretaContainment(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {excretaContainments.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_excreta_disposal"
                        aria-expanded="false"
                        aria-controls="accor_excreta_disposal"
                      >
                        Excreta Disposal
                      </button>
                    </h2>
                    <div
                      id="accor_excreta_disposal"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={excretaDisposalName}
                                      onChange={(e) =>
                                        setExcretaDisposalName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addExcretaDisposal(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {excretaDisposals.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_facility"
                        aria-expanded="false"
                        aria-controls="accor_facility"
                      >
                        Facility
                      </button>
                    </h2>
                    <div
                      id="accor_facility"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={facilityName}
                                      onChange={(e) =>
                                        setFacilityName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="readonlyInput"
                                      className="form-label"
                                    >
                                      Select Inspection Form
                                    </label>

                                    <select
                                      className="form-select"
                                      id="inputGroupSelect02"
                                      value={inspectionFormId}
                                      onChange={(e) =>
                                        setInspectionFormId(
                                          Number(e.target.value)
                                        )
                                      }
                                    >
                                      <option selected>Choose...</option>
                                      {inspectionForms.map((r) => (
                                        <option key={r.id} value={r.id}>
                                          {r.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addFacility(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {facilities.map((cw) => (
                                    <tr key={cw.id}>
                                      <td>{cw.name}</td>
                                      <td>{cw.InspectionForm.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_frequency"
                        aria-expanded="false"
                        aria-controls="accor_frequency"
                      >
                        Frequency
                      </button>
                    </h2>
                    <div
                      id="accor_frequency"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={frequencyName}
                                      onChange={(e) =>
                                        setFrequencyName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addFrequency(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {frequencies.map((cw) => (
                                    <tr key={cw.id}>
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_grey_water_disposal"
                        aria-expanded="false"
                        aria-controls="accor_grey_water_disposal"
                      >
                        Grey water disposal
                      </button>
                    </h2>
                    <div
                      id="accor_grey_water_disposal"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={greyWaterDisposalName}
                                      onChange={(e) =>
                                        setGreyWaterDisposalName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addGreyWaterDisposal(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {greyWaterDisposals.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_hazardous_waste"
                        aria-expanded="false"
                        aria-controls="accor_hazardous_waste"
                      >
                        Hazardous Waste Disposal
                      </button>
                    </h2>
                    <div
                      id="accor_hazardous_waste"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={cemeteryWorkerName}
                                      onChange={(e) =>
                                        setHazardousWasteDisposalName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addHazardousWasteDisposal(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {hazardousWasteDisposals.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                {/* Accordions Bordered */}

                <div
                  className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box accordion-secondary"
                  id="accordionBordered"
                >
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_ownership_type"
                        aria-expanded="false"
                        aria-controls="accor_ownership_type"
                      >
                        Ownership type
                      </button>
                    </h2>
                    <div
                      id="accor_ownership_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={ownershipTypeName}
                                      onChange={(e) =>
                                        setOwnershipTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addOwnershipType(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {ownershipTypes.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_pest_signs"
                        aria-expanded="false"
                        aria-controls="accor_pest_signs"
                      >
                        Pest Signs
                      </button>
                    </h2>
                    <div
                      id="accor_pest_signs"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={pestsSignName}
                                      onChange={(e) =>
                                        setPestsSignName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addPestsSign(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {pestSigns.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_respondent_designation"
                        aria-expanded="false"
                        aria-controls="accor_respondent_designation"
                      >
                        Respondent Designations
                      </button>
                    </h2>
                    <div
                      id="accor_respondent_designation"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={respondentDesignationName}
                                      onChange={(e) =>
                                        setRespondentDesignationName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addRespondentDesignation(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Form</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {respondentDesignations.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>
                                      {/* <td>{cw.InspectionForm.name}</td> */}

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_service"
                        aria-expanded="false"
                        aria-controls="accor_service"
                      >
                        Services
                      </button>
                    </h2>
                    <div
                      id="accor_service"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={serviceName}
                                      onChange={(e) =>
                                        setServiceName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addService(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {services.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>
                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_structure_type"
                        aria-expanded="false"
                        aria-controls="accor_structure_type"
                      >
                        Structure type
                      </button>
                    </h2>
                    <div
                      id="accor_structure_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={structureTypeName}
                                      onChange={(e) =>
                                        setStructureTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addStructureType(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {structureTypes.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_subtype"
                        aria-expanded="false"
                        aria-controls="accor_subtype"
                      >
                        Subtype
                      </button>
                    </h2>
                    <div
                      id="accor_subtype"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample1"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add subtype</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={subtypeName}
                                      onChange={(e) =>
                                        setSubtypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Type
                                    </label>
                                    <select
                                      className="form-select"
                                      id="inputGroupSelect02"
                                      value={regionId}
                                      onChange={(e) =>
                                        setTypeId(Number(e.target.value))
                                      }
                                    >
                                      <option selected>Choose...</option>
                                      {types.map((r) => (
                                        <option key={r.id} value={r.id}>
                                          {r.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addSubtype(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>

                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {subtypes.map((s) => (
                                    <tr key={s.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{s.name}</td>
                                      {/* <td>{region.abbrv}</td> */}
                                      <td>{s.createdAt}</td>
                                      <td>
                                        <button className="badge bg-primary">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_toilet_pit"
                        aria-expanded="false"
                        aria-controls="accor_toilet_pit"
                      >
                        Toilet Pit Position
                      </button>
                    </h2>
                    <div
                      id="accor_toilet_pit"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample1"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add Toilet Pit</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={toiletPitPositionName}
                                      onChange={(e) =>
                                        setToiletPitPositionName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addToiletPitPosition(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {toiletPitPositions.map((a) => (
                                    <tr key={a.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{a.name}</td>

                                      <td>
                                        <button className="badge bg-danger">
                                          Cancelled
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample2"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_toilet_type"
                        aria-expanded="false"
                        aria-controls="accor_toilet_type"
                      >
                        Toilet Type
                      </button>
                    </h2>
                    <div
                      id="accor_toilet_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample2"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add Toilet Type</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={toiletTypeName}
                                      onChange={(e) =>
                                        setToiletTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addToiletType(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {toiletTypes.map((ea) => (
                                    <tr key={ea.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{ea.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_waste_collection_type"
                        aria-expanded="false"
                        aria-controls="accor_waste_collection_type"
                      >
                        Waste collection type
                      </button>
                    </h2>
                    <div
                      id="accor_waste_collection_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">
                                Add Waste Collection Type
                              </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={wasteCollectionTypeName}
                                      onChange={(e) =>
                                        setWasteCollectionTypeName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addWasteCollectionType(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {wasteCollectionTypes.map((c) => (
                                    <tr key={c.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{c.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_waste_storage"
                        aria-expanded="false"
                        aria-controls="accor_waste_storage"
                      >
                        Waste Storage Receptacles
                      </button>
                    </h2>
                    <div
                      id="accor_waste_storage"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">
                                Add Waste Storage Receptacles
                              </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={actionName}
                                      onChange={(e) =>
                                        setWasteStorageReceptacleName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addWasteStorageReceptacle(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {wasteStorageReceptacles.map((a) => (
                                    <tr key={a.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{a.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_waste_water_containment"
                        aria-expanded="false"
                        aria-controls="accor_waste_water_containment"
                      >
                        Waste Water Containment
                      </button>
                    </h2>
                    <div
                      id="accor_waste_water_containment"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={wasteWaterContainmentName}
                                      onChange={(e) =>
                                        setWasteWaterContainmentName(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addWasteWaterContainment(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {wasteWaterContainments.map((a) => (
                                    <tr key={a.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{a.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_water_source_type"
                        aria-expanded="false"
                        aria-controls="accor_water_source_type"
                      >
                        Water Source Type
                      </button>
                    </h2>
                    <div
                      id="accor_water_source_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={waterSourceTypeName}
                                      onChange={(e) =>
                                        setWaterSourceTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addWaterSource(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {waterSourceTypes.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_water_storage_type"
                        aria-expanded="false"
                        aria-controls="accor_water_storage_type"
                      >
                        Water Storage Type
                      </button>
                    </h2>
                    <div
                      id="accor_water_storage_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={drainTypeName}
                                      onChange={(e) =>
                                        setWaterStorageTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addWaterStorage(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {waterStorageTypes.map((d) => (
                                    <tr key={d.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{d.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_water_supply"
                        aria-expanded="false"
                        aria-controls="accor_water_supply"
                      >
                        Water Supply Types
                      </button>
                    </h2>
                    <div
                      id="accor_water_supply"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={drinkingWaterSourceName}
                                      onChange={(e) =>
                                        setWaterSupplyTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addWaterSupply(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {waterSupplyTypes.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_inspection_type"
                        aria-expanded="false"
                        aria-controls="accor_inspection_type"
                      >
                        Inspection type
                      </button>
                    </h2>
                    <div
                      id="accor_inspection_type"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={inspectionTypeName}
                                      onChange={(e) =>
                                        setInspectionTypeName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          addInspectionType(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {inspectionTypes.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button className="badge bg-success">
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_nuisance"
                        aria-expanded="false"
                        aria-controls="accor_nuisance"
                      >
                        Nuisance
                      </button>
                    </h2>
                    <div
                      id="accor_nuisance"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add </h6>
                              <div className="row gy-4">
                                <div className="col-xxl-4 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      value={nuisanceName}
                                      onChange={(e) =>
                                        setNuisanceName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div className="text-end">
                                      <button
                                        onClick={(e) => {
                                          if (nuisanceId) updateNuisance(e);
                                          addNuisance(e);
                                        }}
                                        className="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {nuisances.map((cw) => (
                                    <tr key={cw.id}>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{cw.name}</td>

                                      <td>
                                        <button
                                          className="badge bg-success"
                                          onClick={(e) => {
                                            setNuisanceName(cw.name);
                                            setNuisanceId(cw.id);
                                          }}
                                        >
                                          Edit
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
