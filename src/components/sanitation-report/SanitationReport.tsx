'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Multiselect from "multiselect-react-dropdown";
import { useRouter, usePathname, redirect, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useRef, useState } from 'react';

import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";





export default function SanitationReport({ data }: any) {



    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })


    const router = useRouter();
    const pathname = usePathname()

    const [sendingType, setSendingType] = useState("");
    const [title, setTitle] = useState("");
    const [regionId, setRegionId] = useState("")
    const [districtId, setDistrictId] = useState("")
    const [messageId, setMessageId] = useState("")

    const [individualRecipient, setIndividualRecipient] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [searchText, setSearchText] = useState();
    const [description, setDescription] = useState("");
    const [reportStatus, setReportStatus] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [showForm, setShowForm] = useState(false);


    const searchTextRef: any = useRef(null);
    const filterRef: any = useRef(null);


    // const { data: session } = useSession()


    const searchParams = useSearchParams()

    const searchtext = searchParams.get('searchText')


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(e: any) {
        e.preventDefault();
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {

        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: '1px solid #ccc',
            background: '#fff',
        },
    };

    const update = async (e: any) => {
        try {
            e.preventDefault()
            if (title == "") return toast.error("Title cannot be empty");
            if (sendingType == "") return toast.error("Recipient type cannot be empty");
            if (sendingType == "1" && individualRecipient == "") return toast.error("Recepient cannot be empty");
            if (sendingType == "2" && districtId == "") return toast.error("District cannot be empty");
            if (sendingType == "3" && regionId == "") return toast.error("Region cannot be empty");

            let data = {
                messageId,
                title,
                individualRecipient: individualRecipient == "" ? null : Number(individualRecipient),
                sendingType,
                districtId: districtId == "" ? null : Number(districtId),
                regionId: regionId == "" ? null : Number(regionId),
            };


            const response = await axios.put("/api/messaging/notification", data);
            setTitle("");
            setSendingType("");
            setRegionId("");
            setDistrictId("")
            setIndividualRecipient("")

            if (response.status == 200) {
                router.refresh()

                return toast.success("Message sent");
            }
            if (response.status == 201) {
                return toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);

            return toast.error("An error occurred while resending");
        }
    };

    const handlePagination = (page: any) => {

        page = page.selected == -1 ? 1 : page.selected + 1;

        router.push(
            `${pathname}?page=${page}&searchText=${searchText}`

        );
    };
    const handleExportAll = async () => {
        try {
            let searchText = searchParams.get('searchText')
            const response = await axios.post(
                `/api/sanitation-report`,
                {

                    searchText
                }
            );


            if (response.status == 200) {
                router.push(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleSearch = () => {
        try {
            let _searchText: any = searchTextRef?.current?.value
            let _publishingStatus: any = filterRef?.current?.value

            let _deleted: any = filterRef?.current?.value


            router.push(
                `${pathname}?searchText=${_searchText}`

            );

        } catch (error) {
            console.log(error);
        }
    };

    const handleStatusUpdate = async (id: any) => {

        try {
            const response = await axios.put(`/api/sanitation-report`, {
                id: id,
            });

            if (response.status == 200) {
                // router.push(
                //     `/submitted-data?published=${published}&formId=${formId}`
                // );
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>REPORTS</h1>
{showForm?
                <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update Report</h5>
                                <div className=" mb-3">
                                  
                                    <div className="col-sm-12">
                                        {description}
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                    Update status *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={(e: any) => {
                                            setReportStatus(e.target.value);
                                        }}
                                        value={sendingType}
                                    >
                                        <option >Select status * </option>
                                            <option key={1} value={1}>
                                               Completed
                                            </option>
                                            <option key={2} value={2}>
                                               In progress
                                            </option>
                                    </select>
                                </div>
                               
                              
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Status Message
                                    </label>
                                    <div className="col-sm-12">
                                        <textarea className="form-control" style={{ height: 100 }} value={statusMessage} onChange={(e: any) => {
                                            setStatusMessage(e.target.value);
                                        }}></textarea>
                                    </div>
                                </div>

                                <div className=" mb-3">
                                    <div className="col-sm-10">


                                        <div className=" mb-3">
                                            <div className="col-sm-10">
                                                {isEditing ? (
                                                    <>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={(e) => {
                                                                e.preventDefault();

                                                                setIsEditing(false);

                                                              
                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                        {"  "} {"  "}
                                                        <button
                                                            className="btn btn-warning"
                                                            onClick={(e) => {
                                                                update(e);
                                                            }}
                                                        >
                                                            Update
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button type="submit" className="btn btn-primary" onClick={(e) => handleStatusUpdate(e)}>
                                                        Update
                                                    </button>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>:<></>
}
            </div>
            {/* End Page Title */}
            <section className="section">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <form className="row g-3">
                                    {/* <div className="col-md-2">
                                <input type="text" className="form-control" placeholder="City" />
                            </div> */}
                                    <div className="col-md-2">
                                        <select ref={filterRef}
                                            id="filterRef"
                                            name="filterRef" className="form-select input-group" >
                                            <option value="" selected>
                                                Filter by{" "}
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
                                </form>
                            </div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Reports</h5> */}
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">District</th>

                                            <th scope="col">Community</th>
                                            {/* <th scope="col">Description</th> */}
                                            <th scope="col">Status</th>
                                            <th scope="col">Reported at</th>

                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.reports?.response?.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.District.name}</td>
                                                    <td>{data?.community}</td>
                                                    {/* <td>{data?.description}</td> */}
                                                    <td>{data?.status}</td>
                                                    <td>{data?.createdAt}</td>

                                                    <td>
                                                        <div
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
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setDescription(data?.description)

                                                                                setMessageId(data.id);
                                                                                setShowForm(true)
                                                                                // setTitle(data.title)
                                                                                // setMessage(data.message)
                                                                                // setSendingType(data.sendingType)
                                                                                // setDistrictId(data.districtId);

                                                                                // console.log(data.districtId);


                                                                                // setTitle("");
                                                                                // setSendingType("");
                                                                                // setMessage("");
                                                                                // setRegionId("");

                                                                                setIsEditing(true);

                                                                            }}
                                                                        >
                                                                             View & Update status
                                                                        </button>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </td>
                                                </tr>
                                            );
                                        })}

                                    </tbody>
                                </table>
                                <ReactPaginate
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    initialPage={data.reports.curPage - 1}
                                    pageCount={data.reports.maxPage}
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
