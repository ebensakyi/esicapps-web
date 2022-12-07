const ListRegionalUser = ({ users }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Users</h5>
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

                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.surname}</td>
                      <td>{user.otherNames}</td>
                      <td>{user.email}</td>

                      <td>{user.designation}</td>
                      <td>
                        {user.activated == 0 ? (
                          <span className="badge text-bg-warning">
                            INACTIVE
                          </span>
                        ) : (
                          <span className="badge text-bg-success">ACTIVE</span>
                        )}
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
                            <li>
                              <a className="dropdown-item edit-item-btn">
                                <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item edit-item-btn">
                                <i className=" ri-send-plane-line align-bottom me-2 text-muted" />{" "}
                                Publish
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item remove-item-btn">
                                <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                Delete
                              </a>
                            </li>
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

export default ListRegionalUser;
