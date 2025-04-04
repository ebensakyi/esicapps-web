'use client'
import Image from 'next/image'
import { useRef, useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ReactPaginate from 'react-paginate';

export default function User({ data }: any) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { data: session }: any = useSession()

    const loggedInUserRegion = session?.user?.regionId;
    const loggedInUserDistrict = session?.user?.districtId;
    const loggedInUserLevel = session?.user?.userLevelId

    const pathname = usePathname()


    const searchTextRef: any = useRef("");
    const filterRef: any = useRef(null);

    const searchText = searchParams.get('searchText');
    const page = searchParams.get('page');


    const [userRole, setUserRole] = useState("");
    const [userId, setUserId] = useState();
    const [selectedUserLevel, setSelectedUserLevel] = useState("");

    const [surname, setSurname] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [designation, setDesignation] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [districts, setDistricts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const [electoralArea, setElectoralArea] = useState();
    const [showRegion, setShowRegion] = useState(false);
    const [showDistrict, setShowDistrict] = useState(false);
    const [showOtp, setShowOtp] = useState(false);

    // const [searchText, setSearchText] = useState();



    const getDistrictsByRegion = async (regionId: number) => {
        try {


            const response = await axios.get(
                `/api/primary-data/district?regionId= ${regionId} &get_all=1`
            );


            setDistricts(response.data.response);
        } catch (error) {
            console.log(error);
        }
    };

    // const handleExportAll = async () => {
    //     try {

    //       const response = await axios.post(
    //         `/api/v1/submitted-data/data-to-excel`,
    //         {
    //           inspectionFormId: Number(formId),
    //           fileName: handleExcelName(),
    //           published,
    //           exportType: 1,
    //         }
    //       );
    //       if (response.status == 200) {
    //         router.push(response.data);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    const handleExportFiltered = async () => {
        try {
            const response = await axios.post(
                `/api/v1/submitted-data/data-to-excel`,
                {
                    searchText: searchText,
                    exportType: 2,
                }
            );
            if (response.status == 200) {
                router.push(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handlePagination = (page: any) => {

        page = page.selected == -1 ? 1 : page.selected + 1;

        router.push(
            `${pathname}?page=${page}&searchText=${searchText}`

        );
    };

    const addUser = async (e: any) => {
        try {
            e.preventDefault();



            if (surname == "") {
                return toast.error("Last name cannot be empty");
            }
            if (otherNames == "") {
                return toast.error("First name cannot be empty");
            }
            if (email == "") {
                return toast.error("Email cannot be empty");
            }
            if (phoneNumber == "") {
                return toast.error("PhoneNumber cannot be empty");
            }
            if (designation == "") {
                return toast.error("Designation cannot be empty");
            }
            if (userRole == "") {
                return toast.error("User role cannot be empty");
            }
            if (selectedUserLevel == "2") {
                // if (selectedRegion == null || selectedRegion == "") {
                //     return toast.error("Region cannot be empty");
                // }
            }
            if (selectedUserLevel == "3") {

                if (selectedDistrict == null || selectedDistrict == "") {
                    return toast.error("District cannot be empty");
                }
            }

            let data = {}
            if (loggedInUserLevel == 1) {
                if (selectedUserLevel == "1") {
                    data = {
                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: null,
                        district: null,
                    };
                }
                if (selectedUserLevel == "2") {
                    data = {
                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: Number(selectedRegion),
                        district: null,
                    };
                }
                if (selectedUserLevel == "3") {

                    data = {
                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: null,
                        district: Number(selectedDistrict),
                    };
                }
            }

            if (loggedInUserLevel == 2) {
                if (selectedUserLevel == "2") {
                    data = {
                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: Number(loggedInUserRegion),
                        district: null,
                    };
                }
                if (selectedUserLevel == "3") {
                    data = {
                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: Number(loggedInUserRegion),
                        district: Number(selectedDistrict),
                    };
                }
            }

            if (loggedInUserLevel == 3) {
                data = {
                    userRoleId: Number(userRole),
                    userLevelId: Number(selectedUserLevel),
                    surname,
                    otherNames,
                    email,
                    phoneNumber,
                    designation,
                    region: loggedInUserRegion,
                    district: loggedInUserDistrict,
                };
            }



            const response = await axios.post("/api/user", data);

            if (response.status == 201) {
                return toast.error("User's phone number already used.\nChange number and try again");

            }

            if (response.status == 200) {
                setSurname("");
                setOtherNames("");
                setEmail("");
                setPhoneNumber("");
                setDesignation("");
                setUserRole("");
                setSelectedRegion("");
                setSelectedDistrict("");

                setSelectedUserLevel("");
                router.refresh()
                return toast.success("User added successfully");

            }


        } catch (error: any) {
            return toast.error("An error occurred");
        }
    };

    const updateUser = async (e: any) => {
        try {
            e.preventDefault();

            if (surname == "") {
                return toast.error("Surname cannot be empty");
            }
            if (otherNames == "") {
                return toast.error("First Name cannot be empty");
            }
            if (email == "") {
                return toast.error("Email cannot be empty");
            }
            if (phoneNumber == "") {
                return toast.error("PhoneNumber cannot be empty");
            }
            if (designation == "") {
                return toast.error("Designation cannot be empty");
            }
            if (userRole == "") {
                return toast.error("User role cannot be empty");
            }
            if (selectedUserLevel == "2") {
                if (selectedRegion == null || selectedRegion == "") {
                    return toast.error("Region cannot be empty");
                }
            }
            if (selectedUserLevel == "3") {

                if (selectedDistrict == null || selectedDistrict == "") {
                    return toast.error("District cannot be empty");
                }
            }
            let data = {}



            if (loggedInUserLevel == 1) {
                if (selectedUserLevel == "1") {
                    data = {
                        userId: Number(userId),
                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: null,
                        district: null,
                    };
                }
                if (selectedUserLevel == "2") {
                    data = {
                        userId: Number(userId),

                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: Number(selectedRegion),
                        district: null,
                    };
                }
                if (selectedUserLevel == "3") {

                    data = {
                        userId: Number(userId),

                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: null,
                        district: Number(selectedDistrict),
                    };
                }
            }

            if (loggedInUserLevel == 2) {
                if (selectedUserLevel == "2") {
                    data = {
                        userId: Number(userId),

                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: Number(loggedInUserRegion),
                        district: null,
                    };
                }
                if (selectedUserLevel == "3") {
                    data = {
                        userId: Number(userId),

                        userRoleId: Number(userRole),
                        userLevelId: Number(selectedUserLevel),
                        surname,
                        otherNames,
                        email,
                        phoneNumber,
                        designation,
                        region: Number(loggedInUserRegion),
                        district: Number(selectedDistrict),
                    };
                }
            }

            if (loggedInUserLevel == 3) {
                data = {
                    userId: Number(userId),

                    userRoleId: Number(userRole),
                    userLevelId: Number(selectedUserLevel),
                    surname,
                    otherNames,
                    email,
                    phoneNumber,
                    designation,
                    region: loggedInUserRegion,
                    district: loggedInUserDistrict,
                };
            }
            const response = await axios.put("/api/user", data);
            if (response.status == 200) {
                setSurname("");
                setOtherNames("");
                setEmail("");
                setPhoneNumber("");
                setDesignation("");
                setUserRole("");
                setSelectedRegion("");
                setSelectedDistrict("");
                setIsEditing(false);
                setSelectedUserLevel("");

                router.refresh()
                return toast.success("User updated successfully");

            }



        } catch (error) {
            console.log(error);
            return toast.error("An error occurred while updating user");
        }
    };


    const handleSearch = () => {
        try {
            let _searchText: any = searchTextRef?.current?.value


            router.push(
                `${pathname}?searchText=${_searchText}&page=${page}`

            );

        } catch (error) {
            console.log(error);
        }
    };

    const handleExportAll = async () => {
        try {
            let searchText = searchParams.get('searchText')
            const response = await axios.get(
                `/api/user?exportFile=true`,

            );



            if (response.status == 200) {
                router.push(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <main id="main" className="main">
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            <div className="pagetitle">
                <h1>USERS</h1>
                {/* <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">Forms</li>
                        <li className="breadcrumb-item active">Elements</li>
                    </ol>
                </nav> */}
            </div>
            {/* End Page Title */}
            <section className="section">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enter user details</h5>
                                {/* General Form Elements */}
                                <form>
                                    <div className="row">

                                        
                                        <div className="col-sm-3  mb-3">
                                            <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                                First name
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control" placeholder='Other names' onChange={(e) => setOtherNames(e.target.value)} value={otherNames} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3 mb-3">
                                            <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                                Last name
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} value={surname} />
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-3  mb-3">
                                            <label htmlFor="inputEmail" className="col-sm-12 col-form-label">
                                                Email
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="email" className="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                            </div>
                                        </div> */}
                                        <div className="col-sm-3 mb-3">
                                            <label
                                                htmlFor="inputNumber"
                                                className="col-sm-12 col-form-label"
                                            >
                                                Phone Number
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="number" className="form-control" placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                            </div>
                                        </div>
                                  
                                        {/* <div className="col-sm-3  mb-3">
                                            <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                                Designation/Role
                                            </label>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control" placeholder='Designation/Position' onChange={(e) => setDesignation(e.target.value)} value={designation} />
                                            </div>
                                        </div> */}
                                        <div className="col-sm-3 mb-3">
                                            <label className="col-sm-12 col-form-label">Select role</label>
                                            <div className="col-sm-12">
                                                <select
                                                    onChange={(e: any) => setUserRole(e.target.value)}
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    value={userRole}
                                                >

                                                    <option >Select user role</option>
                                                    {data.roles.map((role: any) => {
                                                        return (
                                                            <option key={role.id} value={role.id}>{role.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div> 
                                         {loggedInUserLevel != "3" ?
                                            <div className="col-sm-3  mb-3">
                                                <label className="col-sm-12 col-form-label">Select user level</label>

                                                <div className="col-sm-12">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={(e: any) => {


                                                            setSelectedUserLevel(e.target.value);
                                                            setSelectedRegion("");
                                                            setSelectedDistrict("");
                                                            if (selectedUserLevel == "1") {
                                                                setSelectedRegion("");
                                                                setSelectedDistrict("");
                                                            }
                                                            // if (selectedUserLevel == "2") {
                                                            //     setDistrict("");
                                                            // }


                                                            if (selectedUserLevel == "2") {
                                                                //console.log("selectedUserLevel...", selectedUserLevel);

                                                                // getDistrictsByRegion(loggedInUserRegion);

                                                                setSelectedRegion("");
                                                            }

                                                            if (selectedUserLevel == "3") {

                                                                // getDistrictsByRegion(loggedInUserRegion);

                                                                setSelectedRegion("");
                                                            }

                                                        }}
                                                        value={selectedUserLevel}
                                                    >
                                                        <option >Select user level</option>
                                                        <option hidden={loggedInUserLevel != 1} value="1">
                                                            National
                                                        </option>
                                                        <option hidden={loggedInUserLevel != 1 && loggedInUserLevel != 2} value="2">
                                                            Region
                                                        </option>
                                                        <option
                                                            hidden={loggedInUserLevel != 1 && loggedInUserLevel != 2}
                                                            value="3"
                                                        >
                                                            District
                                                        </option>
                                                        {/* {data.userLevels.map((ul: any) => {
                                                    return (
                                                        <option key={ul.id} value={ul.id}>{ul.name}</option>
                                                    )
                                                })} */}
                                                    </select>
                                                </div>
                                            </div> : <></>}
                                        {(selectedUserLevel == "2" && loggedInUserLevel == "1") ?
                                            <div className="col-sm-3 mb-3">
                                                <label className="col-sm-12 col-form-label">Select region</label>

                                                <div className="col-sm-12">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={async (e: any) => {
                                                            //setFilterValue(e.target.value);
                                                            setSelectedRegion(e.target.value);

                                                            await getDistrictsByRegion(e.target.value);
                                                        }}
                                                        value={selectedRegion}
                                                    >
                                                        <option >Select region</option>
                                                        {data.regions.map((rg: any) => {
                                                            return (
                                                                <option key={rg.id} value={rg.id}>{rg.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div> : <></>}
                                        {/* {selectedUserLevel == "3" ?
                                    <div className=" mb-3">
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option >Select district</option>
                                                {data.districts.map((d: any) => {
                                                    return (
                                                        <option key={d.id} value={d.id}>{d.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>:<></>} */}
                                        {selectedUserLevel == "3" ? (
                                            <>
                                                {loggedInUserLevel == "1" ? (
                                                    <div className="col-sm-3  mb-3">
                                                        <label className="col-sm-12 col-form-label">Select region</label>

                                                        <div className="col-sm-12">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={async (e: any) => {
                                                                    //setFilterValue(e.target.value);
                                                                    setSelectedRegion(e.target.value);

                                                                    await getDistrictsByRegion(e.target.value);
                                                                }}
                                                                value={selectedRegion}
                                                            >
                                                                {" "}
                                                                <option >Select region </option>
                                                                {data.regions?.map((data: any) => (
                                                                    <option key={data.id} value={data.id}>
                                                                        {data.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                                <div className="col-sm-3  mb-3">
                                                    <label className="col-sm-12 col-form-label">Select district</label>

                                                    <div className="col-sm-12">
                                                        <select
                                                            className="form-control"
                                                            aria-label="Default select example"
                                                            onChange={(e: any) => {
                                                                setSelectedDistrict(e.target.value);
                                                            }}
                                                            value={selectedDistrict}
                                                        >
                                                            <option >Select district </option>
                                                            {districts?.map((data: any) => (
                                                                <option key={data.id} value={data.id}>
                                                                    {data.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}</div>


                                    <div className=" mb-3">
                                        <div className="col-sm-10">
                                            {isEditing ? (
                                                <>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={(e) => {
                                                            e.preventDefault();

                                                            setIsEditing(false);

                                                            setSurname("");
                                                            setOtherNames("");
                                                            setEmail("");
                                                            setPhoneNumber("");
                                                            setDesignation("");
                                                            setUserRole("");
                                                            setSelectedUserLevel("");
                                                            setSelectedRegion("");
                                                            setSelectedDistrict("");
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                    {"  "} {"  "}
                                                    <button
                                                        className="btn btn-warning"
                                                        onClick={(e) => {
                                                            updateUser(e);
                                                        }}
                                                    >
                                                        Update
                                                    </button>
                                                </>
                                            ) : (
                                                <button type="submit" className="btn btn-primary" onClick={(e) => addUser(e)}>
                                                    Add
                                                </button>
                                            )}

                                        </div>
                                    </div>
                                </form>
                                {/* End General Form Elements */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body table-responsive">
                                <h5 className="card-title">Users List</h5>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Enter search term' ref={searchTextRef}
                                                id="searchText"
                                                name="searchText" />
                                            <span className="input-group-text" id="basic-addon2">  <button type="button" onClick={handleSearch} className="btn btn-sm btn-primary btn-label waves-effect right waves-light form-control"><i className="bi bi-search"></i></button></span>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group mb-3">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-success  "
                                                onClick={handleExportAll}
                                            >
                                                <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                                Export as excel
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <table className="table datatable table-striped ">

                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Region</th>
                                            <th scope="col">District</th>
                                            <th scope="col">OTP</th>

                                            <th scope="col">Status</th>

                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.users.response.map((user: any) => (
                                            <tr key={user.id}>
                                                <td>{user?.otherNames} {user?.surname}</td>
                                                <td>{user?.phoneNumber}</td>
                                                <td>{user?.email}</td>
                                                <td>{user?.UserLevel?.name}</td>
                                                <td>{user?.Region?.name}</td>
                                                <td>{user?.District?.name}</td>
                                                <td><span style={{ "cursor": "pointer" }}
                                                    onClick={() => {
                                                        setShowOtp(!showOtp)
                                                    }}>{!showOtp ? "****" : user?.tempPassword}</span></td>

                                                <td>{user?.deleted == 1 ? <>
                                                    <span className="badge bg-danger"><i className="bi bi-check-circle me-1"></i> Inactive</span>
                                                </> : <>              <span className="badge bg-success"><i className="bi bi-check-circle me-1"></i> Active</span>
                                                </>}</td>

                                                <td>   <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Button group with nested dropdown"
                                                >
                                                    <div className="btn-group" role="group">
                                                        <button
                                                            id="btnGroupDrop1"
                                                            type="button"
                                                            className="btn btn-success dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Actions
                                                        </button>
                                                        <ul
                                                            className="dropdown-menu"
                                                            aria-labelledby="btnGroupDrop1"
                                                        >
                                                            <li>

                                                                <button
                                                                    className="dropdown-item btn btn-sm "
                                                                    onClick={async(e) =>  {
                                                                        e.preventDefault();
                                                                        setIsEditing(true);



                                                                        setSurname(user.surname);
                                                                        setOtherNames(user.otherNames);
                                                                        setEmail(user.email);
                                                                        setPhoneNumber(user.phoneNumber);
                                                                        setDesignation(user.designation);
                                                                        setUserRole(user.userRoleId);
                                                                        setSelectedUserLevel(user.userLevelId);
                                                                        setUserId(user.id);
                                                                        setSelectedRegion(user.regionId);
                                                                        setSelectedDistrict(user.districtId);

                                                                     await   getDistrictsByRegion(user.regionId)


                                                                        // let phoneNumber = user.phoneNumber;
                                                                        // const response = await axios.put(
                                                                        //     `/api/user`,
                                                                        //     { phoneNumber }
                                                                        // );
                                                                        // router.refresh()
                                                                    }}
                                                                >
                                                                    Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="dropdown-item btn btn-sm "
                                                                    onClick={async (e) => {
                                                                        try {
                                                                            e.preventDefault();
                                                                            let id = user.id;
                                                                            const response = await axios.delete(
                                                                                `/api/user`,
                                                                                {
                                                                                    data: { id },
                                                                                }
                                                                            );
                                                                            if (response.status == 200) {
                                                                                router.refresh()
                                                                                return toast.success("User status changed");

                                                                            }


                                                                        } catch (error) {
                                                                            return toast.error("An error occurred");

                                                                        }

                                                                    }}

                                                                >
                                                                    Change Status
                                                                </button>

                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="dropdown-item btn btn-sm "
                                                                    onClick={async (e) => {
                                                                        try {
                                                                            e.preventDefault();
                                                                            let phoneNumber = user.phoneNumber;
                                                                            const response = await axios.post(
                                                                                `/api/user/reset-password`,
                                                                                { phoneNumber }
                                                                            );
                                                                            router.refresh()
                                                                            return toast.success("Password reset. User will receive one time password");

                                                                        } catch (error) {

                                                                        }

                                                                    }}
                                                                >
                                                                    Reset Password
                                                                </button>

                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="dropdown-item btn btn-sm "
                                                                    onClick={async (e) => {
                                                                        try {
                                                                            e.preventDefault();
                                                                            let userId = user.id;
                                                                            const response = await axios.delete(
                                                                                `/api/user`, {
                                                                                data: { userId },
                                                                            }
                                                                            );
                                                                            router.refresh()
                                                                            return toast.success("User deleted");

                                                                        } catch (error) {

                                                                        }

                                                                    }}
                                                                >
                                                                    Delete
                                                                </button>

                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div></td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                                <ReactPaginate
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    initialPage={data?.users?.curPage - 1}
                                    pageCount={data?.users?.maxPage}
                                    onPageChange={handlePagination}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item"}
                                    nextLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}
