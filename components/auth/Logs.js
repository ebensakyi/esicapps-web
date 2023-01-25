const Logs = ({ logs }) => {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Logs</h5>
            </div>
            <div className="card-body">
              <table
                id="fixed-header"
                className="table table-bordered dt-responsive nowrap table-striped align-middle"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Surname</th>
  
                    <th>Other Names</th>
                    <th>Email</th>
                    <th>Designation</th>
  
                    <th>Activities</th>
                    {/* <th>View</th> */}
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log) => {
                    return (
                      <tr key={log.id}>
                      <td>{log.User.surname}</td>
                        <td>{log.User.otherNames}</td>
                        <td>{log.User.email}</td>
  
                        <td>{log.User.designation}</td>
                        <td>
                          {log.activity}
                        </td>
  
                        {/* <td>
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
                              
                            </ul>
                          </div>
                        </td> */}
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
  
  export default Logs;
  