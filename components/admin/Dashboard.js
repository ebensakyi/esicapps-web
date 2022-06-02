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
                        {/* <div className="col-auto layout-rightside-col">
                            <div className="overlay" />
                            <div className="layout-rightside">
                                <div className="card h-100 rounded-0">
                                    <div className="card-body p-0">
                                        <div className="p-3">
                                            <h6 className="text-muted mb-0 text-uppercase fw-semibold">
                                                Recent Activity
                                            </h6>
                                        </div>
                                        <div
                                            data-simplebar=""
                                            style={{ maxHeight: 410 }}
                                            className="p-3 pt-0"
                                        >
                                            <div className="acitivity-timeline acitivity-main">
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                            <i className="ri-shopping-cart-2-line" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">
                                                            Purchase by James Price
                                                        </h6>
                                                        <p className="text-muted mb-1">
                                                            Product noise evolve smartwatch{" "}
                                                        </p>
                                                        <small className="mb-0 text-muted">
                                                            02:14 PM Today
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                        <div className="avatar-title bg-soft-danger text-danger rounded-circle">
                                                            <i className="ri-stack-fill" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">
                                                            Added new{" "}
                                                            <span className="fw-semibold">style collection</span>
                                                        </h6>
                                                        <p className="text-muted mb-1">By Nesta Technologies</p>
                                                        <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                                                            <a
                                                                href="apps-ecommerce-product-details.html"
                                                                className="bg-light rounded p-1"
                                                            >
                                                                <img
                                                                    src="assets/images/products/img-8.png"
                                                                    alt=""
                                                                    className="img-fluid d-block"
                                                                />
                                                            </a>
                                                            <a
                                                                href="apps-ecommerce-product-details.html"
                                                                className="bg-light rounded p-1"
                                                            >
                                                                <img
                                                                    src="assets/images/products/img-2.png"
                                                                    alt=""
                                                                    className="img-fluid d-block"
                                                                />
                                                            </a>
                                                            <a
                                                                href="apps-ecommerce-product-details.html"
                                                                className="bg-light rounded p-1"
                                                            >
                                                                <img
                                                                    src="assets/images/products/img-10.png"
                                                                    alt=""
                                                                    className="img-fluid d-block"
                                                                />
                                                            </a>
                                                        </div>
                                                        <p className="mb-0 text-muted">
                                                            <small>9:47 PM Yesterday</small>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="assets/images/users/avatar-2.jpg"
                                                            alt=""
                                                            className="avatar-xs rounded-circle acitivity-avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">
                                                            Natasha Carey have liked the products
                                                        </h6>
                                                        <p className="text-muted mb-1">
                                                            Allow users to like products in your WooCommerce
                                                            store.
                                                        </p>
                                                        <small className="mb-0 text-muted">25 Dec, 2021</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-secondary">
                                                                <i className="mdi mdi-sale fs-14" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">
                                                            Today offers by{" "}
                                                            <a
                                                                href="apps-ecommerce-seller-details.html"
                                                                className="link-secondary"
                                                            >
                                                                Digitech Galaxy
                                                            </a>
                                                        </h6>
                                                        <p className="text-muted mb-2">
                                                            Offer is valid on orders of Rs.500 Or above for
                                                            selected products only.
                                                        </p>
                                                        <small className="mb-0 text-muted">12 Dec, 2021</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-soft-danger text-danger">
                                                                <i className="ri-bookmark-fill" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">Favoried Product</h6>
                                                        <p className="text-muted mb-2">
                                                            Esther James have favorited product.
                                                        </p>
                                                        <small className="mb-0 text-muted">25 Nov, 2021</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-secondary">
                                                                <i className="mdi mdi-sale fs-14" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">
                                                            Flash sale starting
                                                            <span className="text-primary">Tomorrow.</span>
                                                        </h6>
                                                        <p className="text-muted mb-0">
                                                            Flash sale by
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="link-secondary fw-medium"
                                                            >
                                                                Zoetic Fashion
                                                            </a>
                                                        </p>
                                                        <small className="mb-0 text-muted">22 Oct, 2021</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs acitivity-avatar">
                                                            <div className="avatar-title rounded-circle bg-soft-info text-info">
                                                                <i className="ri-line-chart-line" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">Monthly sales report</h6>
                                                        <p className="text-muted mb-2">
                                                            <span className="text-danger">2 days left</span>{" "}
                                                            notification to submit the monthly sales report.{" "}
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="link-warning text-decoration-underline"
                                                            >
                                                                Reports Builder
                                                            </a>
                                                        </p>
                                                        <small className="mb-0 text-muted">15 Oct</small>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="assets/images/users/avatar-3.jpg"
                                                            alt=""
                                                            className="avatar-xs rounded-circle acitivity-avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="mb-1 lh-base">Frank Hook Commented</h6>
                                                        <p className="text-muted mb-2 fst-italic">
                                                            " A product that has reviews is more likable to be
                                                            sold than a product. "
                                                        </p>
                                                        <small className="mb-0 text-muted">26 Aug, 2021</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 mt-2">
                                            <h6 className="text-muted mb-3 text-uppercase fw-semibold">
                                                Top 10 Categories
                                            </h6>
                                            <ol className="ps-3 text-muted">
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Mobile &amp; Accessories{" "}
                                                        <span className="float-end">(10,294)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Desktop <span className="float-end">(6,256)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Electronics <span className="float-end">(3,479)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Home &amp; Furniture{" "}
                                                        <span className="float-end">(2,275)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Grocery <span className="float-end">(1,950)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Fashion <span className="float-end">(1,582)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Appliances <span className="float-end">(1,037)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Beauty, Toys &amp; More{" "}
                                                        <span className="float-end">(924)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Food &amp; Drinks{" "}
                                                        <span className="float-end">(701)</span>
                                                    </a>
                                                </li>
                                                <li className="py-1">
                                                    <a href="#" className="text-muted">
                                                        Toys &amp; Games{" "}
                                                        <span className="float-end">(239)</span>
                                                    </a>
                                                </li>
                                            </ol>
                                            <div className="mt-3 text-center">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="text-muted text-decoration-underline"
                                                >
                                                    View all Categories
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h6 className="text-muted mb-3 text-uppercase fw-semibold">
                                                Products Reviews
                                            </h6>
                                            <div
                                                className="swiper vertical-swiper"
                                                style={{ height: 250 }}
                                            >
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="card border border-dashed shadow-none">
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar-sm">
                                                                        <div className="avatar-title bg-light rounded">
                                                                            <img
                                                                                src="assets/images/companies/img-1.png"
                                                                                alt=""
                                                                                height={30}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                " Great product and looks great, lots of
                                                                                features. "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by{" "}
                                                                            <cite title="Source Title">
                                                                                Force Medicines
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="card border border-dashed shadow-none">
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0">
                                                                        <img
                                                                            src="assets/images/users/avatar-3.jpg"
                                                                            alt=""
                                                                            className="avatar-sm rounded"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                " Amazing template, very easy to understand
                                                                                and manipulate. "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-half-fill" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by{" "}
                                                                            <cite title="Source Title">Henry Baird</cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="card border border-dashed shadow-none">
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar-sm">
                                                                        <div className="avatar-title bg-light rounded">
                                                                            <img
                                                                                src="assets/images/companies/img-8.png"
                                                                                alt=""
                                                                                height={30}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                "Very beautiful product and Very helpful
                                                                                customer service."
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-line" />
                                                                                <i className="ri-star-line" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by{" "}
                                                                            <cite title="Source Title">
                                                                                Zoetic Fashion
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="card border border-dashed shadow-none">
                                                            <div className="card-body">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0">
                                                                        <img
                                                                            src="assets/images/users/avatar-2.jpg"
                                                                            alt=""
                                                                            className="avatar-sm rounded"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-3">
                                                                        <div>
                                                                            <p className="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                                " The product is very beautiful. I like it.
                                                                                "
                                                                            </p>
                                                                            <div className="fs-11 align-middle text-warning">
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-fill" />
                                                                                <i className="ri-star-half-fill" />
                                                                                <i className="ri-star-line" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end mb-0 text-muted">
                                                                            - by{" "}
                                                                            <cite title="Source Title">
                                                                                Nancy Martino
                                                                            </cite>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h6 className="text-muted mb-3 text-uppercase fw-semibold">
                                                Customer Reviews
                                            </h6>
                                            <div className="bg-light px-3 py-2 rounded-2 mb-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <div className="fs-16 align-middle text-warning">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-half-fill" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h6 className="mb-0">4.5 out of 5</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-muted">
                                                    Total <span className="fw-medium">5.50k</span>
                                                    reviews
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="row align-items-center g-2">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">5 star</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progress progress-sm">
                                                                <div
                                                                    className="progress-bar bg-success"
                                                                    role="progressbar"
                                                                    style={{ width: "50.16%" }}
                                                                    aria-valuenow="50.16"
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">2758</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center g-2">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">4 star</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progress progress-sm">
                                                                <div
                                                                    className="progress-bar bg-success"
                                                                    role="progressbar"
                                                                    style={{ width: "29.32%" }}
                                                                    aria-valuenow="29.32"
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">1063</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center g-2">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">3 star</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progress progress-sm">
                                                                <div
                                                                    className="progress-bar bg-warning"
                                                                    role="progressbar"
                                                                    style={{ width: "18.12%" }}
                                                                    aria-valuenow="18.12"
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">997</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center g-2">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">2 star</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progress progress-sm">
                                                                <div
                                                                    className="progress-bar bg-success"
                                                                    role="progressbar"
                                                                    style={{ width: "4.98%" }}
                                                                    aria-valuenow="4.98"
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">227</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center g-2">
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0">1 star</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="p-1">
                                                            <div className="progress animated-progress progress-sm">
                                                                <div
                                                                    className="progress-bar bg-danger"
                                                                    role="progressbar"
                                                                    style={{ width: "7.42%" }}
                                                                    aria-valuenow="7.42"
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="p-1">
                                                            <h6 className="mb-0 text-muted">408</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sidebar-alert bg-light border-0 text-center mx-4 mb-0 mt-3">
                                            <div className="card-body">
                                                <img src="assets/images/giftbox.png" alt="" />
                                                <div className="mt-4">
                                                    <h5>Invite New Seller</h5>
                                                    <p className="text-muted lh-base">
                                                        Refer a new seller to us and earn $100 per refer.
                                                    </p>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary btn-label rounded-pill"
                                                    >
                                                        <i className="ri-mail-fill label-icon align-middle rounded-pill fs-16 me-2" />
                                                        Invite Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                            </div>
                        </div> */}
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
