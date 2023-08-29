'use client'

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [showDrawer, setShowDrawer] = useState(false)

    const { data: session }: any = useSession()




    return (

        <>
            {session?.user ?
                <header id="header" className="header fixed-top d-flex align-items-center">
                    {/* <button onClick={()=>{
                        if(!showDrawer){
                            document.body.classList.add("toggle-sidebar")
                            setShowDrawer(true)
                        }else{
                            document.body.classList.remove("toggle-sidebar")
                            setShowDrawer(false)
                        }
                        

                    }}>Open</button> */}
                    <div className="d-flex align-items-center justify-content-between">
                        <Link href="/" className="logo d-flex align-items-center">
                            <img src="../../assets/img/logo.png" alt="" />
                            <span className="d-none d-lg-block">ESICApps</span>
                        </Link>
                        <i className="bi bi-list toggle-sidebar-btn" onClick={() => {
                            if (!showDrawer) {
                                document.body.classList.add("toggle-sidebar")
                                setShowDrawer(true)
                            } else {
                                document.body.classList.remove("toggle-sidebar")
                                setShowDrawer(false)
                            }


                        }} />
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
                                        src="../../assets/img/profile-img.jpg"
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
                                        {session ? <button className="dropdown-item d-flex align-items-center" onClick={() => signOut()}>
                                            <i className="bi bi-box-arrow-right" />
                                            <span>Sign Out</span>
                                        </button> :
                                            <button className="dropdown-item d-flex align-items-center" onClick={() => signIn()}>
                                                <i className="bi bi-box-arrow-right" />
                                                <span>Sign In</span>
                                            </button>}

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header> : <></>}
            {session?.user ?
                <aside id="sidebar" className="sidebar">
                    <ul className="sidebar-nav" id="sidebar-nav">
                        {session?.user?.privileges?.includes(1) ?
                            <li className="nav-item">

                                <Link className={
                                    pathname == "/"
                                        ? "nav-link"
                                        : "nav-link collapsed"
                                } href="/">
                                    <i className="bi bi-grid" />
                                    <span>Dashboard</span>
                                </Link>
                            </li> : <></>}
                        {session?.user?.privileges?.includes(3) ?
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
                                        {/* <Link href="/submitted-data?formId=1&published=1&page=1&filterBy=&filterValue=&from&to=">
                                    <i className="bi bi-circle" />
                                    <span>Tables</span>
                                </Link> */}

                                        <li className="nav-item">
                                            {/* <Link
                                            className="nav-link collapsed"
                                            data-bs-target="#components-nav"
                                            data-bs-toggle="collapse"
                                            href="#"
                                        >
                                            <i className="bi bi-table" />
                                            <span>Submitted Data</span>
                                            <i className="bi bi-chevron-down ms-auto" />
                                        </Link> */}
                                            <ul
                                                id="components-nav"
                                                className="nav-content collapse "
                                                data-bs-parent="#sidebar-nav"
                                            >
                                                <li>
                                                    <Link href="/submitted-data?formId=1&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Residential</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/submitted-data?formId=2&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Eatery</span>
                                                    </Link>
                                                </li> <li>
                                                    <Link href="/submitted-data?formId=3&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Health</span>
                                                    </Link>
                                                </li> <li>
                                                    <Link href="/submitted-data?formId=4&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Hospitality</span>
                                                    </Link>
                                                </li> <li>
                                                    <Link href="/submitted-data?formId=5&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Industry</span>
                                                    </Link>
                                                </li> <li>
                                                    <Link href="/submitted-data?formId=6&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Institution</span>
                                                    </Link>
                                                </li> <li>
                                                    <Link href="/submitted-data?formId=7&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Market</span>
                                                    </Link>
                                                </li> <li>
                                                    <Link href="/submitted-data?formId=8&published=1&deleted=0&page=1&filterBy=&filterValue=&from&to=">
                                                        <i className="bi bi-circle" />
                                                        <span>Sanitary</span>
                                                    </Link>
                                                </li>


                                            </ul>
                                        </li>
                                    </li>




                                </ul>
                            </li> : <></>}

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
                            > {session?.user?.privileges?.includes(5) ?
                                <li>
                                    <Link href="/report/general">
                                        <i className="bi bi-circle" />
                                        <span>General</span>
                                    </Link>
                                </li> : <></>}
                                {/* {session?.user?.privileges?.includes(6)?  <li>
                                    <Link href="#">
                                        <i className="bi bi-circle" />
                                        <span>Custom</span>
                                    </Link>
                                </li>:<></>} */}

                            </ul>
                        </li>
                        {session?.user?.privileges?.includes(4) ?
                            <li className="nav-item" >
                                <Link className={
                                    pathname == "/map"
                                        ? "nav-link"
                                        : "nav-link collapsed"
                                } href="/map">
                                    <i className="bi bi-map" />
                                    <span>Map</span>
                                </Link>
                            </li> : <></>}
                        {/* <li className="nav-item">
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
                            > {session?.user?.privileges?.includes(7) ?
                                <li>
                                    <Link href="components-alerts.html">
                                        <i className="bi bi-circle" />
                                        <span>Table</span>
                                    </Link>
                                </li> : <></>}
                                {session?.user?.privileges?.includes(8) ?
                                    <li>
                                        <Link href="components-alerts.html">
                                            <i className="bi bi-circle" />
                                            <span>Map</span>
                                        </Link>
                                    </li> : <></>}

                            </ul>
                        </li> */}
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
                            > {session?.user?.privileges?.includes(9) ?
                                <li>
                                    <Link href="/messaging/sms">
                                        <i className="bi bi-circle" />
                                        <span>SMS</span>
                                    </Link>
                                </li> : <></>}
                                {session?.user?.privileges?.includes(10) ? <li>
                                    <Link href="/messaging/notification">
                                        <i className="bi bi-circle" />
                                        <span>Notifications</span>
                                    </Link>
                                </li> : <></>}
                                {/* <li>
                                <Link href="/messaging/custom">
                                    <i className="bi bi-circle" />
                                    <span>Custom message</span>
                                </Link>
                            </li> */}
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
                            > {session?.user?.privileges?.includes(11) ?
                                <li>
                                    <Link href="/primary-data/district">
                                        <i className="bi bi-circle" />
                                        <span>District</span>
                                    </Link>
                                </li> : <></>}
                                {session?.user?.privileges?.includes(12) ? <li>
                                    <Link href="/primary-data/electoral-area">
                                        <i className="bi bi-circle" />
                                        <span>Electoral Area</span>
                                    </Link>
                                </li> : <></>}
                                {session?.user?.privileges?.includes(13) ? <li>
                                    <Link href="/primary-data/community">
                                        <i className="bi bi-circle" />
                                        <span>Community</span>
                                    </Link>
                                </li> : <></>}
                                {session?.user?.privileges?.includes(19) ? <li>
                                    <Link href="/primary-data/other-data">
                                        <i className="bi bi-circle" />
                                        <span>Other data</span>
                                    </Link>
                                </li> : <></>}
                            </ul>
                        </li>
                        {session?.user?.privileges?.includes(14) ?
                            <li className="nav-item" >
                                <Link className={
                                    pathname == "/assign-data"
                                        ? "nav-link"
                                        : "nav-link collapsed"
                                } href="/assign-data">
                                    <i className="bi bi-arrow-left-right
" />
                                    <span>Assign Data</span>
                                </Link>
                            </li> : <></>}
                        {session?.user?.privileges?.includes(15) ?
                            <li className="nav-item">
                                <Link className={
                                    pathname == "/user/guide"
                                        ? "nav-link"
                                        : "nav-link collapsed"
                                } href="/user/guide">
                                    <i className="bi bi-book-half
" />
                                    <span>User guide</span>
                                </Link>
                            </li> : <></>}
                        <li className="nav-heading">Account </li>
                        {session?.user?.privileges?.includes(16) ? <li className="nav-item">
                            <Link className={
                                pathname == "/user"
                                    ? "nav-link"
                                    : "nav-link collapsed"
                            } href="/user">
                                <i className="bi bi-people" />
                                <span>Users</span>
                            </Link>
                        </li> : <></>}
                        {session?.user?.privileges?.includes(18) ? <li className="nav-item">
                            <Link className={
                                pathname == "/user/role"
                                    ? "nav-link"
                                    : "nav-link collapsed"
                            } href="/user/role">
                                <i className="bi bi-key" />
                                <span>Roles</span>
                            </Link>
                        </li> : <></>}
                        {session?.user?.privileges?.includes(17) ? <li className="nav-item">
                            <Link className={
                                pathname == "/user/log"
                                    ? "nav-link"
                                    : "nav-link collapsed"
                            } href="/user/log?searchText=&page=1">
                                <i className="bi bi-clock-history
" />
                                <span>Logs</span>
                            </Link>
                        </li> : <></>}

                    </ul>
                </aside> : <></>}
        </>

    )
}
