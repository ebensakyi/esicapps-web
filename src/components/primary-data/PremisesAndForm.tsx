'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname, redirect, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";
import ReactPaginate from "react-paginate";
import { inspectionForm } from "@/prisma/seed/inspectionForm";
import moment from "moment";



export default function PremisesAndForm({ data }: any) {


    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })

    const searchParams = useSearchParams();
    const router = useRouter();

    const [id, setId] = useState("");
    const [premisesName, setPremisesName] = useState("");
    const [inspectionForm, setInspectionForm] = useState(""); 
 
    const [searchText, setSearchText] = useState("");


    const page = searchParams.get('page');




    const pathname = usePathname()



    const [isEditing, setIsEditing] = useState(false);



    const add = async (e: any) => {
        try {
            e.preventDefault();


            if (premisesName == "") return toast.error("Premises cannot be empty");
            if (inspectionForm == "") return toast.error("Inspection form  cannot be empty");


            let data = {
                premisesName,
                inspectionForm,
            };


            const response = await axios.post("/api/primary-data/premises-forms", data);
            setInspectionForm("");
            setPremisesName("");

            if (response.status == 200) {
                router.refresh()

                return toast.success("Data added");
            }
            if (response.status == 201) {
                return toast.error("Same name already exist");
            }
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };
    const update = async () => {
        try {
            let data = {
                id,
                premisesName,
                inspectionForm,
            };


            const response = await axios.put(
                `/api/primary-data/premises-forms`, data
            );

            if (response.status == 200) {
                setInspectionForm("")
                setPremisesName("");
               
                router.refresh()
                return toast.success("Data updated");
            }


            return toast.error("An error occurred while updating");
        } catch (error) {
            return toast.error("An error occurred while updating");
        }
    };

    const _delete = async (id: any) => {
        try {
            
            const response = await axios.delete(
                `/api/primary-data/premises-forms`,{data:id}
            );

            if (response.status == 200) {
                router.refresh()
                return toast.success("Data deleted");
            }


            return toast.error("An error occurred while deleting");
        } catch (error) {
            return toast.error("An error occurred while deleting");
        }
    };

    const handlePagination = (page: any) => {
        let searchText = searchParams.get('searchText')



        page = page.selected == -1 ? 1 : page.selected + 1;

        router.push(
            `${pathname}?page=${page}&searchText=${searchText}`

        );
    };

    const handleExportAll = async () => {
        try {
            let searchText = searchParams.get('searchText')
            const response = await axios.get(
                `/api/primary-data/district/export?searchText=${searchText}`,

            );



            if (response.status == 200) {
                router.push(response.data);
            }
        } catch (error) {
            console.log("error==> ", error);
        }
    };
 
    
    useEffect(() => {
       

        const url = `${pathname}/?searchText=${searchText}&page=${page}`;
        router.push(url);

    }, [searchText]);

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>ADD FORM PREMISES</h1>
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
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add </h5>
                                <div className="col-sm-12 mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Name *
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter premises name' value={premisesName} onChange={(e: any) => setPremisesName(e.target.value)} />
                                    </div>
                                </div>
                              
                                <div className="col-sm-12  mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Inspection Form *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={async (e: any) => {
                                            setInspectionForm(e.target.value);

                                        }}
                                        value={inspectionForm}
                                    >
                                        <option >Select form * </option>
                                        {data?.inspectionForms?.map((data: any) => (
                                            <option key={data.id} value={data.id}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
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

                                                                setInspectionForm("");
                                                                setPremisesName("");

                                                            }}
                                                        >
                                                            Cancel
                                                        </button>
                                                        {"  "} {"  "}
                                                        <button
                                                            className="btn btn-warning"
                                                            onClick={(e) => {
                                                                e.preventDefault();

                                                                update();
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

                    <div className="col-lg-7">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">List</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Form</th>


                                            <th scope="col">Date</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.formPremises?.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.premisesName}</td>
                                                    <td>{data?.inspectionFormName}</td>
                                                   
                                                    <td>  {moment(data?.createdAt).format(
                                                        "MMM Do YYYY, h:mm:ss a"
                                                    )}</td>
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
                                                                            onClick={async (e) => {
                                                                                e.preventDefault();
                                                                                setId(data?.id);

                                                                                setInspectionForm(data.inspectionFormId);
                                                                                setPremisesName(data?.premisesName);
                                                                              


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
