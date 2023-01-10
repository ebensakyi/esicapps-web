import Link from "next/link";
import Cookies from "js-cookie";

const Header = () => {
  let cookie = Cookies.get("token") 

  console.log("COOKIE ",cookie);

  return (
    <div>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box horizontal-logo">
                <a href="index.html" className="logo logo-dark">
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
                <a href="index.html" className="logo logo-light">
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
              {/* App Search*/}
            </div>
            <div className="d-flex align-items-center">
              {/* <div className="dropdown d-md-none topbar-head-dropdown header-item">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-search fs-22" />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient`s username"
                        />
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}

              {/* <div className="ms-1 header-item d-none d-sm-flex">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen fs-22" />
                </button>
              </div> */}
              {/* <div className="ms-1 header-item d-none d-sm-flex">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                >
                  <i className="bx bx-moon fs-22" />
                </button>
              </div> */}

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
                        ESICApps User
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        Administrator
                      </span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <h6 className="dropdown-header">Welcome Admin!</h6>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Profile</span>
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
                    <span className="align-middle">Messages</span>
                  </a>
                  {/* <a className="dropdown-item" href="apps-tasks-kanban.html">
                    <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" />
                    <span className="align-middle">Taskboard</span>
                  </a>
                  <a className="dropdown-item" href="pages-faqs.html">
                    <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Help</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="pages-profile.html">
                    <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">
                      Balance : <b>$5971.67</b>
                    </span>
                  </a> */}
                  {/* <a
                    className="dropdown-item"
                    href="pages-profile-settings.html"
                  >
                    <span className="badge bg-soft-success text-success mt-1 float-end">
                      New
                    </span>
                    <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Settings</span>
                  </a>
                  <a
                    className="dropdown-item"
                    href="auth-lockscreen-basic.html"
                  >
                    <i className="mdi mdi-lock text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Lock screen</span>
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
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img src="/assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/logo-dark.png" alt="" height={17} />
            </span>
          </a>
          {/* Light Logo*/}
          <a href="index.html" className="logo logo-light">
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
                {/* <div className="collapse menu-dropdown" id="sidebarDashboards">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="dashboard-analytics.html"
                        className="nav-link"
                        data-key="t-analytics"
                      >
                        National{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="dashboard-crm.html"
                        className="nav-link"
                        data-key="t-crm"
                      >
                        {" "}
                        Regional{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="index.html"
                        className="nav-link"
                        data-key="t-ecommerce"
                      >
                        {" "}
                        MMDA{" "}
                      </a>
                    </li>
                    {/* <li className="nav-item">
                  <a
                    href="dashboard-crypto.html"
                    className="nav-link"
                    data-key="t-crypto"
                  >
                    {" "}
                    Crypto
                  </a>
                </li> 
                <li className="nav-item">
                  <a
                    href="dashboard-projects.html"
                    className="nav-link"
                    data-key="t-projects"
                  >
                    Projects
                  </a>
                </li>*
                  </ul>
                </div> */}
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
                  <span data-key="t-apps">Data</span>
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
                            <Link href="/data/residential?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/residential?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
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
                            <Link href="/data/eatery?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/eatery?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
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
                            <Link href="/data/hospitality?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/hospitality?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
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
                            <Link href="/data/health?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/health?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
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
                            <Link href="/data/institution?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/institution?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
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
                            <Link href="/data/industry?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/industry?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
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
                            <Link href="/data/market?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/market?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
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
                            <Link href="/data/sanitary?published=1">
                              <a className="nav-link" data-key="t-calendar">
                                Published
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/data/sanitary?published=0">
                              <a className="nav-link" data-key="t-calendar">
                                Unpublished
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* <li className="nav-item">
                      <Link href="/data/residential">
                        <a className="nav-link" data-key="t-calendar">
                          Residential
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/eatery">
                        <a className="nav-link" data-key="t-chat">
                          Eatery
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/hospitality">
                        <a className="nav-link" data-key="t-mailbox">
                          Hospitality
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/health">
                        <a className="nav-link" data-key="t-mailbox">
                          Health
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/institution">
                        <a className="nav-link" data-key="t-mailbox">
                          Institution
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/industry">
                        <a className="nav-link" data-key="t-mailbox">
                          Industry
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/market">
                        <a className="nav-link" data-key="t-mailbox">
                          Market
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/data/sanitary">
                        <a className="nav-link" data-key="t-mailbox">
                          Sanitary
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li className="nav-item">
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
                      <a
                        href="layouts-horizontal.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-horizontal"
                      >
                        National
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="layouts-detached.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-detached"
                      >
                        Regional
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="layouts-two-column.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-two-column"
                      >
                        MMDAs
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item">
                  <Link href="/map">
                    <a className="nav-link menu-link">
                      <i className="ri-map-2-line" />{" "}
                      <span data-key="t-landing">Map</span>
                      {/* <span
                      className="badge badge-pill bg-success"
                      data-key="t-new"
                    >
                      New
                    </span> */}
                    </a>
                  </Link>
                </li>

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
              </li>{" "}
              {/* end Dashboard Menu */}
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-pages">Accounts</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#accounts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAuth"
                >
                  <i className="ri-account-circle-line" />{" "}
                  <span data-key="t-authentication">Users</span>
                </a>
                <div className="collapse menu-dropdown" id="accounts">
                  <ul className="nav nav-sm flex-column">
                    {}
                    <li className="nav-item">

                      <Link href="/user/national">
                        <a
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          // role="button"
                          // aria-expanded="false"
                          // aria-controls="sidebarSignIn"
                          // data-key="t-signin"
                        >
                          {" "}
                          Add National User
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/user/regional">
                        <a
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          // role="button"
                          // aria-expanded="false"
                          // aria-controls="sidebarSignIn"
                          // data-key="t-signin"
                        >
                          {" "}
                          Add Regional User
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/user/district">
                        <a
                          href="/user/district"
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          // role="button"
                          // aria-expanded="false"
                          // aria-controls="sidebarSignIn"
                          // data-key="t-signin"
                        >
                          {" "}
                          Add MMDA User
                        </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        href="#sidebarSignIn"
                        className="nav-link"
                        // data-bs-toggle="collapse"
                        // role="button"
                        // aria-expanded="false"
                        // aria-controls="sidebarSignIn"
                        // data-key="t-signin"
                      >
                        {" "}
                        Manage
                      </a>
                    </li> */}
                  </ul>
                </div>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#roles"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ri-pages-line" />{" "}
                  <span data-key="t-pages">User Type</span>
                </a>
                <div className="collapse menu-dropdown" id="roles">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="/account/user-type"
                        className="nav-link"
                        // data-bs-toggle="collapse"
                        // role="button"
                        // aria-expanded="false"
                        // aria-controls="sidebarSignIn"
                        // data-key="t-signin"
                      >
                        {" "}
                        Add
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarSignIn"
                        className="nav-link"
                        // data-bs-toggle="collapse"
                        // role="button"
                        // aria-expanded="false"
                        // aria-controls="sidebarSignIn"
                        // data-key="t-signin"
                      >
                        {" "}
                        List
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </li> */}
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-components">MESSAGES</span>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#messages"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ri-mail-line" />{" "}
                  <span data-key="t-pages">Email</span>
                </a>
                <div className="collapse menu-dropdown" id="messages">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
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
                        Compose
                      </a>
                    </li>
                    <li className="nav-item">
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
                        Inbox
                      </a>
                    </li>
                    <li className="nav-item">
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
                    </li>
                  </ul>
                </div>
              </li> */}
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
                      <Link href="/messaging/notification">
                        <a
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          // role="button"
                          // aria-expanded="false"
                          // aria-controls="sidebarSignIn"
                          // data-key="t-signin"
                        >
                          {" "}
                          Compose
                        </a>
                      </Link>
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
                        Inbox
                      </a>
                    </li>
                    <li className="nav-item">
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
                    </li> */}
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
                      <Link href="/messaging/sms">
                        <a
                          className="nav-link"
                          // data-bs-toggle="collapse"
                          // role="button"
                          // aria-expanded="false"
                          // aria-controls="sidebarSignIn"
                          // data-key="t-signin"
                        >
                          {" "}
                          Compose
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
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
                        href="/auth/password-reset-request"
                        className="nav-link"
                      >
                        {" "}
                        Password Reset Request
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/primary-data" className="nav-link">
                        {" "}
                        Primary data
                      </a>
                    </li>
                    <li className="nav-item">
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
                        Manage
                      </a>
                    </li>  */}
                  </ul>
                </div>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link menu-link" href="widgets.html">
                  <i className=" ri-shield-user-line" />{" "}
                  <span data-key="t-widgets">Profile</span>
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link menu-link" href="/auth/logs">
                  <i className="ri-honour-line" />{" "}
                  <span data-key="t-widgets">Logs</span>
                </a>
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
