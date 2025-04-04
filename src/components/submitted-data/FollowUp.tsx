'use client'
import Link from 'next/link'
import { redirect, useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import moment from "moment";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { LOGIN_URL } from '@/config';
import { toast } from 'react-toastify';



export default function FollowUp({ data }: any) {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })
    let userSession: any = session;


    let nationalUser: any = userSession?.user?.userLevelId == 1;
    let regionalUser: any = userSession?.user?.userLevelId == 2;
    let districtUser: any = userSession?.user?.userLevelId == 3;

    // let inspectionDeletionAllowed: any = session?.user?.UserRole?.inspectionDeletionAllowed
    // let inspectionPublishAllowed: any = session?.user?.UserRole?.inspectionPublishAllowed
    let inspectionUpdatesAllowed: any = userSession?.user?.UserRole?.inspectionUpdatesAllowed

    const searchTextRef: any = useRef(null);
    const filterRef: any = useRef(null);
    const [loading, setLoading] = useState(false);


    // const { data: session } = useSession()

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const formId = Number(searchParams.get("formId"))
    const deleted = Number(searchParams.get('deleted'))

    const page = Number(searchParams.get('page'))
    const searchtext = searchParams.get('searchText')
    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [electoralArea, setElectoralArea] = useState("");
    const [community, setCommunity] = useState("");

    const [searchText, setSearchText] = useState();
    const [districtsData, setDistrictsData] = useState([]);
    const [electoralAreasData, setElectoralAreasData] = useState([]);
    const [communitiesData, setCommunitiesData] = useState([]);
    const [isPublished, setIsPublished] = useState("");


    const [filterValue, setFilterValue] = useState("");
    const [filterBy, setFilterBy] = useState("1");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");


    var dateString = moment().format("DD-MM-yyyy-HH-mm-ss-a");








    // const handlePagination = (page: { selected: number; }) => {
    //     router.push(
    //         `${pathname}?published=${published}&formId=${formId}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`,
    //     );

    // };

    const handleExportAll = async () => {
        try {
            let searchText = searchParams.get('searchText')
            const response = await axios.get(
                `/api/submitted-data/follow-up/export?formId=${formId}&searchText=${searchText}&fileName=${handleExcelName()}`,

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
            `${pathname}?formId=${formId}&deleted=${deleted}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`

        );
    };
    const handleFilter = async (e: any) => {
        try {
            e.preventDefault();




            if (filterBy == "national") {
                return router.push("/");
            }
            if (filterBy == "" || filterBy == "") {
                return toast.error("Please select a filter");
            }
            if (filterBy == "communityId" && community == "") {
                return toast.error("Please select community");
            }
            if (filterBy == "electoralAreaId" && electoralArea == "") {

                return toast.error("Please select electoral area");
            }
            if (filterBy == "districtId" && district == "") {

                return toast.error("Please select districtt");
            }
            if (filterBy == "regionId" && region == "") {
                return toast.error("Please select region");
            }




            setLoading(true)

            let val = await returnFilterValue(filterBy);


            router.push(
                `${pathname}?filterBy=${filterBy}&published=${isPublished}&filterValue=${filterValue}&from=${from}&to=${to}`
            );

            setLoading(false);
        } catch (error) {
            console.log(error);

        }
    }

    const returnFilterValue = async (filterBy: any) => {
        if (filterBy == "regionId") {
            setFilterValue(region);
            return region;
        }
        if (filterBy == "districtId") {
            setFilterValue(district);
            return district;
        }
        if (filterBy == "electoralAreaId") {
            setFilterValue(electoralArea);
            return electoralArea;
        }
        if (filterBy == "community") {
            setFilterValue(community);
            return community;
        }
    };

    const handleRating = (rating: number) => {
        try {
            if (rating >= 4) {
                return <span className="badge bg-success">Good</span>;
            } else if (rating >= 3 && rating < 4) {
                return <span className="badge bg-warning">Average</span>;
            } else if (rating < 3) {
                return <span className="badge bg-danger">Poor</span>;
            } else {
                return <span className="badge bg-primary">Default</span>;
            }
        } catch (error) { }
    };

    const handleExcelName = () => {
        try {
            if (formId == 1) {
                return `RESIDENTIAL PREMISES-${dateString}.xlsx`;
            } else if (formId == 2) {
                return `EATING & DRINKING PREMISES-${dateString}.xlsx`;
            } else if (formId == 3) {
                return `HEALTH PREMISES-${dateString}.xlsx`;
            } else if (formId == 4) {
                return `HOSPITALITY PREMISES-${dateString}.xlsx`;
            } else if (formId == 5) {
                return `INSTITUTION PREMISES-${dateString}.xlsx`;
            } else if (formId == 6) {
                return `INDUSTRY PREMISES-${dateString}.xlsx`;
            } else if (formId == 7) {
                return `MARKETS & LORRY PARK PREMISES-${dateString}.xlsx`;
            } else if (formId == 8) {
                return `SANITARY FACILITY PREMISES-${dateString}.xlsx`;
            }
        } catch (error) { }
    };

    const handleTitle = () => {
        try {
            if (formId == 1) {
                return <h5 className="card-title mb-0">RESIDENTIAL PREMISES</h5>;
            } else if (formId == 2) {
                return <h5 className="card-title mb-0">EATING & DRINKING PREMISES</h5>;
            } else if (formId == 3) {
                return <h5 className="card-title mb-0">HEALTH PREMISES</h5>;
            } else if (formId == 4) {
                return <h5 className="card-title mb-0">HOSPITALITY PREMISES</h5>;
            } else if (formId == 5) {
                return <h5 className="card-title mb-0">INSTITUTION PREMISES</h5>;
            } else if (formId == 6) {
                return <h5 className="card-title mb-0">INDUSTRY PREMISES</h5>;
            } else if (formId == 7) {
                return (
                    <h5 className="card-title mb-0">MARKETS & LORRY PARK PREMISES</h5>
                );
            } else if (formId == 8) {
                return <h5 className="card-title mb-0">SANITARY FACILITY PREMISES</h5>;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getDistrictsByRegion = async (regionId: any) => {

        try {
            const response = await axios.get(
                `/api/primary-data/district?regionId=${regionId}&get_all=1`
            );

            setDistrictsData(response.data.response);
        } catch (error) {
            console.log(error);
        }
    };
    const getElectoralAreasByDistrict = async (districtId: any) => {
        try {
            const response = await axios.get(
                "/api/primary-data/electoral-area?districtId=" + districtId + "&get_all=1"
            );
            setElectoralAreasData(response.data.response);
        } catch (error) {
            console.log(error);
        }
    };
    const getCommunitiesByElectoralArea = async (electoralAreaId: any) => {
        try {
            const response = await axios.get(
                "/api/primary-data/community?electoralAreaId=" + electoralAreaId + "&get_all=1"
            );

            setCommunitiesData(response.data.response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        try {
            let _searchText: any = searchTextRef?.current?.value

            let _deleted: any = filterRef?.current?.value


            router.push(
                `${pathname}?formId=${formId}}&deleted=${_deleted}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${_searchText}`

            );

        } catch (error) {
            console.log(error);
        }
    };
    const handleFilterReset = () => {
        setRegion("")
        setDistrict("")
        setElectoralArea("")
        setCommunity("")

        router.push(
            `${pathname}`

        );
    }




    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Follow up Data </h1>
                {/* <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">Tables</li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                </nav> */}

                <br />
                <div className=" mb-3">

                    <div className="row align-items-right gy-3 mb-3">

                        <div className="col-md-4">
                            <div className="input-group mb-3">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-success  "
                                    onClick={() => handleExportAll()}
                                >
                                    <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                    Export as excel
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
            {/* End Page Title */}
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        {/* End Page Title */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row row-cols-lg-auto g-3 align-items-center">
                                            <div className="col-md-2">
                                                <label className="form-label mb-0">Publishing status</label>

                                                <select ref={filterRef}
                                                    id="filterRef"
                                                    name="filterRef" className="form-select input-group" onChange={(e: any) => {
                                                        setIsPublished(e.target.value)
                                                    }}>
                                                    <option value="undefined" selected>
                                                        Show all
                                                    </option>
                                                    <option value="1">
                                                        Published
                                                    </option>
                                                    <option value="0">
                                                        Unpublished
                                                    </option>
                                                    {/* <option value="1">
                                                        Deleted
                                                    </option> */}
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label mb-0">Select level</label>

                                                <select
                                                    className="form-control"
                                                    aria-label="Default select example"
                                                    onChange={(e: any) => {
                                                        setFilterBy(e.target.value);
                                                        setRegion("")
                                                        setDistrict("")
                                                        setElectoralArea("")
                                                        setCommunity("")

                                                        if (regionalUser) {
                                                            getDistrictsByRegion(region);
                                                        }

                                                        if (districtUser) {
                                                            getElectoralAreasByDistrict(district);
                                                        }
                                                        if (e.target.value == "national") {
                                                            setFilterValue("");
                                                        }
                                                    }}
                                                    value={filterBy}
                                                >
                                                    <option value={""}>Filter by </option>
                                                    <option hidden={!nationalUser} value="national">
                                                        National
                                                    </option>
                                                    <option hidden={!nationalUser} value="regionId">
                                                        Region
                                                    </option>
                                                    <option
                                                        hidden={!nationalUser && !regionalUser}
                                                        value="districtId"
                                                    >
                                                        District
                                                    </option>
                                                    <option
                                                        hidden={!nationalUser && !regionalUser && !districtUser}
                                                        value="electoralAreaId"
                                                    >
                                                        Electoral Area
                                                    </option>
                                                    <option
                                                        hidden={!nationalUser && !regionalUser && !districtUser}
                                                        value="communityId"
                                                    >
                                                        Community
                                                    </option>
                                                </select>
                                            </div>

                                            {filterBy == "regionId" ? (
                                                <div className="col-md-2">
                                                    <label className="form-label mb-0">Select region</label>
                                                    <select
                                                        className="form-control"
                                                        aria-label="Default select example"
                                                        onChange={async (e: any) => {
                                                            setRegion(e.target.value);

                                                            setFilterValue(e.target.value);
                                                        }}
                                                        value={region}
                                                    >
                                                        {" "}
                                                        <option value={""}>Select region </option>
                                                        {data.regions?.map((data: any) => (
                                                            <option key={data.id} value={data.id}>
                                                                {data.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {filterBy == "districtId" ? (
                                                <>
                                                    {nationalUser ? (
                                                        <div className="col-md-2">
                                                            <label className="form-label mb-0">Select region</label>
                                                            <select
                                                                className="form-control"
                                                                aria-label="Default select example"
                                                                onChange={async (e: any) => {
                                                                    setFilterValue(e.target.value);
                                                                    setRegion(e.target.value);

                                                                    await getDistrictsByRegion(e.target.value);
                                                                }}
                                                                value={region}
                                                            >
                                                                {" "}
                                                                <option value={""}>Select region </option>
                                                                {data.regions?.map((data: any) => (
                                                                    <option key={data.id} value={data.id}>
                                                                        {data.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <div className="col-md-2">
                                                        <label className="form-label mb-0">Select district</label>
                                                        <select
                                                            className="form-control"
                                                            aria-label="Default select example"
                                                            onChange={(e: any) => {
                                                                setFilterValue(e.target.value);
                                                                setDistrict(e.target.value);
                                                            }}
                                                            value={district}
                                                        >
                                                            {" "}
                                                            <option value={""}>Select </option>
                                                            {districtsData?.map((data: any) => (
                                                                <option key={data.id} value={data.id}>
                                                                    {data.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            {filterBy == "electoralAreaId" ? (
                                                <>
                                                    {nationalUser ? (
                                                        <div className="col-md-2">
                                                            <label className="form-label mb-0">Select region</label>
                                                            <select
                                                                className="form-control"
                                                                aria-label="Default select example"
                                                                value={region}
                                                                onChange={async (e: any) => {
                                                                    setFilterValue(e.target.value);
                                                                    setRegion(e.target.value);

                                                                    await getDistrictsByRegion(e.target.value);
                                                                }}
                                                            >
                                                                {" "}
                                                                <option value={""}>Select </option>
                                                                {data.regions?.map((data: any) => (
                                                                    <option key={data.id} value={data.id}>
                                                                        {data.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {nationalUser || regionalUser ? (
                                                        <div className="col-md-2">
                                                            <label className="form-label mb-0">Select district</label>
                                                            <select
                                                                className="form-control"
                                                                aria-label="Default select example"
                                                                onChange={async (e: any) => {
                                                                    setFilterValue(e.target.value);
                                                                    setDistrict(e.target.value);

                                                                    await getElectoralAreasByDistrict(e.target.value);
                                                                }}
                                                                value={district}
                                                            >
                                                                {" "}
                                                                <option value={""}>Select </option>
                                                                {districtsData?.map((data: any) => (
                                                                    <option key={data.id} value={data.id}>
                                                                        {data.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <div className="col-md-2">
                                                        <label className="form-label mb-0">
                                                            Select Electoral Area
                                                        </label>
                                                        <select
                                                            className=" form-control "
                                                            aria-label="Default select example"
                                                            onChange={async (e: any) => {
                                                                setFilterValue(e.target.value);
                                                                setElectoralArea(e.target.value);

                                                                await getCommunitiesByElectoralArea(e.target.value);
                                                            }}
                                                            value={electoralArea}
                                                        >
                                                            {" "}
                                                            <option value={""}>Select </option>
                                                            {electoralAreasData?.map((data: any) => (
                                                                <option key={data.id} value={data.id}>
                                                                    {data.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                            {filterBy == "communityId" ? (
                                                <>
                                                    {nationalUser ? (
                                                        <div className="col-md-2">
                                                            <label className="form-label mb-0">Select region</label>
                                                            <select
                                                                className="form-control"
                                                                aria-label="Default select example"
                                                                onChange={async (e: any) => {
                                                                    setFilterValue(e.target.value);
                                                                    setRegion(e.target.value);

                                                                    await getDistrictsByRegion(e.target.value);
                                                                }}
                                                                value={region}
                                                            >
                                                                {" "}
                                                                <option value={""}>Select </option>
                                                                {data.regions?.map((data: any) => (
                                                                    <option key={data.id} value={data.id}>
                                                                        {data.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    {nationalUser || regionalUser ? (
                                                        <div className="col-md-2">
                                                            <label className="form-label mb-0">Select district</label>
                                                            <select
                                                                className="form-control"
                                                                aria-label="Default select example"
                                                                onChange={async (e: any) => {
                                                                    setFilterValue(e.target.value);
                                                                    setDistrict(e.target.value);
                                                                    await getElectoralAreasByDistrict(e.target.value);
                                                                }}
                                                                value={district}
                                                            >
                                                                {" "}
                                                                <option value={""}>Select </option>
                                                                {districtsData?.map((data: any) => (
                                                                    <option key={data.id} value={data.id}>
                                                                        {data.name}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <div className="col-md-2">
                                                        <label className="form-label mb-0">
                                                            Select Electoral Area
                                                        </label>
                                                        <select
                                                            className=" form-control "
                                                            aria-label="Default select example"
                                                            onChange={async (e: any) => {
                                                                setFilterValue(e.target.value);
                                                                setElectoralArea(e.target.value);

                                                                await getCommunitiesByElectoralArea(e.target.value);
                                                            }}
                                                            value={electoralArea}
                                                        >
                                                            {" "}
                                                            <option value={""}> Select  </option>
                                                            {electoralAreasData?.map((data: any) => (
                                                                <option key={data.id} value={data.id}>
                                                                    {data.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>{" "}
                                                    <div className="col-md-2">
                                                        <label className="form-label mb-0">Select community</label>
                                                        <select
                                                            className=" form-control "
                                                            aria-label="Default select example"
                                                            onChange={(e: any) => {
                                                                setFilterValue(e.target.value);
                                                                setCommunity(e.target.value);
                                                            }}
                                                            value={community}
                                                        >
                                                            {" "}
                                                            <option value={""}>Select </option>
                                                            {communitiesData?.map((data: any) => (
                                                                <option key={data.id} value={data.id}>
                                                                    {data.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                </>
                                            ) : (
                                                <></>
                                            )}

                                            {/* <div className="col-md-12">
              <label className="form-label mb-0">Start Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setFrom(e.target.value)}
                value={from}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label mb-0">End Date</label>

              <input
                type="date"
                className="form-control"
                onChange={(e) => setTo(e.target.value)}
                value={to}
              />
            </div> */}

                                            <div className="col-12">
                                                <label className="form-label mb-0">.</label>
                                                <button
                                                    type="submit"
                                                    className="form-control btn btn-primary"
                                                    onClick={(e: any) => handleFilter(e)}
                                                >
                                                    Filter
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label mb-0">.</label>
                                                <button
                                                    type="submit"
                                                    className="form-control btn btn-danger"
                                                    onClick={(e: any) => handleFilterReset()}
                                                >
                                                    Reset
                                                </button>
                                            </div>

                                        </div>
                                        <form className="row g-3">
                                            {/* <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="City" />
                            </div> */}




                                        </form>
                                        <br /><br />
                                        {/* <div className="row">
                                            <div className="col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-success btn-label waves-effect right waves-light rounded-pill"
                                                    onClick={handleExportAll}
                                                >
                                                    <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                                                    Export as excel
                                                </button>{" "}
                                            </div>
                                            <div className="col-sm-3 mb-3">
                                                <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                                    Search
                                                </label>
                                                <div className="col-sm-12">
                                                    <input type="text" className="form-control" placeholder='Enter search term' value={searchText}
                                                        onChange={(e: any) => {
                                                            setSearchText(e.target.value);
                                                            autoHandleSearch(e.target.value);
                                                        }} />
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                    <div className="card-body table-responsive">
                                        {/* <h5 className="card-title">Datatables</h5> */}


                                        {/* Table with stripped rows */}
                                        <table className="table  datatable">
                                            <thead>
                                                <tr>
                                                <th scope="col">Form </th>

                                                    <th scope="col">Premises Code </th>
                                                    <th scope="col">Region </th>

                                                    <th scope="col">Community </th>
                                                    <th scope="col">Electoral Area</th>
                                                    <th scope="col">Respondent</th>

                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Officer</th>

                                                    <th scope="col">Date</th>
                                                    <th scope="col">View</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data?.followUpData?.response?.map((dt: any) => (
                                                        <tr key={dt.id}>
                                                            <td>{dt?.InspectionForm?.name}</td>

                                                            <td>{dt?.premisesCode}</td>
                                                            <td>{dt?.Community?.ElectoralArea?.District?.Region?.name}</td>
                                                            <td>{dt?.community}</td>

                                                            <td>{dt?.electoralArea}</td>
                                                            <td>{dt?.respondentName}</td>
                                                            <td>{dt?.respondentPhoneNumber}</td>
                                                            <td>{dt?.User?.surname}{" "} {dt?.User?.otherNames}</td>

                                                            <td>
                                                                {moment(dt?.createdAt).format(
                                                                    "MMM Do YYYY, h:mm:ss a"
                                                                )}
                                                            </td>
                                                            <td>
                                                                <div className="dropdown-item btn btn-sm " role="group">
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
                                                                            <Link
                                                                                className="dropdown-item btn btn-sm "
                                                                                href={{
                                                                                    pathname: `/submitted-data/follow-up/data-view`,
                                                                                    query: {
                                                                                        id: dt?.id,
                                                                                        // formId: formId,
                                                                                    },
                                                                                }}
                                                                            >
                                                                                View
                                                                            </Link>

                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>

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
                                            initialPage={data?.followUpData?.curPage - 1}
                                            pageCount={data?.followUpData?.maxPage}
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


                    </div>
                </div>
            </section>
        </main>

    )
}

