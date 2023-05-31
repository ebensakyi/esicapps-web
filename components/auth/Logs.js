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

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Logs</h5>
          </div>
          <div className="card-body">
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Surname</th>

                  <th>Other Names</th>
                  <th>Email</th>
                  <th>Designation</th>

                  <th>Activities</th>
                  {/* <th>View</th> */}
                </tr>
              </thead>
              <tbody>
                {data.data.map((log) => {
                  return (
                    <tr key={log.id}>
                      <td>{log.User.surname}</td>
                      <td>{log.User.otherNames}</td>
                      <td>{log.User.email}</td>

                      <td>{log.User.designation}</td>
                      <td>{log.activity}</td>

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
