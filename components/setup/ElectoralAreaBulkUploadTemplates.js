import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import * as moment from "moment";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ElectoralAreaBulkUploadTemplate = ({}) => {
  const router = useRouter();

  const addUserGuide = async (e) => {
    try {
      e.preventDefault();
      if (
        link == null ||
        title == null ||
        description == null ||
        action == null ||
        fileType == null
      ) {
        return toast.error("Please fill all the fields");
      }
      let data = {
        link,
        title,
        description,
        action,
        fileType,
      };
      const response = await axios.post("/api/v1/setup/user-guides", data);
      toast.success(response.data.message);
      setAction(null);
      setLink(null);
      setDescription(null);
      setAction(null);
      setFileType(null);

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
              <h5 className="card-title mb-0">UPLOAD TEMPLATES</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
              
                <div className="col-xxl-3 col-md-12">
                  <a href="https://esicapps-files.s3.eu-west-2.amazonaws.com/electoral-area-upload-template.csv"  target="_blank" rel="noreferrer" >
                    {" "}
                    <label htmlFor="basiInput" className="form-label">
                      Click here to download Electoral Area Upload Template
                    </label>
                  </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectoralAreaBulkUploadTemplate;
