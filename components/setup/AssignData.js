import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import * as moment from "moment";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignData = ({ districts, assignments }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [assignedFromUsers, setAssignedFromUsers] = useState([]);

  const [assignedToUsers, setAssignedToUsers] = useState([]);
  const [assignedToUser, setAssignedToUser] = useState("");
  const [assignedFromUser, setAssignedFromUser] = useState("");

  const [assignedFromDistrict, setAssignedFromDistrict] = useState();
  const [assignedToDistrict, setAssignedToDistrict] = useState();

  const handleSearch = () => {
    let currentUrl = router.pathname;
    router.push({
      pathname: currentUrl,
      query: `&searchText=${searchText}`,
    });
    // const path = router.pathname;
    // const query = router.query;
    // query.page = page.selected + 1;
    // router.push({
    //   pathname: path,
    //   query: query,
    // });
  };

  const autoHandleSearch = (searchText) => {
    let currentUrl = router.pathname;
    router.push({
      pathname: currentUrl,
      query: `&searchText=${searchText}`,
    });
  };

  const getAssignedFromUsersByDistricts = async (e) => {
    try {
      e.preventDefault();

      let districtId = e.target.value;
      const response = await axios.get(
        "/api/v1/account/user?districtId=" + districtId
      );

      setAssignedFromUsers(response.data.users);
    } catch (error) {}
  };

  const getAssignedToUsersByDistricts = async (e) => {
    try {
      e.preventDefault();
      let districtId = e.target.value;

      const response = await axios.get(
        "/api/v1/account/user?districtId=" + districtId
      );
      setAssignedToUsers(response.data.users);
    } catch (error) {}
  };

  const deleteAssignment = async (id) => {
    try {
      
      const response = await axios.delete(`/api/v1/setup/assign-data`,{
        id: id,
      }
      );
      router.replace(router.asPath);
    } catch (error) {
      console.log(error);
    }
  };


  const assignData = async (e) => {
    try {
      e.preventDefault();
      if (assignedFromUser == "" || assignedToUser == "") {
        return toast.error("Enter select users");
      }
      let data = {
        assignedFromUser,
        assignedToUser,
      };
      const response = await axios.post("/api/v1/setup/assign-data", data);
      toast.success(response.data.message);
      setAssignedFromUser("");
      setAssignedToUser("");
      router.replace(router.asPath);
    } catch (error) {
      if (error.response.status == 401) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="row">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="col-lg-12">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">DATA ASSIGNMENT</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    District Of Data Owner
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    //value={assignedFromDistrict}
                    onChange={(e) => {
                      setAssignedFromDistrict(e.target.value);
                      getAssignedFromUsersByDistricts(e);
                    }}
                  >
                    <option selected>Select district of data owner</option>
                    {districts?.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    Name Of Data Owner
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    //value={assignedFromUser}
                    onChange={(e) => {
                      setAssignedFromUser(e.target.value);
                    }}
                  >
                    <option selected>Select name of data owner</option>
                    {assignedFromUsers?.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.surname} {u.otherNames}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    District Of Data Receiver
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    // value={assignedToDistrict}
                    onChange={(e) => {
                      setAssignedToDistrict(e.target.value);
                      getAssignedToUsersByDistricts(e);
                    }}
                  >
                    <option selected>Select district of data receiver</option>
                    {districts?.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    Name Of Data Receiver
                  </label>

                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    //value={assignedToUser}
                    onChange={(e) => {
                      setAssignedToUser(e.target.value);
                    }}
                  >
                    <option selected>Select name of data receiver</option>
                    {assignedToUsers?.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.surname} {u.otherNames}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div>
                  <label htmlFor="basiInput" className="form-label">
                    .
                  </label>
                  <div className="text-end">
                    <button
                      onClick={(e) => {
                        assignData(e);
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
        </div>
      </div>
      <div className="col-lg-12">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">DATA ASSIGNMENTS</h5>
            </div>
            <div className="card-body">
              <table
                id="fixed-header"
                className="table table-bordered dt-responsive nowrap table-striped align-middle"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th> Date</th>
                    <th>Assigned From</th>

                    <th>Assigned To</th>

                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments?.map((dt) => {
                    return (
                      <tr key={dt.id}>
                        {" "}
                        <td>
                          {moment(dt.createdAt).format(
                            "MMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                        <td>
                          {dt.assignedFrom.surname} {dt.assignedFrom.otherNames}
                        </td>
                        <td>
                          {dt.assignedTo.surname} {dt.assignedTo.otherNames}
                        </td>
                        <td>{dt.deleted == 0 ? "Active" : "Inactive"}</td>
                        <td>
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
                              {/* <li>
                              <a href="#!" className="dropdown-item">
                                <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                                View
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item edit-item-btn">
                                <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item edit-item-btn">
                                <i className=" ri-send-plane-line align-bottom me-2 text-muted" />{" "}
                                Publish
                              </a>
                            </li> */}
                              <li>
                                <button
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    await deleteAssignment(dt.id);
                                  }}
                                  className="dropdown-item remove-item-btn"
                                >
                                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AssignData;
