'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname, redirect, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";
import ReactPaginate from "react-paginate";




export default function ConfigureReports({ data }: any) {
console.log(data);


    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })

    const searchParams = useSearchParams();
    const router = useRouter();


    const [reportId, setReportId] = useState("");
    const [reportName, setReportName] = useState("");



    const page = searchParams.get('page');




    const pathname = usePathname()



    const [isEditing, setIsEditing] = useState(false);



    const add = async (e: any) => {
        try {
            e.preventDefault();


            if (reportName == "") return toast.error("Report name cannot be empty");
          

            let data = {
                reportName,
     
            };


            const response = await axios.post("/api/sanitation-report/report-category", data);
            setReportName("");
       

            if (response.status == 200) {
                router.refresh()

                return toast.success("Report category added");
            }
            if (response.status == 201) {
                return toast.error("Same name already exist");
            }
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };
    const update = async (e: any) => {
        try {
            e.preventDefault()
            let data = {
                reportId,
                reportName,
            
            };


            const response = await axios.put(
                `/api/sanitation-report/report-category`, data
            );

            if (response.status == 200) {
                setReportName("")
            
                router.refresh()
                return toast.success("Report updated");
            }


            return toast.error("An error occurred while updating");
        } catch (error) {
            return toast.error("An error occurred while updating");
        }
    };

    const _delete = async (id: any) => {
        try {
            const response = await axios.delete(
                `/api/primary-data/district?id=${id}`
            );

            if (response.status == 200) {
                router.refresh()
                return toast.success("District deleted");
            }


            return toast.error("An error occurred while deleting");
        } catch (error) {
            return toast.error("An error occurred while deleting");
        }
    };



    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>REPORT CATEGORIES</h1>
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
                                <h5 className="card-title">Add new</h5>
                                <div className="col-sm-12 mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Name *
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter name' value={reportName} onChange={(e: any) => setReportName(e.target.value)} />
                                    </div>
                                </div>
                               
                                {/* <div className="col-sm-12  mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Report Category *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={async (e: any) => {
                                            setReportCategory(e.target.value);

                                        }}
                                        value={reportCategory}
                                    >
                                        <option >Select report category * </option>
                                   
                                            <option key={data.id} value={"1"}>
                                               Solid waste
                                            </option>
                                            <option key={data.id} value={"2"}>
                                              Liquid waste
                                            </option>
                                            <option key={data.id} value={"3"}>
                                              Water
                                            </option>
                              
                                    </select>
                                </div> */}



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

                                                               // setReportCategory("");
                                                                setReportName("");

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
                                                    <button type="submit" className="btn btn-primary" onClick={(e) => add(e)}>
                                                        Add
                                                    </button>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Report Category</h5>
                                <div className="row">
                                   
                                  
                                </div>
                                <table className="table table-bordered" style={{ height: 100 }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            {/* <th scope="col">Category</th> */}
                                        
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.reportCategories?.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.name}</td>
                                                  

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
                                                                                setReportName(data.name);
                                                                                setReportId(data.id);
                                                                            

                                                                                setIsEditing(true);

                                                                            }}
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button
                                                                            className="dropdown-item btn btn-sm "
                                                                            onClick={(e) => {
                                                                                e.preventDefault();

                                                                                _delete(data.id);
                                                                            }}
                                                                        >
                                                                            Delete
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
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}
