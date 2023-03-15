import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const National = ({ inspectionForm, regions, districts }) => {
  const router = useRouter();
  const [level, setLevel] = useState();
  const [form, setForm] = useState(null);
  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [submissionSummary, setSubmissionSummary] = useState([]);
  const [submissionSummaryVisibility, setSubmissionSummaryVisibility] =
    useState(false);
  const [actionTaken, setActionTaken] = useState([]);
  const [actionTakenVisibility, setActionTakenVisibility] = useState(false);

  //   const [communityId, setCommunityId] = useState(null);

  const getSubmissionSummary = async (e) => {
    try {
      // console.log("sendBroadcastMessage");
      e.preventDefault();
      let data = {
        level,
        reportType,
      };

      const response = await axios.post(
        "/api/v1/report/national/submission-summaries",
        data
      );
      console.log("response", response);
      if (response.status == 200) {
        console.log(response.data.data.submissionSummary);
        setSubmissionSummaryVisibility(true);
        setSubmissionSummary(response.data.data.submissionSummary);
      }

      // router.replace(router.asPath);

      return toast.success("Message sent");
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
    }
  };

  const getActionTaken = async (e) => {
    try {
      // console.log("sendBroadcastMessage");
      e.preventDefault();
      let data = {
        level,
        reportType,
      };

      const response = await axios.post(
        "/api/v1/report/national/submission-summaries",
        data
      );
      console.log("response", response);
      if (response.status == 200) {
        console.log(response.data.data.submissionSummary);
        setSubmissionSummaryVisibility(false);
        setActionTakenVisibility(true);
        setActionTaken(response.data.data.actionTaken);
      }

      // router.replace(router.asPath);

      return toast.success("Message sent");
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
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
              <h5 className="card-title mb-0">GENERATE REPORT</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add Community</h6> */}
              <div className="row gy-4">
                {" "}
                <div className="col-xxl-2 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Report Type
                    </label>
                    <select
                      className="form-control"
                      id="choices-single-groups"
                      data-choices
                      data-choices-groups
                      data-placeholder="Select City"
                      name="choices-single-groups"
                      onChange={(e) => {
                        setReportType(e.target.value);
                      }}
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
                {/* <div className="col-xxl-2 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Form
                    </label>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option selected>Select form</option>
                      {inspectionForm.map(form=>{
                        return <option value={form.id}>{form.name}</option>
                      })}
                     
                     
                    </select>{" "}
                  </div>
                </div>
                */}
                <div className="col-xxl-2 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Level
                    </label>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setLevel(e.target.value);
                      }}
                    >
                      <option selected>Select level</option>
                      <option value="1">National</option>
                      <option value="2">Region</option>
                      <option value="3">District</option>
                    </select>{" "}
                  </div>
                </div>
                {level == 2 ? (
                  <div className="col-xxl-2 col-md-8">
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Regions
                      </label>
                      <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select region</option>
                        <option value="0">All</option>
                        {regions.map((region) => {
                          return (
                            <option key={region.id}  value={region.id}>{region.name}</option>
                          );
                        })}
                      </select>{" "}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {level == 3 ? (
                  <div className="col-xxl-2 col-md-8">
                    <div>
                      <label htmlFor="basiInput" className="form-label">
                        Districts
                      </label>
                      <select
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select district</option>
                        <option value="0">All</option>
                        {districts.map((district) => {
                          return (
                            <option key={district.id}  value={district.id}>{district.name}</option>
                          );
                        })}
                      </select>{" "}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-xxl-4 col-md-8">
                  <div>
                    {/* <label htmlFor="basiInput" className="form-label">
                      Name
                    </label> */}
                    <br />
                    <button
                      onClick={(e) => {
                        console.log(reportType);
                        if (reportType == 1) {
                          getSubmissionSummary(e);
                        }
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
        {submissionSummaryVisibility ? (
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">SUBMISSION SUMMARY</h5>
            </div>
            <div className="card-body">
              <div className="col-sm"></div>
              <br />
              <table
                id="fixed-header"
                className="table table-bordered dt-responsive nowrap table-striped align-middle"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Form</th>
                    <th>Baseline</th>
                    <th>ReInspection</th>
                    <th>Follow Up</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionSummary.map((dt) => {
                    return (
                      <tr key={dt.id}>
                        {" "}
                        <td>{dt.name}</td>
                        <td>{dt.baselineCount}</td>
                        <td>{dt.reinspectionCount}</td>
                        <td>{dt.followupCount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">ACTION TAKEN SUMMARY</h5>
          </div>
          <div className="card-body">
            <div className="col-sm"></div>
            <br />
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Form</th>
                  <th>Notice Served</th>
                  <th>Hygiene Education</th>
                  <th>Criminal Summons</th>
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

        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">WATER SOURCES SUMMARY</h5>
          </div>
          <div className="card-body">
            <br />
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Form</th>

                  <th>Submissions</th>
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
