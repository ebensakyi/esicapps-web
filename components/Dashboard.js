import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";

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

const Dashboard = ({
  dashboardData,
  regions,
  districts,
  electoralAreas,
  communities,
}) => {
  let districtId = Cookies?.get("d_id");
  let regionId = Cookies?.get("r_id");
  let ul = Cookies?.get("ul");


  console.log(dashboardData);

  const [showLoading, setShowLoading] = useState(false);

  const [districtsData, setDistrictsData] = useState([]);
  const [electoralAreasData, setElectoralAreasData] = useState([]);
  const [communitiesData, setCommunitiesData] = useState([]);

  const [region, setRegion] = useState(null);
  const [district, setDistrict] = useState(null);
  const [electoralArea, setElectoralArea] = useState(null);
  const [community, setCommunity] = useState(null);

  const [filterValue, setFilterValue] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const router = useRouter();

  // const getDashboard = async () => {
  //   try {
  //     setShowLoading(false);

  //     const response = await axios.get("/api/v1/dashboard");
  //     setDashboardData(response.data);

  //     setShowLoading(false);

  //   } catch (error) {
  //     console.log(error);
  //   }

  // };

  const returnFilterValue = async (filterBy) => {
    if (filterBy == "regionId") {
      setFilterValue(region);
      return region;
    }
    if (filterBy == "districtId") {
      setFilterValue(district);
      return district;
    }
    if (filterBy == "electoralAreaId") {
      setFilterValue(electoralArea);
      return electoralArea;
    }
    if (filterBy == "community") {
      setFilterValue(community);
      return community;
    }
  };

  const getDistrictsByRegion = async (regionId) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/district?regionId=" + regionId
      );
      setDistrictsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getElectoralAreasByDistrict = async (districtId) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/electoral-area?districtId=" + districtId
      );
      setElectoralAreasData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCommunitiesByElectoralArea = async (electoralAreaId) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/community?electoralAreaId=" + electoralAreaId
      );

      setCommunitiesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    if (filterBy == "" || filterBy == null) {
      return toast.error("Please select a filter");
    }
    if (filterBy == "communityId" && community == null) {
      return toast.error("Please select community");
    }
    if (filterBy == "electoralAreaId" && electoralArea == null) {
      return toast.error("Please select electoral area");
    }
    if (filterBy == "districtId" && district == null) {
      return toast.error("Please select district");
    }
    if (filterBy == "regionId" && region == null) {
      return toast.error("Please select region");
    }

    const path = router.pathname;
    const query = router.query;

    let published = query.published;
    let page = query.page;

 await returnFilterValue(filterBy);

    router.push({
      pathname: path,
      query: { published, page, filterBy, filterValue, from, to },
    });

    // router.push({
    //   pathname: '/destination',
    //   query: {
    //     myData: JSON.stringify({'some data'})
    //    }
    // });
  };

  useEffect(() => {
   // setDistrictsData(districts);
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
          "rgb(56, 21, 134)",

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
        backgroundColor: ["#38a286", "#c3103c"],

        borderColor: ["white"],
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
        backgroundColor: ["#38a286", "#c3103c"],

        borderColor: ["white"],
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
        backgroundColor: ["#38a286", "#c3103c"],
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
        backgroundColor: ["#38a286", "#c3103c"],
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
        backgroundColor: ["#38a286", "#c3103c"],
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
        backgroundColor: ["#38a286", "#c3103c"],
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
        backgroundColor: ["#38a286", "#c3103c"],
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
        backgroundColor: ["#38a286", "#c3103c"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };



  // let nationalUser = districtId == "undefined" && regionId == "undefined";
  // let regionalUser = districtId == "undefined" && regionId != "undefined";
  // let districtUser = districtId != "undefined";

  let nationalUser =ul == 1 
  let regionalUser = ul == 2;
  let districtUser = ul == 3;
  return (
    <>
      {" "}
      <LoadingOverlay
        active={showLoading}
        spinner
        text="Loading dashboard. Please wait..."
      >
        <>
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
          <div className="row row-cols-lg-auto g-3 align-items-center">
            
            <div className="col-md-2">
              <label className="form-label mb-0">Select level</label>

              <select
                className="form-control"
                aria-label="Default select example"
                onChange={(e) => {
                  setFilterBy(e.target.value);

                  if (regionalUser) {
                    getDistrictsByRegion();
                  }

                  if (districtUser) {
                    getElectoralAreasByDistrict();
                  }
                  if (e.target.value == "national") {
                    setFilterValue(null);
                  }
                }}
                value={filterBy}
              >
                <option value="" >
                  Filter by{" "}
                </option>
                <option hidden={!nationalUser} value="national">
                  National
                </option>
                <option hidden={!nationalUser} value="regionId">
                  Region
                </option>
                <option
                  hidden={!nationalUser && !regionalUser}
                  value="districtId"
                >
                  District
                </option>
                <option
                  hidden={!nationalUser && !regionalUser && !districtUser}
                  value="electoralAreaId"
                >
                  Electoral Area
                </option>
                <option
                  hidden={!nationalUser && !regionalUser && !districtUser}
                  value="communityId"
                >
                  Community
                </option>
              </select>
            </div>

            {filterBy == "regionId" ? (
              <div className="col-md-2">
                <label className="form-label mb-0">Select region</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  onChange={async (e) => {
                    setRegion(e.target.value);

                    setFilterValue(e.target.value);
                  }}
                  value={region}
                >
                  {" "}
                  <option selected>Select region </option>
                  {regions?.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
            {filterBy == "districtId" ? (
              <>
                {nationalUser? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setRegion(e.target.value);

                        await getDistrictsByRegion(e.target.value);
                      }}
                      value={region}
                    >
                      {" "}
                      <option selected>Select region </option>
                      {regions?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-2">
                  <label className="form-label mb-0">Select district</label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFilterValue(e.target.value);
                      setDistrict(e.target.value);
                    }}
                    value={district}
                  >
                    {" "}
                    <option selected>Filter by </option>
                    {districtsData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}
            {filterBy == "electoralAreaId" ? (
              <>
                {nationalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      value={region}
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setRegion(e.target.value);

                        await getDistrictsByRegion(e.target.value);
                      }}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {regions?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                {nationalUser || regionalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select district</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setDistrict(e.target.value);

                        await getElectoralAreasByDistrict(e.target.value);
                      }}
                      value={district}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {districtsData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-2">
                  <label className="form-label mb-0">
                    Select Electoral Area
                  </label>
                  <select
                    className=" form-control "
                    aria-label="Default select example"
                    onChange={async (e) => {
                      setFilterValue(e.target.value);
                      setElectoralArea(e.target.value);

                      await getCommunitiesByElectoralArea(e.target.value);
                    }}
                    value={electoralArea}
                  >
                    {" "}
                    <option selected>Filter by </option>
                    {electoralAreasData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}
            {filterBy == "communityId" ? (
              <>
                {nationalUser || regionalUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select region</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setRegion(e.target.value);

                        await getDistrictsByRegion(e.target.value);
                      }}
                      value={region}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {regions?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                {nationalUser||
               regionalUser ||
                districtUser ? (
                  <div className="col-md-2">
                    <label className="form-label mb-0">Select district</label>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={async (e) => {
                        setFilterValue(e.target.value);
                        setDistrict(e.target.value);
                        await getElectoralAreasByDistrict(e.target.value);
                      }}
                      value={district}
                    >
                      {" "}
                      <option selected>Filter by </option>
                      {districtsData?.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}
                <div className="col-md-2">
                  <label className="form-label mb-0">
                    Select Electoral Area
                  </label>
                  <select
                    className=" form-control "
                    aria-label="Default select example"
                    onChange={async (e) => {
                      setFilterValue(e.target.value);
                      setElectoralArea(e.target.value);

                      await getCommunitiesByElectoralArea(e.target.value);
                    }}
                    value={electoralArea}
                  >
                    {" "}
                    <option selected> Select Electoral Area </option>
                    {electoralAreasData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>{" "}
                <div className="col-md-2">
                  <label className="form-label mb-0">Select community</label>
                  <select
                    className=" form-control "
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFilterValue(e.target.value);
                      setCommunity(e.target.value);
                    }}
                    value={community}
                  >
                    {" "}
                    <option selected>Filter by </option>
                    {communitiesData?.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <></>
            )}

            {/* <div className="col-md-12">
              <label className="form-label mb-0">Start Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label mb-0">End Date</label>

              <input
                type="date"
                className="form-control"
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
            </div> */}

            <div className="col-12">
              <label className="form-label mb-0">.</label>
              <button
                type="submit"
                className="form-control btn btn-primary"
                onClick={(e) => handleFilter(e)}
              >
                Filter
              </button>
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

            {/* <div className="col-xxl-2">
              <div className="card card-height-100">
                <div className="card-header align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1"> USERS </h4>
                  <div className="avatar-sm flex-shrink-0">
                    <span className="avatar-title bg-soft-warning rounded fs-3">
                      <i className="bx bx-user text-warning" />
                    </span>
                  </div>
                </div>
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
            </div> */}
          </div>
        </>{" "}
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
              </div> */}
              </div>
              <div className="card-body">
                <Pie data={actionsTakenBarchartData} />
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </LoadingOverlay>
      {/* end row */}
      <div className="row">
        <div className="col-xl-4">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">
                Baseline Submissions
              </h4>
              <div className="flex-shrink-0">
                {/* <div className="dropdown card-header-dropdown">
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
                </div> */}
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
                {/* <div className="dropdown card-header-dropdown">
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
                </div> */}
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
                {/* <div className="dropdown card-header-dropdown">
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
                </div> */}
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
