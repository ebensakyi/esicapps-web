import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddCommunity = ({ data,electoralAreas }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [communityName, setCommunityName] = useState(null);
  const [communityId, setCommunityId] = useState(null);
  const [electoralArea, setElectoralArea] = useState(null);

  const handlePagination = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };

  const handleSearch = () => {
    let currentUrl = router.pathname;
    router.push({
      pathname: currentUrl,
      query: `&searchText=${searchText}`,
    });
    // const path = router.pathname;
    // const query = router.query;
    // query.page = page.selected + 1;
    // router.push({
    //   pathname: path,
    //   query: query,
    // });
  };

  const autoHandleSearch = (searchText) => {
    let currentUrl = router.pathname;
    router.push({
      pathname: currentUrl,
      query: `&searchText=${searchText}`,
    });
  };

  const addCommunity = async (e) => {
    try {
      e.preventDefault();
      if (communityName == "" || communityName == null) {
        return toast.error("Enter community name");
      }
      let data = {
        name: communityName,
        electoralAreaId:Number(electoralArea),
      };
      const response = await axios.post("/api/v1/primary-data/location/community", 
        data,
      );
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


  const updateCommunity = async (e) => {
    try {
      e.preventDefault();
      if (communityName == "" || communityName == null) {
        return toast.error("Enter community name");
      }
      let data = {
        name: communityName,
        communityId: Number(communityId),
        electoralArea,
      };
      const response = await axios.put("/api/v1/primary-data/location/community", 
        data,
      );
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

  const deleteCommunity = async (e,id) => {
    e.preventDefault();
    console.log(id);

    try {
      await axios.delete("/api/v1/primary-data/location/community", { data: { id } });
      router.replace(router.asPath);

    } catch (error) {}
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
      <div className="col-lg-12">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">ADD COMMUNITY</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
                <div className="col-xxl-4 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="basiInput"
                      value={communityName}
                      onChange={(e) => setCommunityName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-xxl-4 col-md-8">
                    <label htmlFor="basiInput" className="form-label">
                      Select electoral area
                    </label>
                    <select
                      className="form-select"
                      id="inputGroupSelect02"
                      value={electoralArea}
                      onChange={(e) => {
                        setElectoralArea(e.target.value);
                        // getElectoralByDistrict(e, e.target.value);
                      }}
                    >
                      <option>Choose...</option>
                      {electoralAreas.map((ea) => (
                        <option key={ea.id} value={ea.id}>
                          {ea.name}
                        </option>
                      ))}
                    </select>
                  </div>

                <div className="col-lg-4">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      .
                    </label>
                    {!communityId ? <div className="text-end">
                      <button
                        onClick={(e) => {
                          addCommunity(e);
                        }}
                        className="btn btn-success"
                      >
                        Add
                      </button>
                    </div>:<div className="text-end">
                      <button
                        onClick={(e) => {
                          updateCommunity(e);
                        }}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </div>}
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
                  <th>Electoral Area</th>
                  <th>District</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.community.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      {" "}
                      <td>{dt.name}</td>
                      <td>{dt.ElectoralArea.name}</td>

                      <td>{dt.ElectoralArea.District.name}</td>
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
                              </li> */}
                            <li>
                              <button
                                className="dropdown-item edit-item-btn"
                                onClick={(e) => {
                                  setCommunityId(dt.id);
                                  setCommunityName(dt.name);
                                  setElectoralArea(dt.ElectoralArea.id)
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
                                  deleteCommunity(e,dt.id);
                                }}
                              >
                                <i className=" ri-delete-bin-line align-bottom me-2 text-muted" />{" "}
                                Delete
                              </button>
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
            <ReactPaginate
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              initialPage={data.curPage - 1}
              pageCount={data.maxPage}
              onPageChange={handlePagination}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCommunity;
