import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import * as moment from "moment";
import Cookies from "js-cookie";

const Institution = ({
  data,
  regions,
  districts,
  electoralAreas,
  communities,
}) => {
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
  let loggedInUserType = Cookies.get("ut").split("??")[1];

  const handleFilter = (e) => {
    e.preventDefault();

    const path = router.pathname;
    const query = router.query;

    let published = query.published;
    let page = query.page;

    router.push({
      pathname: path,
      query: { published, page, filterBy, filterValue, from, to },
    });
  };
  const handlePagination = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };

  const handleExportToExcel = async () => {
    try {
      const response = await axios.post(
        `/api/v1/submitted-data/export-to-excel`,
        { inspectionFormId: 5, fileName: "institution.xlsx" }
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
  let nationalUser = loggedInUserType == 1 || loggedInUserType == 2;
  let regionalUser = loggedInUserType == 3 || loggedInUserType == 4;
  let districtUser = loggedInUserType == 5 || loggedInUserType == 6;
  return (
    <div className="row">
       <div className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-md-2">
              <label className="form-label mb-0">Select level</label>

              <select
                className="form-control"
                aria-label="Default select example"
                onChange={(e) => {setFilterBy(e.target.value);
                
                if(districtUser){
                  getElectoralAreasByDistrict()
                }
              }}
                value={filterBy}
              >
                <option selected>Filter by </option>
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
                {loggedInUserType == 1 || loggedInUserType == 2 ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
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
                    onChange={(e) => setFilterValue(e.target.value)}
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
                {nationalUser ||
                regionalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select district</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
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
                {loggedInUserType == 1 || loggedInUserType == 2 ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
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
                {loggedInUserType == 1 ||
                loggedInUserType == 2 ||
                loggedInUserType == 3 ||
                loggedInUserType == 4 ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select district</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
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
                    onChange={(e) => setFilterValue(e.target.value)}
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

            <div className="col-md-12">
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
            </div>

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

          <br />
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">INSTITUTION PREMISES</h5>
          </div>
          <div className="card-body">
            <div>
              <button
                type="button"
                className="btn btn-success btn-label waves-effect right waves-light rounded-pill"
                onClick={handleExportToExcel}
              >
                <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                Export To Excel
              </button>
            </div>
            <br />
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Rating </th>
                  <th>Premises Code</th>
                  <th> Start Date</th>
                  <th> End Date</th>
                  <th>Inspection Officer</th>
                  <th>GhanaPost GPS</th>
                  <th>GPS Accuracy</th>
                  <th>Region</th>
                  <th>District</th>
                  <th>Community</th>
                  {/* <th>Respondent</th>
                  <th>Designation</th> */}{" "}
                  <th>Submission Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.inspection.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      {" "}
                      <td>{handleRating(dt.Inspection.totalRating)}</td>
                      <td>{dt.Inspection.premisesCode}</td>
                      <td>
                        {moment(dt.Inspection.startedAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {moment(dt.Inspection.completedAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {dt.User.otherNames} {dt.User.surname}
                      </td>
                      <td>{dt.ghanaPostGps}</td>
                      <td>{dt.accuracy}</td>
                      <td>
                        {dt.Community != null
                          ? dt.Community.District.Region.name
                          : ""}
                      </td>
                      <td>
                        {dt.Community != null ? dt.Community.District.name : ""}
                      </td>
                      <td>
                        {dt.Community != null
                          ? dt.Community.name
                          : dt.community}
                        {/* {dt.community} */}
                      </td>{" "}
                      <td>
                        {moment(dt.Inspection.createdAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {dt.Inspection.isPublished == 0 ? (
                          <span className="badge bg-danger">Unpublished</span>
                        ) : (
                          <span className="badge bg-success">Published</span>
                        )}{" "}
                      </td>
                      <td>
                        <Link
                          href={{
                            pathname: `/submitted-data/institution_view`,
                            query: {
                              id: dt.Inspection.id,
                            },
                          }}
                        >
                          <a className="dropdown-item">
                            <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                            View
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

export default Institution;
