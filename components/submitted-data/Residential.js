import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import * as moment from "moment";
import Cookies from "js-cookie";

const Residential = ({
  data,
  regions,
  districts,
  electoralAreas,
  communities,
}) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [communityName, setCommunityName] = useState(null);
  const [communityId, setCommunityId] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  let loggedInUserType = Cookies.get("ut").split("??")[1];

  console.log(loggedInUserType);

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
        { inspectionFormId: 1, fileName: "residential.xlsx" }
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
      } else if (rating == 2 ) {
        return <span className="badge bg-warning">Average</span>;
      } else if (rating == 3) {
        return <span className="badge bg-danger">Poor</span>;
      }else{
        return <span className="badge bg-primary">Default</span>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilter = (e) => {
    e.preventDefault();

    const path = router.pathname;
    const query = router.query;

    let published = query.published;
    let page = query.page;

    // console.log(path);
    // console.log(router.asPath);
    router.push({
      pathname: path,
      query: { published, page, filterBy, filterValue, from, to },
    });

    // router.push({
    //   pathname: '/destination',
    //   query: {
    //     myData: JSON.stringify({'some data'})
    //    }
    // });
  };

  return (
    <div className="row">
      <div class="row row-cols-lg-auto g-3 align-items-center">
        {loggedInUserType == 1 || loggedInUserType == 2 ? (
          <div className="col-md-2">
            <label class="form-label mb-0">Select level</label>

            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterBy(e.target.value)}
              value={filterBy}
            >
              <option selected>Filter by </option>
              <option value="regionId">Region</option>
              <option value="districtId">District</option>
              <option value="electoralAreaId">Electoral Area</option>
              <option value="communityId">Community</option>
            </select>
          </div>
        ) : (
          <></>
        )}
        {loggedInUserType == 3 ? (
          <div className="col-md-2">
            <label class="form-label mb-0">Select level</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterBy(e.target.value)}
              value={filterBy}
            >
              <option selected>Filter by </option>
              <option value="districtId">District</option>
              <option value="electoralAreaId">Electoral Area</option>
              <option value="communityId">Community</option>
            </select>
          </div>
        ) : (
          <></>
        )}

        {loggedInUserType == 4 ? (
          <div className="col-md-2">
            <label class="form-label mb-0">Select level</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterBy(e.target.value)}
              value={filterBy}
            >
              <option selected>Filter by </option>

              <option value="electoralAreaId">Electoral Area</option>
              <option value="communityId">Community</option>
            </select>
          </div>
        ) : (
          <></>
        )}

        {filterBy == "regionId" ? (
          <div className="col-md-2">
            <label class="form-label mb-0">Select region</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterValue(e.target.value)}
              value={filterValue}
            >
              {regions.map((data) => (
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
          <div className="col-md-2">
            <label class="form-label mb-0">Select district</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterValue(e.target.value)}
              value={filterValue}
            >
              {districts.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <></>
        )}
        {filterBy == "electoralAreaId" ? (
          <div className="col-md-2">
            <label class="form-label mb-0">Select Electoral Area</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterValue(e.target.value)}
              value={filterValue}
            >
              {electoralAreas.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <></>
        )}
        {filterBy == "communityId" ? (
          <div className="col-md-2">
            <label class="form-label mb-0">Select community</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
              onChange={(e) => setFilterValue(e.target.value)}
              value={filterValue}
            >
              {communities.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <></>
        )}

        <div class="col-md-12">
          <label class="form-label mb-0">Range</label>
          <div class="row">
            <div class="col-lg-6">
              <input
                type="date"
                class="form-control"
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
            </div>

            <div class="col-lg-6">
              <input
                type="date"
                class="form-control"
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
            </div>
          </div>
        </div>

        <div class="col-12">
          <label class="form-label mb-0">.</label>
          <br />
          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => handleFilter(e)}
          >
            Filter
          </button>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">RESIDENTIAL PREMISES</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-label waves-effect right waves-light rounded-pill"
                  onClick={handleExportToExcel}
                >
                  <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                  Export To Excel
                </button>
              </div>
            </div>
            <br />
            <table
              id="fixed-header"
              className="table table-bordered table-responsive nowrap table-striped align-middle"
              style={{ width: "100%", overflow: "scroll" }}
            >
              <thead>
                <tr>
                  <th scope="col">Rating </th>
                  <th scope="col">Type</th>
                  <th scope="col">Premises Code</th>
                  <th scope="col"> Start Date</th>
                  <th scope="col"> End Date</th>
                  <th scope="col">Inspection Officer</th>
                  <th scope="col">GhanaPost GPS</th>
                  <th scope="col">GPS Accuracy</th>
                  <th scope="col">Region</th>
                  <th scope="col">District</th>
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
                      {" "}
                      <td>{handleRating(dt.Inspection.totalRating)}</td>
                      <td>
                        {dt.Inspection.InspectionType.name}
                        {dt.Inspection.InspectionType.id == 2?
                        <span>
                        
                          <Link
                            href={{
                              pathname: `/submitted-data/residential_view`,
                              query: {
                                id: dt.Inspection.prevInspectionId,
                              },
                            }}
                          >
                            <a className="dropdown-item">
                              <i className="ri-external-link-line align-bottom me-2 text-muted" />
                            </a>
                          </Link>
                        </span>:<></>}
                      </td>
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
                            pathname: `/submitted-data/residential_view`,
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

export default Residential;
