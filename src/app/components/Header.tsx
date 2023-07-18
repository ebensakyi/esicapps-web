"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Header() {
    const pathname = usePathname()

    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link href="/dashboard" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">ESICApps</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" />
                </div>
                {/* End Logo */}
                {/* <div className="search-bar">
                    <form
                        className="search-form d-flex align-items-center"
                        method="POST"
                        action="#"
                    >
                        <input
                            type="text"
                            name="query"
                            placeholder="Search"
                            title="Enter search keyword"
                        />
                        <button type="submit" title="Search">
                            <i className="bi bi-search" />
                        </button>
                    </form>
                </div> */}
                {/* End Search Bar */}
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search" />
                            </a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell" />
                                <span className="badge bg-primary badge-number">4</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                                            View all
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning" />
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger" />
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success" />
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary" />
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text" />
                                <span className="badge bg-success badge-number">3</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                                    You have 3 new messages
                                    <a href="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                                            View all
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img
                                            src="assets/img/messages-1.jpg"
                                            alt=""
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>
                                                Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...
                                            </p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img
                                            src="assets/img/messages-2.jpg"
                                            alt=""
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>
                                                Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...
                                            </p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="message-item">
                                    <a href="#">
                                        <img
                                            src="assets/img/messages-3.jpg"
                                            alt=""
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>
                                                Velit asperiores et ducimus soluta repudiandae labore
                                                officia est ut...
                                            </p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <a href="#">Show all messages</a>
                                </li>
                            </ul>
                        </li> */}
                        <li className="nav-item dropdown pe-3">
                            <a
                                className="nav-link nav-profile d-flex align-items-center pe-0"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    src="assets/img/profile-img.jpg"
                                    alt="Profile"
                                    className="rounded-circle"
                                />
                                <span className="d-none d-md-block dropdown-toggle ps-2">
                                    K. Anderson
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="users-profile.html"
                                    >
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="users-profile.html"
                                    >
                                        <i className="bi bi-gear" />
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        href="pages-faq.html"
                                    >
                                        <i className="bi bi-question-circle" />
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            {/* End Profile Dropdown Items */}
                        </li>
                    </ul>
                </nav>
                {/* End Icons Navigation */}
            </header>
            {/* End Header */}
            {/* ======= Sidebar ======= */}
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className={
                            pathname == "/dashboard"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/dashboard">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    {/* End Dashboard Nav */}

                    <li className="nav-item">
                        <Link
                            className="nav-link collapsed"
                            data-bs-target="#components-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-table" />
                            <span>Submitted Data</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul
                            id="components-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <Link href="/submitted-data/table?id=1">
                                    <i className="bi bi-circle" />
                                    <span>Tables</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Map</span>
                                </Link>
                            </li> 
                            {/* <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Sanitary</span>
                                </Link>
                            </li> */}


                        </ul>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            className="nav-link collapsed"
                            data-bs-target="#components-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-table" />
                            <span>Submitted Data</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul
                            id="components-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <Link href="/submitted-data?id=1">
                                    <i className="bi bi-circle" />
                                    <span>Residential</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Eatery</span>
                                </Link>
                            </li> <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Health</span>
                                </Link>
                            </li> <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Hospitality</span>
                                </Link>
                            </li> <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Industry</span>
                                </Link>
                            </li> <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Institution</span>
                                </Link>
                            </li> <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Market</span>
                                </Link>
                            </li> <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Sanitary</span>
                                </Link>
                            </li>


                        </ul>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className={
                            pathname == "/map"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/map">
                            <i className="bi bi-map" />
                            <span>Map</span>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link
                            className={
                                pathname == "/reports/general" || pathname == "/reports/custom"
                                    ? "nav-link"
                                    : "nav-link collapsed"
                            }
                            data-bs-target="#reports-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-bar-chart
" />
                            <span>Reports</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul
                            id="reports-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>General</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Custom</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={
                                pathname == "/reports/general" || pathname == "/reports/custom"
                                    ? "nav-link"
                                    : "nav-link collapsed"
                            }
                            data-bs-target="#san-reports-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-exclamation-triangle

" />
                            <span>Sanitation Reports</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul
                            id="san-reports-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Table</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Map</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-heading">Messages</li>
                    <li className="nav-item">
                        <Link
                            className="nav-link collapsed"
                            data-bs-target="#messages-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-chat-square-text" />
                            <span>Messages</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul
                            id="messages-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>SMS</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Notifications</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Other data</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-heading">Configure</li>
                    <li className="nav-item">
                        <Link
                            className="nav-link collapsed"
                            data-bs-target="#config-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-card-list" />
                            <span>Primary Data</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul
                            id="config-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Districts</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Electoral Area</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="components-alerts.html">
                                    <i className="bi bi-circle" />
                                    <span>Community</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" >
                        <Link className={
                            pathname == "/map"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/configure/data-transfer">
                            <i className="bi bi-arrow-left-right
" />
                            <span>Data Transfer</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={
                            pathname == "/map"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/configure/user-guide">
                            <i className="bi bi-book-half
" />
                            <span>User guide</span>
                        </Link>
                    </li>
                    <li className="nav-heading">Account </li>
                    <li className="nav-item">
                        <Link className={
                            pathname == "/user"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/user">
                            <i className="bi bi-people" />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={
                            pathname == "/user/role"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/user/role">
                            <i className="bi bi-key" />
                            <span>Roles</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  className={
                            pathname == "/user/log"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/user/log">
                            <i className="bi bi-clock-history
" />
                            <span>Logs</span>
                        </Link>
                    </li>

                </ul>
            </aside>
            {/* End Sidebar*/}
        </>

    )
}
