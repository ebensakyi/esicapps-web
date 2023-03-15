import axios from "axios";
import { useRouter } from "next/router";

const ListUser = ({ users }) => {
  const router = useRouter();

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Users</h5>
          </div>

          <div className="card-body" style={{"overflow":"auto","max-height": "400px"}}>
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  {/* <th>ID</th> */}

                  <th>Surname</th>

                  <th>Other Names</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>OTP</th>
                  <th>User Type</th>
                  <th>Designation</th>
                  <th>Region</th>
                  <th>District</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      {/* <td>{user.id}</td> */}
                      <td>{user.surname}</td>
                      <td>{user.otherNames}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.tempPassword}</td>
                      <td>{user.UserType.name}</td>
                      <td>{user.designation}</td>
                      <td>{user.Region == null ? "" : user.Region.name}</td>
                      <td>{user.District == null ? "" : user.District.name}</td>
                      <td>
                        {user.deleted == 0 ? (
                          <span className="badge bg-success">Active</span>
                        ) : (
                          <span className="badge bg-danger">Inactive</span>
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
                            {/* <li>
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
                            </li> */}
                            <li>
                              <button
                                className="dropdown-item remove-item-btn"
                                onClick={async(e) => {
                                  e.preventDefault();
                                  const response = await axios.put(
                                    "/api/v1/account/user",{
                                      id:user.id
                                    }
                                  );
                                  router.replace(router.asPath);


                                }}
                              >
                                <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                Change Status
                              </button>
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

export default ListUser;
