"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Multiselect from "multiselect-react-dropdown";
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { pages } from '../../../../prisma/seed/page';
import { pageAccess } from '../../../../prisma/seed/pageAccess';

export default function Role({ data }: any) {
    const router = useRouter();
    const pathname = usePathname()

    const [roleName, setRoleName] = useState("");
    const [selectedPages, setSelectedPages] = useState([]);
    const [roleId, setRoleId] = useState();

    const [isEditing, setIsEditing] = useState(0);

    console.log(data.roles);


    const pagesOptions = data.pages.map((page: any) => {
        return {
            value: page.id,
            label: page.name,
        };
    });



    const add = async (e: any) => {
        try {
            e.preventDefault();
            console.log("ADD", selectedPages, roleName);

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
            console.log(response);

            if (response.status == 200) {
                router.push(pathname);
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
    const deleteRole = async (id: any) => {
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
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Role
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter role name' value={roleName} onChange={(e) => setRoleName(e.target.value)} />
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
                                        <button type="submit" className="btn btn-primary" onClick={(e) => add(e)}>
                                            Submit
                                        </button>
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
                                        {data.roles.map((role: any) => {
                                            return (
                                                <tr key={role.id}>
                                                    <td>{role.name}</td>
                                                    <td>
                                                        <div className="row" key={role.id}>
                                                            {role.PageAccess.map((pa: any) => {
                                                                return (
                                                                    <div key={pa.id} className="col-md-3">
                                                                            {pa.Page?.name ?? ""}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </td>
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
                                                                                setRoleName(role.name);
                                                                                let pageAcess = role.PageAccess.map(
                                                                                    (access: any) => {
                                                                                        return {
                                                                                            value: access.Page.id,
                                                                                            label: access.Page.name,
                                                                                        };
                                                                                    }
                                                                                );
                                                                                setSelectedPages(pageAcess);
                                                                                setIsEditing(1);
                                                                                setRoleId(role.id);

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

                                                                                deleteRole(role.id);
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
