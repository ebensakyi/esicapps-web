"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Multiselect from "multiselect-react-dropdown";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
export default function Role() {
    const router = useRouter();

    const [roleName, setRoleName] = useState("");
    const [selectedPages, setSelectedPages] = useState([]);
    const [roleId, setroleId] = useState();

    const [isEditing, setIsEditing] = useState(0);

    // const pagesOptions = pages.map((page) => {
    //     return {
    //       value: page.id,
    //       label: page.name,
    //     };
    //   });

    const pagesOptions = [{
        value: 1, label: "Page A"
    }, {
        value: 2, label: "Page B"
    }]

    const add = async (e: any) => {
        try {
            e.preventDefault();
            if (selectedPages.length == 0)
                return toast.error("Pages cannot be empty");
            if (roleName == "") return toast.error("User type cannot be empty");

            let data = {
                roleName,

                selectedPages: selectedPages,
            };

            const response = await axios.post("/api/v1/permission/user-type", data);
            setSelectedPages([]);
            setRoleName("");
            if (response.status == 200) {
                //router.replace(router.asPath);
                return toast.success("User Type added");
            }
            if (response.status == 201) {
                return toast.error("Same name already exist");
            }
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };

    const update = async (e: any, id: any) => {
        try {
            e.preventDefault();
            if (selectedPages.length == 0)
                return toast.error("Pages cannot be empty");
            if (roleName == "") return toast.error("User type cannot be empty");

            let data = {
                roleId: id,
                roleName,
                selectedPages: selectedPages,
            };

            const response = await axios.put("/api/v1/permission/user-type", data);
            setSelectedPages([]);
            setRoleName("");
            //router.replace(router.asPath);

            return toast.success("User Type update");
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };
    const deleterole = async (id: any) => {
        try {
            console.log("ID==> ", id);
            const response = await axios.delete(
                `/api/v1/permission/user-type/?id=${id}`
            );

            console.log(response);
            if (response.status == 200) {
              //  router.replace(router.asPath);
                return toast.success("User Type deleted");
            }


            return toast.success("An error occurred while deleting");
        } catch (error) {
            return toast.success("An error occurred while deleting");
        }
    };
    const onRemove = (selected: any) => {
        // setSelectedPages([selected.length - 1].value);
        setSelectedPages(selected);

    };
    const onSelect = (selected: any) => {
        // setSelectedPages(selected[selected.length - 1].value);
        setSelectedPages(selected);
    };

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>ROLES</h1>
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
                                {/* General Form Elements */}
                                <form>
                                    <div className=" mb-3">
                                        <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                            Role
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Enter role name' />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                            Page
                                        </label>
                                        <div className="col-sm-12">
                                            <Multiselect
                                                options={pagesOptions}
                                                selectedValues={selectedPages}
                                                onSelect={onSelect}
                                                onRemove={onRemove}
                                                displayValue="label"
                                            />
                                            {/* <input type="text" className="form-control" placeholder='Select page(s)' /> */}
                                        </div>
                                    </div>


                                    <div className=" mb-3">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">
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
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Level</th>
                                            <th scope="col">Region</th>
                                            <th scope="col">District</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr>
                                        <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr> <tr>
                                            <td>Brandon Jacob</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                            <td>Designer</td>
                                        </tr>
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
