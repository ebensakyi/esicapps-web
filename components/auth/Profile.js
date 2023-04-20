import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Profile = ({ user }) => {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);

  const updatePassword = async (e) => {
    try {
      e.preventDefault();
      if (currentPassword == null) {
        return toast.error("Current password cannot be empty");
      }

      if (newPassword == null) {
        return toast.error("New password cannot be empty");
      }

      let data = {
        currentPassword,
        newPassword,
        phoneNumber: user.user.phoneNumber
      };

      const response = await axios.post("/api/v1/auth/profile", data);
      console.log(response);
     // router.replace(router.asPath);

      return toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      return toast.error("User account not found");
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
      <div className="col-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Profile</h4>
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
                        value={user.user.surname}
                        disabled
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
                        value={user.user.otherNames}
                        disabled
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
                        value={user.user.email}
                        disabled
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
                        value={user.user.phoneNumber}
                        id="valueInput"
                        disabled
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
                        disabled
                        value={user.user.designation}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        User type
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        disabled
                        value={user.user.UserType.name}
                      />
                    </div>
                  </div>
                  {/* {loggedInUserType == 1 && showRegion ? (
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="readonlyInput" className="form-label">
                          Region
                        </label>

                        <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        disabled
                        value={user.user.UserType.name}
                      />
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
                  )} */}
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
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Change Password</h4>
              </div>
              {/* end card header */}
              <div className="card-body">
                <div className="row gy-4">
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Current Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basiInput"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="labelInput" className="form-label">
                        New Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="labelInput"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  {/*end col*/}

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
                            updatePassword(e);
                          }}
                        >
                          Update
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

export default Profile;
