import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import moment from "moment";
import Cookies from "js-cookie";

const Data = ({ data, regions, districts, electoralAreas, communities }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [districtsData, setDistrictsData] = useState([]);
  const [electoralAreasData, setElectoralAreasData] = useState([]);
  const [communitiesData, setCommunitiesData] = useState([]);

  const [region, setRegion] = useState();
  const [district, setDistrict] = useState();
  const [electoralArea, setElectoralArea] = useState();
  const [community, setCommunity] = useState();

  const [filterValue, setFilterValue] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  let districtId = Cookies?.get("d_id");
  let regionId = Cookies?.get("r_id");
  var dateString = moment().format("DD-MM-yyyy-HH-mm-ss-a");

  const query = router.query;

  let formId = query.inspectionFormId;
  let published = query.published;

  const handlePagination = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };

  const handleExportAll = async () => {
    try {
      const response = await axios.post(
        `/api/v1/submitted-data/data-to-excel`,
        {
          inspectionFormId: Number(formId),
          fileName: handleExcelName(),
          published,
          filterBy: query.filterBy || 'districtId',
          filterValue: query.filterValue|| 'undefined',
          searchText: query.searchText || ""
        }
      );
      if (response.status == 200) {
        router.push(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleExportFiltered = async () => {
    try {
      const response = await axios.post(
        `/api/v1/submitted-data/data-to-excel`,
        {
          inspectionFormId: Number(formId),
          fileName: handleExcelName(),
          published,
          filterBy: query.filterBy,
          filterValue: query.filterValue,
          exportType: 2,
        }
      );
      if (response.status == 200) {
        router.push(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRating = (rating) => {
    try {
      if (rating == 1) {
        return <span className="badge bg-success">Good</span>;
      } else if (rating == 2) {
        return <span className="badge bg-warning">Average</span>;
      } else if (rating == 3) {
        return <span className="badge bg-danger">Poor</span>;
      } else {
        return <span className="badge bg-primary">Default</span>;
      }
    } catch (error) {
    }
  };

  const handleExcelName = () => {
    try {
      if (formId == 1) {
        return `RESIDENTIAL PREMISES-${dateString}.xlsx`;
      } else if (formId == 2) {
        return `EATING & DRINKING PREMISES-${dateString}.xlsx`;
      } else if (formId == 3) {
        return `HEALTH PREMISES-${dateString}.xlsx`;
      } else if (formId == 4) {
        return `HOSPITALITY PREMISES-${dateString}.xlsx`;
      } else if (formId == 5) {
        return `INSTITUTION PREMISES-${dateString}.xlsx`;
      } else if (formId == 6) {
        return `INDUSTRY PREMISES-${dateString}.xlsx`;
      } else if (formId == 7) {
        return `MARKETS & LORRY PARK PREMISES-${dateString}.xlsx`;
      } else if (formId == 8) {
        return `SANITARY FACILITY PREMISES-${dateString}.xlsx`;
      }
    } catch (error) {
    }
  };

  const handleTitle = () => {
    try {
      if (formId == 1) {
        return <h5 className="card-title mb-0">RESIDENTIAL PREMISES</h5>;
      } else if (formId == 2) {
        return <h5 className="card-title mb-0">EATING & DRINKING PREMISES</h5>;
      } else if (formId == 3) {
        return <h5 className="card-title mb-0">HEALTH PREMISES</h5>;
      } else if (formId == 4) {
        return <h5 className="card-title mb-0">HOSPITALITY PREMISES</h5>;
      } else if (formId == 5) {
        return <h5 className="card-title mb-0">INSTITUTION PREMISES</h5>;
      } else if (formId == 6) {
        return <h5 className="card-title mb-0">INDUSTRY PREMISES</h5>;
      } else if (formId == 7) {
        return (
          <h5 className="card-title mb-0">MARKETS & LORRY PARK PREMISES</h5>
        );
      } else if (formId == 8) {
        return <h5 className="card-title mb-0">SANITARY FACILITY PREMISES</h5>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const returnFilterValue = async (filterBy) => {
    if (filterBy == "regionId") {
      setFilterValue(region);
      return region;
    }
    if (filterBy == "districtId") {
      setFilterValue(district);
      return district;
    }
    if (filterBy == "electoralAreaId") {
      setFilterValue(electoralArea);
      return electoralArea;
    }
    if (filterBy == "community") {
      setFilterValue(community);
      return community;
    }
  };
  const handleFilter = async (e) => {
    e.preventDefault();

    const path = router.pathname;
    const query = router.query;

    let published = query.published;

    let inspectionFormId = query.inspectionFormId;

    let page = query.page;
    await returnFilterValue(filterBy);

    router.push({
      pathname: path,
      query: {
        published,
        inspectionFormId,
        page,
        filterBy,
        filterValue,
        from,
        to,
      },
    });
  };

  const getDistrictsByRegion = async (regionId) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/district?regionId=" + regionId
      );
      setDistrictsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getElectoralAreasByDistrict = async (districtId) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/electoral-area?districtId=" + districtId
      );
      setElectoralAreasData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCommunitiesByElectoralArea = async (electoralAreaId) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/community?electoralAreaId=" + electoralAreaId
      );

      setCommunitiesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const autoHandleSearch = (searchText) => {
    try {
      let currentUrl = router.pathname;
      const path = router.pathname;
      const query = router.query;
  
      let published = query.published;
  
      let inspectionFormId = query.inspectionFormId;
      let page = query.page;

      router.push({
        pathname: path,
        query: {
          published,
          inspectionFormId,
          page,
          filterBy,
          filterValue,
          from,
          to,
          searchText
        },
      });
      // router.push({
      //   pathname: currentUrl,
      //   query: `&searchText=${searchText}`,
      // });
    } catch (error) {
      console.log(error);
    }
  };
  let nationalUser = districtId == "undefined" && regionId == "undefined";
  let regionalUser = districtId == "undefined" && regionId != "undefined";
  let districtUser = districtId != "undefined";


  useEffect(() => {

    const query = router.query;
    let searchText = query.searchText;
    setSearchText(searchText);
  }, []);

  return (
    <div className="row">
       <div className="row row-cols-lg-auto g-3 align-items-center">
            
            <div className="col-md-2">
              <label className="form-label mb-0">Select level</label>

              <select
                className="form-control"
                aria-label="Default select example"
                onChange={(e) => {
                  setFilterBy(e.target.value);

                  if (regionalUser) {
                    getDistrictsByRegion();
                  }

                  if (districtUser) {
                    getElectoralAreasByDistrict();
                  }
                  if (e.target.value == "national") {
                    setFilterValue(null);
                  }
                }}
                value={filterBy}
              >
                <option value="" selected>
                  Filter by{" "}
                </option>
                <option hidden={!nationalUser} value="national">
                  All
                </option>
                <option hidden={!nationalUser} value="regionId">
                  Region
                </option>
                <option
                  hidden={!nationalUser && !regionalUser}
                  value="districtId"
                >
                  District
                </option>
                <option
                  hidden={!nationalUser && !regionalUser && !districtUser}
                  value="electoralAreaId"
                >
                  Electoral Area
                </option>
                <option
                  hidden={!nationalUser && !regionalUser && !districtUser}
                  value="communityId"
                >
                  Community
                </option>
              </select>
            </div>

            {filterBy == "regionId" ? (
              <div className="col-md-2">
                <label className="form-label mb-0">Select region</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  onChange={async (e) => {
                    setRegion(e.target.value);

                    setFilterValue(e.target.value);
                  }}
                  value={region}
                >
                  {" "}
                  <option selected>Select region </option>
                  {regions?.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
            {filterBy == "districtId" ? (
              <>
                {nationalUser? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setRegion(e.target.value);

                        await getDistrictsByRegion(e.target.value);
                      }}
                      value={region}
                    >
                      {" "}
                      <option selected>Select region </option>
                      {regions?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-2">
                  <label className="form-label mb-0">Select district</label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFilterValue(e.target.value);
                      setDistrict(e.target.value);
                    }}
                    value={district}
                  >
                    {" "}
                    <option selected>Filter by </option>
                    {districtsData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}
            {filterBy == "electoralAreaId" ? (
              <>
                {nationalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      value={region}
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setRegion(e.target.value);

                        await getDistrictsByRegion(e.target.value);
                      }}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {regions?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                {nationalUser || regionalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select district</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setDistrict(e.target.value);

                        await getElectoralAreasByDistrict(e.target.value);
                      }}
                      value={district}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {districtsData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-2">
                  <label className="form-label mb-0">
                    Select Electoral Area
                  </label>
                  <select
                    className=" form-control "
                    aria-label="Default select example"
                    onChange={async (e) => {
                      setFilterValue(e.target.value);
                      setElectoralArea(e.target.value);

                      await getCommunitiesByElectoralArea(e.target.value);
                    }}
                    value={electoralArea}
                  >
                    {" "}
                    <option selected>Filter by </option>
                    {electoralAreasData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}
            {filterBy == "communityId" ? (
              <>
                {nationalUser || regionalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setRegion(e.target.value);

                        await getDistrictsByRegion(e.target.value);
                      }}
                      value={region}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {regions?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                {nationalUser||
               regionalUser ||
                districtUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select district</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setDistrict(e.target.value);
                        await getElectoralAreasByDistrict(e.target.value);
                      }}
                      value={district}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {districtsData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-2">
                  <label className="form-label mb-0">
                    Select Electoral Area
                  </label>
                  <select
                    className=" form-control "
                    aria-label="Default select example"
                    onChange={async (e) => {
                      setFilterValue(e.target.value);
                      setElectoralArea(e.target.value);

                      await getCommunitiesByElectoralArea(e.target.value);
                    }}
                    value={electoralArea}
                  >
                    {" "}
                    <option selected> Select Electoral Area </option>
                    {electoralAreasData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>{" "}
                <div className="col-md-2">
                  <label className="form-label mb-0">Select community</label>
                  <select
                    className=" form-control "
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFilterValue(e.target.value);
                      setCommunity(e.target.value);
                    }}
                    value={community}
                  >
                    {" "}
                    <option selected>Filter by </option>
                    {communitiesData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}

            {/* <div className="col-md-12">
              <label className="form-label mb-0">Start Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label mb-0">End Date</label>

              <input
                type="date"
                className="form-control"
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
            </div> */}

            <div className="col-12">
              <label className="form-label mb-0">.</label>
              <button
                type="submit"
                className="form-control btn btn-primary"
                onClick={(e) => handleFilter(e)}
              >
                Filter
              </button>
            </div>
          </div>

      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">{handleTitle()}</div>
            <div className="card-body" style={{"overflow":"auto","maxHeight": "100%"}}>
            <div className="row">
              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-label waves-effect right waves-light rounded-pill"
                  onClick={handleExportAll}
                >
                  <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                  Export as excel
                </button>{" "}
                {/* <button
                  type="button"
                  className="btn btn-sm btn-success btn-label waves-effect right waves-light rounded-pill"
                  onClick={handleExportFiltered}
              >
                  <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                  Export Filtered
                </button> */}
              </div>
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2">
                  <input
                    type="text"
                    className="form-control"
                    id="searchResultList"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      autoHandleSearch(e.target.value);
                    }}
                    placeholder="Search...."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
            </div>
            <br />
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th scope="col">Rating </th>
                  <th scope="col">Type</th>
                  <th scope="col">Premises Code</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Inspection Officer</th>
                  <th scope="col">GhanaPost GPS</th>
                  <th scope="col">Lat/Lng</th>
                  <th scope="col">GPS Accuracy</th>
                  <th scope="col">Region</th>
                  <th scope="col">District</th>
                  <th scope="col">Electoral Area</th>
                  <th scope="col">Community</th>
                  {/* <th>Respondent</th>
                  <th>Designation</th> */}{" "}
                  <th scope="col">Submission Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.inspection.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      <td>{handleRating(dt?.Inspection?.totalRating)}</td>
                      <td>
                        {dt?.Inspection?.InspectionType?.name}
                        {dt?.Inspection?.InspectionType?.id == 2 ? (
                          <span>
                            <Link
                              href={{
                                pathname: `/submitted-data/data_view`,
                                query: {
                                  id: dt?.Inspection?.prevInspectionId,
                                  inspectionFormId: formId,
                                  published: published,
                                },
                              }}
                            >
                              <a className="dropdown-item">
                                <i className="ri-external-link-line align-bottom me-2 text-success" />
                              </a>
                            </Link>
                          </span>
                        ) : (
                          <></>
                        )}
                      </td>
                      <td>{dt?.Inspection?.premisesCode}</td>
                      <td>
                        {moment(dt?.Inspection?.startedAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {moment(dt?.Inspection?.completedAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {dt?.User?.otherNames} {dt?.User?.surname}
                      </td>
                      <td>{dt?.ghanaPostGps}</td>
                      <td> <Link
                              href={{
                                pathname: `http://www.google.com/maps/place/${dt?.latitude},${dt?.longitude}`,
                                query: {
                             
                                },
                              }}
                              passHref
                            >
                              <a target="_blank" rel="noopener noreferrer" className="dropdown-item" > {dt?.latitude},{dt?.longitude}
                                <i className="ri-external-link-line align-bottom me-2 text-success" />
                              </a>
                           </Link></td>
                      <td>{dt?.accuracy}</td>
                      <td>
                        {dt?.Community?.ElectoralArea?.District?.Region?.name}
                      </td>
                      <td>{dt?.Community?.ElectoralArea?.District?.name}</td>
                      <td>{dt?.Community?.ElectoralArea?.name}</td>
                      <td>{dt?.Community?.name}</td>{" "}
                      <td>
                        {moment(dt?.Inspection?.createdAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {dt?.Inspection?.isPublished == 0 ? (
                          <span className="badge bg-danger">Unpublished</span>
                        ) : (
                          <span className="badge bg-success">Published</span>
                        )}{" "}
                      </td>
                      <td>
                        <Link
                          href={{
                            pathname: `/submitted-data/data_view`,
                            query: {
                              id: dt?.Inspection?.id,
                              inspectionFormId: formId,
                              published: published,
                            },
                          }}
                        >
                          <a className="dropdown-item">
                            <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                            View
                          </a>
                        </Link>
                        <Link
                          href={{
                            pathname: `/submitted-data/data_edit`,
                            query: {
                              id: dt?.Inspection?.id,
                              inspectionFormId: formId,
                              published: published,
                            },
                          }}
                        >
                          <a className="dropdown-item">
                            <i className="ri-edit-fill align-bottom me-2 text-muted" />{" "}
                            Edit
                          </a>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ReactPaginate
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              initialPage={data.curPage - 1}
              pageCount={data.maxPage}
              onPageChange={handlePagination}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
