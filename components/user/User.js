import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const User = ({ users, userTypes, userLevels, regions }) => {
  const router = useRouter();

  const [userType, setUserType] = useState();
  const [userId, setUserId] = useState()
  const [selectedUserLevel, setSelectedUserLevel] = useState();

  const [surname, setSurname] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [region, setRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [electoralArea, setElectoralArea] = useState();
  const [showRegion, setShowRegion] = useState(false);
  const [showDistrict, setShowDistrict] = useState(false);

  // let loggedInUserType = Cookies.get("ut").split("??")[1];
  let districtId = Cookies?.get("d_id");
  let regionId = Cookies?.get("r_id");
  useEffect(() => {
    // setDistricts(districts);
  }, []);
  const handleExportAll = async () => {
    try {
      const response = await axios.post(
        `/api/v1/submitted-data/data-to-excel`,
        {
          inspectionFormId: Number(formId),
          fileName: handleExcelName(),
          published,
          exportType: 1,
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

  const addUser = async (e) => {
    try {
      e.preventDefault();

   
      if (surname == "") {
        return toast.error("Surname cannot be empty");
      }
      if (otherNames == "") {
        return toast.error("Other Names cannot be empty");
      }
      if (email == "") {
        return toast.error("Email cannot be empty");
      }
      if (phoneNumber == "") {
        return toast.error("PhoneNumber cannot be empty");
      }
      if (designation == "") {
        return toast.error("Designation cannot be empty");
      }
      if (userType == "") {
        return toast.error("User type cannot be empty");
      }
      if (selectedUserLevel == 2) {
        if (region == null || region == "") {
          return toast.error("Region cannot be empty");
        }
      }
      if (selectedUserLevel == 3) {
        if (district == null || district == "") {
          return toast.error("District cannot be empty");
        }
      }

      let data = {
        userTypeId: Number(userType),
        userLevelId: Number(selectedUserLevel),

        surname,
        otherNames,
        email,
        phoneNumber,
        designation,
        region,
        district,
      };

      const response = await axios.post("/api/v1/account/user", data);
      router.replace(router.asPath);

      setSurname("");
      setOtherNames("");
      setEmail("");
      setPhoneNumber("");
      setDesignation("");
      setUserType("");
      setRegion("");
      setDistrict("");

      return toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred while adding user");
    }
  };

  const updateUser = async (e) => {
    try {
      e.preventDefault();

      if (surname == "") {
        return toast.error("Surname cannot be empty");
      }
      if (otherNames == "") {
        return toast.error("Other Names cannot be empty");
      }
      if (email == "") {
        return toast.error("Email cannot be empty");
      }
      if (phoneNumber == "") {
        return toast.error("PhoneNumber cannot be empty");
      }
      if (designation == "") {
        return toast.error("Designation cannot be empty");
      }
      if (userType == "") {
        return toast.error("User type cannot be empty");
      }
      if (selectedUserLevel == 2) {
        if (region == null || region == "") {
          return toast.error("Region cannot be empty");
        }
      }
      if (selectedUserLevel == 3) {
        if (district == null || district == "") {
          return toast.error("District cannot be empty");
        }
      }

      let data = {
        userId,
        userTypeId: Number(userType),
        userLevelId: Number(selectedUserLevel),
        surname,
        otherNames,
        email,
        phoneNumber,
        designation,
        region,
        district,
      };


      const response = await axios.put("/api/v1/account/user", data);
      router.replace(router.asPath);

      setSurname("");
      setOtherNames("");
      setEmail("");
      setPhoneNumber("");
      setDesignation("");
      setUserType("");
      setRegion("");
      setDistrict("");

      return toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred while updating user");
    }
  };

  const getDistrictsByRegion = async (regionId) => {
    try {
      //e.preventDefault();
      const response = await axios.get(
        "/api/v1/primary-data/district?regionId=" + regionId
      );
      console.log(response);
      setDistricts(response.data);
    } catch (error) {}
  };

  // const getElectoralByDistrict = async (e, districtId) => {
  //   try {
  //     e.preventDefault();
  //     const response = await axios.get(
  //       "/api/v1/primary-data/electoral-area?districtId=" + districtId
  //     );
  //     setElectoralAreas(response.data);
  //   } catch (error) {}
  // };

  let nationalUser = districtId == "undefined" && regionId == "undefined";
  let regionalUser = districtId == "undefined" && regionId != "undefined";
  let districtUser = districtId != "undefined";
  return (
    <>
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
        <div className="col-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">Add User</h4>
                  {/* <div className="flex-shrink-0">
                  <div className="form-check form-switch form-switch-right form-switch-md">
                    <label
                      htmlFor="form-grid-showcode"
                      className="form-label text-muted"
                    >
                      Show Code
                    </label>
                    <input
                      className="form-check-input code-switcher"
                      type="checkbox"
                      id="form-grid-showcode"
                    />
                  </div>
                </div> */}
                </div>
                {/* end card header */}
                <div className="card-body">
                  <div className="row gy-4">
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="basiInput" className="form-label">
                          Surname
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="basiInput"
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="labelInput" className="form-label">
                          Other names
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="labelInput"
                          value={otherNames}
                          onChange={(e) => setOtherNames(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label
                          htmlFor="placeholderInput"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="placeholderInput"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="valueInput" className="form-label">
                          Phone number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={phoneNumber}
                          id="valueInput"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="valueInput" className="form-label">
                          Designation/Position
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="valueInput"
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="readonlyInput" className="form-label">
                          User type
                        </label>

                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          onChange={(e) => {
                            setUserType(e.target.value);
                          }}
                          value={userType}
                        >
                          <option value="">Choose...</option>
                          {userTypes.map((userType) => (
                            <option key={userType.id} value={userType.id}>
                              {userType.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                      <label className="form-label mb-0">
                        Select user level
                      </label>

                      <select
                        className="form-control"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setSelectedUserLevel(e.target.value);

                          if (selectedUserLevel == 1) {
                            setRegion(null);
                            setDistrict(null);
                          }
                          if (selectedUserLevel == 2) {
                            setDistrict(null);
                          }
                          if (selectedUserLevel == 3) {
                            setRegion(null);
                          }
                          // if (districtUser) {
                          //   getElectoralAreasByDistrict();
                          // }
                          // if (e.target.value == "national") {
                          //   setFilterValue(null);
                          // }
                        }}
                        value={selectedUserLevel}
                      >
                        <option value="">...Select...</option>
                       {/*  {userLevels?.map((data) => (
                          <option key={data.id} value={data.id}>
                            {data.name}
                          </option>
                        ))} */}

                        <option hidden={!nationalUser} value="1">
                        National
                      </option>
                      <option hidden={!nationalUser} value="2">
                        Region
                      </option>
                      <option hidden={!nationalUser && !regionalUser} value="3">
                        District
                      </option>
                      </select>
                    </div>

                    {selectedUserLevel == "2" ? (
                      <div className="col-xxl-3 col-md-6">
                        <label className="form-label mb-0">Select region</label>
                        <select
                          className="form-control"
                          aria-label="Default select example"
                          onChange={async (e) => {
                            setRegion(e.target.value);

                            // setFilterValue(e.target.value);
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
                    {selectedUserLevel == "3" ? (
                      <>
                        {nationalUser ? (
                          <div className="col-xxl-3 col-md-6">
                            <label className="form-label mb-0">
                              Select region
                            </label>
                            <select
                              className="form-control"
                              aria-label="Default select example"
                              onChange={async (e) => {
                                //setFilterValue(e.target.value);
                                setRegion(e.target.value);

                                await getDistrictsByRegion(e.target.value);
                              }}
                              value={region}
                            >
                              {" "}
                              <option selected>...Select region... </option>
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
                        <div className="col-xxl-3 col-md-6">
                          <label className="form-label mb-0">
                            Select district
                          </label>
                          <select
                            className="form-control"
                            aria-label="Default select example"
                            onChange={(e) => {
                              setDistrict(e.target.value);
                            }}
                            value={district}
                          >
                            {" "}
                            <option selected>...Select... </option>
                            {districts?.map((data) => (
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

                    {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        User type
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => {
                          let selectedUserType = e.target.value;

                          setUserType(selectedUserType);

                          if (
                            (selectedUserType == 1 || selectedUserType == 2) &&
                            loggedInUserType == 1
                          ) {
                            setShowRegion(false);
                            setShowDistrict(false);
                            setDistrict("");
                            setRegion("");
                          }
                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 1
                          ) {
                            setShowRegion(true);

                            setDistrict("");
                          }
                          if (
                            (selectedUserType == 5 ||
                              selectedUserType == 6 ||
                              selectedUserType == 7) &&
                            loggedInUserType == 1
                          ) {
                            setShowRegion(true);
                            setShowDistrict(true);

                            // setRegion("");
                          }

                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 3
                          ) {
                            setShowRegion(false);
                            setShowDistrict(false);

                            setDistrict("");
                            setRegion("");
                          }
                          if (
                            (selectedUserType == 5 ||
                              selectedUserType == 6 ||
                              selectedUserType == 7) &&
                            loggedInUserType == 3
                          ) {
                            setShowRegion(false);
                            setShowDistrict(true);

                            setRegion("");
                          }
                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 5
                          ) {
                            setShowRegion(false);
                            setRegion("");
                          }
                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 5
                          ) {
                            setShowRegion(false);

                            setRegion("");
                          }

                          if (
                            (selectedUserType == 5 || selectedUserType == 4) &&
                            loggedInUserType == 5
                          ) {
                            setShowRegion(false);
                            setRegion("");
                          }
                         }}
                        value={userType}
                      >
                          <option value="">Choose...</option>
                        {userTypes.map((userType) => (
                          <option key={userType.id} value={userType.id}>
                            {userType.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {loggedInUserType == 1 && showRegion ? (
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="readonlyInput" className="form-label">
                          Region
                        </label>

                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          value={region}
                          onChange={async (e) => {
                            setRegion(e.target.value);
                            getDistrictsByRegion(e, e.target.value);
                          }}
                        >
                          <option value="">Choose...</option>
                          {regions.map((region) => (
                            <option value={region.id} key={region.id}>
                              {region.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {(loggedInUserType == 1 && showDistrict) ||
                  (loggedInUserType == 3 && showDistrict) ? (
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="readonlyInput" className="form-label">
                          District
                        </label>

                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          value={district}
                          onChange={(e) => {
                            setDistrict(e.target.value);
                            // getElectoralByDistrict(e, e.target.value);
                          }}
                        >
                          <option value="">Choose...</option>
                          {districtsArr.map((district) => (
                            <option key={district.id} value={district.id}>
                              {district.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )} */}
                    <hr />
                  </div>
                  <br />
                  <div className="row gy-4">
                    <div className="flex-shrink-0">
                      <div className="col-lg-12">
                        <div className="text-end">
                          {isEditing? <button
                            className="btn btn-success"
                            onClick={(e) => {
                              updateUser(e);
                            }}
                          >
                            Update
                          </button>: <button
                            className="btn btn-primary"
                            onClick={(e) => {
                              addUser(e);
                            }}
                          >
                            Submit
                          </button>}
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Users</h5>
            </div>

            <div
              className="card-body"
              style={{ overflow: "auto", "max-height": "400px" }}
            >
               <div className="row">
              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-label waves-effect right waves-light rounded-pill"
                  onClick={handleExportAll}
                >
                  <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                  Export All
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-label waves-effect right waves-light rounded-pill"
                  onClick={handleExportFiltered}
                >
                  <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                  Export Filtered
                </button>
              </div>
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2">
                  <input
                    type="text"
                    className="form-control"
                    id="searchResultList"
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
                    {/* <th>ID</th> */}

                    <th>Surname</th>

                    <th>Other Names</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>OTP</th>
                    <th>User Type</th>
                    <th>User Level</th>
                    <th>Designation</th>
                    <th>Region</th>
                    <th>District</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        {/* <td>{user.id}</td> */}
                        <td>{user.surname}</td>
                        <td>{user.otherNames}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.tempPassword}</td>
                        <td>{user.UserType.name}</td>
                        <td>{user.UserLevel.name}</td>

                        <td>{user.designation}</td>
                        <td>{user.Region == null ? "" : user.Region.name}</td>
                        <td>
                          {user.District == null ? "" : user.District.name}
                        </td>
                        <td>
                          {user.deleted == 0 ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">Inactive</span>
                          )}
                        </td>

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
                                  className="dropdown-item remove-item-btn"
                                  onClick={async (e) => {
                                    e.preventDefault();

                                    setIsEditing(true)

                                    setSurname(user.surname);
                                    setOtherNames(user.otherNames);
                                    setEmail(user.email);
                                    setPhoneNumber(user.phoneNumber);
                                    setDesignation(user.designation);
                                    setUserType(user.userTypeId);
                                    setSelectedUserLevel(user.userLevelId);
                                    setUserId(user.id);

                                    // const response = await axios.put(
                                    //   "/api/v1/account/user",{
                                    //     id:user.id
                                    //   }
                                    // );
                                    // router.replace(router.asPath);
                                  }}
                                >
                                  <i className="ri-edit-line align-bottom me-2 text-muted" />{" "}
                                  Edit
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item remove-item-btn"
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    let id = user.id
                                    const response = await axios.delete(
                                      `/api/v1/account/user`,
                                      {
                                        data: { id },
                                      }
                                    );
                                    router.replace(router.asPath);
                                  }}
                                >
                                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                  Change Status
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item remove-item-btn"
                                  onClick={async (e) => {
                                    e.preventDefault();
                                    let phoneNumber = user.phoneNumber
                                    const response = await axios.post(
                                      `/api/v1/account/reset-password`,
                                      { phoneNumber },
                                      
                                    );
                                    router.replace(router.asPath);
                                  }}
                                >
                                  <i className="ri-key-fill align-bottom me-2 text-muted" />{" "}
                                  Reset Password
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
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
