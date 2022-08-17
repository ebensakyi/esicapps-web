import Link from "next/link";

const Header = () => {
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
                    <img src="assets/images/logo-sm.png" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height={17} />
                  </span>
                </a>
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="assets/images/logo-light.png"
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
              <form className="app-search d-none d-md-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    autoComplete="off"
                    id="search-options"
                    defaultValue=""
                  />
                  <span className="mdi mdi-magnify search-widget-icon" />
                  <span
                    className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                    id="search-close-options"
                  />
                </div>
                <div
                  className="dropdown-menu dropdown-menu-lg"
                  id="search-dropdown"
                >
                  <div data-simplebar="" style={{ maxHeight: 320 }}>
                    {/* item*/}
                    <div className="dropdown-header">
                      <h6 className="text-overflow text-muted mb-0 text-uppercase">
                        Recent Searches
                      </h6>
                    </div>
                    <div className="dropdown-item bg-transparent text-wrap">
                      <a
                        href="index.html"
                        className="btn btn-soft-secondary btn-sm btn-rounded"
                      >
                        how to setup <i className="mdi mdi-magnify ms-1" />
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-soft-secondary btn-sm btn-rounded"
                      >
                        buttons
                        <i className="mdi mdi-magnify ms-1" />
                      </a>
                    </div>
                    {/* item*/}
                    <div className="dropdown-header mt-2">
                      <h6 className="text-overflow text-muted mb-1 text-uppercase">
                        Pages
                      </h6>
                    </div>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                      <span>Analytics Dashboard</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                      <span>Help Center</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
                      <span>My account settings</span>
                    </a>
                    {/* item*/}
                    <div className="dropdown-header mt-2">
                      <h6 className="text-overflow text-muted mb-2 text-uppercase">
                        Members
                      </h6>
                    </div>
                    <div className="notification-list">
                      {/* item */}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item py-2"
                      >
                        <div className="d-flex">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">Angela Bernier</h6>
                            <span className="fs-11 mb-0 text-muted">
                              Manager
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* item */}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item py-2"
                      >
                        <div className="d-flex">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">David Grasso</h6>
                            <span className="fs-11 mb-0 text-muted">
                              Web Designer
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* item */}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item py-2"
                      >
                        <div className="d-flex">
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">Mike Bunch</h6>
                            <span className="fs-11 mb-0 text-muted">
                              React Developer
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-center pt-3 pb-1">
                    <a
                      href="pages-search-results.html"
                      className="btn btn-primary btn-sm"
                    >
                      View All Results
                      <i className="ri-arrow-right-line ms-1" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center">
              <div className="dropdown d-md-none topbar-head-dropdown header-item">
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
                          aria-label="Recipient's username"
                        />
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="dropdown topbar-head-dropdown ms-1 header-item">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-category-alt fs-22" />
                </button>
                <div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
                  <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="btn btn-sm btn-soft-info">
                          {" "}
                          View All Apps
                          <i className="ri-arrow-right-s-line align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#!">
                          <img
                            src="assets/images/brands/github.png"
                            alt="Github"
                          />
                          <span>GitHub</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#!">
                          <img
                            src="assets/images/brands/bitbucket.png"
                            alt="bitbucket"
                          />
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#!">
                          <img
                            src="assets/images/brands/dribbble.png"
                            alt="dribbble"
                          />
                          <span>Dribbble</span>
                        </a>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#!">
                          <img
                            src="assets/images/brands/dropbox.png"
                            alt="dropbox"
                          />
                          <span>Dropbox</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#!">
                          <img
                            src="assets/images/brands/mail_chimp.png"
                            alt="mail_chimp"
                          />
                          <span>Mail Chimp</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#!">
                          <img
                            src="assets/images/brands/slack.png"
                            alt="slack"
                          />
                          <span>Slack</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ms-1 header-item d-none d-sm-flex">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen fs-22" />
                </button>
              </div>
              <div className="ms-1 header-item d-none d-sm-flex">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                >
                  <i className="bx bx-moon fs-22" />
                </button>
              </div>
              <div className="dropdown topbar-head-dropdown ms-1 header-item">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell fs-22" />
                  <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                    3<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="dropdown-head bg-primary bg-pattern rounded-top">
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fs-16 fw-semibold text-white">
                            {" "}
                            Notifications{" "}
                          </h6>
                        </div>
                        <div className="col-auto dropdown-tabs">
                          <span className="badge badge-soft-light fs-13">
                            {" "}
                            4 New
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pt-2">
                      <ul
                        className="nav nav-tabs dropdown-tabs nav-tabs-custom"
                        data-dropdown-tabs="true"
                        id="notificationItemsTab"
                        role="tablist"
                      >
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#all-noti-tab"
                            role="tab"
                            aria-selected="true"
                          >
                            All (4)
                          </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#messages-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Messages
                          </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#alerts-tab"
                            role="tab"
                            aria-selected="false"
                          >
                            Alerts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-content" id="notificationItemsTabContent">
                    <div
                      className="tab-pane fade show active py-2 ps-2"
                      id="all-noti-tab"
                      role="tabpanel"
                    >
                      <div
                        data-simplebar=""
                        style={{ maxHeight: 300 }}
                        className="pe-2"
                      >
                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                          <div className="d-flex">
                            <div className="avatar-xs me-3">
                              <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                <i className="bx bx-badge-check" />
                              </span>
                            </div>
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-2 lh-base">
                                  Your <b>Elite</b> author Graphic Optimization{" "}
                                  <span className="text-secondary">reward</span>
                                  is ready!
                                </h6>
                              </a>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> Just
                                  30 sec ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="all-notification-check01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check01"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item position-relative active">
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Angela Bernier
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  Answered to your comment on the cash flow
                                  forecast's graph 🔔.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 48 min
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="all-notification-check02"
                                  defaultChecked=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check02"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                          <div className="d-flex">
                            <div className="avatar-xs me-3">
                              <span className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                <i className="bx bx-message-square-dots" />
                              </span>
                            </div>
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-2 fs-13 lh-base">
                                  You have received{" "}
                                  <b className="text-success">20</b> new
                                  messages in the conversation
                                </h6>
                              </a>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 2 hrs
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="all-notification-check03"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check03"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Maureen Gibson
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  We talked about a project on linkedin.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 4 hrs
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="all-notification-check04"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="all-notification-check04"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-3 text-center">
                          <button
                            type="button"
                            className="btn btn-soft-success waves-effect waves-light"
                          >
                            View All Notifications{" "}
                            <i className="ri-arrow-right-line align-middle" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade py-2 ps-2"
                      id="messages-tab"
                      role="tabpanel"
                      aria-labelledby="messages-tab"
                    >
                      <div
                        data-simplebar=""
                        style={{ maxHeight: 300 }}
                        className="pe-2"
                      >
                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  James Lemire
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  We talked about a project on linkedin.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 30 min
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="messages-notification-check01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check01"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Angela Bernier
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  Answered to your comment on the cash flow
                                  forecast's graph 🔔.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 2 hrs
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="messages-notification-check02"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check02"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Kenneth Brown
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  Mentionned you in his comment on 📃 invoice
                                  #12501.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 10 hrs
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="messages-notification-check03"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check03"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-reset notification-item d-block dropdown-item">
                          <div className="d-flex">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              className="me-3 rounded-circle avatar-xs"
                              alt="user-pic"
                            />
                            <div className="flex-1">
                              <a href="#!" className="stretched-link">
                                <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                  Maureen Gibson
                                </h6>
                              </a>
                              <div className="fs-13 text-muted">
                                <p className="mb-1">
                                  We talked about a project on linkedin.
                                </p>
                              </div>
                              <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                <span>
                                  <i className="mdi mdi-clock-outline" /> 3 days
                                  ago
                                </span>
                              </p>
                            </div>
                            <div className="px-2 fs-15">
                              <div className="form-check notification-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="messages-notification-check04"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="messages-notification-check04"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-3 text-center">
                          <button
                            type="button"
                            className="btn btn-soft-success waves-effect waves-light"
                          >
                            View All Messages{" "}
                            <i className="ri-arrow-right-line align-middle" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade p-4"
                      id="alerts-tab"
                      role="tabpanel"
                      aria-labelledby="alerts-tab"
                    >
                      <div className="w-25 w-sm-50 pt-3 mx-auto">
                        <img
                          src="assets/images/svg/bell.svg"
                          className="img-fluid"
                          alt="user-pic"
                        />
                      </div>
                      <div className="text-center pb-5 mt-2">
                        <h6 className="fs-18 fw-semibold lh-base">
                          Hey! You have no any notifications
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      src="assets/images/users/avatar-1.jpg"
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        Anna Adame
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        Founder
                      </span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <h6 className="dropdown-header">Welcome Anna!</h6>
                  <a className="dropdown-item" href="pages-profile.html">
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Profile</span>
                  </a>
                  <a className="dropdown-item" href="apps-chat.html">
                    <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
                    <span className="align-middle">Messages</span>
                  </a>
                  <a className="dropdown-item" href="apps-tasks-kanban.html">
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
                  </a>
                  <a
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
                  </a>
                  <a className="dropdown-item" href="auth-logout-basic.html">
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
              <img src="assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-dark.png" alt="" height={17} />
            </span>
          </a>
          {/* Light Logo*/}
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height={17} />
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
                <a
                  className="nav-link menu-link"
                  href="#sidebarDashboards"
                 
                >
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
                  href="#sidebarApps"
               
                >
                  <i className="ri-apps-2-line" />{" "}
                  <span data-key="t-apps">Data</span>
                </a>
                {/* <div className="collapse menu-dropdown" id="sidebarApps">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="apps-calendar.html"
                        className="nav-link"
                        data-key="t-calendar"
                      >
                        {" "}
                        National
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="apps-chat.html"
                        className="nav-link"
                        data-key="t-chat"
                      >
                        {" "}
                        Regional{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="apps-mailbox.html"
                        className="nav-link"
                        data-key="t-mailbox"
                      >
                        {" "}
                        MMDA{" "}
                      </a>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarLayouts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLayouts"
                >
                  <i className="ri-layout-3-line" />{" "}
                  <span data-key="t-layouts">Reports</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarLayouts">
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
                  <a
                    className="nav-link menu-link"
                    target="_blank"
                    href="landing.html"
                  >
                    <i className="ri-map-2-line" />{" "}
                    <span data-key="t-landing">Map</span>
                    <span
                      className="badge badge-pill bg-success"
                      data-key="t-new"
                    >
                      New
                    </span>
                  </a>
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
                  href="#sidebarAuth"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAuth"
                >
                  <i className="ri-account-circle-line" />{" "}
                  <span data-key="t-authentication">Users</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarAuth">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="/admin/user"
                        className="nav-link"
                        // data-bs-toggle="collapse"
                        // role="button"
                        // aria-expanded="false"
                        // aria-controls="sidebarSignIn"
                        // data-key="t-signin"
                      >
                        {" "}
                        Add/List
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
                        Manage
                      </a>
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
                  <i className="ri-pages-line" />{" "}
                  <span data-key="t-pages">Roles</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="/admin/user/user-type"
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
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignIn"
                        data-key="t-signin"
                      >
                        {" "}
                        List
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
              </li>
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-components">MESSAGES</span>
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
                  <i className="ri-mail-line" />{" "}
                  <span data-key="t-pages">Email</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
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
                  <i className="ri-notification-2-line" />{" "}
                  <span data-key="t-pages">Notifications</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
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
              </li>
              <li className="menu-title">
                <i className="ri-more-fill" />{" "}
                <span data-key="t-components">SETTINGS</span>
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
                  <i className="ri-settings-2-line" />{" "}
                  <span data-key="t-pages">Setup</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
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
                        Regions
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
                        MMDAs
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
              </li>
              {/* <li className="nav-item">
                <a className="nav-link menu-link" href="widgets.html">
                  <i className=" ri-shield-user-line" />{" "}
                  <span data-key="t-widgets">Profile</span>
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link menu-link" href="widgets.html">
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
