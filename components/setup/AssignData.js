import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AssignData = ({ districts }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [assignedFromUsers, setAssignedFromUsers] = useState([]);

  const [assignedToUsers, setAssignedToUsers] = useState([]);
  const [assignedToUser, setAssignedToUser] = useState(null);
  const [assignedFromUser, setAssignedFromUser] = useState(null);

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

      setAssignedFromUsers(response.data);
    } catch (error) {}
  };

  const getAssignedToUsersByDistricts = async (e) => {
    try {
      e.preventDefault();
      let districtId = e.target.value;

      const response = await axios.get(
        "/api/v1/account/user?districtId=" + districtId
      );
      setAssignedToUsers(response.data);
    } catch (error) {
     
    }
  };
  const assignData = async (e) => {
    try {
      e.preventDefault();
      if (assignedFromUser == null || assignedToUser == null) {
        return toast.error("Enter community name");
      }
      let data = {
        assignedFromUser,
        assignedToUser
      };
      const response = await axios.post("/api/v1/setup/assign-data", 
        data,
      );
      toast.success(response.data.message);
      setAssignedFromUser(null);
      setAssignedToUser(null);

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
                    {districts.map((district) => (
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
                    {assignedFromUsers.map((u) => (
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
                    {districts.map((district) => (
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
                    {assignedToUsers.map((u) => (
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
            <div className="card-body"></div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AssignData;
