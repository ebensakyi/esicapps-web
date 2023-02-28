import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const National = ({ form }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
//   const [communityName, setCommunityName] = useState(null);
//   const [communityId, setCommunityId] = useState(null);

//   const handlePagination = (page) => {
//     const path = router.pathname;
//     const query = router.query;
//     query.page = page.selected + 1;
//     router.push({
//       pathname: path,
//       query: query,
//     });
//   };

//   const handleSearch = () => {
//     let currentUrl = router.pathname;
//     router.push({
//       pathname: currentUrl,
//       query: `&searchText=${searchText}`,
//     });
//     // const path = router.pathname;
//     // const query = router.query;
//     // query.page = page.selected + 1;
//     // router.push({
//     //   pathname: path,
//     //   query: query,
//     // });
//   };

//   const autoHandleSearch = (searchText) => {
//     let currentUrl = router.pathname;
//     router.push({
//       pathname: currentUrl,
//       query: `&searchText=${searchText}`,
//     });
//   };

  const addCommunity = async (e) => {
    try {
      e.preventDefault();
      if (communityName == "" || communityName == null) {
        return toast.error("Enter community name");
      }
      let data = {
        name: communityName,
        id: communityId,
        // electoralAreaId,
      };
      const response = await axios.post("/api/v1/primary-data/community-data", {
        data,
      });
      toast.success(response.data.message);
      setCommunityName("");
      setCommunityId(null);

      router.replace(router.asPath);
    } catch (error) {
      if (error.response.status == 401) {
        toast.error(error.response.data.message);
      }
    }
  };

//   const deleteCommunity = async (e, id) => {
//     e.preventDefault();
//     console.log(id);

//     try {
//       await axios.delete("/api/v1/primary-data/community-data", {
//         data: { id },
//       });
//       router.replace(router.asPath);
//     } catch (error) {}
//   };
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
      <div className="col-lg-12">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">GENERATE REPORT</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
                <div className="col-xxl-2 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Form
                    </label>
                    <select
                      class="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option selected>Select form</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>{" "}
                  </div>
                </div>
                <div className="col-xxl-2 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Report Type
                    </label>
                    <select
                      class="form-control"
                      id="choices-single-groups"
                      data-choices
                      data-choices-groups
                      data-placeholder="Select City"
                      name="choices-single-groups"
                    >
                      <option value="">Choose a report</option>
                      <optgroup label="General">
                        <option value="1">Total Submissions Summary</option>
                        <option value="2">Action Taken Summary</option>
                        {/* <option value="Liverpool">Liverpool</option> */}
                      </optgroup>
                      <optgroup label="Water">
                        <option value="11">Water Sources</option>
                        <option value="12">Water Source Condition</option>
                        {/* <option value="Marseille">Marseille</option> */}
                      </optgroup>
                      <optgroup label="Liquid Waste">
                        <option value="21">Toilet Availability</option>
                        <option value="22">Toilet Adequacy</option>
                        <option value="23">Drain Availability</option>
                      </optgroup>
                      <optgroup label="Solid Waste">
                        <option value="31">Waste Bins Availability</option>
                        <option value="32">Waste Bins Adequacy</option>
                        {/* <option value="Michigan">Michigan</option> */}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="col-xxl-2 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Level
                    </label>
                    <select
                      class="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option selected>Select level</option>
                      <option value="1">All</option>
                      <option value="2">Region</option>
                      <option value="3">District</option>
                    </select>{" "}
                  </div>
                </div>
                <div className="col-xxl-4 col-md-8">
                  <div>
                    {/* <label htmlFor="basiInput" className="form-label">
                      Name
                    </label> */}
                    <br />
                    <button
                      onClick={(e) => {
                        addCommunity(e);
                      }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">COMMUNITIES</h5>
          </div>
          <div className="card-body">
            {/* <div className="col-md-4" style={{ textAlign: "end" }}>
              <div className="form-group">
                <div className="mb-6 position-relative">
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Search by name of applicant"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      autoHandleSearch(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div> */}

            <div className="col-sm">
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2">
                  <input
                    type="text"
                    className="form-control"
                    id="searchResultList"
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      autoHandleSearch(e.target.value);
                    }}
                    placeholder="Search..."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
            </div>
            <br />
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Community</th>
                  <th>Region</th>
                  <th>District</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {data.community.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      {" "}
                      <td>{dt.name}</td>
                      <td>{dt.District.Region.name}</td>
                      <td>{dt.District.name}</td>
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
                              <button
                                className="dropdown-item edit-item-btn"
                                onClick={(e) => {
                                  setCommunityId(dt.id);
                                  setCommunityName(dt.name);
                                }}
                              >
                                <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item delete-item-btn"
                                onClick={(e) => {
                                  deleteCommunity(e, dt.id);
                                }}
                              >
                                <i className=" ri-delete-bin-line align-bottom me-2 text-muted" />{" "}
                                Delete
                              </button>
                            </li>
                     
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default National;
