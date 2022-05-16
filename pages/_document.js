import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg">
            <Head>
                <link href="/assets/libs/jsvectormap/css/jsvectormap.min.css" rel="stylesheet" type="text/css" />

                <link href="/assets/libs/swiper/swiper-bundle.min.css" rel="stylesheet" type="text/css" />

                <script src="/assets/js/layout.js"></script>
                <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
                <link href="/assets/css/app.min.css" rel="stylesheet" type="text/css" />
                <link href="/assets/css/custom.min.css" rel="stylesheet" type="text/css" />


            </Head>
            <body>

                <Main />

                <NextScript />
                <>
                    {/*start back-to-top*/}
                    <button
                        onclick="topFunction()"
                        className="btn btn-danger btn-icon"
                        id="back-to-top"
                    >
                        <i className="ri-arrow-up-line" />
                    </button>
                    {/*end back-to-top*/}
                    <div className="customizer-setting d-none d-md-block">
                        <div
                            className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#theme-settings-offcanvas"
                            aria-controls="theme-settings-offcanvas"
                        >
                            <i className="mdi mdi-spin mdi-cog-outline fs-22" />
                        </div>
                    </div>
                    {/* Theme Settings */}
                    <div
                        className="offcanvas offcanvas-end border-0"
                        tabIndex={-1}
                        id="theme-settings-offcanvas"
                    >
                        <div className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
                            <h5 className="m-0 me-2 text-white">Theme Customizer</h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white ms-auto"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body p-0">
                            <div data-simplebar="" className="h-100">
                                <div className="p-4">
                                    <h6 className="mb-0 fw-semibold text-uppercase">Layout</h6>
                                    <p className="text-muted">Choose your layout</p>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-check card-radio">
                                                <input
                                                    id="customizer-layout01"
                                                    name="data-layout"
                                                    type="radio"
                                                    defaultValue="vertical"
                                                    className="form-check-input"
                                                />
                                                <label
                                                    className="form-check-label p-0 avatar-md w-100"
                                                    htmlFor="customizer-layout01"
                                                >
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1" />
                                                                <span className="bg-light d-block p-1 mt-auto" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Vertical</h5>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check card-radio">
                                                <input
                                                    id="customizer-layout02"
                                                    name="data-layout"
                                                    type="radio"
                                                    defaultValue="horizontal"
                                                    className="form-check-input"
                                                />
                                                <label
                                                    className="form-check-label p-0 avatar-md w-100"
                                                    htmlFor="customizer-layout02"
                                                >
                                                    <span className="d-flex h-100 flex-column gap-1">
                                                        <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                                            <span className="d-block p-1 bg-soft-primary rounded me-1" />
                                                            <span className="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto" />
                                                            <span className="d-block p-1 pb-0 px-2 bg-soft-primary" />
                                                        </span>
                                                        <span className="bg-light d-block p-1" />
                                                        <span className="bg-light d-block p-1 mt-auto" />
                                                    </span>
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check card-radio">
                                                <input
                                                    id="customizer-layout03"
                                                    name="data-layout"
                                                    type="radio"
                                                    defaultValue="twocolumn"
                                                    className="form-check-input"
                                                />
                                                <label
                                                    className="form-check-label p-0 avatar-md w-100"
                                                    htmlFor="customizer-layout03"
                                                >
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                <span className="d-block p-1 bg-soft-primary mb-2" />
                                                                <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                            </span>
                                                        </span>
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1" />
                                                                <span className="bg-light d-block p-1 mt-auto" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Two Column</h5>
                                        </div>
                                        {/* end col */}
                                    </div>
                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Color Scheme</h6>
                                    <p className="text-muted">Choose Light or Dark Scheme.</p>
                                    <div className="colorscheme-cardradio">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-check card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-mode"
                                                        id="layout-mode-light"
                                                        defaultValue="light"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="layout-mode-light"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Light</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check card-radio dark">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-mode"
                                                        id="layout-mode-dark"
                                                        defaultValue="dark"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100 bg-dark"
                                                        htmlFor="layout-mode-dark"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-soft-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-soft-light d-block p-1" />
                                                                    <span className="bg-soft-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Dark</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="layout-width">
                                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">
                                            Layout Width
                                        </h6>
                                        <p className="text-muted">Choose Fluid or Boxed layout.</p>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-check card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-width"
                                                        id="layout-width-fluid"
                                                        defaultValue="fluid"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="layout-width-fluid"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Fluid</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-width"
                                                        id="layout-width-boxed"
                                                        defaultValue="boxed"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100 px-2"
                                                        htmlFor="layout-width-boxed"
                                                    >
                                                        <span className="d-flex gap-1 h-100 border-start border-end">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Boxed</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="layout-position">
                                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">
                                            Layout Position
                                        </h6>
                                        <p className="text-muted">
                                            Choose Fixed or Scrollable Layout Position.
                                        </p>
                                        <div className="btn-group radio" role="group">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="data-layout-position"
                                                id="layout-position-fixed"
                                                defaultValue="fixed"
                                            />
                                            <label
                                                className="btn btn-light w-sm"
                                                htmlFor="layout-position-fixed"
                                            >
                                                Fixed
                                            </label>
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="data-layout-position"
                                                id="layout-position-scrollable"
                                                defaultValue="scrollable"
                                            />
                                            <label
                                                className="btn btn-light w-sm ms-0"
                                                htmlFor="layout-position-scrollable"
                                            >
                                                Scrollable
                                            </label>
                                        </div>
                                    </div>
                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Topbar Color</h6>
                                    <p className="text-muted">Choose Light or Dark Topbar Color.</p>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-check card-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="data-topbar"
                                                    id="topbar-color-light"
                                                    defaultValue="light"
                                                />
                                                <label
                                                    className="form-check-label p-0 avatar-md w-100"
                                                    htmlFor="topbar-color-light"
                                                >
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-light d-block p-1" />
                                                                <span className="bg-light d-block p-1 mt-auto" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Light</h5>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-check card-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="data-topbar"
                                                    id="topbar-color-dark"
                                                    defaultValue="dark"
                                                />
                                                <label
                                                    className="form-check-label p-0 avatar-md w-100"
                                                    htmlFor="topbar-color-dark"
                                                >
                                                    <span className="d-flex gap-1 h-100">
                                                        <span className="flex-shrink-0">
                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                            </span>
                                                        </span>
                                                        <span className="flex-grow-1">
                                                            <span className="d-flex h-100 flex-column">
                                                                <span className="bg-primary d-block p-1" />
                                                                <span className="bg-light d-block p-1 mt-auto" />
                                                            </span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <h5 className="fs-13 text-center mt-2">Dark</h5>
                                        </div>
                                    </div>
                                    <div id="sidebar-size">
                                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">
                                            Sidebar Size
                                        </h6>
                                        <p className="text-muted">Choose a size of Sidebar.</p>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-default"
                                                        defaultValue="lg"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-size-default"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Default</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-compact"
                                                        defaultValue="md"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-size-compact"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Compact</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-small"
                                                        defaultValue="sm"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-size-small"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                    <span className="d-block p-1 bg-soft-primary mb-2" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Small (Icon View)</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar-size"
                                                        id="sidebar-size-small-hover"
                                                        defaultValue="sm-hover"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-size-small-hover"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                    <span className="d-block p-1 bg-soft-primary mb-2" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Small Hover View</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sidebar-view">
                                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">
                                            Sidebar View
                                        </h6>
                                        <p className="text-muted">
                                            Choose Default or Detached Sidebar view.
                                        </p>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-style"
                                                        id="sidebar-view-default"
                                                        defaultValue="default"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-view-default"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Default</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-layout-style"
                                                        id="sidebar-view-detached"
                                                        defaultValue="detached"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-view-detached"
                                                    >
                                                        <span className="d-flex h-100 flex-column">
                                                            <span className="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                                <span className="d-block p-1 bg-soft-primary rounded me-1" />
                                                                <span className="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto" />
                                                                <span className="d-block p-1 pb-0 px-2 bg-soft-primary" />
                                                            </span>
                                                            <span className="d-flex gap-1 h-100 p-1 px-2">
                                                                <span className="flex-shrink-0">
                                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                        <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                        <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                        <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="bg-light d-block p-1 mt-auto px-2" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Detached</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sidebar-color">
                                        <h6 className="mt-4 mb-0 fw-semibold text-uppercase">
                                            Sidebar Color
                                        </h6>
                                        <p className="text-muted">Choose Ligth or Dark Sidebar Color.</p>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-light"
                                                        defaultValue="light"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-color-light"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-primary rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-primary" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Light</h5>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-check sidebar-setting card-radio">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="data-sidebar"
                                                        id="sidebar-color-dark"
                                                        defaultValue="dark"
                                                    />
                                                    <label
                                                        className="form-check-label p-0 avatar-md w-100"
                                                        htmlFor="sidebar-color-dark"
                                                    >
                                                        <span className="d-flex gap-1 h-100">
                                                            <span className="flex-shrink-0">
                                                                <span className="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                                                    <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                                                                    <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                                                                </span>
                                                            </span>
                                                            <span className="flex-grow-1">
                                                                <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-block p-1" />
                                                                    <span className="bg-light d-block p-1 mt-auto" />
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 className="fs-13 text-center mt-2">Dark</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-footer border-top p-3 text-center">
                            <div className="row">
                                <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-light w-100"
                                        id="reset-layout"
                                    >
                                        Reset
                                    </button>
                                </div>
                                {/* <div className="col-6">
                                    <a
                                        href="https://1.envato.market/velzon-admin"
                                        target="_blank"
                                        className="btn btn-primary w-100"
                                    >
                                        Buy Now
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </>


                <script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/libs/simplebar/simplebar.min.js"></script>
                <script src="/assets/libs/node-waves/waves.min.js"></script>
                <script src="/assets/libs/feather-icons/feather.min.js"></script>
                <script src="/assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
                <script src="/assets/js/plugins.js"></script>

                <script src="/assets/libs/apexcharts/apexcharts.min.js"></script>

                <script src="/assets/libs/jsvectormap/js/jsvectormap.min.js"></script>
                <script src="/assets/libs/jsvectormap/maps/world-merc.js"></script>

                <script src="/assets/libs/swiper/swiper-bundle.min.js"></script>

                <script src="/assets/js/pages/dashboard-ecommerce.init.js"></script>

                <script src="/assets/js/app.js"></script>

            </body>
        </Html>
    )
}