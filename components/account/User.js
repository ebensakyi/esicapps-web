import { useState } from "react";
import axios from "axios";

const User = ({ users, userTypes, regions }) => {
  const [userType, setUserType] = useState();
  const [surname, setSurname] = useState();
  const [otherNames, setOtherNames] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [designation, setDesignation] = useState();
  const [region, setRegion] = useState();
  const [districts, setDistricts] = useState([]);
  const [electoralAreas, setElectoralAreas] = useState([]);
  const [district, setDistrict] = useState();
  const [electoralArea, setElectoralArea] = useState();
  const [level, setLevel] = useState();

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


    const response = await axios.post("/api/v1/account/user", {
      data,
    });
  };

  const getDistrictsByRegion = async (e, regionId) => {
    try {
      e.preventDefault();
      const response = await axios.get("/api/v1/primary-data/district?regionId=" + regionId);
      setDistricts(response.data)

    } catch (error) {

    }

  }

  const getElectoralByDistrict = async (e, districtId) => {
    try {
      e.preventDefault();
      const response = await axios.get("/api/v1/primary-data/electoral-area?districtId=" + districtId);
      setElectoralAreas(response.data)
    } catch (error) {

    }
  }
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
                        onChange={(e) => {
                          setUserType(e.target.value);

                        }}
                      >
                        <option selected>Choose...</option>
                        {userTypes.map((userType) => (
                          <option value={userType.id}>{userType.name}</option>
                        ))}
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
                        onChange={async (e) => {
                          setRegion(e.target.value)
                          getDistrictsByRegion(e, e.target.value)
                        }}
                      >
                        <option selected>Choose...</option>
                        {regions.map((region) => (
                          <option value={region.id} key={region.id}>
                            {region.name}
                          </option>
                        ))}
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
                        onChange={(e) => {
                          setDistrict(e.target.value)
                          getElectoralByDistrict(e, e.target.value)
                        }}
                      >
                        <option selected>Choose...</option>
                        {districts.map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))}
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
                        {electoralAreas.map((ea) => (
                          <option key={ea.id} value={ea.id}>
                            {ea.name}
                          </option>
                        ))}
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
