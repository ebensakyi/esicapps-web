const AddUser = ({levels,regions,districts}) => {

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
                      <label htmlFor="basiInput" className="form-label">
                        Surname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basiInput"
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
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Level
                      </label>

                      <select class="form-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
                        <option value="1">National</option>
                        <option value="2">Regional</option>
                        <option value="3">District</option>
                      </select>

                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Region
                      </label>

                      <select class="form-select" id="inputGroupSelect02">
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

                      <select class="form-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>

                    </div>
                  </div>
                </div>
                <div className="row gy-4">
                  <div className="flex-shrink-0">
                      <div class="col-lg-12">
                        <div class="text-end">
                          <button type="submit" class="btn btn-primary">Submit</button>
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

  )
}

export default AddUser;
