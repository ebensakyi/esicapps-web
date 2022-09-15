import { useState } from "react";
import axios from "axios";

const PrimaryData = ({ regions, districts }) => {
  const [regionName, setRegionName] = useState();


  const addRegion = async (e) => {
    e.preventDefault();
    let data = {
      name: regionName
    };

    console.log(">>><<<<", data);

    const response = await axios.post("/api/v1/primary-data/region", {
      data,
    });
  };


  return (
    <div className="row">
      <div className="col-xxl-12">
        <h5 className="mb-3">Primary Data</h5>
        <div className="card">
          <div className="card-body">
            {/* <p className="text-muted">
              Use <code>flex-column</code> class to create Vertical nav tabs.
            </p> */}
            <div className="row">
              <div className="col-md-6">
                {/* Accordions Bordered */}
                <div
                  className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box accordion-secondary"
                  id="accordionBordered"
                >
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample1"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_region"
                        aria-expanded="true"
                        aria-controls="accor_borderedExamplecollapse1"
                      >
                        Region
                      </button>
                    </h2>
                    <div
                      id="accor_region"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordionborderedExample1"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        <div className="col-sm-12 col-lg-12">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="card-title">Add region</h6>
                              <div className="row gy-4">
                                <div className="col-xxl-8 col-md-8">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basiInput"
                                      onChange={(e) => setRegionName(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-4">
                                  <div>
                                    <label
                                      htmlFor="basiInput"
                                      className="form-label"
                                    >
                                      .
                                    </label>
                                    <div class="text-end">
                                      <button
                                        onClick={(e) => { addRegion(e) }}
                                        class="btn btn-primary"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
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
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample2"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_borderedExamplecollapse2"
                        aria-expanded="false"
                        aria-controls="accor_borderedExamplecollapse2"
                      >
                        What is Digital Marketing?
                      </button>
                    </h2>
                    <div
                      id="accor_borderedExamplecollapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample2"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        Nullam quis ante. Etiam sit amet orci eget eros faucibus
                        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        Donec sodales sagittis magna. Sed consequat, leo eget
                        bibendum sodales, augue velit cursus nunc, quis gravida
                        magna mi a libero. Fusce vulputate eleifend sapien.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-2">
                    <h2
                      className="accordion-header"
                      id="accordionborderedExample3"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accor_borderedExamplecollapse3"
                        aria-expanded="false"
                        aria-controls="accor_borderedExamplecollapse3"
                      >
                        Where does it come from ?
                      </button>
                    </h2>
                    <div
                      id="accor_borderedExamplecollapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionborderedExample3"
                      data-bs-parent="#accordionBordered"
                    >
                      <div className="accordion-body">
                        Cras ultricies mi eu turpis hendrerit fringilla.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; In ac dui quis mi
                        consectetuer lacinia. Nam pretium turpis et arcu arcu
                        tortor, suscipit eget, imperdiet nec, imperdiet iaculis
                        aliquam ultrices mauris.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
