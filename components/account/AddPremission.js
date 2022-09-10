const AddPermission = ({ userLevels, pages }) => {
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
                {/* <div className="row">
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Name of permission
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basiInput"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label
                        for="choices-multiple-remove-button"
                        class="form-label text-muted"
                      >
                        With remove button
                      </label>
                      <p class="text-muted">
                        Set{" "}
                        <code>
                          data-choices data-choices-removeItem multiple
                        </code>{" "}
                        attribute.
                      </p>
                      <select
                        class="form-control"
                        id="choices-multiple-remove-button"
                        data-choices
                        data-choices-removeItem
                        name="choices-multiple-remove-button"
                        multiple
                      >
                        <option value="Choice 1" selected>
                          Choice 1
                        </option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                        <option value="Choice 4">Choice 4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row gy-4">
                  <div className="flex-shrink-0">
                    <div class="col-lg-12">
                      <div class="text-end">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
      </div>
    </div>
  );
};

export default AddPermission;
