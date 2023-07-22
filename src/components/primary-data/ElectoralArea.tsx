"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";



export default function ElectoralArea({ data }: any) {

    const [searchText, setSearchText] = useState();
    const [electoralAreaName, setElectoralAreaName] = useState("");

    const [electoralAreaId, setElectoralAreaId] = useState("");
    const [regionId, setRegionId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [districts, setDistricts] = useState([]);

    const [communityFile, setCommunityFile] = useState("");

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })


    const router = useRouter();
    const pathname = usePathname()


    const [isEditing, setIsEditing] = useState(false);

    const getDistrictsByRegion = async (regionId: number) => {
        try {

            const response = await axios.get(
                "/api/primary-data/district?regionId=" + regionId
            );
            setDistricts(response.data);
        } catch (error) {
            console.log(error);
        }
    };



    const add = async (e: any) => {
        try {
            e.preventDefault();


            if (electoralAreaName == "") return toast.error("Electoral Area Name cannot be empty");
            if (districtId == "") return toast.error("URL cannot be empty");


            let data = {
                electoralAreaName,
                districtId,

            };


            const response = await axios.post("/api/primary-data/electoral-area", data);
            setElectoralAreaName("");
            setDistrictId("");
            setRegionId("");

            if (response.status == 200) {
                router.refresh()

                return toast.success("Electoral area added");
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
                electoralAreaName,
                districtId,

            };

            const response = await axios.put(
                "/api/primary-data/electoral-area", data
            );

            if (response.status == 200) {
                setElectoralAreaName("")
                setDistrictId("");

                router.refresh()
                return toast.success("Electoral area updated");
            }


            return toast.error("An error occurred while updating");
        } catch (error) {
            return toast.error("An error occurred while updating");
        }
    };

    const _delete = async (id: any) => {
        try {
            const response = await axios.delete(
                `/api/user/guide/?id=${id}`
            );

            if (response.status == 200) {
                router.refresh()
                return toast.success("User guide deleted");
            }


            return toast.error("An error occurred while deleting");
        } catch (error) {
            return toast.error("An error occurred while deleting");
        }
    };

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>ELECTORAL AREA</h1>
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
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add Single</h5>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Name *
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter electoral area name' value={electoralAreaName} onChange={(e: any) => setElectoralAreaName(e.target.value)} />
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Region *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={async (e: any) => {
                                            setRegionId(e.target.value);

                                            await getDistrictsByRegion(e.target.value);
                                        }}
                                        value={regionId}
                                    >
                                        <option >Select region * </option>
                                        {data?.regions?.map((data: any) => (
                                            <option key={data.id} value={data.id}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        District *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={async (e: any) => {
                                            setDistrictId(e.target.value);
                                        }}
                                        value={districtId}
                                    >
                                        <option >Select district * </option>
                                        {districts?.map((data: any) => (
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

                                                                setElectoralAreaName("");
                                                                setDistrictId("");


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
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Upload Bulk</h5>
                            <div className=" mb-3">
                                <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                    Community File *
                                </label>
                                <div className="col-sm-12">
                                    <input type="file" accept=".csv" className="form-control" placeholder='Enter community name' value={communityFile} onChange={(e: any) => setCommunityFile(e.target.value)} />
                                </div>
                            </div>
                            <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Region *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={async (e: any) => {
                                            setRegionId(e.target.value);

                                            await getDistrictsByRegion(e.target.value);
                                        }}
                                        value={regionId}
                                    >
                                        <option >Select region * </option>
                                        {data?.regions?.map((data: any) => (
                                            <option key={data.id} value={data.id}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        District *
                                    </label>
                                    <select
                                        className="form-control"
                                        aria-label="Default select example"
                                        onChange={async (e: any) => {
                                            setDistrictId(e.target.value);
                                        }}
                                        value={districtId}
                                    >
                                        <option >Select district * </option>
                                        {districts?.map((data: any) => (
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
                                          
                                                <button type="submit" className="btn btn-primary" onClick={(e) => add(e)}>
                                                    Upload
                                                </button>
                                           

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Electoral Area</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>

                                            <th scope="col">District</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.electoralAreas.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.name}</td>
                                                    <td>{data?.District.name}</td>

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
                                                                                // setGuideId(guide.id);
                                                                                // setTitle(guide.title)
                                                                                // setDescription(guide.description)
                                                                                // setUrl(guide.url)
                                                                                // setFileType(guide.fileTypeId)

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

                                                                                // _delete(guide.id);
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
