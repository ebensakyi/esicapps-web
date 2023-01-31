import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AssignData = ({ districts }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [assignedFrom, setAssignedFrom] = useState(null);
  const [assignedTo, setAssignedTo] = useState(null);

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

  const assignData = async (e) => {
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

  const deleteCommunity = async (e, id) => {
    e.preventDefault();
    console.log(id);

    try {
      await axios.delete("/api/v1/primary-data/community-data", {
        data: { id },
      });
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
              <h5 className="card-title mb-0">DATA ASSIGNMENT</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
                <div className="col-xxl-3 col-md-8">
                  <label htmlFor="basiInput" className="form-label">
                    Name Of Data Owner
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => {
                      setDataOwnerDistrict(e.target.value);
                    }}
                  >
                    <option selected>Choose district of data owner</option>
                    {districts.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-xxl-3 col-md-8">
                  <label htmlFor="basiInput" className="form-label">
                    Name Of Data Owner
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basiInput"
                    value={assignedFrom}
                    onChange={(e) => setAssignedFrom(e.target.value)}
                  />
                </div>

                <div className="col-xxl-3 col-md-6">
                  <label htmlFor="basiInput" className="form-label">
                    District Of Data Receiver
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => {
                      setDataReceiverDistrict(e.target.value);
                    }}
                  >
                    <option selected>Choose district of data receiver</option>
                    {districts.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-xxl-3 col-md-8">
                  <label htmlFor="basiInput" className="form-label">
                    Name Of Data Receiver
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basiInput"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12 ">
                <div>
                  <label htmlFor="basiInput" className="form-label">
                    .
                  </label>
                  <div className="text-end">
                    <button
                      onClick={(e) => {
                        assignData(e);
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
      </div>
      <div className="col-lg-12">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">DATA ASSIGNMENTS</h5>
            </div>
            <div className="card-body"></div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AssignData;
