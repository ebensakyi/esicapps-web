import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Dashboard = ({ regions }) => {
  let loggedInUserType = Cookies.get("ut").split("??")[1];

  const [dashboardData, setDashboardData] = useState({});

  const [filterBy, setFilterBy] = useState();
  const [region, setRegion] = useState(undefined);
  const [district, setDistrict] = useState(undefined);
  const [districts, setDistricts] = useState([]);

  const getDashboard = async () => {
    if (loggedInUserType == 1) {
      const response = await axios.get("/api/v1/dashboard/regional");
    }
    if (loggedInUserType == 2) {
      const response = await axios.get("/api/v1/dashboard/district");
    }
    if (loggedInUserType == 3) {
      const response = await axios.get("/api/v1/dashboard/district");
    }
  };

  const getDistrictsByRegion = async (e, regionId) => {
    try {
      e.preventDefault();

      const response = await axios.get(
        "/api/v1/primary-data/district?regionId=" + regionId
      );
      console.log(response);
      setDistricts(response.data);
    } catch (error) {}
  };

  const filter = async (e) => {
    e.preventDefault();
    let url;

    console.log(filterBy);
    console.log("region", region);
    console.log("district", district);

    if (loggedInUserType == 1 || loggedInUserType == 2) {
      if (filterBy == 1) {
        url = "/api/v1/dashboard/national?filterBy=1";
      }
      if (filterBy == 2) {
        url = `/api/v1/dashboard/regional?regionId=${region}`;
      }
      if (filterBy == 3) {
        url = `/api/v1/dashboard/district?districtId=${district}`;
      }
    }
    if (loggedInUserType == 3 || loggedInUserType == 4) {
      if (filterBy == 3) {
        url = `/api/v1/dashboard/district?districtId=${district}`;
      }
    }
    if (loggedInUserType == 3) {
      url = "/api/v1/dashboard/district?filterBy=1";
    }

    const response = await axios.get(url);
    console.log("filter");
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getDashboard();
      // ...
    }
    fetchData();
  }, []);

  let baselinePieChartData,
    reinspectionPieChartData,
    followupPieChartData,
    actionsTakenBarchartData,
    waterSourceBarchartData,
    waterSourceConditionBarchartData,
    waterStorageConditionBarchartData,
    toiletAvailabilityBarchartData,
    toiletConditionBarchartData,
    toiletAdequacyBarchartData,
    wasteCollectorBarchartData,
    wasteSortingBarchartData,
    approvedWasteReceptacleBarchartData;
  //  useEffect(() => {

  baselinePieChartData = {
    labels: dashboardData.baselineFormsArray,
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.baselineCountArray,
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
    labels: dashboardData.reinspectionFormArray,
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.reinspectionCountArray,
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

  followupPieChartData = {
    labels: [
      "Residential",
      "Eatery",
      "Health",
      "Hospitality",
      "Institution",
      "Industry",
      "Markets & Lorry Parks",
      "Sanitary",
    ],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.followUpCountArray,
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
        data: dashboardData.actionTakenCount,
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

  waterSourceBarchartData = {
    labels: dashboardData.water?.waterSourceTypeLabelArray,
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.water?.waterSourceTypeCountArray,
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

  waterSourceConditionBarchartData = {
    labels: dashboardData.water?.waterSourceConditionLabelArray,
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.water?.waterSourceConditionCountArray,
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

  waterStorageConditionBarchartData = {
    labels: dashboardData.water?.waterStorageConditionLabelArray,
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.water?.waterStorageConditionCountArray,
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

  toiletAvailabilityBarchartData = {
    labels: ["Available", "Not Available"],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.lw?.toiletAvailabilityArray,
        backgroundColor: ["green", "red"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  toiletAdequacyBarchartData = {
    labels: ["Adequate", "Inadequate"],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.lw?.toiletAdequacyArray,
        backgroundColor: ["green", "red"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  toiletConditionBarchartData = {
    labels: ["Safe", "Unsafe"],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.lw?.toiletConditionArray,
        backgroundColor: ["green", "red"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  wasteCollectorBarchartData = {
    labels: [
      "Registered With Waste Collector",
      "Not Registered With Waste Collector",
    ],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.sw?.wasteCollectorArray,
        backgroundColor: ["green", "red"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  wasteSortingBarchartData = {
    labels: ["Waste Sorted", "Waste Not Sorted"],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.sw?.wasteSortingArray,
        backgroundColor: ["green", "red"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  approvedWasteReceptacleBarchartData = {
    labels: ["Approved", "Unapproved"],
    datasets: [
      {
        label: "# of submissions",
        data: dashboardData.sw?.wasteReceptacleArray,
        backgroundColor: ["green", "red"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  //   const labels = ['', 'February', 'March', 'April', 'May', 'June', 'July'];

  //  const barChartData = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  //});

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-3">
              {" "}
              <select
                className="form-select"
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="">Filter by</option>
                <option value="1">National</option>
                <option value="2">Region</option>
                <option value="3">District</option>
              </select>
            </div>
            {filterBy == "2"||filterBy == "3"? (
              <div className="col-lg-3">
                {" "}
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  value={region}
                  onChange={async (e) => {
                    setRegion(e.target.value);
                    setDistrict(undefined);
                    getDistrictsByRegion(e, e.target.value);
                  }}
                >
                  <option>Choose...</option>
                  {regions.map((region) => (
                    <option value={region.id} key={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
            {filterBy == "3" && region != undefined ? (
              <div className="col-lg-3">
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  value={district}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                    // getElectoralByDistrict(e, e.target.value);
                    console.log("district ", district);
                  }}
                >
                  <option>Choose...</option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
            <div className="col-lg-3">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  filter(e);
                }}
              >
                Submit
              </button>
            </div>
          </div>
          {/* <h4 className="mb-sm-0">CRM</h4> */}
          {/* <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Dashboards</a>
                </li>
              </ol>
            </div> */}
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-xxl-4">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1"> INSPECTION </h4>{" "}
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-success rounded fs-3">
                  <i className="bx bx-home-circle text-success" />
                </span>
              </div>
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {dashboardData.baselineCount}
                    <br />
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Baseline
                    </span>
                  </h4>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {dashboardData.reInspectionCount}
                    <br />
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Reinspection
                    </span>
                  </h4>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {dashboardData.followUpCount}
                    <br />
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
              <h4 className="card-title mb-0 flex-grow-1">
                {" "}
                PUBLISHING REPORT{" "}
              </h4>
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-danger rounded fs-3">
                  <i className="bx bx-chart text-danger" />
                </span>
              </div>
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {dashboardData.publishedCount}
                    <br />
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Published
                    </span>
                  </h4>
                </li>

                <li className="list-inline-item chart-border-left me-0">
                  <h4>
                    {dashboardData.unPublishedCount}
                    <br />
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
              <h4 className="card-title mb-0 flex-grow-1">
                {" "}
                SANITATION REPORT{" "}
              </h4>
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-primary rounded fs-3">
                  <i className="bx bx-trash-alt text-primary" />
                </span>
              </div>
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {dashboardData.sanitationReportCount}
                    <br />
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Total Reports
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

        <div className="col-xxl-2">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1"> USERS </h4>
              <div className="avatar-sm flex-shrink-0">
                <span className="avatar-title bg-soft-warning rounded fs-3">
                  <i className="bx bx-user text-warning" />
                </span>
              </div>
            </div>
            {/* end card header */}
            <div className="card-body px-0">
              <ul className="list-inline main-chart text-center mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h4 className="text-primary">
                    {dashboardData.usersCount}
                    <br />
                    <span className="text-muted d-inline-block fs-13 align-middle ms-2">
                      Total Active Users
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
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-xl-7">
          <div className="card">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">
                INSPECTION SUMMARY
              </h4>
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
                      {/* <th scope="col" style={{ width: "12%" }}>
                        Follow Up
                      </th> */}
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
                    {dashboardData.allInspectionSummary?.map((a) => {
                      return (
                        <tr key={a.id}>
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
                          {/* <td>
                            <span className="badge badge-soft-danger p-2">
                              {a.followupCount}
                            </span>
                          </td>{" "} */}
                          <td>
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
              <h4 className="card-title mb-0 flex-grow-1">Actions Taken</h4>
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
              <Pie data={actionsTakenBarchartData} />
            </div>{" "}
          </div>{" "}
        </div>
      </div>{" "}
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
              <Pie data={reinspectionPieChartData} />
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
              <Pie data={followupPieChartData} />
            </div>{" "}
          </div>
        </div>
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
              <h4 className="card-title mb-0 flex-grow-1">Water Source Type</h4>
            </div>

            <div className="card-body">
              <Pie data={waterSourceBarchartData} />
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
              <Pie data={waterSourceConditionBarchartData} />
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
              <Bar data={waterStorageConditionBarchartData} />
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
              <Pie data={toiletAvailabilityBarchartData} />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Toilet Condition</h4>
            </div>

            <div className="card-body">
              <Pie data={toiletConditionBarchartData} />
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
              <Pie data={toiletAdequacyBarchartData} />
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
              <Pie data={wasteCollectorBarchartData} />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Waste Sorting</h4>
            </div>

            <div className="card-body">
              <Pie data={wasteSortingBarchartData} />
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">
                Approved Waste Storage Receptacle
              </h4>
            </div>

            <div className="card-body">
              <Pie data={approvedWasteReceptacleBarchartData} />
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </>
  );
};

export default Dashboard;
