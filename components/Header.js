import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  //let ut = Cookies?.get("ut")?.split("??")[1];
  let fullName = Cookies?.get("fullName");
  // let designation = Cookies?.get("designation");
  let userType = Cookies?.get("userType");
  let region = Cookies?.get("region");
  let district = Cookies?.get("district");
  let ul = Cookies?.get("ul");

  let priv = Cookies.get("vrip");


  let includesDashboard = priv.includes("1");
  let includesResData = priv.includes("2");
  let includesEatData = priv.includes("3");
  let includesHealthData = priv.includes("4");
  let includesHospData = priv.includes("5");
  let includesMarketData = priv.includes("6");
  let includesIndustryData = priv.includes("7");
  let includesInstitutionData = priv.includes("8");
  let includesSanitaryData = priv.includes("9");
  let includesReports = priv.includes("10");
  let includesSanitationReport = priv.includes("11");
  let includesNotifications = priv.includes("12");
  let includesSingleSMS = priv.includes("13");
  let includesBulkSMS = priv.includes("14");
  let includesSingleNotification = priv.includes("15");
  let includesBulkNotification = priv.includes("16");
  let includesBulkUploadDistrictData = priv.includes("17");
  let includesBulkUploadElectoralAreaData = priv.includes("18");
  let includesBulkUploadCommunityData = priv.includes("19");
  let includesAddSingleDistrict = priv.includes("20");
  let includesAddSingleElectoralArea = priv.includes("21");
  let includesAddSingleCommunity = priv.includes("22");
  let includesTransferDataOwnership = priv.includes("23");
  let includesUserGuide = priv.includes("24");
  let includesUser = priv.includes("25");
  let includesUserLog = priv.includes("26");
  let includesUserType = priv.includes("27");
  let includesMap = priv.includes("28");

  return (
    <div>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <a href="/dashboard" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="/assets/images/logo-dark.png"
                      alt=""
                      height={17}
                    />
                  </span>
                </a>
                <a href="/dashboard" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="/assets/images/logo-light.png"
                      alt=""
                      height={17}
                    />
                  </span>
                </a>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
            <div className="d-flex align-items-center">
              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button
                  type="button"
                  className="btn"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src="/assets/images/users/user.png"
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        {fullName}
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        {userType}
                      </span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <h6 className="dropdown-header"> {fullName}</h6>
                 {ul==2?<h6 className="dropdown-header"> {region}</h6>:ul==3?<h6 className="dropdown-header"> {district}</h6>:<></>} 

                  <a className="dropdown-item" href="/auth/profile">
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
                    <span className="align-middle">Profile</span>
                  </a>

                  <button
                    className="dropdown-item"
                    onClick={() => {
                      Cookies.remove("r_id")
                      Cookies.remove("d_id")
                      Cookies.remove("vrip")
                      Cookies.remove("ul")
                      Cookies.remove("fullName")
                      Cookies.remove("region")
                      Cookies.remove("district")
                      router.push("/api/v1/auth/logout");
                    }}
                  >
                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />
                    <span className="align-middle" data-key="t-logout">
                      Logout
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <a href="/dashboard" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-dark.png" alt="" height={17} />
            </span>
          </a>
          <a href="/dashboard" className="logo logo-light">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-light.png" alt="" height={17} />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line" />
          </button>
        </div>
        <div id="scrollbar">
          <div className="container-fluid">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title">
                <span data-key="t-menu">Menu</span>
              </li>
              <li className="nav-item" hidden={!includesDashboard}>
                <Link href="/dashboard">
                  <a className="nav-link menu-link">
                    <i className="ri-home-2-line" />
                    <span data-key="t-dashboards">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#data"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLayouts"
                >
                  <i className="ri-apps-2-line" />
                  <span data-key="t-apps">Submitted Data</span>
                </a>
                <div className="collapse menu-dropdown" id="data">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item" hidden={!includesResData}>
                      <a
                        href="#Residential"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="Residential"
                        data-key="t-profile"
                      >
                        Residential
                      </a>
                      <div className="collapse menu-dropdown" id="Residential">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=1&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=1&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item" hidden={!includesEatData}>
                      <a
                        href="#eatery"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="eatery"
                        data-key="t-profile"
                      >
                        Eatery
                      </a>
                      <div className="collapse menu-dropdown" id="eatery">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=2&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=2&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=2">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item" hidden={!includesHealthData}>
                      <a
                        href="#health"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="health"
                        data-key="t-profile"
                      >
                        Health
                      </a>
                      <div className="collapse menu-dropdown" id="health">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=3&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=3&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=3">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item" hidden={!includesHospData}>
                      <a
                        href="#hospitality"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="hospitality"
                        data-key="t-profile"
                      >
                        Hospitality
                      </a>
                      <div className="collapse menu-dropdown" id="hospitality">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=4&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=4&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=4">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item" hidden={!includesInstitutionData}>
                      <a
                        href="#institution"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="institution"
                        data-key="t-profile"
                      >
                        Institution
                      </a>
                      <div className="collapse menu-dropdown" id="institution">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=5&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=5&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=5">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item" hidden={!includesIndustryData}>
                      <a
                        href="#industry"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="industry"
                        data-key="t-profile"
                      >
                        Industry
                      </a>
                      <div className="collapse menu-dropdown" id="industry">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=6&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=6&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=6">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item" hidden={!includesMarketData}>
                      <a
                        href="#market"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="market"
                        data-key="t-profile"
                      >
                        Market
                      </a>
                      <div className="collapse menu-dropdown" id="market">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=7&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=7&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=7">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      className={
                        router.pathname == "/" ? "nav-item active" : "nav-item"
                      }
                      hidden={!includesSanitaryData}
                    >
                      <a
                        href="#sanitary"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sanitary"
                        data-key="t-profile"
                      >
                        Sanitary
                      </a>
                      <div className="collapse menu-dropdown" id="sanitary">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=8&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=0&inspectionFormId=8&page=1">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Unpublished
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/submitted-data/followup?inspectionFormId=8">
                              <a
                                className={
                                  router.pathname == "/"
                                    ? "nav-link active"
                                    : "nav-link"
                                }
                                data-key="t-calendar"
                              >
                                Follow-up
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li className="nav-item" hidden={!includesMap}> */}

              <li className="nav-item" >
                <Link href="/map">
                  <a className="nav-link menu-link">
                    <i className="ri-map-2-line" />
                    <span data-key="t-map">Map</span>
                  </a>
                </Link>
              </li>

              <li className="nav-item" hidden={!includesReports}>
                <a className="nav-link menu-link" href="/report">
                  <i className="ri-line-chart-line" />
                  <span data-key="t-dashboards">Reports</span>
                </a>
              </li>
              <li className="nav-item" hidden={!includesSanitationReport}>
                <Link href="/sanitation-reports">
                  <a className="nav-link menu-link">
                    <i className="ri-bar-chart-box-line" />
                    <span data-key="t-landing">Sanitation Reports</span>
                  </a>
                </Link>
              </li>

              <li className="menu-title">
                <i className="ri-more-fill" />
                <span data-key="t-components">MESSAGES</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#notifications"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ri-notification-2-line" />
                  <span data-key="t-pages">Notifications</span>
                </a>
                <div className="collapse menu-dropdown" id="notifications">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <li
                        className="nav-item"
                        hidden={!includesBulkNotification}
                      >
                        <Link href="/messaging/notification/broadcast">
                          <a className="nav-link"> Broadcast</a>
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        hidden={!includesSingleNotification}
                      >
                        <Link href="/messaging/notification/single">
                          <a className="nav-link"> Single Notification</a>
                        </Link>
                      </li>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarPages"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ri-message-2-line" />
                  <span data-key="t-pages">SMS</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item" hidden={!includesBulkSMS}>
                      <Link href="/messaging/sms/broadcast">
                        <a className="nav-link"> Broadcast</a>
                      </Link>
                    </li>
                    <li className="nav-item" hidden={!includesSingleSMS}>
                      <Link href="/messaging/sms/single">
                        <a className="nav-link"> Single SMS</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-title">
                <i className="ri-more-fill" />
                <span data-key="t-components">SETTINGS</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#settings"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ri-settings-2-line" />
                  <span data-key="t-pages">Setup</span>
                </a>
                <div className="collapse menu-dropdown" id="settings">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="#pd"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="pd"
                        data-key="t-profile"
                      >
                        Primary Data
                      </a>
                      <div className="collapse menu-dropdown" id="pd">
                        <li className="nav-item">
                          <a
                            href="#district"
                            className="nav-link"
                            data-bs-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="district"
                            data-key="t-profile"
                          >
                            District
                          </a>
                          <div className="collapse menu-dropdown" id="district">
                            <ul className="nav nav-sm flex-column">
                              <li
                                className="nav-item"
                                hidden={!includesBulkUploadDistrictData}
                              >
                                <a
                                  href="/primary-data/district/upload"
                                  className="nav-link"
                                  data-key="t-simple-page"
                                >
                                  Upload
                                </a>
                              </li>
                              <li
                                className="nav-item"
                                hidden={!includesAddSingleDistrict}
                              >
                                <a
                                  href="/primary-data/district/add"
                                  className="nav-link"
                                  data-key="t-settings"
                                >
                                  Add
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="/setup/district/bulk-upload-template"
                                  className="nav-link"
                                >
                                  Bulk Upload Template
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#ea"
                            className="nav-link"
                            data-bs-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="sidebeaarProfile"
                            data-key="t-profile"
                          >
                            Electoral Area
                          </a>
                          <div className="collapse menu-dropdown" id="ea">
                            <ul className="nav nav-sm flex-column">
                              <li
                                className="nav-item"
                                hidden={!includesBulkUploadElectoralAreaData}
                              >
                                <a
                                  href="/primary-data/electoral-area/upload"
                                  className="nav-link"
                                  data-key="t-simple-page"
                                >
                                  Upload
                                </a>
                              </li>
                              <li
                                className="nav-item"
                                hidden={!includesAddSingleElectoralArea}
                              >
                                <a
                                  href="/primary-data/electoral-area/add"
                                  className="nav-link"
                                  data-key="t-settings"
                                >
                                  Add
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="/setup/electoral-area/bulk-upload-template"
                                  className="nav-link"
                                >
                                  Bulk Upload Template
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#communities"
                            className="nav-link"
                            data-bs-toggle="collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="communities"
                            data-key="t-profile"
                          >
                            Communities
                          </a>
                          <div
                            className="collapse menu-dropdown"
                            id="communities"
                          >
                            <ul className="nav nav-sm flex-column">
                              <li
                                className="nav-item"
                                hidden={!includesBulkUploadCommunityData}
                              >
                                <a
                                  href="/primary-data/community/upload"
                                  className="nav-link"
                                  data-key="t-simple-page"
                                >
                                  Upload
                                </a>
                              </li>
                              <li
                                className="nav-item"
                                hidden={!includesAddSingleCommunity}
                              >
                                <a
                                  href="/primary-data/community/add"
                                  className="nav-link"
                                  data-key="t-settings"
                                >
                                  Add
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="/setup/community/bulk-upload-template"
                                  className="nav-link"
                                >
                                  Bulk Upload Template
                                </a>
                              </li>
                            </ul>
                          </div>
                          <li className="nav-item">
                            <a href="/primary-data" className="nav-link">
                              Other data
                            </a>
                          </li>
                        </li>
                      </div>
                      <li
                        className="nav-item"
                        hidden={!includesTransferDataOwnership}
                      >
                        <a href="/setup/assign-data" className="nav-link">
                          Transfer Data Ownership
                        </a>
                      </li>
                      <li className="nav-item" hidden={!includesUserGuide}>
                        <Link href="/setup/user-guides">
                          <a className="nav-link"> User Guide</a>
                        </Link>
                      </li>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#us"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="us"
                >
                  <i className="ri-apps-2-line" />
                  <span data-key="t-apps">User Management</span>
                </a>
                <div className="collapse menu-dropdown" id="us">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item" hidden={!includesUser}>
                      <Link href="/account/user?page=1">
                        <a className="nav-link menu-link">
                          <span data-key="t-widgets">Users</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item" hidden={!includesUserLog}>
                      <Link href="/auth/logs">
                        <a className="nav-link menu-link">
                          <span data-key="t-widgets">User Logs</span>
                        </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link href="/permission/page">
                        <a className="nav-link menu-link">
                          <span data-key="t-widgets">Pages</span>
                        </a>
                      </Link>
                    </li> */}
                    <li className="nav-item" hidden={!includesUserType}>
                      <Link href="/permission/user-type">
                        <a className="nav-link menu-link">
                          <span data-key="t-widgets">User Type</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="vertical-overlay" />
    </div>
  );
};

export default Header;
