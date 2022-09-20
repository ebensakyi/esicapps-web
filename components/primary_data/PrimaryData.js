import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PrimaryData = ({
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

}) => {
  const [regionName, setRegionName] = useState();
  const [districtName, setDistrictName] = useState();
  const [electoralAreaName, setElectoralAreaName] = useState();
  const [communityName, setCommunityName] = useState();

  const [regionAbbrv, setRegionAbbrv] = useState();
  const [regionId, setRegionId] = useState();
  const [districtId, setDistrictId] = useState();
  const [electoralAreaId, setElectoralAreaId] = useState();

  const [actionName, setActionName] = useState();
  const [analCleansingName, setAnalCleansingName] = useState();
  const [cemeteryWorkerName, setCemeteryWorkerName] = useState();
  const [drainTypeName, setDrainTypeName] = useState();
  const [drinkingWaterSourceName, setDrinkingWaterSourceName] = useState()
  const [effluentManagementName, setEffluentManagementName] = useState()
  const [excretaContainmentName, setExcretaContainmentName] = useState()

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
  const addElectoralArea = async (e) => {
    try {
      e.preventDefault();
      let data = {
        name: electoralAreaName,
        districtId,
      };

      const response = await axios.post("/api/v1/primary-data/electoral-area", {
        data,
      });

      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };

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
      setCemeteryWorkerName("")
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
      setDrinkingWaterSourceName("")
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

      setEffluentManagementName("")
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

      setEffluentManagementName("")
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
              Use <code>flex-column</code> class to create Vertical nav tabs.
            </p> */}
            <div className="row">
              <div className="col-md-6">
                {/* Accordions Bordered */}
                <div
                  className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box accordion-secondary"
                  id="accordionBordered"
                >
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_region"
                        aria-expanded="true"
                        aria-controls="accor_borderedExamplecollapse1"
                      >
                        Region
                      </button>
                    </h2>
                    <div
                      id="accor_region"
                      className="accordion-collapse collapse show"
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
                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addRegion(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_mmda"
                        aria-expanded="true"
                        aria-controls="accor_borderedExamplecollapse1"
                      >
                        MMDAs
                      </button>
                    </h2>
                    <div
                      id="accor_mmda"
                      className="accordion-collapse collapse show"
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
                                      class="form-select"
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
                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addDistrict(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                  <div className="accordion-item mt-2">
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
                                      class="form-select"
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
                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addElectoralArea(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <th scope="col">District</th>

                                    <th scope="col">Region</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {electoralAreas.map((ea) => (
                                    <tr>
                                      {/* <th scope="row">{region.id}</th> */}
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
                                      value={electoralAreaName}
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
                                      Select Electoral Area
                                    </label>

                                    <select
                                      class="form-select"
                                      id="inputGroupSelect02"
                                      value={electoralAreaId}
                                      onChange={(e) =>
                                        setElectoralAreaId(
                                          Number(e.target.value)
                                        )
                                      }
                                    >
                                      <option selected>Choose...</option>
                                      {electoralAreas.map((ea) => (
                                        <option key={ea.id} value={ea.id}>
                                          {ea.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCommunity(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
                                      {/* <th scope="row">{region.id}</th> */}
                                      <td>{c.name}</td>
                                      <td>{c.ElectoralArea.name}</td>
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addAction(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addAnalCleansing(e);
                                        }}
                                        class="btn btn-primary"
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
                                  {analCleansings.map((a) => (
                                    <tr>
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addDrainType(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                                        setDrinkingWaterSourceName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addDrinkingWaterSource(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                                        setEffluentManagementName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addEffluentManagement(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                                        setExcretaContainmentName(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addExcretaContainment(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
                        data-bs-target="#accor_xxxxx"
                        aria-expanded="false"
                        aria-controls="accor_xxxxx"
                      >
                        XXXXXXXXXXXXXXXXX
                      </button>
                    </h2>
                    <div
                      id="accor_xxxxx"
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

                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => {
                                          addCemeteryWorker(e);
                                        }}
                                        class="btn btn-primary"
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
                                    <tr>
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
