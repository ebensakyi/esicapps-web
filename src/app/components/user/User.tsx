"use client"
import Image from 'next/image'
import { useState } from 'react';
import { userLevel } from '../../../../prisma/seed/userLevel';
import { district } from '../../../../prisma/seed/district';
import axios from 'axios';
import router from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function User({ data }: any) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { data: session } = useSession()

    const loggedInUserRegion = session?.user?.regionId;
    const loggedInUserDistrict = session?.user?.districtId;
    const loggedInUserLevel = session?.user?.userLevelId



    const searchText = searchParams.get('searchText');
    const formId = searchParams.get('formId');


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
    // const [searchText, setSearchText] = useState();



    const getDistrictsByRegion = async (regionId: number) => {
        try {
console.log("getDistrictsByRegion");


            const response = await axios.get(
                "/api/primary-data/district?regionId=" + regionId
            );
            setDistricts(response.data);
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
    // const autoHandleSearch = (searchText: any) => {
    //     try {
    //         let currentUrl = router.pathname;
    //         const path = router.pathname;
    //         const query = router.query;

    //         let page = 1// query.page;

    //         router.push({
    //             pathname: path,
    //             query: {
    //                 page,
    //                 searchText,
    //             },
    //         });

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const handlePagination = (page: any) => {
    //     const path = router.pathname;
    //     const query = router.query;
    //     query.page = page.selected + 1;
    //     router.push({
    //         pathname: path,
    //         query: query,
    //     });
    // };

    const addUser = async (e: any) => {
        try {
            e.preventDefault();



            if (surname == "") {
                return toast.error("Surname cannot be empty");
            }
            if (otherNames == "") {
                return toast.error("Other Names cannot be empty");
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
            console.log(data);



            const response = await axios.post("/api/user", data);
            router.refresh()

            setSurname("");
            setOtherNames("");
            setEmail("");
            setPhoneNumber("");
            setDesignation("");
            setUserRole("");
            setSelectedRegion("");
            setSelectedDistrict("");

            setSelectedUserLevel("");

            return toast.success(response.data.message);
        } catch (error: any) {
            return toast.error(error.response.data.message);
        }
    };

    const updateUser = async (e: any) => {
        try {
            e.preventDefault();

            if (surname == "") {
                return toast.error("Surname cannot be empty");
            }
            if (otherNames == "") {
                return toast.error("Other Names cannot be empty");
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

            let data = {
                userId,
                userRoleId: Number(userRole),
                userLevelId: Number(selectedUserLevel),
                surname,
                otherNames,
                email,
                phoneNumber,
                designation,
                region: selectedRegion,
                district: selectedDistrict,
            };

            const response = await axios.put("/api/v1/user", data);
            router.refresh()

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

            return toast.success(response.data.message);
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred while updating user");
        }
    };



    return (
        <main id="main" className="main">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enter user details</h5>
                                {/* General Form Elements */}
                                <form>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Surname
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} value={surname} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Other name(s)
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Other names' onChange={(e) => setOtherNames(e.target.value)} value={otherNames} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputEmail" className="col-sm-12 col-form-label">
                    Email
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                    </div>

                                    <div className=" mb-3">
                                        {/* <label
                    htmlFor="inputNumber"
                    className="col-sm-12 col-form-label"
                  >
                   Phone Number
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Designation/Role
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Designation/Position' onChange={(e) => setDesignation(e.target.value)} value={designation} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label className="col-sm-2 col-form-label">Select role</label> */}
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
                                                        <option value={role.id}>{role.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    {loggedInUserLevel != "3" ?
                                    <div className=" mb-3">
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

                                                    
                                                    if (selectedUserLevel == "3") {
                                                    console.log("selectedUserLevel...",selectedUserLevel);

                                                        getDistrictsByRegion(loggedInUserRegion);

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
                                    </div>:<></>}
                                    {(selectedUserLevel == "2" && loggedInUserLevel=="1") ?
                                        <div className=" mb-3">
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
                                                <div className=" mb-3">
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
                                            <div className=" mb-3">
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
                                    )}
                                    <div className=" mb-3">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary" onClick={(e) => addUser(e)}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* End General Form Elements */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Users List</h5>
                                <table className="table datatable table-striped ">

                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Region</th>
                                            <th scope="col">District</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.users.map((user: any) => (
                                            <tr key={user.id}>
                                                <td>{user?.otherNames} {user?.surname}</td>
                                                <td>{user?.phoneNumber}</td>
                                                <td>{user?.email}</td>
                                                <td>{user?.UserLevel?.name}</td>
                                                <td>{user?.Region?.name}</td>
                                                <td>{user?.District?.name}</td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}
