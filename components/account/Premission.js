const Permission = ({ userTypes, pages, pageAccess }) => {
  return (
    <div class="row">
      <div class="col-12">
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
                      class="form-select"
                      id="inputGroupSelect02"
                      onChange={(e) => setLevel(Number(e.target.value))}
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

      <div class="col-12">
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
                <div className="row">
                  <div className="col-xxl-6 col-md-6">
                    <div class="table-responsive">
                      <table class="table table-striped table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Page</th>
                            <th scope="col">Path</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="fw-medium">01</td>
                            <td>Bobby Davis</td>
                            <td>Nov 14, 2021</td>
                            <td>
                              <span class="badge bg-success">Confirmed</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="fw-medium">02</td>
                            <td>Christopher Neal</td>
                            <td>Nov 21, 2021</td>
                            <td>
                              <span class="badge bg-warning">Waiting</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="fw-medium">03</td>
                            <td>Monkey Karry</td>
                            <td>Nov 24, 2021</td>
                            <td>
                              <span class="badge bg-success">Confirmed</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="fw-medium">04</td>
                            <td>Aaron James</td>
                            <td>Nov 25, 2021</td>
                            <td>
                              <span class="badge bg-danger">Cancelled</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-md-6">
                    <div class="table-responsive">
                      <table class="table table-striped table-nowrap align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Page</th>
                            <th scope="col">Path</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="fw-medium">01</td>
                            <td>Bobby Davis</td>
                            <td>Nov 14, 2021</td>
                            <td>
                              <span class="badge bg-success">Confirmed</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="fw-medium">02</td>
                            <td>Christopher Neal</td>
                            <td>Nov 21, 2021</td>
                            <td>
                              <span class="badge bg-warning">Waiting</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="fw-medium">03</td>
                            <td>Monkey Karry</td>
                            <td>Nov 24, 2021</td>
                            <td>
                              <span class="badge bg-success">Confirmed</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="fw-medium">04</td>
                            <td>Aaron James</td>
                            <td>Nov 25, 2021</td>
                            <td>
                              <span class="badge bg-danger">Cancelled</span>
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
          {/*end col*/}
        </div>
      </div>
    </div>
  );
};

export default Permission;
