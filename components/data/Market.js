const Market = ({ levels, regions, districts }) => {

    return (

        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">MARKET PREMISES</h5>
                    </div>
                    <div className="card-body">
                        <table
                            id="fixed-header"
                            className="table table-bordered dt-responsive nowrap table-striped align-middle"
                            style={{ width: "100%" }}
                        >
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: 10 }}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input fs-15"
                                                type="checkbox"
                                                id="checkAll"
                                                defaultValue="option"
                                            />
                                        </div>
                                    </th>
                                    <th>Date</th>
                                    <th>Inspection Officer</th>

                                    <th>GhanaPost GPS</th>
                                    <th>Region</th>
                                    <th>District</th>
                                    <th>Electoral Area</th>
                                    <th>Community</th>
                                    <th>Respondent</th>
                                    <th>Designation</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr>
                                    <th scope="row">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input fs-15"
                                                type="checkbox"
                                                name="checkAll"
                                                defaultValue="option1"
                                            />
                                        </div>
                                    </th>
                                    <td>13</td>
                                    <td>VLZ-466</td>
                                    <td>VLZ1400089015</td>
                                    <td>
                                        <a href="#!">Issue with finding information about order ?</a>
                                    </td>
                                    <td>Olive Gunther</td>
                                    <td>Alexis Clarke</td>
                                    <td>Schaefer</td>
                                    <td>32 March, 2022</td>
                                    <td>
                                        <span className="badge badge-soft-success">New</span>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger">High</span>
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
                                <tr>
                                    <th scope="row">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input fs-15"
                                                type="checkbox"
                                                name="checkAll"
                                                defaultValue="option1"
                                            />
                                        </div>
                                    </th>
                                    <td>14</td>
                                    <td>VLZ-467</td>
                                    <td>VLZ1400090324</td>
                                    <td>
                                        <a href="#!">Make a creating an account profile</a>
                                    </td>
                                    <td>Edwin</td>
                                    <td>Admin</td>
                                    <td>Edwin</td>
                                    <td>05 April, 2022</td>
                                    <td>
                                        <span className="badge badge-soft-warning">Inprogress</span>
                                    </td>
                                    <td>
                                        <span className="badge bg-success">Low</span>
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
                                                    <a className="dropdown-item remove-item-btn">
                                                        <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Market;
