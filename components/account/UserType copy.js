import { useState } from "react";
import axios from "axios";
import Select from "react-select";

const UserType = ({ userLevels, pages }) => {
  const [userTypeName, setUserTypeName] = useState();
  const [page, setPage] = useState([]);
  const [level, setLevel] = useState();

  const handlePageChange = async (selected, selectaction) => {
    try {
       const { action } = selectaction;
    // console.log(`action ${action}`);
    // console.log(`selected ${selected}`);
    //console.table(selected[selected.length - 1]);

    // let xxx = selected.map(x =>x.value)
    // console.log(xxx);

    if (action === "clear") {
      setPage([]);
    } else if (action === "select-option") {
      console.log(`selected ${JSON.stringify(selected[selected.length - 1].value)}`);
      setPage([...page, selected[selected.length - 1].value]);

     // console.log(page);
    } else if (action === "remove-value") {
      console.log("ree==>",JSON.stringify(selected));

      // var index = page.indexOf(selected.value);
      // if (index !== -1) {
      //  let newPage = page.splice(index, 1);
      //   setPage(newPage)
      // }
      // console.log(`remove selected ${JSON.stringify(selected[selected.length - 1])}`);

      //console.log("remove");
    }
    } catch (error) {
      
    }
   
  };

  const addUserType = async (e) => {
    e.preventDefault();
    let data = {
      userTypeName,
      page,
      level,
    };

    const response = await axios.post("/api/v1/account/user-type", {
      data,
    });
    console.log(data);
  };

  return (
    <div class="row">
      <div class="col-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Add user type</h4>
              </div>
              {/* end card header */}
              <div className="card-body">
                <div className="row gy-4">
                  <div className="col-xxl-4 col-md-4">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Level
                      </label>

                      <select
                        class="form-select"
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
                  </div>
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
                  {/*end col*/}
                  <div className="col-xxl-4 col-md-4">
                    <div>
                      <label htmlFor="labelInput" className="form-label">
                        Page
                      </label>

                      <Select
                        id="selectWarna"
                        instanceId="selectWarna"
                        isMulti
                        isClearable
                        isSearchable
                        name="colors"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        options={pages}
                        onChange={handlePageChange}
                        placeholder="Select pages"
                      />
                    </div>
                  </div>

                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="valueInput" className="form-label">
                        Page Actions
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                      />
                    </div>
                  </div> */}

                  <div className="row gy-4">
                    <div className="flex-shrink-0">
                      <div class="col-lg-12">
                        <div class="text-end">
                          <button
                            onClick={(e) => addUserType(e)}
                            class="btn btn-primary"
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
        </div>
      </div>
      <div class="col-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">User types</h4>
              </div>
              {/* end card header */}
              <div className="card-body">
                <div class="col-12">
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