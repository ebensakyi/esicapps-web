import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const User = ({ users, userTypes, regions, districts }) => {
  const router = useRouter();

  const [userType, setUserType] = useState();
  const [surname, setSurname] = useState(null);
  const [otherNames, setOtherNames] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [region, setRegion] = useState(null);
  const [electoralAreas, setElectoralAreas] = useState([]);
  const [district, setDistrict] = useState(null);
  const [electoralArea, setElectoralArea] = useState();
  const [showRegion, setShowRegion] = useState(false);
  const [showDistrict, setShowDistrict] = useState(false);
  const [districtsArr, setDistricts] = useState(null);

  let loggedInUserType = Cookies.get("ut").split("??")[1];

  useEffect(() => {
    setDistricts(districts);
  }, []);

  const addUser = async (e) => {
    try {
      e.preventDefault();

      if (surname == null) {
        return toast.error("Surname cannot be empty");
      }
      if (otherNames == null) {
        return toast.error("Other Names cannot be empty");
      }
      if (email == null) {
        return toast.error("Email cannot be empty");
      }
      if (phoneNumber == null) {
        return toast.error("PhoneNumber cannot be empty");
      }
      if (designation == null) {
        return toast.error("Designation cannot be empty");
      }
      if (userType == null) {
        return toast.error("User type cannot be empty");
      }
      if (showRegion && (region == null || region == "")) {
        return toast.error("Region cannot be empty");
      }
      if (showDistrict && (district == null || district == "")) {
        return toast.error("District cannot be empty");
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
      setUserType(null);
      return toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.message);
    }
  };

  const getDistrictsByRegion = async (e, regionId) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        "/api/v1/primary-data/district?regionId=" + regionId
      );
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
                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                      Role
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => {
                          setRole(e.target.value);

                        }}
                      >
                        <option selected>Choose...</option>
                        {roles.map((role) => (
                          <option key={role.id} value={role.id}>{role.name}</option>
                        ))}
                      </select>
                    </div> 
                  </div>*/}
                  <div className="col-xxl-3 col-md-6">
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
                            setDistrict(null);
                            setRegion(null);
                          }
                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 1
                          ) {
                            setShowRegion(true);

                            setDistrict(null);
                          }
                          if (
                            (selectedUserType == 5 ||
                              selectedUserType == 6 ||
                              selectedUserType == 7) &&
                            loggedInUserType == 1
                          ) {
                            setShowRegion(true);
                            setShowDistrict(true);

                            // setRegion(null);
                          }

                          // if (selectedUserType == 7 && loggedInUserType == 1) {
                          //   setShowRegion(false);
                          //   setShowDistrict(true);

                          //   setRegion(null);
                          // }

                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 3
                          ) {
                            setShowRegion(false);
                            setShowDistrict(false);

                            setDistrict(null);
                            setRegion(null);
                          }
                          if (
                            (selectedUserType == 5 ||
                              selectedUserType == 6 ||
                              selectedUserType == 7) &&
                            loggedInUserType == 3
                          ) {
                            setShowRegion(false);
                            setShowDistrict(true);

                            setRegion(null);
                          }
                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 5
                          ) {
                            setShowRegion(false);
                            setRegion(null);
                          }
                          if (
                            (selectedUserType == 3 || selectedUserType == 4) &&
                            loggedInUserType == 5
                          ) {
                            setShowRegion(false);

                            setRegion(null);
                          }

                          if (
                            (selectedUserType == 5 || selectedUserType == 4) &&
                            loggedInUserType == 5
                          ) {
                            setShowRegion(false);
                            setRegion(null);
                          }
                        }}
                        value={userType}
                      >
                        <option>Choose...</option>
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
                          <option>Choose...</option>
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
                          <option>Choose...</option>
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
                  )}
                  <hr />
                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Electoral Area
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setElectoralArea(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        {electoralAreas.map((ea) => (
                          <option key={ea.id} value={ea.id}>
                            {ea.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}
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
