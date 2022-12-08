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
                    <th>Submission Date</th>
  
                    <th>Reporter</th>
                    <th>Phone</th>
                    <th>GPS</th>
                    <th>Region</th>
                    <th>District</th>
                    <th>Community</th>
                    {/* <th>Respondent</th>
                    <th>Designation</th> */}
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((dt) => {
                    return (
                      <tr key={dt.id}>

                        {" "}
                        <td>{dt.createdAt}</td>
                        <td>{dt.name}</td>
                        <td>
                          {dt.phoneNumber} 
                        </td>
                        <td>{dt.gps}</td>
                        <td>{dt.region}</td>
                        <td>{dt.district}</td>
                        <td>{dt.community}</td>
                        <td>
                          {dt.Inspection.isPublished == 0 ? (
                            <span className="badge bg-danger">Unpublished</span>
                          ) : (
                            <span className="badge bg-success">Published</span>
                          )}{" "}
                        </td>
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
                                <a href="#!" className="dropdown-item">
                                  <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                                  View
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
                                  Publish
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
  