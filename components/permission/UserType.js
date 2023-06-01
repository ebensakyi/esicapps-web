import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Multiselect from "multiselect-react-dropdown";

const UserType = ({ userTypes, pagesOptions, pages }) => {
  const router = useRouter();

  const [userTypeName, setUserTypeName] = useState("");
  const [selectedPages, setSelectedPages] = useState([]);

 const [isEditing, setIsEditing] = useState(0);

  const add = async (e) => {
    try {
      e.preventDefault();
      if (selectedPages.length == 0)
        return toast.error("Pages cannot be empty");
      if (userTypeName == "") return toast.error("User type cannot be empty");

      let data = {
        userTypeName,

        selectedPages: selectedPages,
      };

      const response = await axios.post("/api/v1/permission/user-type", data);
      setSelectedPages([]);
      setUserTypeName("");
      router.replace(router.asPath);

      return toast.success("User Type saved");
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
    }
  };

  const update = async (e) => {
    try {
      e.preventDefault();
      if (selectedPages.length == 0)
        return toast.error("Pages cannot be empty");
      if (userTypeName == "") return toast.error("User type cannot be empty");

      let data = {

        userTypeName,
        selectedPages: selectedPages,
      };

      const response = await axios.put("/api/v1/permission/user-type", data);
      setSelectedPages([]);
      setUserTypeName("");
      router.replace(router.asPath);

      return toast.success("User Type saved");
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
    }
  };
  const deleteUserType = async (selected) => {
    // arr = selectedPages.filter(function (item) {
    //   return item !== selected[selected.length - 1].value;
    // });
    // console.log(arr);
  };
  const onRemove = (selected) => {

   // setSelectedPages([selected.length - 1].value);
  };
  const onSelect = (selected) => {
    // setSelectedPages(selected[selected.length - 1].value);
    setSelectedPages(selected);
  };
  return (
    <div className="row">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="col-12">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="mb-3">User Type</h5>

            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Add</h4>
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
                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="valueInput" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div> */}
                  <div className="col-xxl-4 col-md-6">
                    <div>
                      <label htmlFor="valueInput" className="form-label">
                        User Type Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        value={userTypeName}
                        onChange={(e) => setUserTypeName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-8 col-md-8">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Pages
                      </label>

                      <Multiselect
                        options={pagesOptions}
                        selectedValues={selectedPages}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="label"
                      />
                      {/* <select
                        className="form-select"
                        id="inputGroupSelect02"
                        value={pages}
                        onChange={(e) => {
                          setSelectedPages(e.target.value);
                        }}
                      >
                        <option value="">Choose...</option>
                        {pages.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.name}
                          </option>
                        ))}
                      </select> */}
                    </div>
                  </div>

                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        District
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => {
                          setDistrict(e.target.value);
                        }}
                      >
                        <option selected>Choose...</option>
                        {districts.map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}

                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Electoral Area
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setElectoralArea(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        {electoralAreas.map((ea) => (
                          <option key={ea.id} value={ea.id}>
                            {ea.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}
                </div>
                <br />
                <div className="row gy-4">
                  <div className="flex-shrink-0">
                    <div className="col-lg-12">
                      <div className="text-end">
                        {isEditing==1?
                         <button
                         className="btn btn-warning"
                         onClick={(e) => {
                           add(e);
                         }}
                       >
                         Update
                       </button>: <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            add(e);
                          }}
                        >
                          Create
                        </button>
                        }
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">List</h5>
                </div>
                <div className="card-body">
                  <table
                    id="fixed-header"
                    className="table table-bordered dt-responsive nowrap table-striped align-middle"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>User Type</th>
                        <th>Allowed Pages</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userTypes.map((ut) => {
                        return (
                          <tr key={ut.id}>
                            <td>{ut.name}</td>
                            <div className="row" key={ut.id}>
                              {ut.PageAccess.map((ut) => {
                                return (
                                  <div className="col-md-3">
                                    <span className="badge badge-outline-success">
                                      {ut.Page.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <td>
                              <div
                                class="btn-group"
                                role="group"
                                aria-label="Button group with nested dropdown"
                              >
                                <div className="btn-group" role="group">
                                  <button
                                    id="btnGroupDrop1"
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Actions
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="btnGroupDrop1"
                                  >
                                    <li>
                                      {/* <button className="dropdown-item btn btn-sm ">
                                        Delete
                                      </button> */}
                                      <button
                                        className="dropdown-item btn btn-sm "
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setUserTypeName(ut.name);
                                          let pageAcess = ut.PageAccess.map(
                                            (access) => {
                                              return {
                                                value: access.Page.id,
                                                label: access.Page.name,
                                              };
                                            }
                                          );
                                          setSelectedPages(pageAcess);
                                          setIsEditing(1)
                                        }}
                                      >
                                        Update
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item btn btn-sm "
                                        onClick={(e) => {
                                          e.preventDefault();

                                          deleteUserType()
                                        }}
                                      >
                                        Delete
                                      </button>
                                      {/* <button className="dropdown-itembtn btn-sm ">
                                        Update
                                      </button> */}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* <button className="btn btn-sm btn-danger">
                                Delete
                                <i className=" ri-delete-bin-2-line" />
                              </button> */}
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
        </div>
        {/*end col*/}
      </div>
    </div>
  );
};

export default UserType;