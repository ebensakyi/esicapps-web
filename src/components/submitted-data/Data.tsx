"use client"
import Link from 'next/link'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import moment from "moment";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSession } from 'next-auth/react';
import { userLevel } from '../../../prisma/seed/userLevel';
import { district } from '../../../prisma/seed/district';
import { region } from '../../../prisma/seed/region';
import { useState } from 'react';


export default async function Data() {

    // const { data: session } = useSession()

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const formId = Number(searchParams.get("formId"))
    const published = Number(searchParams.get('published'))
    const page = Number(searchParams.get('page'))
    const searchtext = searchParams.get('searchText')






    const [searchText, setSearchText] = useState();
    const [districtsData, setDistrictsData] = useState([]);
    const [electoralAreasData, setElectoralAreasData] = useState([]);
    const [communitiesData, setCommunitiesData] = useState([]);

    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [electoralArea, setElectoralArea] = useState("");
    const [community, setCommunity] = useState("");

    const [filterValue, setFilterValue] = useState("");
    const [filterBy, setFilterBy] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");


    var dateString = moment().format("DD-MM-yyyy-HH-mm-ss-a");









    // const handlePagination = (page: { selected: number; }) => {
    //     router.push(
    //         `${pathname}?published=${published}&formId=${formId}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`,
    //     );

    // };

    // const handleExportAll = async () => {
    //     try {
    //         const response = await axios.post(
    //             `/api/v1/submitted-data/data-to-excel`,
    //             {
    //                 inspectionFormId: Number(formId),
    //                 fileName: handleExcelName(),
    //                 published,
    //                 filterBy,
    //                 filterValue,
    //                 searchText
    //             }
    //         );
    //         if (response.status == 200) {
    //             router.push(response.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const handleExportFiltered = async () => {
    //     try {
    //         const response = await axios.post(
    //             `/api/v1/submitted-data/data-to-excel`,
    //             {
    //                 inspectionFormId: Number(formId),
    //                 fileName: handleExcelName(),
    //                 published,
    //                 filterBy,
    //                 filterValue,
    //                 exportType: 2,
    //             }
    //         );
    //         if (response.status == 200) {
    //             router.push(response.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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

    // const returnFilterValue = async (filterBy: string | undefined) => {
    //     if (filterBy == "regionId") {
    //         setFilterValue(region);
    //         return region;
    //     }
    //     if (filterBy == "districtId") {
    //         setFilterValue(district);
    //         return district;
    //     }
    //     if (filterBy == "electoralAreaId") {
    //         setFilterValue(electoralArea);
    //         return electoralArea;
    //     }
    //     if (filterBy == "community") {
    //         setFilterValue(community);
    //         return community;
    //     }
    // };
    // const handleFilter = async (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();




    //     await returnFilterValue(filterBy);
    //     router.push(
    //         `${pathname}?published=${published}&formId=${formId}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`,
    //     );

    // };

    // const getDistrictsByRegion = async (regionId: string | undefined) => {
    //     try {
    //         const response = await axios.get(
    //             "/api/v1/primary-data/district?regionId=" + regionId
    //         );
    //         setDistrictsData(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const getElectoralAreasByDistrict = async (districtId: string | undefined) => {
    //     try {
    //         const response = await axios.get(
    //             "/api/v1/primary-data/electoral-area?districtId=" + districtId
    //         );
    //         setElectoralAreasData(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const getCommunitiesByElectoralArea = async (electoralAreaId: string) => {
    //     try {
    //         const response = await axios.get(
    //             "/api/v1/primary-data/community?electoralAreaId=" + electoralAreaId
    //         );

    //         setCommunitiesData(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const autoHandleSearch = (searchText: any) => {
    //     try {


    //         router.push(
    //             `${pathname}?published=${published}&formId=${formId}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`,
    //         );

    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // let userLevel = session?.user?.userLevelId
    // let userRegion = session?.user?.regionId

    // let userDistrict = session?.user?.districtId

    // useEffect(() => {
    //     setSearchText(searchText);
    // }, []);


    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Data </h1>
                {/* <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">Tables</li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                </nav> */}
            </div>
            {/* End Page Title */}
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <div className="card"> */}
                        <div className="card-body">
                            {/* <h5 className="card-title">Tables</h5> */}
                            {/* Pills Tabs */}
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">

                                  

                                    <Link href="/submitted-data/?formId=1&published=1"
                                        className={
                                            formId == 1
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-selected="true"
                                    >
                                        Residential
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=2&published=1"
                                        className={
                                            formId == 2
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Eatery
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=3&published=1"
                                        className={
                                            formId == 3
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=4&published=1"
                                        className={
                                            formId == 4
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Hospitality
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=5&published=1"
                                        className={
                                            formId == 5
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Institution
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=6&published=1"
                                        className={
                                            formId == 6
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Industry
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=7&published=1"
                                        className={
                                            formId == 7
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Market
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link href="/submitted-data/?formId=8&published=1"
                                        className={
                                            formId == 8
                                                ? "nav-link active"
                                                : "nav-link "
                                        }
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Sanitary
                                    </Link>
                                </li>
                            </ul>
                            {/* <div className="col-md-2">
                                <label className="form-label mb-0">Select level</label>

                                <select
                                    className="form-control"
                                    aria-label="Default select example"
                                    onChange={(e) => {
                                        setFilterBy(e.target.value);

                                        if (userLevel == 2) {
                                            getDistrictsByRegion(userRegion);
                                        }

                                        if (userLevel == 3) {
                                            getElectoralAreasByDistrict(userDistrict);
                                        }
                                        if (e.target.value == "national") {
                                            setFilterValue("");
                                        }
                                    }}
                                    value={filterBy}
                                >
                                    <option value="" selected>
                                        Filter by{" "}
                                    </option>
                                    <option hidden={userLevel != 1} value="national">
                                        All
                                    </option>
                                    <option hidden={userLevel != 1} value="regionId">
                                        Region
                                    </option>
                                    <option hidden={userLevel != 1 && userLevel != 2} value="districtId">
                                        District
                                    </option>
                                    <option
                                        hidden={userLevel != 1 && userLevel != 2 && userLevel != 3}
                                        value="electoralAreaId"
                                    >
                                        Electoral Area
                                    </option>
                                    <option
                                        hidden={userLevel != 1 && userLevel != 2 && userLevel != 3}
                                        value="communityId"
                                    >
                                        Community
                                    </option>
                                </select>
                            </div> */}
                        </div>
                        {/* </div> */}

                        {/* End Page Title */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Datatables</h5>


                                        {/* Table with stripped rows */}
                                        <table className="table datatable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Rating </th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Premises Code</th>
                                                    {/* <th scope="col">Start Date</th>
                                                    <th scope="col">End Date</th> */}
                                                    <th scope="col">Inspection Officer</th>
                                                    {/* <th scope="col">GhanaPost GPS</th> */}
                                                    <th scope="col">Lat/Lng</th>
                                                    <th scope="col">GPS Accuracy</th>
                                                    <th scope="col">Region</th>
                                                    <th scope="col">District</th>
                                                    <th scope="col">Electoral Area</th>
                                                    <th scope="col">Community</th>
                                                    {/* <th>Respondent</th>
                                                     <th>Designation</th> */}{" "}
                                                    <th scope="col">Submission Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {data.inspection.map(dt  => {
                                                    return (
                                                        <tr key={dt.id}>
                                                            <td>{handleRating(dt?.Inspection?.totalRating)}</td>
                                                            <td>
                                                                {dt?.Inspection?.InspectionType?.name}
                                                                {dt?.Inspection?.InspectionType?.id == 2 ? (
                                                                    <span>
                                                                        <Link
                                                                            href={{
                                                                                pathname: `/submitted-data/data_view`,
                                                                                query: {
                                                                                    id: dt?.Inspection?.prevInspectionId,
                                                                                    inspectionFormId: formId,
                                                                                    published: published,
                                                                                },
                                                                            }}
                                                                        >
                                                                            <a className="dropdown-item">
                                                                                <i className="ri-external-link-line align-bottom me-2 text-success" />
                                                                            </a>
                                                                        </Link>
                                                                    </span>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </td>
                                                            <td>{dt?.Inspection?.premisesCode}</td>
                                                            <td>
                                                                {moment(dt?.Inspection?.startedAt).format(
                                                                    "MMM Do YYYY, h:mm:ss a"
                                                                )}
                                                            </td>
                                                            <td>
                                                                {moment(dt?.Inspection?.completedAt).format(
                                                                    "MMM Do YYYY, h:mm:ss a"
                                                                )}
                                                            </td>
                                                            <td>
                                                                {dt?.User?.otherNames} {dt?.User?.surname}
                                                            </td>
                                                            <td>
                                                                {" "}
                                                                <Link
                                                                    href={{
                                                                        pathname: `http://www.google.com/maps/place/${dt?.latitude},${dt?.longitude}`,
                                                                        query: {},
                                                                    }}
                                                                    passHref
                                                                >
                                                                    <a
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="dropdown-item"
                                                                    >
                                                                        {" "}
                                                                        {dt?.latitude},{dt?.longitude}
                                                                        <i className="ri-external-link-line align-bottom me-2 text-success" />
                                                                    </a>
                                                                </Link>
                                                            </td>
                                                            <td>{dt?.accuracy}</td>
                                                            <td>
                                                                {dt?.Community?.ElectoralArea?.District?.Region?.name}
                                                            </td>
                                                            <td>{dt?.Community?.ElectoralArea?.District?.name}</td>
                                                            <td>{dt?.Community?.ElectoralArea?.name}</td>
                                                            <td>{dt?.Community?.name}</td>{" "}
                                                            <td>
                                                                {moment(dt?.Inspection?.createdAt).format(
                                                                    "MMM Do YYYY, h:mm:ss a"
                                                                )}
                                                            </td>
                                                            <td>
                                                                {dt?.Inspection?.isPublished == 0 ? (
                                                                    <span className="badge bg-danger">Unpublished</span>
                                                                ) : (
                                                                    <span className="badge bg-success">Published</span>
                                                                )}{" "}
                                                            </td>
                                                            <td>
                                                                <Link
                                                                    href={{
                                                                        pathname: `/submitted-data/data_view`,
                                                                        query: {
                                                                            id: dt?.Inspection?.id,
                                                                            inspectionFormId: formId,
                                                                            published: published,
                                                                        },
                                                                    }}
                                                                >
                                                                    <a className="dropdown-item">
                                                                        <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                                                                        View
                                                                    </a>
                                                                </Link>
                                                                <Link
                                                                    href={{
                                                                        pathname: `/submitted-data/data_edit`,
                                                                        query: {
                                                                            id: dt?.Inspection?.id,
                                                                            inspectionFormId: formId,
                                                                            published: published,
                                                                        },
                                                                    }}
                                                                >
                                                                    <a className="dropdown-item">
                                                                        <i className="ri-edit-fill align-bottom me-2 text-muted" />{" "}
                                                                        Edit
                                                                    </a>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })} */}
                                            </tbody>
                                        </table>
                                        {/* <ReactPaginate
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            breakLabel={"..."}
                                            initialPage={data.curPage - 1}
                                            pageCount={data.maxPage}
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
                                        /> */}
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

