import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const User = ({ users, userTypes, regions }) => {
  const router = useRouter();

  const [userType, setUserType] = useState();
  const [selectedUserLevel, setSelectedUserLevel] = useState();

  const [surname, setSurname] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [region, setRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");

  const [electoralArea, setElectoralArea] = useState();
  const [showRegion, setShowRegion] = useState(false);
  const [showDistrict, setShowDistrict] = useState(false);

  // let loggedInUserType = Cookies.get("ut").split("??")[1];
  let districtId = Cookies?.get("d_id");
  let regionId = Cookies?.get("r_id");
  useEffect(() => {
    // setDistricts(districts);
  }, []);

  const addUser = async (e) => {
    try {
      e.preventDefault();
      console.log(selectedUserLevel);

      // if (selectedUserLevel == 1) {
      //   setDistrict(null);
      //   setRegion(null);
      // }
      // if (selectedUserLevel == 2) {
      //   setDistrict(null);
      // }
      // if (selectedUserLevel == 3) {
      //   setDistrict(null);
      // }
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
                      <label htmlFor="placeholderInput" className="form-label">
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
                    <label className="form-label mb-0">Select user level</label>

                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setSelectedUserLevel(e.target.value);

                        if (selectedUserLevel==1) {
                          setRegion(null);
                          setDistrict(null);
                        }
                        if (selectedUserLevel==2) {
                          setDistrict(null);
                        }
                        if (selectedUserLevel==3) {
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
                      <option value="" selected>
                        ...Select...{" "}
                      </option>
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
                            // setFilterValue(e.target.value);
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
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            addUser(e);
                          }}
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
          {/*end col*/}
        </div>
      </div>
    </div>
  );
};

export default User;
