//@ts-nocheck

'use client'
import Link from 'next/link'
import { redirect, useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import moment from "moment";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSession } from 'next-auth/react';
import { useRef, useState, useEffect } from 'react';
import { LOGIN_URL } from '@/config';
import { toast } from 'react-toastify';
import Modal from "react-modal";
import { handleExcelName, handleTitle } from '@/utils/data-page-utils';


export default function Data({ data }: any) {

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

    // const searchTextRef: any = useRef(null);
    const filterRef: any = useRef(null);


    // const { data: session } = useSession()

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const formId = Number(searchParams.get("formId"))
    const published = searchParams.get('published')
    const deleted = Number(searchParams.get('deleted'))

    const page = Number(searchParams.get('page'))
    // const searchtext = searchParams.get('searchText')


    // const [searchText, setSearchText] = useState();
    const [districtsData, setDistrictsData] = useState([]);
    const [electoralAreasData, setElectoralAreasData] = useState([]);
    const [communitiesData, setCommunitiesData] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [electoralArea, setElectoralArea] = useState("");
    const [community, setCommunity] = useState("");

    const [filterValue, setFilterValue] = useState("");
    const [filterBy, setFilterBy] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [loading, setLoading] = useState(false);

    const [isPublished, setIsPublished] = useState("");
    const [selectedInspections, setSelectedInspections] = useState([]);
    const [dataType, setDataType] = useState("");

    const [generatingFile, setGeneratingFile] = useState(false);;
    const [fileGenerated, setFileGenerated] = useState(false);;
    const [fileUrl, setFileUrl] = useState("");;


    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {

        const url = `${pathname}?formId=${formId}&published=${published}&searchText=${searchValue}&fileName=${handleExcelName(formId)}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${fromDate}&to=${toDate}`;
        router.push(url);
    }, [searchValue, fileGenerated]);







    const handleExportAll = async () => {
        try {
            setGeneratingFile(true);
            let searchText = searchParams.get('searchText')

            const response = await axios.get(
                `/api/submitted-data/export?formId=${formId}&published=${published}&searchText=${searchValue}&fileName=${handleExcelName(formId)}&fromDate=${fromDate}&toDate=${toDate}`,
            );


            if (response.status == 200) {
                setFileGenerated(true)
                setGeneratingFile(false)
                setFileUrl(response.data);
                console.log(response.data);

                // router.push(response.data);
                // router.refresh()
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlePagination = (page: any) => {

        page = page.selected == -1 ? 1 : page.selected + 1;

        router.push(
            `${pathname}?formId=${formId}&published=${published}&deleted=${deleted}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${fromDate}&to=${toDate}&searchText=${searchValue}`

        );
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

    const handleFilter = async (e: any) => {
        try {
            e.preventDefault();



            if (filterBy == "national") {
                return router.push(pathname);
            }
            if (filterBy == "" || filterBy == null) {
                return toast.error("Please select a filter");
            }
            if (filterBy == "communityId" && community == "") {
                return toast.error("Please select community");
            }
            if (filterBy == "electoralAreaId" && electoralArea == "") {
                return toast.error("Please select electoral area");
            }
            if (filterBy == "districtId" && district == "") {
                return toast.error("Please select district");
            }
            if (filterBy == "regionId" && region == "") {
                return toast.error("Please select region");
            }




            setLoading(true)

            let val = await returnFilterValue(filterBy);


            router.push(
                `${pathname}?filterBy=${filterBy}&published=${isPublished}&filterValue=${filterValue}&from=${fromDate}&to=${toDate}`
            );


            setLoading(false);
        } catch (error) {
            console.log(error);

        }

        // const published = Number(searchParams.get('published'))

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


    const filterByPublishing = async (isPublished: number) => {
        setLoading(true);

        router.push(
            `${pathname}?filterBy=${filterBy}&formId=${formId}&published=${isPublished}&filterValue=${filterValue}&from=${fromDate}&to=${toDate}`
        );
        setLoading(false);
    }



    const filterByDataType = async (dataType: number) => {
        setLoading(true);

        router.push(`${pathname}?dataType=${dataType}&formId=${formId}`);
        setLoading(false);
    }

    const handleInspectionSelected = (value: any) => {
        if (selectedInspections.includes(value)) {
            // If inspection is already selected, remove it
            setSelectedInspections(selectedInspections.filter(item => item !== value));
        } else {
            // If inspection is not selected, add it
            setSelectedInspections([...selectedInspections, value]);
        }
    };



    const handlePublishInspectionSelected = async (value: number) => {
        try {
            setLoading(true);
            const response = await axios.post(`/api/submitted-data`, {
                selectedInspections,
                publishStatus: value
            });
            setLoading(false)
            setSelectedInspections([])
            if (response.status == 200) {
                toast.success("Inspection published");
                router.refresh()
                return
            }
        } catch (error) {
            console.log(error);
            setLoading(false)

        }
    };

    // const handleUnPublishInspectionSelected = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.post(`/api/submitted-data`, {
    //             selectedInspections,
    //             publishStatus: 0
    //         });
    //         setLoading(false)
    //         setSelectedInspections([])
    //         if (response.status == 200) {
    //             toast.success("Inspection published");
    //             router.refresh()
    //             return
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false)

    //     }
    // };

    const handleDeleteInspectionSelected = async () => {
        try {

            setLoading(true);
            const response = await axios.delete(`/api/submitted-data`, {
                data: selectedInspections,
            });
            setLoading(false)
            setSelectedInspections([])
            setIsOpen(false);
            if (response.status == 200) {
                toast.success("Inspection published");
                router.refresh()
                return
            }
        } catch (error) {
            console.log(error);
            setLoading(false)

        }
    };

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    function afterOpenModal() {

    }
    return (
        <main id="main" className="main">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Report info"
            >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Alert </h5>
                                <div className="mb-3">
                                    <div className="col-sm-12">
                                        <p>
                                            Are you sure you want to delete the selected inspection(s)?
                                            <br />
                                            Deleted inspections cannot be restored
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger btn-label waves-effect right waves-light"
                                            onClick={handleDeleteInspectionSelected}
                                        >
                                            <i className="bi bi-trash label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                            Yes
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary btn-label waves-effect right waves-light"
                                            onClick={closeModal}
                                        >
                                            <i className="bi bi-cancel label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                            No Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <div className="pagetitle">
                <h1><h5 className="card-title mb-0">{handleTitle(formId)}</h5> </h1>
                <br />





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
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExport" aria-expanded="true" aria-controls="collapseOne">
                                                        Export
                                                    </button>
                                                </h2>
                                                <div id="collapseExport" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                                    <div className="accordion-body">
                                                        <div className="row mb-3 align-items-end">
                                                            <div className="col-md-3">
                                                                <label className="form-label mb-0">From Date</label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    onChange={(e) => setFromDate(e.target.value)}
                                                                    value={fromDate}
                                                                />
                                                            </div>

                                                            <div className="col-md-3">
                                                                <label className="form-label mb-0">To Date</label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    onChange={(e) => {
                                                                        setToDate(e.target.value)
                                                                        if (new Date(fromDate) > new Date(toDate)) {

                                                                            setToDate('');
                                                                        }
                                                                    }}
                                                                    value={toDate}
                                                                />
                                                            </div>
                                                            {!fileGenerated ?
                                                                <div className="col-md-3 d-flex justify-content-start">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-sm btn-warning"
                                                                        onClick={() => handleExportAll()}
                                                                    >
                                                                        <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                                                        {generatingFile ? " Generating file" : " Export as Excel"}
                                                                    </button>
                                                                </div> :
                                                                <div className="col-md-3 d-flex justify-content-start">
                                                                    {/* <Link
                                                                        href={fileUrl}
                                                                        className="btn btn-sm btn-success"

                                                                    >
                                                                        <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                                                        Download
                                                                    </Link> */}

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-sm btn-success"
                                                                        onClick={() => {
                                                                            setFileGenerated(false)

                                                                            router.push(fileUrl);

                                                                            setTimeout(() => {
                                                                                router.refresh();
                                                                            }, 5000); // Adjust the delay as needed (3 seconds here)
                                                                        }}
                                                                    >
                                                                        <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                                                        Download Excel
                                                                    </button>
                                                                </div>}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSearch" aria-expanded="true" aria-controls="collapseOne">
                                                        Search
                                                    </button>
                                                </h2>
                                                <div id="collapseSearch" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                                    <div className="accordion-body">
                                                        <div className="col-md-4">
                                                            <label className="form-label mb-0">Enter search term</label>

                                                            <div className="input-group mb-3">
                                                                <input type="text" className="form-control" placeholder='Enter search term' value={searchValue}
                                                                    onChange={(e: any) => {
                                                                        setSearchValue(e.target.value);
                                                                        // autoHandleSearch(e.target.value)
                                                                    }} />
                                                                {/* <span className="input-group-text" id="basic-addon2">  <button type="button" onClick={handleSearch} className="btn btn-sm btn-primary btn-label waves-effect right waves-light form-control"><i className="bi bi-search"></i></button></span> */}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseTwo">
                                                        Filter
                                                    </button>
                                                </h2>
                                                <div id="collapseFilter" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="row row-cols-lg-auto g-3 align-items-center">


                                                            <div className="row col-lg-6">
                                                                <div className="col-lg-6">
                                                                    <label className="form-label mb-0">Data kind</label>

                                                                    <select
                                                                        className="form-select input-group" onChange={async (e: any) => {


                                                                            e.preventDefault();
                                                                            setDataType(e.target.value)
                                                                            await filterByDataType(e.target.value);
                                                                        }} value={dataType}>
                                                                        <option value="" >
                                                                            Show all data
                                                                        </option>
                                                                        <option value="1">
                                                                            Actual
                                                                        </option>
                                                                        <option value="2">
                                                                            Demo
                                                                        </option>

                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label className="form-label mb-0">Publishing status</label>

                                                                    <select className="form-select input-group" onChange={(e: any) => {

                                                                        e.preventDefault();
                                                                        setIsPublished(e.target.value)
                                                                        filterByPublishing(e.target.value);
                                                                    }}>
                                                                        <option value="" >
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

                                                            </div>
                                                            <div className="row col-lg-6 border" >

                                                                <div className="row" style={{ margin: "20px" }}>
                                                                    <div className="col-md-4">
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
                                                                        <div className="col-md-4">
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
                                                                                <div className="col-md-4">
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
                                                                            <div className="col-md-4">
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
                                                                                <div className="col-md-4">
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
                                                                                <div className="col-md-4">
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
                                                                            <div className="col-md-4">
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
                                                                                <div className="col-md-4">
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
                                                                                <div className="col-md-4">
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
                                                                            <div className="col-md-4">
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
                                                                            <div className="col-md-4">
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
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <br />




                                        {selectedInspections.length != 0 ?
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-warning btn-label waves-effect right waves-light "
                                                        onClick={async () => await handlePublishInspectionSelected(1)}
                                                    >
                                                        <i className="bi bi-list-check label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                                                        Publish selected
                                                    </button>{" "}
                                                </div>
                                                <div className="col-md-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-danger btn-label waves-effect right waves-light "
                                                        onClick={async () => await handlePublishInspectionSelected(0)}
                                                    >
                                                        <i className="bi bi-list-check label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                                                        Unpublish selected
                                                    </button>{" "}
                                                </div>
                                                <div className="col-md-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-danger btn-label waves-effect right waves-light "
                                                        onClick={() => setIsOpen}
                                                    >
                                                        <i className="bi bi-trash label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                                                        Delete selected
                                                    </button>{" "}
                                                </div>
                                            </div> : <></>}
                                    </div>
                                    <div className="card-body table-responsive">
                                        {/* <h5 className="card-title">Datatables</h5> */}


                                        {/* Table with stripped rows */}

                                        {loading ? <main>
                                            <div className="container">
                                                <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                                                    <h2>Loading...</h2>
                                                    {/* <Image src="../../assets/loading.gif" width={64} alt=""  /> */}
                                                </section>
                                            </div>
                                        </main> :
                                            <table className="table  datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Select </th>
                                                        <th scope="col">Kind </th>
                                                        <th scope="col">Form </th>
                                                        <th scope="col">Rating </th>
                                                        <th scope="col">Type</th>
                                                        {/* <th scope="col">Code</th> */}
                                                        {/* <th scope="col">Start Date</th>
                                                    <th scope="col">End Date</th> */}
                                                        <th scope="col">Officer</th>
                                                        {/* <th scope="col">GhanaPost GPS</th> */}
                                                        <th scope="col">Lat/Lng</th>
                                                        <th scope="col">Accuracy</th>
                                                        {/* <th scope="col">Region</th> */}
                                                        <th scope="col">District</th>
                                                        <th scope="col">Electoral Area</th>
                                                        <th scope="col">Community</th>
                                                        {/* <th>Respondent</th>
                                                     <th>Designation</th> */}{" "}
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data?.submittedData?.response?.map((dt: any) => (
                                                            <tr key={dt.id}>
                                                                <td><input type="checkbox" onChange={(e) => {
                                                                    // e.preventDefault()
                                                                    handleInspectionSelected(dt.Inspection.id)


                                                                }} /></td>
                                                                {/* <td><input type="checkbox" onChange={(e) => {
                                                                    // e.preventDefault()
                                                                    handleInspectionSelected(dt.Inspection.id)


                                                                }} disabled={dt?.Inspection?.isPublished} /></td> */}
                                                                <td>  {dt?.Inspection?.inspectionKind == 2 ? (
                                                                    <span className="badge bg-danger">Demo</span>
                                                                ) : (
                                                                    <span className="badge bg-primary">Actual</span>
                                                                )}{" "}</td>
                                                                <td>{dt?.Inspection?.InspectionForm?.name}</td>
                                                                <td>{handleRating(dt?.Inspection?.totalRating)}</td>
                                                                <td>
                                                                    {dt?.Inspection?.InspectionType?.name}
                                                                    {dt?.Inspection?.InspectionType?.id == 2 ? (
                                                                        <span>
                                                                            <Link
                                                                                href={{
                                                                                    pathname: `/submitted-data/data-view`,
                                                                                    query: {
                                                                                        id: dt?.Inspection?.prevInspectionId,
                                                                                        formId: formId,
                                                                                        published: published,
                                                                                    },
                                                                                }}
                                                                            >
                                                                                {/* <a className="dropdown-item"> */}
                                                                                <i className="ri-external-link-line align-bottom me-2 text-success" />
                                                                                {/* </a> */}
                                                                            </Link>
                                                                        </span>
                                                                    ) : (
                                                                        <></>
                                                                    )}
                                                                </td>
                                                                {/* <td>{dt?.Inspection?.premisesCode}</td> */}
                                                                <td>{dt?.User.surname} {dt?.User.otherNames}</td>
                                                                {/* <td>
        {moment(dt?.startedAt).format(
            "MMM Do YYYY, h:mm:ss a"
        )}
    </td>
    <td>
        {moment(dt?.completedAt).format(
            "MMM Do YYYY, h:mm:ss a"
        )}
    </td> */}

                                                                <td>
                                                                    {" "}
                                                                    <Link
                                                                        href={{
                                                                            pathname: `http://www.google.com/maps/place/${dt?.latitude},${dt?.longitude}`,
                                                                            query: {},
                                                                        }}
                                                                        passHref
                                                                    >
                                                                        {/* <a
        target="_blank"
        rel="noopener noreferrer"
        className="dropdown-item"
    > */}
                                                                        {/* {dt?.BasicInfoSection?.latitude},{dt?.BasicInfoSection?.longitude} */}
                                                                        <span data-bs-toggle="tooltip" data-bs-placement="top" title={dt?.latitude + "," + dt?.longitude}>GPS</span>
                                                                        {/* {dt?.BasicInfoSection?.latitude},{dt?.BasicInfoSection?.longitude} */}
                                                                        <i className="ri-external-link-line align-bottom me-2 text-success" />
                                                                        {/* </a> */}
                                                                    </Link>
                                                                </td>
                                                                <td>{dt?.accuracy}</td>
                                                                {/* <td>
                                                                    {dt?.Inspection?.Region?.name}
                                                                </td> */}
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
                                                                                        pathname: `/submitted-data/data-view`,
                                                                                        query: {
                                                                                            id: dt?.Inspection?.id,
                                                                                            formId: formId,
                                                                                            published: published,
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
                                            </table>}
                                        <ReactPaginate
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            breakLabel={"..."}
                                            initialPage={data?.submittedData?.curPage - 1}
                                            pageCount={data?.submittedData?.maxPage}
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
        </main >

    )
}

