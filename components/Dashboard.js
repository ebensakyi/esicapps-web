import Link from "next/link";
import { useEffect, useRef } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = ({ data }) => {
  console.log(data);
  let baselinePieChartData,reinspectionPieChartData, actionsTakenBarchartData;
  //  useEffect(() => {

  baselinePieChartData = {
    labels:data.baselineFormsArray,
    datasets: [
      {
        label: "# of submissions",
        data: data.baselineCountArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgb(252, 241, 121)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(64, 80, 137)",
          "rgb(56, 162, 134)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgb(252, 241, 121)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(64, 80, 137)",
          "rgb(56, 162, 134)",
        ],
        borderWidth: 1,
      },
    ],
  };

  reinspectionPieChartData = {
    labels:data.reinspectionFormArray,
    datasets: [
      {
        label: "# of submissions",
        data: data.reinspectionCountArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgb(252, 241, 121)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(64, 80, 137)",
          "rgb(56, 162, 134)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgb(252, 241, 121)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(64, 80, 137)",
          "rgb(56, 162, 134)",
        ],
        borderWidth: 1,
      },
    ],
  };

  actionsTakenBarchartData = {
    labels: ["Hygiene education", "Notice served", "Criminal Summons"],
    datasets: [
      {
        label: "# of submissions",
        data: [120, 190, 30],
        backgroundColor: [
          "rgb(252, 241, 121)",
          "rgb(64, 80, 137)",
          "rgb(56, 162, 134)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //});

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <div className="page-title-right">
              <select>
                <option value="">Select Level</option>
                <option value="">National</option>
                <option value="">Region</option>
                <option value="">District</option>
              </select>
              <select>
                <option value="">Select Level</option>
                <option value="">National</option>
                <option value="">Region</option>
                <option value="">District</option>
              </select>
            </div>
            {/* <h4 className="mb-sm-0">CRM</h4> */}
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Dashboards</a>
                </li>
                {/* <li className="breadcrumb-item active">CRM</li> */}
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      {/* <div className="row">
            <div className="col-xl-12">
              <div className="card crm-widget">
                <div className="card-body p-0">
                  <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
                    <div className="col">
                      <div className="py-4 px-3">
                        <h5 className="text-muted text-uppercase fs-13">
                          Total Submitted{" "}
                          <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle" />
                        </h5>
                        <div className="card-body px-0">
                  <ul className="list-inline main-chart text-center mb-0">
                    <li className="list-inline-item chart-border-left me-0 border-0">
                      <h4 className="text-primary">
                        $584k{" "}
                        <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                          Revenue
                        </span>
                      </h4>
                    </li>
                    <li className="list-inline-item chart-border-left me-0">
                      <h4>
                        $497k
                        <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                          Expenses
                        </span>
                      </h4>
                    </li>
                    <li className="list-inline-item chart-border-left me-0">
                      <h4>
                        <span data-plugin="counterup">3.6</span>%
                        <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                          Profit Ratio
                        </span>
                      </h4>
                    </li>
                  </ul>
                  <div
                    id="revenue-expenses-charts"
                    data-colors='["--vz-success", "--vz-danger"]'
                    className="apex-charts"
                    dir="ltr"
                  />
                </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mt-3 mt-md-0 py-4 px-3">
                        <h5 className="text-muted text-uppercase fs-13">
                         Total Baseline{" "}
                          <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle" />
                        </h5>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="ri-exchange-dollar-line display-6 text-muted" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h2 className="mb-0">
                              $
                              <span className="counter-value" data-target="489.4">
                                0
                              </span>
                              k
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mt-3 mt-md-0 py-4 px-3">
                        <h5 className="text-muted text-uppercase fs-13">
                          Total Reinspection{" "}
                          <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle" />
                        </h5>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="ri-pulse-line display-6 text-muted" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h2 className="mb-0">
                              <span className="counter-value" data-target="32.89">
                               1000000000
                              </span>
                              %
                            </h2>
                          </div>
                          <br/>
                          <div className="flex-grow-1 ms-3">
                            <h2 className="mb-0">
                              <span className="counter-value" data-target="32.89">
                                100000000
                              </span>
                              %
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mt-3 mt-lg-0 py-4 px-3">
                        <h5 className="text-muted text-uppercase fs-13">
                          Daily Average Income{" "}
                          <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle" />
                        </h5>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="ri-trophy-line display-6 text-muted" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h2 className="mb-0">
                              $
                              <span
                                className="counter-value"
                                data-target="1596.5"
                              >
                                0
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mt-3 mt-lg-0 py-4 px-3">
                        <h5 className="text-muted text-uppercase fs-13">
                          Annual Deals{" "}
                          <i className="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle" />
                        </h5>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="ri-service-line display-6 text-muted" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h2 className="mb-0">
                              <span className="counter-value" data-target={2659}>
                                0
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      {/* end row */}
      <div className="row">
        <div className="col-xxl-4">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
             
              <h4 className="card-title mb-0 flex-grow-1"> INSPECTION </h4> <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-success rounded fs-3">
                  <i className="bx bx-home-circle text-success" />
                </span>
              </div>
              {/* <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="fw-semibold text-uppercase fs-12">
                          Sort by:{" "}
                        </span>
                        <span className="text-muted">
                          Current Year
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Current Year
                        </a>
                      </div>
                    </div>
                  </div> */}
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {data.baselineCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Baseline
                    </span>
                  </h4>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.reInspectionCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Reinspection
                    </span>
                  </h4>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.followUpCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Follow up
                    </span>
                  </h4>
                </li>
              </ul>
              <div
                id="revenue-expenses-charts"
                data-colors='["--vz-success", "--vz-danger"]'
                className="apex-charts"
                dir="ltr"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-3">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
             
              <h4 className="card-title mb-0 flex-grow-1"> PUBLISHING REPORT </h4> 
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-danger rounded fs-3">
                  <i className="bx bx-chart text-danger" />
                </span>
              </div>
              {/* <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="fw-semibold text-uppercase fs-12">
                          Sort by:{" "}
                        </span>
                        <span className="text-muted">
                          Current Year
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Current Year
                        </a>
                      </div>
                    </div>
                  </div> */}
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
              <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {data.publishedCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                    Published
                    </span>
                  </h4>
                </li>
                
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.unPublishedCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                     Unpublished
                    </span>
                  </h4>
                </li>
              </ul>
              <div
                id="revenue-expenses-charts"
                data-colors='["--vz-success", "--vz-danger"]'
                className="apex-charts"
                dir="ltr"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-3">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
             
              <h4 className="card-title mb-0 flex-grow-1"> SANITATION REPORT </h4> 
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-primary rounded fs-3">
                  <i className="bx bx-trash-alt text-primary" />
                </span>
              </div>
              {/* <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="fw-semibold text-uppercase fs-12">
                          Sort by:{" "}
                        </span>
                        <span className="text-muted">
                          Current Year
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Current Year
                        </a>
                      </div>
                    </div>
                  </div> */}
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {data.baselineCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Total Reports
                    </span>
                  </h4>
                </li>
                {/* <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.reInspectionCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Reinspection
                    </span>
                  </h4>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.followUpCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Follow up
                    </span>
                  </h4>
                </li> */}
              </ul>
              <div
                id="revenue-expenses-charts"
                data-colors='["--vz-success", "--vz-danger"]'
                className="apex-charts"
                dir="ltr"
              />
            </div>
          </div>
        </div>

        <div className="col-xxl-2">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
             
              <h4 className="card-title mb-0 flex-grow-1"> USERS </h4> 
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-warning rounded fs-3">
                  <i className="bx bx-user text-warning" />
                </span>
              </div>
              {/* <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="fw-semibold text-uppercase fs-12">
                          Sort by:{" "}
                        </span>
                        <span className="text-muted">
                          Current Year
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Current Year
                        </a>
                      </div>
                    </div>
                  </div> */}
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {data.usersCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Total  Active Users
                    </span>
                  </h4>
                </li>
                {/* <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.reInspectionCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Reinspection
                    </span>
                  </h4>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {data.followUpCount}<br/>
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Follow up
                    </span>
                  </h4>
                </li> */}
              </ul>
              <div
                id="revenue-expenses-charts"
                data-colors='["--vz-success", "--vz-danger"]'
                className="apex-charts"
                dir="ltr"
              />
            </div>
          </div>
        </div>
        
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-xl-7">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">
                INSPECTION SUMMARY
              </h4>
              {/* <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="text-muted">
                          02 Nov 2021 to 31 Dec 2021
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Current Year
                        </a>
                      </div>
                    </div>
                  </div> */}
            </div>
            {/* end card header */}
            <div className="card-body">
              <div className="table-responsive table-card">
                <table className="table  table-hover table-nowrap align-middle mb-0  table-bordered table-nowrap align-middle mb-0">
                  <thead className="table-light">
                    <tr className="text-muted">
                      <th scope="col">Form</th>

                      <th scope="col">Baseline</th>
                      <th scope="col" style={{ width: "16%" }}>
                        Reinspection
                      </th>
                      <th scope="col" style={{ width: "12%" }}>
                        Follow Up
                      </th>
                      <th scope="col" style={{ width: "12%" }}>
                        Published
                      </th>
                      <th scope="col" style={{ width: "12%" }}>
                        UnPublished
                      </th>
                      <th scope="col" style={{ width: "20%" }}>
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {" "}
                    {data.allInspectionSummary.map((a) => {
                      return (
                        <tr>
                          <td>{a.name}</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              {a.baselineCount}
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-soft-warning p-2">
                              {a.reinspectionCount}
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-soft-danger p-2">
                              {a.followupCount}
                            </span>
                          </td> <td>
                            <span className="badge badge-soft-success p-2">
                              {a.publishedCount}
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-soft-primary p-2">
                              {a.unPublishedCount}
                            </span>
                          </td>
                          <td>
                            {/* <span className="badge badge-soft-primary p-2"> */}
                              {a.inspectionCount}
                            {/* </span> */}
                          </td>
                         
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* end tbody */}
                </table>
                {/* end table */}
              </div>
              {/* end table responsive */}
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-5">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">PUBLISHING SUMMARY</h4>
              <div className="flex-shrink-0">
                <div className="dropdown card-header-dropdown">
                  <a
                    className="text-reset dropdown-btn"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="text-muted">
                      <i className="ri-settings-4-line align-middle me-1 fs-15" />
                      Settings
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">
                      Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end card header */}
            <div className="card-body p-0">
              <div className="align-items-center p-3 justify-content-between d-flex">
                <div className="flex-shrink-0">
                  <div className="text-muted">
                    <span className="fw-semibold">4</span> of{" "}
                    <span className="fw-semibold">10</span> remaining
                  </div>
                </div>
                <button type="button" className="btn btn-sm btn-success">
                  <i className="ri-add-line align-middle me-1" /> Add Task
                </button>
              </div>
              {/* end card header */}
              <div data-simplebar="" style={{ maxHeight: 219 }}>
                <ul className="list-group list-group-flush border-dashed px-3">
                  <li className="list-group-item ps-0">
                    <div className="d-flex align-items-start">
                      <div className="form-check ps-0 flex-sharink-0">
                        <input
                          type="checkbox"
                          className="form-check-input ms-0"
                          id="task_one"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label
                          className="form-check-label mb-0 ps-2"
                          htmlFor="task_one"
                        >
                          Review and make sure nothing slips through cracks
                        </label>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <p className="text-muted fs-12 mb-0">15 Sep, 2021</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item ps-0">
                    <div className="d-flex align-items-start">
                      <div className="form-check ps-0 flex-sharink-0">
                        <input
                          type="checkbox"
                          className="form-check-input ms-0"
                          id="task_two"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label
                          className="form-check-label mb-0 ps-2"
                          htmlFor="task_two"
                        >
                          Send meeting invites for sales upcampaign
                        </label>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <p className="text-muted fs-12 mb-0">20 Sep, 2021</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item ps-0">
                    <div className="d-flex align-items-start">
                      <div className="form-check flex-sharink-0 ps-0">
                        <input
                          type="checkbox"
                          className="form-check-input ms-0"
                          id="task_three"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label
                          className="form-check-label mb-0 ps-2"
                          htmlFor="task_three"
                        >
                          Weekly closed sales won checking with sales team
                        </label>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <p className="text-muted fs-12 mb-0">24 Sep, 2021</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item ps-0">
                    <div className="d-flex align-items-start">
                      <div className="form-check ps-0 flex-sharink-0">
                        <input
                          type="checkbox"
                          className="form-check-input ms-0"
                          id="task_four"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label
                          className="form-check-label mb-0 ps-2"
                          htmlFor="task_four"
                        >
                          Add notes that can be viewed from the individual view
                        </label>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <p className="text-muted fs-12 mb-0">27 Sep, 2021</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item ps-0">
                    <div className="d-flex align-items-start">
                      <div className="form-check ps-0 flex-sharink-0">
                        <input
                          type="checkbox"
                          className="form-check-input ms-0"
                          id="task_five"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label
                          className="form-check-label mb-0 ps-2"
                          htmlFor="task_five"
                        >
                          Move stuff to another page
                        </label>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <p className="text-muted fs-12 mb-0">27 Sep, 2021</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item ps-0">
                    <div className="d-flex align-items-start">
                      <div className="form-check ps-0 flex-sharink-0">
                        <input
                          type="checkbox"
                          className="form-check-input ms-0"
                          id="task_six"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <label
                          className="form-check-label mb-0 ps-2"
                          htmlFor="task_six"
                        >
                          Styling wireframe design and documentation for velzon
                          admin
                        </label>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <p className="text-muted fs-12 mb-0">27 Sep, 2021</p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* end ul */}
              </div>
              <div className="p-3 pt-2">
                <a
                  href="javascript:void(0);"
                  className="text-muted text-decoration-underline"
                >
                  Show more...
                </a>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Baseline Submissions
                    </h4>
                    <div className="flex-shrink-0">
                      <div className="dropdown card-header-dropdown">
                        <a
                          className="text-reset dropdown-btn"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="text-muted">
                            Report<i className="mdi mdi-chevron-down ms-1"></i>
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
                            Download Report
                          </a>
                          <a className="dropdown-item" href="#">
                            Export
                          </a>
                          <a className="dropdown-item" href="#">
                            Import
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <Pie data={baselinePieChartData} />
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Reinspection Submissions
                    </h4>
                    <div className="flex-shrink-0">
                      <div className="dropdown card-header-dropdown">
                        <a
                          className="text-reset dropdown-btn"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="text-muted">
                            Report<i className="mdi mdi-chevron-down ms-1"></i>
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
                            Download Report
                          </a>
                          <a className="dropdown-item" href="#">
                            Export
                          </a>
                          <a className="dropdown-item" href="#">
                            Import
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <Pie data={baselinePieChartData} />
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Follow-up Submissions
                    </h4>
                    <div className="flex-shrink-0">
                      <div className="dropdown card-header-dropdown">
                        <a
                          className="text-reset dropdown-btn"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="text-muted">
                            Report<i className="mdi mdi-chevron-down ms-1"></i>
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
                            Download Report
                          </a>
                          <a className="dropdown-item" href="#">
                            Export
                          </a>
                          <a className="dropdown-item" href="#">
                            Import
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <Pie data={baselinePieChartData} />
                  </div>{" "}
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Actions taken
                    </h4>
                  </div>
                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">XXXXXX</h4>
                  </div>
                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">XXXXX</h4>
                  </div>
                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
            <div className="row">
              <div className="flex-grow-1">
                <h4 className="fs-16 mb-1">WATER</h4>
                {/* <p className="text-muted mb-0">
                  Here`s what`s happening with ESICApps today.
                </p> */}
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Water Source Type
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Condition Of Water Source
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Water Storage Condition
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="flex-grow-1">
                <h4 className="fs-16 mb-1">LIQUID WASTE</h4>
                {/* <p className="text-muted mb-0">
                  Here`s what`s happening with ESICApps today.
                </p> */}
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Toilet Availability
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Type Of Toilets
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Adequacy Of Toilet
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="flex-grow-1">
                <h4 className="fs-16 mb-1">SOLID WASTE</h4>
                {/* <p className="text-muted mb-0">
                  Here`s what`s happening with ESICApps today.
                </p> */}
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Registered With A Waste Collector
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Registered With A Waste Collector
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-height-100">
                  <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Registered With A Waste Collector
                    </h4>
                  </div>

                  <div className="card-body">
                    <Pie data={actionsTakenBarchartData} />
                  </div>
                </div>
              </div>
            </div>
      {/* end row */}
    </>
  );
};

export default Dashboard;
