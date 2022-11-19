import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Permission = ({ userTypes, pages, pageAccess }) => {
  const [userType, setUserType] = useState();
  const router = useRouter();

console.log("page access",pageAccess);
  const onUserTypeChange = async (e) => {
    e.preventDefault();
   
    const response = await axios.get(
      `/api/v1/account/permission?userType=${userType}`
    );

    router.replace(router.asPath)
  };

  const onSelect = async (e, pageId) => {
    e.preventDefault();
    let data = {
      pageId,
      userTypeId: userType,
    };

    const response = await axios.post("/api/v1/account/permission", {
      data,
    });
  };

  const onRemove = async (e, pageId) => {
    e.preventDefault();
    let data = {
      userTypeId: userType,
      pageId,
    };
    console.log(data);

    const response = await axios.delete("/api/v1/account/permission", {
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
                <h4 className="card-title mb-0 flex-grow-1">Add Permissions</h4>
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
                <div className="col-xxl-4 col-md-4">
                  <div>
                    <label htmlFor="readonlyInput" className="form-label">
                      User type
                    </label>

                    <select
                      className="form-select"
                      id="inputGroupSelect02"
                      onChange={(e) => {
                        onUserTypeChange(e);
                        setUserType(Number(e.target.value));
                      }}
                    >
                      <option selected>Choose...</option>
                      {userTypes.map((userType) => (
                        <option key={userType.id} value={userType.id}>
                          {userType.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Add Permissions</h4>
              </div>
              {/* end card header */}

              <div className="card-body">
                <div className="row">
                  <div className="col-xxl-12 col-md-12">
                    <div className="table-responsive">
                      <table className="table table-striped table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Page</th>
                            <th scope="col">Path</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <td class="fw-medium">01</td> */}
                          {pages.map((page) => {
                            return (
                              <tr key={page.id}>
                                <td>{page.name}</td>
                                <td>{page.path}</td>
                                <td>
                                  {" "}
                                  <input
                                    className="form-check-input code-switcher"
                                    type="checkbox"
                                    id="form-grid-showcode"
                                    checked={
                                      pageAccess.includes(page.id)
                                        ? true
                                        : false
                                    }
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        return onSelect(e, page.id);
                                      }
                                      return onRemove(e, page.id);
                                    }}
                                  />
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
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Permissions</h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-xxl-12 col-md-12">
                    <div class="table-responsive">
                      <table class="table table-striped table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">User type</th>
                            <th scope="col">Page</th>
                            <th scope="col">Path</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pages.map((page) => {
                            <tr>
                              <td>{page.name}</td>
                              <td>{page.path}</td>
                              <td>{page.path}</td>
                            </tr>;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Permission;
