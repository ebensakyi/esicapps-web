import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import * as moment from 'moment';

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserGuides = ({ data }) => {
  const router = useRouter();
 
  const [link, setLink] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const [fileType, setFileType] = useState(null);
  const [action, setAction] = useState(null);

  // const handleSearch = () => {
  //   let currentUrl = router.pathname;
  //   router.push({
  //     pathname: currentUrl,
  //     query: `&searchText=${searchText}`,
  //   });
  //   // const path = router.pathname;
  //   // const query = router.query;
  //   // query.page = page.selected + 1;
  //   // router.push({
  //   //   pathname: path,
  //   //   query: query,
  //   // });
  // };

  // const autoHandleSearch = (searchText) => {
  //   let currentUrl = router.pathname;
  //   router.push({
  //     pathname: currentUrl,
  //     query: `&searchText=${searchText}`,
  //   });
  // };

  // const getAssignedFromUsersByDistricts = async (e) => {
  //   try {
  //     e.preventDefault();

  //     let districtId = e.target.value;
  //     const response = await axios.get(
  //       "/api/v1/account/user?districtId=" + districtId
  //     );

  //     setAssignedFromUsers(response.data);
  //   } catch (error) {}
  // };

  // const getAssignedToUsersByDistricts = async (e) => {
  //   try {
  //     e.preventDefault();
  //     let districtId = e.target.value;

  //     const response = await axios.get(
  //       "/api/v1/account/user?districtId=" + districtId
  //     );
  //     setAssignedToUsers(response.data);
  //   } catch (error) {
     
  //   }
  // };
  const addUserGuide = async (e) => {
    try {
      e.preventDefault();
      if (link == null || title == null|| description == null|| action == null|| fileType == null) {
        return toast.error("Please fill all the fields");
      }
      let data = {
        link,
        title,description,action,fileType
      };
      const response = await axios.post("/api/v1/setup/user-guides", 
        data,
      );
      toast.success(response.data.message);
      setAction(null);
      setLink(null);
      setDescription(null);
      setAction(null);
      setFileType(null)

      router.replace(router.asPath);

      router.replace(router.asPath);
    } catch (error) {
      if (error.response.status == 401) {
        toast.error(error.response.data.message);
      }
    }
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
              <h5 className="card-title mb-0">USER GUIDES</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    Title
                  </label>
                  <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                </div>
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                  Description
                  </label>
                  <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                </div>
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                  Link
                  </label>
                  <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        onChange={(e) => setLink(e.target.value)}
                      />
                </div>
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    Action
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                   // value={assignedToDistrict}
                    onChange={(e) => {
                      setAction(e.target.value);
                     
                    }}
                  >
                    <option selected>Select action</option>
                   
                      <option key="1" value={1}>
                       Watch
                      </option>
                      <option key="2" value={2}>
                       Download
                      </option>
                      <option key="3" value={3}>
                       Browse
                      </option>
                   
                  </select>
                </div>
                <div className="col-xxl-3 col-md-12">
                  <label htmlFor="basiInput" className="form-label">
                    File type
                  </label>

                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    //value={assignedToUser}
                    onChange={(e) => {
                      setFileType(e.target.value);
                    }}
                  >
                   <option selected>Select file type</option>
                   
                   <option key="1" value={1}>
                    Video
                   </option>
                   <option key="2" value={2}>
                    PDF
                   </option>
                   <option key="3" value={3}>
                    Web Page
                   </option>
                  </select>
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
                        addUserGuide(e);
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
            <div className="card-body">
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th> Date</th>
                  <th>Title</th>
                  <th>Description</th>

                  <th>Link</th>
                  <th>File Type</th>

                
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      {" "}
                      <td>{moment(dt.createdAt).format("MMM Do YYYY, h:mm:ss a")}</td>
                      <td>{dt.title}</td>
                      <td>{dt.description} </td>
                      <td>{dt.link}</td>
                      <td>{dt.fileType}</td>
                      <td>{dt.action}</td>

                     
                     
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserGuides;
