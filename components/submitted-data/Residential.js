import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import * as moment from "moment";
const Residential = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [communityName, setCommunityName] = useState(null);
  const [communityId, setCommunityId] = useState(null);

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
        `/api/v1/submitted-data/residential-excel`
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
      if (rating >= 4) {
        return <span className="badge bg-success">Good</span>;
      } else if (rating < 4 && rating >= 3) {
        return <span className="badge bg-warning">Average</span>;
      } else if (rating < 3) {
        return <span className="badge bg-danger">Poor</span>;
      }else{
        return <span className="badge bg-primary">Default</span>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">RESIDENTIAL PREMISES</h5>
          </div>
          <div className="card-body">
            <div>
              <button
                type="button"
                className="btn btn-success btn-label waves-effect right waves-light rounded-pill"
                onClick={handleExportToExcel}
              >
                <i class="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
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
