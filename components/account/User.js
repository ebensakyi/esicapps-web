import { useState } from "react";
import axios from "axios";

const User = ({ users }) => {
  const [userType, setUserType] = useState();
  const [surname, setSurname] = useState();
  const [otherNames, setOtherNames] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [designation, setDesignation] = useState();
  const [region, setRegion] = useState();
  const [district, setDistrict] = useState();
  const [electoralArea, setElectoralArea] = useState();

  const addUser = async (e) => {
    e.preventDefault();
    let data = {
      userTypeId: Number(userType),
      surname,
      otherNames,
      email,
      phoneNumber,
      designation,
      regionId: Number(region),
      districtId: Number(district),
      electoralAreaId: Number(electoralArea), 
    };

    console.log(">>>",data);

    const response = await axios.post("/api/v1/account/user", {
      data,
    });
  };
  return (
    <div class="row">
      <div class="col-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Add user</h4>
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
                      <label htmlFor="readonlyInput" className="form-label">
                        User type
                      </label>

                      <select
                        class="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="1">National</option>
                        <option value="2">Regional</option>
                        <option value="3">District</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr />

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
                        onChange={(e) => setDesignation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Region
                      </label>

                      <select
                        class="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        District
                      </label>

                      <select
                        class="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Electoral Area
                      </label>

                      <select
                        class="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setElectoralArea(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row gy-4">
                  <div className="flex-shrink-0">
                    <div class="col-lg-12">
                      <div class="text-end">
                        <button
                          class="btn btn-primary"
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
