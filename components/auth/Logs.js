import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import moment from "moment";
import Cookies from "js-cookie";
const Logs = ({ data }) => {
  const [searchText, setSearchText] = useState();

  const router = useRouter();


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
        `/api/v1/auth/logs-to-excel`,
        {
          fileName: "Logs",
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
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Logs</h5>
          </div>
          <div className="card-body">
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
                  <th>User name</th>

                  <th>Email</th>
                  <th>Designation</th>

                  <th>Activity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((log) => {
                  return (
                    <tr key={log.id}>
                      <td>{log.User.otherNames} {log.User.surname}</td>
                      <td>{log.User.email}</td>

                      <td>{log.User.designation}</td>
                      <td>{log.activity}</td>
                      <td> {moment(log.createdAt).format(
                          "MMM Do YYYY, h:mm:ss a"
                        )}</td>

                      {/* <td>
                          <div className="dropdown d-inline-block">
                            <button
                              className="btn btn-soft-secondary btn-sm dropdown"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ri-more-fill align-middle" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="#!" className="dropdown-item">
                                  <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                                  View
                                </a>
                              </li>
                              
                            </ul>
                          </div>
                        </td> */}
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

export default Logs;
