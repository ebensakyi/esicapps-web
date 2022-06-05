import Link from "next/link";

const Dashboard = () => {
    return (
        <div className="main-content">
            <div className="page-content">
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Dashboard</h4>
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item">
                                            <a href="javascript: void(0);">Dashboards</a>
                                        </li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}
                    <div className="row">
                        <div className="col">
                            <div className="h-100">
                                <div className="row mb-3 pb-1">
                                    <div className="col-12">
                                        <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
                                                <p className="text-muted mb-0">
                                                    Here's what's happening with your store today.
                                                </p>
                                            </div>
                                            <div className="mt-3 mt-lg-0">
                                                <form action="javascript:void(0);">
                                                    <div className="row g-3 mb-0 align-items-center">
                                                        <div className="col-sm-auto">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control border-0 dash-filter-picker shadow"
                                                                    data-provider="flatpickr"
                                                                    data-range-date="true"
                                                                    data-date-format="d M, Y"
                                                                    data-deafult-date="01 Jan 2022 to 31 Jan 2022"
                                                                />
                                                                <div className="input-group-text bg-primary border-primary text-white">
                                                                    <i className="ri-calendar-2-line" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*end col*/}
                                                        <div className="col-auto">
                                                            <button
                                                                type="button"
                                                                className="btn btn-soft-success"
                                                            >
                                                                <i className="ri-add-circle-line align-middle me-1" />
                                                                Add Product
                                                            </button>
                                                        </div>
                                                        {/*end col*/}
                                                        <div className="col-auto">
                                                            <button
                                                                type="button"
                                                                className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"
                                                            >
                                                                <i className="ri-pulse-line" />
                                                            </button>
                                                        </div>
                                                        {/*end col*/}
                                                    </div>
                                                    {/*end row*/}
                                                </form>
                                            </div>
                                        </div>
                                        {/* end card header */}
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Residential
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                1,000
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Baseline
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                500
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Re-inspection
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-success rounded fs-3">
                                                            <i className="bx bx-home-circle text-success" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Eatery
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                1,000
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Baseline
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                500
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Re-inspection
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-primary rounded fs-3">
                                                            <i className="bx bx-bowl-hot text-primary" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Institution
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                1,000
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Baseline
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                500
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Re-inspection
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-warning rounded fs-3">
                                                            <i className=" bx bx-buildings text-warning" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Industry
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                1,000
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Baseline
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                500
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Re-inspection
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-danger rounded fs-3">
                                                            <i className="bx bx-wrench text-danger" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Healthcare
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                1,000
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Baseline
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                500
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Re-inspection
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-danger rounded fs-3">
                                                            <i className="bx bx-wrench text-danger" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Hospitality
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                1,000
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Baseline
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            {/* $ */}
                                                            <span className="counter-value" data-target="559.25">
                                                                500
                                                            </span>
                                                            {/* k */}
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Re-inspection
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-danger rounded fs-3">
                                                            <i className="bx bx-wrench text-danger" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    {/* end col */}
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            My Balance
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-muted fs-14 mb-0">+0.00 %</h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            $
                                                            <span className="counter-value" data-target="165.89">
                                                                0
                                                            </span>
                                                            k
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Withdraw money
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-primary rounded fs-3">
                                                            <i className="bx bx-wallet text-primary" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    {/* end col */}
                                </div>{" "}
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Total Earnings
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +16.24 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            $
                                                            <span className="counter-value" data-target="559.25">
                                                                0
                                                            </span>
                                                            k
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            View net earnings
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-success rounded fs-3">
                                                            <i className="bx bx-dollar-circle text-success" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    {/* end col */}
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Orders
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-danger fs-14 mb-0">
                                                            <i className="ri-arrow-right-down-line fs-13 align-middle" />
                                                            -3.57 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            <span className="counter-value" data-target={36894}>
                                                                0
                                                            </span>
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            View all orders
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-info rounded fs-3">
                                                            <i className="bx bx-shopping-bag text-info" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    {/* end col */}
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            Customers
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-success fs-14 mb-0">
                                                            <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                            +29.08 %
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            <span className="counter-value" data-target="183.35">
                                                                0
                                                            </span>
                                                            M
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            See details
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-warning rounded fs-3">
                                                            <i className="bx bx-user-circle text-warning" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    {/* end col */}
                                    <div className="col-xl-3 col-md-6">
                                        {/* card */}
                                        <div className="card card-animate">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                            My Balance
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h5 className="text-muted fs-14 mb-0">+0.00 %</h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between mt-4">
                                                    <div>
                                                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                                                            $
                                                            <span className="counter-value" data-target="165.89">
                                                                0
                                                            </span>
                                                            k
                                                        </h4>
                                                        <a href="#" className="text-decoration-underline">
                                                            Withdraw money
                                                        </a>
                                                    </div>
                                                    <div className="avatar-sm flex-shrink-0">
                                                        <span className="avatar-title bg-soft-primary rounded fs-3">
                                                            <i className="bx bx-wallet text-primary" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end card body */}
                                        </div>
                                        {/* end card */}
                                    </div>
                                    {/* end col */}
                                </div>{" "}
                            </div>{" "}
                            {/* end .h-100*/}
                        </div>{" "}
                        {/* end col */}
                       
                        {/* end col */}
                    </div>
                </div>
                {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">© ESICApps.</div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design &amp; Develop by FortressTech
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
};

export default Dashboard;
