import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PrimaryData = ({ regions, districts, electoralAreas }) => {
  const [regionName, setRegionName] = useState();
  const [electoralAreaName, setElectoralAreaName] = useState();

  const [regionAbbrv, setRegionAbbrv] = useState();
  const [regionId, setRegionId] = useState();
  const [districtId, setDistrictId] = useState();

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
                        data-bs-target="#accor_borderedExamplecollapse2"
                        aria-expanded="false"
                        aria-controls="accor_borderedExamplecollapse2"
                      >
                        Electoral Area
                      </button>
                    </h2>
                    <div
                      id="accor_borderedExamplecollapse2"
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

                                    <label htmlFor="readonlyInput" className="form-label">
                                      Select District
                                    </label>

                                    <select
                                      class="form-select"
                                      id="inputGroupSelect02"
                                      value={districtId}
                                      onChange={(e) => setDistrictId(Number(e.target.value))}
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
                        data-bs-target="#accor_borderedExamplecollapse3"
                        aria-expanded="false"
                        aria-controls="accor_borderedExamplecollapse3"
                      >
                        Electoral Area
                      </button>
                    </h2>
                    <div
                      id="accor_borderedExamplecollapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        Cras ultricies mi eu turpis hendrerit fringilla.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; In ac dui quis mi
                        consectetuer lacinia. Nam pretium turpis et arcu arcu
                        tortor, suscipit eget, imperdiet nec, imperdiet iaculis
                        aliquam ultrices mauris.
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
