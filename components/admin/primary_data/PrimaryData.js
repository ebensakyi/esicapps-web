const PrimaryData = ({ levels, regions, districts }) => {
  return (
    <div className="row">
      <div className="col-xxl-12">
        <h5 className="mb-3">Vertical Nav Tabs</h5>
        <div className="card">
          <div className="card-body">
            {/* <p className="text-muted">
              Use <code>flex-column</code> class to create Vertical nav tabs.
            </p> */}
            <div className="row">
              <div className="col-md-3">
                <div
                  className="nav flex-column nav-pills text-center"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link mb-2 active"
                    id="action-tab"
                    data-bs-toggle="pill"
                    href="#action"
                    role="tab"
                    aria-controls="action"
                    aria-selected="true"
                  >
                    Action
                  </a>
                  <a
                    className="nav-link mb-2"
                    id="cemetery-workers-tab"
                    data-bs-toggle="pill"
                    href="#cemetery-workers"
                    role="tab"
                    aria-controls="cemetery-workers"
                    aria-selected="false"
                  >
                    Cemetery workers
                  </a>
                  <a
                    className="nav-link mb-2"
                    id="community-tab"
                    data-bs-toggle="pill"
                    href="#community"
                    role="tab"
                    aria-controls="community"
                    aria-selected="false"
                  >
                    Community
                  </a>
                  <a
                    className="nav-link"
                    id="district-tab"
                    data-bs-toggle="pill"
                    href="#district"
                    role="tab"
                    aria-controls="district"
                    aria-selected="false"
                  >
                    District
                  </a>
                  <a
                    className="nav-link"
                    id="drain-type-tab"
                    data-bs-toggle="pill"
                    href="#drain-type"
                    role="tab"
                    aria-controls="drain-type"
                    aria-selected="false"
                  >
                    Drain type
                  </a>
                  <a className="nav-link"
                    id="drinking-water-tab"
                    data-bs-toggle="pill"
                    href="#drinking-water"
                    role="tab"
                    aria-controls="drinking-water"
                    aria-selected="false"
                  >
                    Drinking water source
                  </a>
                  <a className="nav-link"
                    id="effluent-mgt-tab"
                    data-bs-toggle="pill"
                    href="#effluent-mgt"
                    role="tab"
                    aria-controls="effluent-mgt"
                    aria-selected="false"
                  >
                    Effluent management
                  </a>

                  <a className="nav-link"
                    id="excreta-containment-tab"
                    data-bs-toggle="pill"
                    href="#excreta-containment"
                    role="tab"
                    aria-controls="excreta-containment"
                    aria-selected="false"
                  >
                    Excreta containment
                  </a>
                  <a className="nav-link"
                    id="excreta-disposal-method-tab"
                    data-bs-toggle="pill"
                    href="#excreta-disposal-method"
                    role="tab"
                    aria-controls="excreta-disposal-method"
                    aria-selected="false"
                  >
                    Excreta disposal method
                  </a>
                  <a className="nav-link"
                    id="frequency-tab"
                    data-bs-toggle="pill"
                    href="#frequency"
                    role="tab"
                    aria-controls="frequency"
                    aria-selected="false"
                  >
                    Frequency
                  </a>

                 
                  <a className="nav-link"
                    id="grey-water-tab"
                    data-bs-toggle="pill"
                    href="#grey-water"
                    role="tab"
                    aria-controls="grey-water"
                    aria-selected="false"
                  >
                                        Grey water disposal

                  </a>
                  <a className="nav-link"
                    id="hazardous-water-disposal-tab"
                    data-bs-toggle="pill"
                    href="#hazardous-water-disposal"
                    role="tab"
                    aria-controls="hazardous-water-disposal"
                    aria-selected="false"
                  >
                    Hazardous water disposal
                  </a>
                  <a className="nav-link"
                    id="inspection-form-tab"
                    data-bs-toggle="pill"
                    href="#inspection-form"
                    role="tab"
                    aria-controls="inspection-form"
                    aria-selected="false"
                  >
                    Inspection form
                  </a>
                  <a className="nav-link"
                    id="inspection-type-tab"
                    data-bs-toggle="pill"
                    href="#inspection-type"
                    role="tab"
                    aria-controls="inspection-type"
                    aria-selected="false"
                  >
                    Inspection type
                  </a>
                  <a className="nav-link"
                    id="nuisance-tab"
                    data-bs-toggle="pill"
                    href="#nuisance"
                    role="tab"
                    aria-controls="nuisance"
                    aria-selected="false"
                  >
                    Nuisance
                  </a>
                  <a className="nav-link"
                    id="ownership-type-tab"
                    data-bs-toggle="pill"
                    href="#ownership-type"
                    role="tab"
                    aria-controls="ownership-type"
                    aria-selected="false"
                  >
                    Ownership type
                  </a>
                  <a className="nav-link"
                    id="pest-sign-tab"
                    data-bs-toggle="pill"
                    href="#pest-sign"
                    role="tab"
                    aria-controls="pest-sign"
                    aria-selected="false"
                  >
                    Pest sign
                  </a>
                  <a className="nav-link"
                    id="plant-condition-tab"
                    data-bs-toggle="pill"
                    href="#plant-condition"
                    role="tab"
                    aria-controls="plant-condition"
                    aria-selected="false"
                  >
                    Plant condition
                  </a>
                  <a className="nav-link"
                    id="region-tab"
                    data-bs-toggle="pill"
                    href="#region"
                    role="tab"
                    aria-controls="region"
                    aria-selected="false"
                  >
                    Region
                  </a>
                  <a className="nav-link"
                    id="respondent-tab"
                    data-bs-toggle="pill"
                    href="#respondent"
                    role="tab"
                    aria-controls="respondent"
                    aria-selected="false"
                  >
                    Respondent designation
                  </a>
                  <a className="nav-link"
                    id="services-tab"
                    data-bs-toggle="pill"
                    href="#services"
                    role="tab"
                    aria-controls="services"
                    aria-selected="false"
                  >
                    Services
                  </a>
                  <a className="nav-link"
                    id="solid-waste-receptacle-tab"
                    data-bs-toggle="pill"
                    href="#solid-waste-receptacle"
                    role="tab"
                    aria-controls="solid-waste-receptacle"
                    aria-selected="false"
                  >
                    Solid waste receptacle
                  </a>


                  <a className="nav-link"
                    id="storage-condition-tab"
                    data-bs-toggle="pill"
                    href="#storage-condition"
                    role="tab"
                    aria-controls="storage-condition"
                    aria-selected="false"
                  >
                    Storage condition
                  </a>
                  <a className="nav-link"
                    id="sub-types-tab"
                    data-bs-toggle="pill"
                    href="#sub-types"
                    role="tab"
                    aria-controls="sub-types"
                    aria-selected="false"
                  >
                    Premises sub-types
                  </a>
                  <a className="nav-link"
                    id="structure-type-tab"
                    data-bs-toggle="pill"
                    href="#structure-type"
                    role="tab"
                    aria-controls="structure-type"
                    aria-selected="false"
                  >
                    Structure type
                  </a>
                  <a className="nav-link"
                    id="pit-position-tab"
                    data-bs-toggle="pill"
                    href="#pit-position"
                    role="tab"
                    aria-controls="pit-position"
                    aria-selected="false"
                  >
                    Pit position
                  </a>
                  <a className="nav-link"
                    id="toilet-type-tab"
                    data-bs-toggle="pill"
                    href="#toilet-type"
                    role="tab"
                    aria-controls="toilet-type"
                    aria-selected="false"
                  >
                    Toilet type
                  </a>
                  <a className="nav-link"
                    id="premises-types-tab"
                    data-bs-toggle="pill"
                    href="#premises-types"
                    role="tab"
                    aria-controls="premises-types"
                    aria-selected="false"
                  >
                    Premises types
                  </a>
                  <a className="nav-link"
                    id="user-level-tab"
                    data-bs-toggle="pill"
                    href="#user-level"
                    role="tab"
                    aria-controls="user-level"
                    aria-selected="false"
                  >
                    User Level
                  </a>
                  <a className="nav-link"
                    id="user-type-tab"
                    data-bs-toggle="pill"
                    href="#user-type"
                    role="tab"
                    aria-controls="user-type"
                    aria-selected="false"
                  >
                    User type
                  </a>
                  <a className="nav-link"
                    id="waste-collection-type-tab"
                    data-bs-toggle="pill"
                    href="#waste-collection-type"
                    role="tab"
                    aria-controls="waste-collection-type"
                    aria-selected="false"
                  >
                   Waste collection type
                  </a>
                  <a className="nav-link"
                    id="waste-water-containment-tab"
                    data-bs-toggle="pill"
                    href="#waste-water-containment"
                    role="tab"
                    aria-controls="waste-water-containment"
                    aria-selected="false"
                  >
                   Waste water containment
                  </a>
                  <a className="nav-link"
                    id="water-source-type-tab"
                    data-bs-toggle="pill"
                    href="#water-source-type"
                    role="tab"
                    aria-controls="water-source-type"
                    aria-selected="false"
                  >
                    Water Source Type
                  </a>
                  <a className="nav-link"
                    id="water-storage-type-tab"
                    data-bs-toggle="pill"
                    href="#water-storage-type"
                    role="tab"
                    aria-controls="water-storage-type"
                    aria-selected="false"
                  >
                    Water storage type
                  </a>
                  <a className="nav-link"
                    id="water-supply-type-tab"
                    data-bs-toggle="pill"
                    href="#water-supply-type"
                    role="tab"
                    aria-controls="water-supply-type"
                    aria-selected="false"
                  >
                      Water supply type
                  </a>
                  <a className="nav-link"
                    id="water-treatment-type-tab"
                    data-bs-toggle="pill"
                    href="#water-treatment-type"
                    role="tab"
                    aria-controls="water-treatment-type"
                    aria-selected="false"
                  >
                    Water treatment type
                  </a>
                  <a className="nav-link"
                    id="yes-no-tab"
                    data-bs-toggle="pill"
                    href="#yes-no"
                    role="tab"
                    aria-controls="yes-no"
                    aria-selected="false"
                  >
                    Yes No
                  </a>
                  <a className="nav-link"
                    id="electoral-area-tab"
                    data-bs-toggle="pill"
                    href="#electoral-area"
                    role="tab"
                    aria-controls="electoral-area"
                    aria-selected="false"
                  >
                    Electoral Area
                  </a>
                 
                 
                </div>
              </div>
              {/* end col */}
              <div className="col-md-9">
                <div
                  className="tab-content text-muted mt-4 mt-md-0"
                  id="v-pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="action-tab"
                    role="tabpanel"
                    aria-labelledby="action-tab-tab"
                  >
                    <div className="d-flex mb-2">
                    <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
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
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/small/img-5.jpg"
                          alt=""
                          width={150}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p className="mb-0">
                          {" "}
                          I also decreased the transparency in the text so that
                          the mountains come through the text, bringing the
                          quote truly to life. Make sure that the placement of
                          your text is pleasing to look at, and you try to
                          achieve symmetry for this effect.
                        </p>
                      </div>
                    </div>
                    <p className="mb-0">
                      You've probably heard that opposites attract. The same is
                      true for fonts. Don't be afraid to combine font styles
                      that are different but complementary. You can always play
                      around with the text that is overlaid on an image.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/small/img-6.jpg"
                          alt=""
                          width={150}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p className="mb-0">
                          In this image, you can see that the line height has
                          been reduced significantly, and the size was brought
                          up exponentially. Experiment and play around with the
                          fonts that you already have in the software you’re
                          working with reputable font websites.
                        </p>
                      </div>
                    </div>
                    <p className="mb-0">
                      They highly encourage that you use different fonts in one
                      design, but do not over-exaggerate and go overboard This
                      may be the most commonly encountered tip I received from
                      the designers I spoke with.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/small/img-7.jpg"
                          alt=""
                          width={150}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p className="mb-0">
                          When designing, the goal is to draw someone’s
                          attention and portray to them what you’re trying to
                          say. You can make a big statement by using little
                          tricks, like this one. Use contrasting fonts. you can
                          use a bold sanserif font with a cursive.
                        </p>
                      </div>
                    </div>
                    <p className="mb-0">
                      If you’re using multiple elements, make sure that your
                      principal object is larger than the others, as the eye of
                      your viewer will automatically be drawn to the larger of
                      the two objects.
                    </p>
                  </div>
                </div>
              </div>
              {/*  end col */}
            </div>
            {/*end row*/}
          </div>
          {/* end card-body */}
        </div>
        {/* end card */}
      </div>
    </div>
  );
};

export default PrimaryData;
