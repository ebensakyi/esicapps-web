"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Multiselect from "multiselect-react-dropdown";
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { pages } from '../../../../prisma/seed/page';
import { pageAccess } from '../../../../prisma/seed/pageAccess';
import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";

export default function Guide({ data }: any) {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })

    
    const router = useRouter();
    const pathname = usePathname()

    const [roleName, setRoleName] = useState("");
    const [selectedPages, setSelectedPages] = useState([]);
    const [roleId, setRoleId] = useState();

    const [isEditing, setIsEditing] = useState(0);





    const add = async (e: any) => {
        try {
            e.preventDefault();

            if (selectedPages.length == 0)
                return toast.error("Pages cannot be empty");
            if (roleName == "") return toast.error("Role name cannot be empty");

            let data = {
                roleName,

                selectedPages: selectedPages,
            };

            const response = await axios.post("/api/user/role", data);
            setSelectedPages([]);
            setRoleName("");

            if (response.status == 200) {
                router.refresh()

                //router.push(pathname);
                return toast.success("Role added");
            }
            if (response.status == 201) {
                return toast.error("Same name already exist");
            }
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };

  
    const _delete = async (id: any) => {
        try {
            const response = await axios.delete(
                `/api/user/role/?id=${id}`
            );

            console.log(response);
            if (response.status == 200) {
                 router.refresh()
                return toast.success("User Type deleted");
            }


            return toast.success("An error occurred while deleting");
        } catch (error) {
            return toast.success("An error occurred while deleting");
        }
    };
  
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>GUIDE</h1>
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
                                <h5 className="card-title">Enter user roles</h5>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Title
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter role name' value={roleName} onChange={(e) => setRoleName(e.target.value)} />
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Select file
                                    </label>
                                    <div className="col-sm-12">
                                       
                                        <input type="file" className="form-control" placeholder='Select file' />
                                    </div>
                                </div>


                                <div className=" mb-3">
                                    <div className="col-sm-10">

                                    
                          <button
                            className="btn btn-primary"
                            onClick={(e) => {
                              add(e);
                            }}
                          >
                            Add
                          </button>
                        
                                        {/* <button type="submit" className="btn btn-primary" onClick={(e) => add(e)}>
                                            Submit
                                        </button> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Roles</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>

                                            <th scope="col">Pages</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.guides.map((guide: any) => {
                                            return (
                                                <tr key={guide.id}>
                                                    <td>{guide.title}</td>
                                                    
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
                                                                                // setRoleName(role.name);
                                                                                // let pageAcess = role.PageAccess.map(
                                                                                //     (access: any) => {
                                                                                //         return {
                                                                                //             value: access.Page.id,
                                                                                //             label: access.Page.name,
                                                                                //         };
                                                                                //     }
                                                                               // );
                                                                                setIsEditing(1);

                                                                            }}
                                                                        >
                                                                            Update
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button
                                                                            className="dropdown-item btn btn-sm "
                                                                            onClick={(e) => {
                                                                                e.preventDefault();

                                                                                _delete(guide.id);
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
