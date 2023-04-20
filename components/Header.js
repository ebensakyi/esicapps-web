import Link from "next/link";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  let ut = Cookies.get("ut").split("??")[1];
  let fullName = Cookies.get("fullName");
  let designation = Cookies.get("designation");
  let userType = Cookies.get("userType");

  return (
    <div>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
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
                // onClick={(e) => {
                //   setIsOpen(true);
                //   if (isOpen) {
                //     document.body.classList.remove("vertical-sidebar-enable");
                //   } else {
                //     document.body.classList.add("vertical-sidebar-enable");
                //   }

                // }}
              >
                <span className="hamburger-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
              {/* App Search*/}
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
                  {/* item*/}
                  <h6 className="dropdown-header"> {fullName}</h6>
                  <a className="dropdown-item" href="/auth/profile">
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Profile</span>
                  </a>
                  {/* <a className="dropdown-item" href="#">
                    <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
                    <span className="align-middle">Messages</span>
                  </a> */}

                  <a className="dropdown-item" href="/auth/login">
                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle" data-key="t-logout">
                      Logout
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ========== App Menu ========== */}
      <div className="app-menu navbar-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          {/* Dark Logo*/}
          <a href="/dashboard" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-dark.png" alt="" height={17} />
            </span>
          </a>
          {/* Light Logo*/}
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
              <li className="nav-item">
                <a className="nav-link menu-link" href="/dashboard">
                  <i className="ri-home-2-line" />{" "}
                  <span data-key="t-dashboards">Dashboard</span>
                </a>
              </li>{" "}
              {/* end Dashboard Menu */}
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
                    <li className="nav-item">
                      <a
                        href="#Residential"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="Residential"
                        data-key="t-profile"
                      >
                        {" "}
                        Residential
                      </a>
                      <div className="collapse menu-dropdown" id="Residential">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=1">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=1">
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

                    <li className="nav-item">
                      <a
                        href="#eatery"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="eatery"
                        data-key="t-profile"
                      >
                        {" "}
                        Eatery
                      </a>
                      <div className="collapse menu-dropdown" id="eatery">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=2">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=2">
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
                    <li className="nav-item">
                      <a
                        href="#health"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="health"
                        data-key="t-profile"
                      >
                        {" "}
                        Health
                      </a>
                      <div className="collapse menu-dropdown" id="health">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=3">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=3">
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
                          </li>{" "}
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
                    <li className="nav-item">
                      <a
                        href="#hospitality"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="hospitality"
                        data-key="t-profile"
                      >
                        {" "}
                        Hospitality
                      </a>
                      <div className="collapse menu-dropdown" id="hospitality">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=4">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=4">
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
                          </li>{" "}
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

                    <li className="nav-item">
                      <a
                        href="#institution"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="institution"
                        data-key="t-profile"
                      >
                        {" "}
                        Institution
                      </a>
                      <div className="collapse menu-dropdown" id="institution">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=5">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=5">
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
                    <li className="nav-item">
                      <a
                        href="#industry"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="industry"
                        data-key="t-profile"
                      >
                        {" "}
                        Industry
                      </a>
                      <div className="collapse menu-dropdown" id="industry">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=6">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=6">
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
                    <li className="nav-item">
                      <a
                        href="#market"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="market"
                        data-key="t-profile"
                      >
                        {" "}
                        Market
                      </a>
                      <div className="collapse menu-dropdown" id="market">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=7">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=7">
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
                          </li>{" "}
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
                        {" "}
                        Sanitary
                      </a>
                      <div className="collapse menu-dropdown" id="sanitary">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <Link href="/submitted-data/data?published=1&inspectionFormId=8">
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
                            <Link href="/submitted-data/data?published=0&inspectionFormId=8">
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
              {/* <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#report"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLayouts"
                >
                  <i className="ri-layout-3-line" />{" "}
                  <span data-key="t-layouts">Reports</span>
                </a>
                <div className="collapse menu-dropdown" id="report">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <Link href="/report/national">
                        <a className="nav-link" data-key="t-calendar">
                          National
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/report/regional">
                        <a className="nav-link" data-key="t-calendar">
                          Regional
                        </a>
                      </Link>
                    </li>{" "}
                    <li className="nav-item">
                      <Link href="/report/mmda">
                        <a className="nav-link" data-key="t-calendar">
                          MMDAs
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li className="nav-item">
                <a className="nav-link menu-link" href="/report">
                  <i className="ri-line-chart-line" />{" "}
                  <span data-key="t-dashboards">Reports</span>
                </a>
              </li>{" "}
              <li className="nav-item">
                <Link href="/sanitation-reports">
                  <a className="nav-link menu-link">
                    <i className="ri-bar-chart-box-line" />{" "}
                    <span data-key="t-landing">Sanitation Reports</span>
                    {/* <span
                        className="badge badge-pill bg-success"
                        data-key="t-new"
                      >
                        New
                      </span> */}
                  </a>
                </Link>
              </li>
              {/* end Dashboard Menu */}
              {/* <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-pages">Accounts</span>
              </li> */}
              {ut == 1 ? (
                <>
                  <li className="menu-title">
                    <i className="ri-more-fill" />{" "}
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
                      <i className="ri-notification-2-line" />{" "}
                      <span data-key="t-pages">Notifications</span>
                    </a>
                    <div className="collapse menu-dropdown" id="notifications">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <li className="nav-item">
                            <Link href="/messaging/notification/broadcast">
                              <a className="nav-link"> Broadcast</a>
                            </Link>
                          </li>
                          <li className="nav-item">
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
                      <i className="ri-message-2-line" />{" "}
                      <span data-key="t-pages">SMS</span>
                    </a>
                    <div className="collapse menu-dropdown" id="sidebarPages">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <Link href="/messaging/sms/broadcast">
                            <a className="nav-link"> Broadcast</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/messaging/sms/single">
                            <a className="nav-link"> Single SMS</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
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
                  <i className="ri-settings-2-line" />{" "}
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
                        {" "}
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
                            {" "}
                            District
                          </a>
                          <div className="collapse menu-dropdown" id="district">
                            <ul className="nav nav-sm flex-column">
                              <li className="nav-item">
                                <a
                                  href="/primary-data/district/upload"
                                  className="nav-link"
                                  data-key="t-simple-page"
                                >
                                  Upload
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="/primary-data/district/add"
                                  className="nav-link"
                                  data-key="t-settings"
                                >
                                  {" "}
                                  Add{" "}
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
                            {" "}
                            Electoral Area
                          </a>
                          <div className="collapse menu-dropdown" id="ea">
                            <ul className="nav nav-sm flex-column">
                              <li className="nav-item">
                                <a
                                  href="/primary-data/electoral-area/upload"
                                  className="nav-link"
                                  data-key="t-simple-page"
                                >
                                  Upload
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="/primary-data/electoral-area/add"
                                  className="nav-link"
                                  data-key="t-settings"
                                >
                                  {" "}
                                  Add{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>{" "}
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
                            {" "}
                            Communities
                          </a>
                          <div
                            className="collapse menu-dropdown"
                            id="communities"
                          >
                            <ul className="nav nav-sm flex-column">
                              <li className="nav-item">
                                <a
                                  href="/primary-data/community/upload"
                                  className="nav-link"
                                  data-key="t-simple-page"
                                >
                                  Upload
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="/primary-data/community/add"
                                  className="nav-link"
                                  data-key="t-settings"
                                >
                                  {" "}
                                  Add{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <li className="nav-item">
                            <a href="/primary-data" className="nav-link">
                              {" "}
                              Other data
                            </a>
                          </li>
                        </li>
                      </div>{" "}
                      <li className="nav-item">
                        <a href="/setup/assign-data" className="nav-link">
                          {" "}
                          Transfer Data Ownership
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link href="/setup/user-guides">
                          <a className="nav-link"> User Guide</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          href="/setup/bulk-upload-templates"
                          className="nav-link"
                        >
                          {" "}
                          Bulk Upload Templates
                        </a>
                      </li>
                    </li>

                    {/* <li className="nav-item">
                      <a
                        href="#sidebarSignIn"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignIn"
                        data-key="t-signin"
                      >
                        {" "}
                        Permission
                      </a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a
                        href="#sidebarSignIn"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignIn"
                        data-key="t-signin"
                      >
                        {" "}
                        Manage
                      </a>
                    </li>  */}
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
                        <li className="nav-item">
                          <Link href="/account/user">
                            <a className="nav-link menu-link">
                              <i className=" ri-shield-user-line" />{" "}
                              <span data-key="t-widgets">Users</span>
                            </a>
                          </Link>
                        </li>{" "}
                        <li className="nav-item">
                          <a className="nav-link menu-link" href="/auth/logs">
                            <i className="ri-honour-line" />{" "}
                            <span data-key="t-widgets">Logs</span>
                          </a>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            href="/auth/password-reset-request"
                            className="nav-link"
                          >
                            {" "}
                            Password Reset
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </li>
              
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>
      {/* Left Sidebar End */}
      {/* Vertical Overlay*/}
      <div className="vertical-overlay" />
    </div>
  );
};

export default Header;
