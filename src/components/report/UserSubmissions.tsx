'use client'
import axios from 'axios';
import { usePathname, useRouter, useSearchParams, redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

import { useSession } from 'next-auth/react';
import { LOGIN_URL } from '@/config';
import ReactPaginate from 'react-paginate';
import { create } from '../../controller/inspection';
import moment from 'moment';

export default function UserSubmissions({ data }: any) {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })



    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [reportType, setReportType] = useState(null);
    const [exporting, setExporting] = useState(false);

    const [reportData, setReportData] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const [level, setLevel] = useState();
    const [form, setForm] = useState("");
    const [searchText, setSearchText] = useState();
    const [districtsData, setDistrictsData] = useState([]);
    const [electoralAreasData, setElectoralAreasData] = useState([]);
    const [communitiesData, setCommunitiesData] = useState([]);

    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [electoralArea, setElectoralArea] = useState("");
    const [community, setCommunity] = useState("");

    const [filterValue, setFilterValue] = useState("");

    const [filterLabel, setFilterLabel] = useState("");

    const [filterBy, setFilterBy] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");


    useEffect(() => {
        const url = `${pathname}/?searchText=${searchValue}`;
        router.push(url);
      }, [searchValue]);

      

    const handleUrl = async (report: any) => {
        if (report == 1) {
            return "/api/report/submission-summaries";
        }
        if (report == 2) {
            return "/api/report/action-summaries";
        }
        if (report == 11) {
            return "/api/report/water-sources";
        }
        if (report == 12) {
            return "/api/report/water-condition";
        }
        if (report == 21) {
            return "/api/report/toilet-availability";
        }
        if (report == 22) {
            return "/api/report/toilet-adequacy";
        }
        if (report == 23) {
            return "/api/report/drain-availability";
        }
        if (report == 31) {
            return "/api/report/waste-collection-type";
        }
        if (report == 32) {
            return "/api/report/approved-waste-receptacle";
        }
        if (report == 33) {
            return "/api/report/waste-receptacle";
        }
    };

    const handlePagination = (page: any) => {

        page = page.selected == -1 ? 1 : page.selected + 1;

        router.push(
            `${pathname}?page=${page}&searchText=${searchText}`

        );
    };

    const handleVisibility = async (report: any) => {
        if (report == 1) {

        }
        if (report == 2) {

        }
        if (report == 11) {

        }
        if (report == 12) {

        }

    };

    let userSession: any = session;


    let nationalUser: any = userSession?.user?.userLevelId == 1;
    let regionalUser: any = userSession?.user?.userLevelId == 2;
    let districtUser: any = userSession?.user?.userLevelId == 3;
    // let loggedInUserType =1;

    //     const handleResetFilters = async () => {
    //       if (loggedInUserType == 1 || loggedInUserType == 2) {
    //         if (filterBy == null) {
    //           setFilterBy("regionId");
    //         }

    //         if (filterValue == null || filterValue == 0) {
    //           setFilterValue(undefined);
    //         }
    //       }
    //       if (loggedInUserType == 3 || loggedInUserType == 4) {
    //         if (filterBy == null) {
    //           setFilterBy("regionId");
    //         }

    //         if (filterValue == null || filterValue == 0) {
    //           setFilterValue(undefined);
    //         }
    //       }
    //       if (loggedInUserType == 5 || loggedInUserType == 6) {
    //         if (filterBy == null) {
    //           setFilterBy("districtId");
    //         }

    //         if (filterValue == null || filterValue == 0) {
    //           setFilterValue(undefined);
    //         }
    //       }
    //     };

    const generateReport = async (e: any) => {
        try {
            e.preventDefault();

            //     await handleResetFilters();

            let data: any = {
                reportType,
                filterBy,
                filterValue,
                from,
                to,
            };


            let url: any = await handleUrl(reportType);

            const response = await axios.post(url, data);



            if (response.status == 200) {
                handleVisibility(reportType);
                //setReportData(response.data.data);

                setReportData(response.data);
            }

            // router.replace(router.asPath);

            return toast.success("Report Generated");
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };
    const handleExportAll = async () => {
        try {
            setExporting(true);
            let searchText = searchParams.get('searchText')

            const response = await axios.get(
                `/api/report/user-submissions?exportFile=true&searchText=${searchText}`,

            );
            setExporting(false)



            if (response.status == 200) {
                router.replace(response.data);

            }
        } catch (error) {
            setExporting(false)
            console.log(error);
        }
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
    const handleFilter = async (e: any) => {
        e.preventDefault();



        const formId = searchParams.get("formId")
        const published = searchParams.get('published')

        let page = searchParams.get('page')
        await returnFilterValue(filterBy);


        router.push(
            `${pathname}?published=${published}&formId=${formId}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}`
        );
    };

    const getDistrictsByRegion = async (regionId: any) => {
        try {
            const response = await axios.get(
                `/api/primary-data/district?regionId=${regionId}&get_all=1`
            );
            setDistrictsData(response?.data?.response);
        } catch (error) {
            console.log(error);
        }
    };
    const getElectoralAreasByDistrict = async (districtId: any) => {
        try {
            const response = await axios.get(
                `/api/primary-data/electoral-area?districtId=${districtId}&get_all=1`
            );
            setElectoralAreasData(response?.data?.response);
        } catch (error) {
            console.log(error);
        }
    };
    const getCommunitiesByElectoralArea = async (electoralAreaId: any) => {
        try {
            const response = await axios.get(
                `/api/primary-data/community?electoralAreaId=${electoralAreaId}&get_all=1`
            );

            setCommunitiesData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main id="main" className="main">

                    <div className="row">
                        <div className="col-lg-12"><div className="col-md-4">
                                        <div className="input-group mb-3">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-success  "
                                                onClick={() => handleExportAll()}
                                            >
                                                <i className="ri-file-excel-2-line label-icon align-middle rounded-pill fs-16 ms-2"></i>

                                                {exporting ? 'Exporting...' : 'Export as Excel'}

                                            </button>
                                        </div>
                                    </div>
                            <div className="card">
                            
                                <div className="card-body table-responsive">
                                    <h5 className="card-title">USER SUBMISSIONS(Includes deleted Inspections)</h5>
                                    <div className="mb-6 position-relative col-lg-4">
                                <input
                                  type="text"
                                  className="form-control required"
                                  placeholder="Search by user's name"
                                value={searchValue}
                                onChange={(e:any) => {
                                  setSearchValue(e.target.value);
                                }}
                                />
                              </div>
                                    <table className="table datatable table-striped ">

                                        <thead>
                                            <tr>
                                                {/* <th>ID</th> */}
                                                <th scope="col">Name</th>
                                                {/* <th scope="col">Phone Number</th> */}
                                                <th scope="col">Region</th>
                                                <th scope="col">District</th>
                                                <th scope="col">Last Submission Date</th>

                                                <th scope="col">Number of Submissions</th>

                                                {/* Add other fields you want to display */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.userSubmissions?.response?.map((user: any) => (
                                                <tr key={user.id}>
                                                    {/* <td>{user.id}</td> */}
                                                    <td>{user.otherNames}{" "}{user.surname}</td>
                                                    {/* <td>{user.phoneNumber}</td> */}
                                                    <td>{user.Region?.name}</td>
                                                    <td>{user.District?.name}</td>
                                                    <td>
                                                        {user?.Inspection.length!=0 ? moment(user?.Inspection[0]?.createdAt).format(
                                                            "Do MMM YYYY, h:mm:ss a"
                                                        ) : ""}
                                                    </td>

                                                    <td>{user._count.Inspection}</td>

                                                    {/* Add other fields you want to display */}
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
                                        initialPage={data?.userSubmissions?.curPage - 1}
                                        pageCount={data?.userSubmissions?.maxPage}
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
              
        </main>
    );
};

