import Image from "next/image";

const Reports = ({ data }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">SANITATION REPORTS</h5>
          </div>
          <div className="card-body">
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                <th>Image</th>

                  <th>Submission Date</th>

                  <th>Reporter</th>
                  <th>Phone</th>
                  <th>Email</th>
                  {/* <th>GPS</th> */}
                  <th>Region</th>
                  <th>District</th>
                  <th>Community</th>
                  {/* <th>Respondent</th>
                    <th>Designation</th> */}
                  {/* <th>Status</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      <td>
                      <div className="gallery-box card">

                        <div className="gallery-container">
                          <a
                            className="image-popup"
                            href={`https://sanitation-reporter-images.s3.eu-west-2.amazonaws.com/${dt.image}`}
                            title=""
                          >
                            <Image
                              // loader={myLoader}
                              src={`https://sanitation-reporter-images.s3.eu-west-2.amazonaws.com/${dt.image}`}
                              alt="Picture of sanitation"
                              width={128}
                              height={128}
                            />
                            <div className="gallery-overlay">
                              {/* <h5 className="overlay-caption">
                                Sunrise above a beach
                              </h5> */}
                            </div>
                          </a>
                        </div> </div>
                      </td>
                      <td>{dt.createdAt}</td>
                      <td>{dt.fullName}</td>
                      <td>{dt.phoneNumber}</td>
                      <td>{dt.email}</td>
                      {/* <td>{dt.gps}</td> */}
                      <td>{dt.District.Region.name}</td>
                      <td>{dt.District.name}</td>
                      <td>{dt.community}</td>
                      {/* <td>
                          {dt.Inspection.isPublished == 0 ? (
                            <span className="badge bg-danger">Unpublished</span>
                          ) : (
                            <span className="badge bg-success">Published</span>
                          )}{" "}
                        </td> */}
                      <td>
                        <div className="dropdown d-inline-block">
                          <button
                            className="btn btn-soft-secondary btn-sm dropdown"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ri-more-fill align-middle" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a href={`https://www.google.com/maps/@${dt.latitude},${dt.longitude},15z`} target="_blank" rel="noreferrer" className="dropdown-item">
                                <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                                View Location
                              </a>
                            </li>
                            {/* <li>
                                <a className="dropdown-item edit-item-btn">
                                  <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                  Edit
                                </a>
                              </li> */}
                            <li>
                              <a className="dropdown-item edit-item-btn">
                                <i className=" ri-send-plane-line align-bottom me-2 text-muted" />{" "}
                                Done
                              </a>
                            </li>
                            {/* <li>
                                <a className="dropdown-item remove-item-btn">
                                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                  Delete
                                </a>
                              </li> */}
                          </ul>
                        </div>
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
  );
};

export default Reports;
