"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Header() {
    const pathname = usePathname()

    const { data: session } = useSession()

    return (
 
        <>
        {session?.user?
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link href="/" className="logo d-flex align-items-center">
                        <img src="../../assets/img/logo.png" alt="" />
                        <span className="d-none d-lg-block">ESICApps</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" />
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                <i className="bi bi-search" />
                            </a>
                        </li>

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
                                   {session?.user?.otherNames}  {session?.user?.surname}
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h5>  {session?.user?.email}</h5>
                                    <h6>  {session?.user?.Region?.name}</h6>
                                    <h6>  {session?.user?.District?.name}</h6>

                                    <span> {session?.user?.designation}</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item d-flex align-items-center"
                                        href="/auth/profile"
                                    >
                                        <i className="bi bi-person" />
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                              
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    {session ? <button className="dropdown-item d-flex align-items-center" onClick={()=>signOut()}>
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </button> : 
                                    <button className="dropdown-item d-flex align-items-center" onClick={()=>signIn()}>
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign In</span>
                                    </button>}

                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>:<></>}
            {session?.user?
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className={
                            pathname == "/"
                                ? "nav-link"
                                : "nav-link collapsed"
                        } href="/">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </Link>
                    </li>

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
                                <Link href="/submitted-data?formId=1">
                                    <i className="bi bi-circle" />
                                    <span>Tables</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/submitted-data/map">
                                    <i className="bi bi-circle" />
                                    <span>Map</span>
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
                        } href="/user/guide">
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
                        <Link className={
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
            </aside>:<></>}
        </>

    )
}
