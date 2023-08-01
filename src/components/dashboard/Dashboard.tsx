"use client"
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
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
export default function Dashboard({ data }: any) {

  console.log(data);

  const [showLoading, setShowLoading] = useState(false);

  const [districtsData, setDistrictsData] = useState([]);
  const [electoralAreasData, setElectoralAreasData] = useState([]);
  const [communitiesData, setCommunitiesData] = useState([]);

  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [electoralArea, setElectoralArea] = useState("");
  const [community, setCommunity] = useState("");

  const [filterValue, setFilterValue] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()



  const returnFilterValue = async (filterBy: any) => {
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

  const getDistrictsByRegion = async (regionId: any) => {
    try {
      const response = await axios.get(
        "/api/primary-data/district?regionId=" + regionId
      );
      setDistrictsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getElectoralAreasByDistrict = async (districtId: any) => {
    try {
      const response = await axios.get(
        "/api/primary-data/electoral-area?districtId=" + districtId
      );
      setElectoralAreasData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCommunitiesByElectoralArea = async (electoralAreaId: any) => {
    try {
      const response = await axios.get(
        "/api/v1/primary-data/community?electoralAreaId=" + electoralAreaId
      );

      setCommunitiesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async (e: any) => {
    e.preventDefault();

    if (filterBy == "national") {
      return router.push("/dashboard");
    }
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



    const formId = Number(searchParams.get("formId"))
    const published = Number(searchParams.get('published'))
    const page = Number(searchParams.get('page'))

    await returnFilterValue(filterBy);

    router.push({
      pathname: path,
      query: { published, page, filterBy, filterValue, from, to },
    });


  };
  let ul = data?.session?.user?.userLevelId //Cookies?.get("ul");

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




  baselinePieChartData = {
    labels: data?.dashboardData?.baselineSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.baselineSummary?.map((x: any) => x.value),
        backgroundColor: ["#DAB785",

          "#70A288",
          "#F0386B",
          "#04395E",

          "#D5896F",
          "#EB5E55",
          "#0D00A4",
          "#C879FF",
        ],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  reinspectionPieChartData = {
    labels: data?.dashboardData?.reinspectionSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.reinspectionSummary?.map((x: any) => x.value),
        backgroundColor: ["#DAB785",

          "#70A288",
          "#F0386B",
          "#04395E",

          "#D5896F",
          "#EB5E55",
          "#0D00A4",
          "#C879FF",
        ],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  followupPieChartData = {
    labels: data?.dashboardData?.followupSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.followupSummary?.map((x: any) => x.value),
        backgroundColor: ["#DAB785",

          "#70A288",
          "#F0386B",
          "#04395E",

          "#D5896F",
          "#EB5E55",
          "#0D00A4",
          "#C879FF",
        ],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  actionsTakenBarchartData = {
    labels: data?.dashboardData?.actionsTaken?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.actionsTaken?.map((x: any) => x.value),
        backgroundColor: ["#DAB785",

          "#70A288",
          "#F0386B",
          "#04395E",

          "#D5896F",
          "#EB5E55",
          "#0D00A4",
          "#C879FF",
        ],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  waterSourceBarchartData = {
    labels: data?.dashboardData?.waterSourceTypeSummary?.map((x: any) => x.name),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.waterSourceTypeSummary?.map((x: any) => x.count),
        backgroundColor: ["#DAB785",

          "#70A288",
          "#F0386B",
          "#04395E",

          "#D5896F",
          "#EB5E55",
          "#0D00A4",
          "#C879FF",
        ],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  waterSourceConditionBarchartData = {
    labels: data?.dashboardData?.waterSourceConditionSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.waterSourceConditionSummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],

        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  waterStorageConditionBarchartData = {
    labels: data?.dashboardData?.waterStorageConditionSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.waterStorageConditionSummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],

        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  toiletAvailabilityBarchartData = {
    labels: data?.dashboardData?.toiletAvailabilitySummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.toiletAvailabilitySummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  toiletAdequacyBarchartData = {
    labels: data?.dashboardData?.toiletAdequacySummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.toiletAdequacySummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  toiletConditionBarchartData = {
    labels: data?.dashboardData?.toiletConditionSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.toiletConditionSummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  wasteCollectorBarchartData = {
    labels: data?.dashboardData?.wasteCollectorRegistrationSummary?.map(
      (x: any) => x.label
    ),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.wasteCollectorRegistrationSummary?.map(
          (x: any) => x.value
        ),
        backgroundColor: ["#09814A", "#DB222A"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  wasteSortingBarchartData = {
    labels: data?.dashboardData?.wasteSortingSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.wasteSortingSummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  approvedWasteReceptacleBarchartData = {
    labels: data?.dashboardData?.wasteReceptacleSummary?.map((x: any) => x.label),
    datasets: [
      {
        label: "# of submissions",
        data: data?.dashboardData?.wasteReceptacleSummary?.map((x: any) => x.value),
        backgroundColor: ["#09814A", "#DB222A"],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };



  let nationalUser = ul == 1;
  let regionalUser = ul == 2;
  let districtUser = ul == 3;

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div><div className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-md-2">
          <label className="form-label mb-0">Select level</label>

          <select
            className="form-control"
            aria-label="Default select example"
            onChange={(e: any) => {
              setFilterBy(e.target.value);

              if (regionalUser) {
                getDistrictsByRegion(region);
              }

              if (districtUser) {
                getElectoralAreasByDistrict(district);
              }
              if (e.target.value == "national") {
                setFilterValue("");
              }
            }}
            value={filterBy}
          >
            <option value="">Filter by </option>
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
              onChange={async (e: any) => {
                setRegion(e.target.value);

                setFilterValue(e.target.value);
              }}
              value={region}
            >
              {" "}
              <option selected>Select region </option>
              {data.regions?.map((data: any) => (
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
            {nationalUser ? (
              <div className="col-md-2">
                <label className="form-label mb-0">Select region</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  onChange={async (e: any) => {
                    setFilterValue(e.target.value);
                    setRegion(e.target.value);

                    await getDistrictsByRegion(e.target.value);
                  }}
                  value={region}
                >
                  {" "}
                  <option selected>Select region </option>
                  {data.regions?.map((data: any) => (
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
                onChange={(e: any) => {
                  setFilterValue(e.target.value);
                  setDistrict(e.target.value);
                }}
                value={district}
              >
                {" "}
                <option selected>Filter by </option>
                {districtsData?.map((data: any) => (
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
                  onChange={async (e: any) => {
                    setFilterValue(e.target.value);
                    setRegion(e.target.value);

                    await getDistrictsByRegion(e.target.value);
                  }}
                >
                  {" "}
                  <option selected>Filter by </option>
                  {data.regions?.map((data: any) => (
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
                  onChange={async (e: any) => {
                    setFilterValue(e.target.value);
                    setDistrict(e.target.value);

                    await getElectoralAreasByDistrict(e.target.value);
                  }}
                  value={district}
                >
                  {" "}
                  <option selected>Filter by </option>
                  {districtsData?.map((data: any) => (
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
                onChange={async (e: any) => {
                  setFilterValue(e.target.value);
                  setElectoralArea(e.target.value);

                  await getCommunitiesByElectoralArea(e.target.value);
                }}
                value={electoralArea}
              >
                {" "}
                <option selected>Filter by </option>
                {electoralAreasData?.map((data: any) => (
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
                  onChange={async (e: any) => {
                    setFilterValue(e.target.value);
                    setRegion(e.target.value);

                    await getDistrictsByRegion(e.target.value);
                  }}
                  value={region}
                >
                  {" "}
                  <option selected>Filter by </option>
                  {data.regions?.map((data: any) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
            {nationalUser || regionalUser || districtUser ? (
              <div className="col-md-2">
                <label className="form-label mb-0">Select district</label>
                <select
                  className="form-control"
                  aria-label="Default select example"
                  onChange={async (e: any) => {
                    setFilterValue(e.target.value);
                    setDistrict(e.target.value);
                    await getElectoralAreasByDistrict(e.target.value);
                  }}
                  value={district}
                >
                  {" "}
                  <option selected>Filter by </option>
                  {districtsData?.map((data: any) => (
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
                onChange={async (e: any) => {
                  setFilterValue(e.target.value);
                  setElectoralArea(e.target.value);

                  await getCommunitiesByElectoralArea(e.target.value);
                }}
                value={electoralArea}
              >
                {" "}
                <option selected> Select Electoral Area </option>
                {electoralAreasData?.map((data: any) => (
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
                onChange={(e: any) => {
                  setFilterValue(e.target.value);
                  setCommunity(e.target.value);
                }}
                value={community}
              >
                {" "}
                <option selected>Filter by </option>
                {communitiesData?.map((data: any) => (
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
            onClick={(e: any) => handleFilter(e)}
          >
            Filter
          </button>
        </div>
      </div>
      <br />
      {/* End Page Title */}
      <section className="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div className="col-lg-12">
            <div className="row">
              {/* Sales Card */}
              <div className="col-xxl-3 col-md-4">
                <div className="card info-card revenue-card">
                  <div className="filter">


                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {/* Sales <span>| Today</span> */}
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-arrow-down-left-square" />
                      </div>
                      <div className="ps-3">
                        <h6>{data?.dashboardData?.baselineCount}  </h6>

                        <span className="text-muted small pt-2 ps-1">BASELINE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xxl-3 col-md-4">
              <div className="card info-card sales-card">
               
                <div className="card-body">
                  <h5 className="card-title">
                    Sales <span>| Today</span>
                  </h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-arrow-counterclockwise
" />
                    </div>
                    <div className="ps-3">
                      <h6> {data?.dashboardData?.reInspectionCount} 
                      </h6>
                     
                      <span className="text-muted small pt-2 ps-1">BASELINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              <div className="col-xxl-3 col-md-4">
                <div className="card info-card customers-card">

                  <div className="card-body">
                    <h5 className="card-title">
                      {/* Sales <span>| Today</span> */}
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-arrow-counterclockwise
" />
                      </div>
                      <div className="ps-3">
                        <h6> {data?.dashboardData?.reInspectionCount}
                        </h6>

                        <span className="text-muted small pt-2 ps-1">REINSPECTION</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-4">
                <div className="card info-card sales-card">
                  <div className="filter">


                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {/* Sales <span>| Today</span> */}
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-arrow-left-right
" />
                      </div>
                      <div className="ps-3">
                        <h6> {data?.dashboardData?.followUpCount}
                        </h6>

                        <span className="text-muted small pt-2 ps-1">FOLLOW-UP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-5">
                <div className="card info-card sales-card">
                  <div className="filter">


                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {/* Sales <span>| Today</span> */}
                    </h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-arrow-left-right
" />
                      </div>
                      <div className="ps-3">
                        <h6>145
                        </h6>

                        <span className="text-muted small pt-2 ps-1">SANITATION REPORTS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
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
              {/* <div class="flex-shrink-0">
                <button type="button" class="btn btn-soft-primary btn-sm">
                  Export Chart
                </button>
              </div> */}
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
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
