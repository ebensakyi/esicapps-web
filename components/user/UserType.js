import { useState } from "react";
import axios from "axios";

const UserType = ({  pages }) => {
  const [userTypeName, setUserTypeName] = useState();
  // const [level, setLevel] = useState();

 
  const addUserType = async (e) => {
    e.preventDefault();
    let data = {
      userTypeName,
      level,
    };

    const response = await axios.post("/api/v1/account/user-type", {
      data,
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Add user type</h4>
              </div>
              {/* end card header */}
              <div className="card-body">
                <div className="row gy-4">
                  {/* <div className="col-xxl-4 col-md-4">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Level
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setLevel(Number(e.target.value))}
                      >
                        <option selected>Choose...</option>
                        {userLevels.map((level) => (
                          <option key={level.id} value={level.id}>
                            {level.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}
                  <div className="col-xxl-4 col-md-4">
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basiInput"
                        onChange={(e) => setUserTypeName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-4 col-md-4">
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Action
                      </label>
                      <button
                        onClick={(e) => addUserType(e)}
                        className="btn btn-primary form-control"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">User types</h4>
              </div>
              {/* end card header */}
              <div className="card-body">
                <div className="col-12">
                  <div className="row">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Bobby Davis</td>
                          <td>Nov 14, 2021</td>
                          <td>
                            <button className="badge bg-danger">
                              Cancelled
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Christopher Neal</td>
                          <td>Nov 21, 2021</td>
                          <td>
                            <button className="badge bg-danger">
                              Cancelled
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Monkey Karry</td>
                          <td>Nov 24, 2021</td>
                          <td>
                            <button className="badge bg-danger">
                              Cancelled
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Aaron James</td>
                          <td>Nov 25, 2021</td>
                          <td>
                            <button className="badge bg-danger">
                              Cancelled
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;
