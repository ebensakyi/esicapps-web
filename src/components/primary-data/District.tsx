'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";



export default function District({ data }: any) {

    const [searchText, setSearchText] = useState();
    const [region, setRegion] = useState("");

    const [regionId, setRegionId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [districtName, setDistrictName] = useState("")
    const [abbrv, setAbbrv] = useState("")



    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })


    const router = useRouter();
    const pathname = usePathname()

   

    const [isEditing, setIsEditing] = useState(false);

   

    const add = async (e: any) => {
        try {
            e.preventDefault();


            if (districtName == "") return toast.error("District name cannot be empty");
            if (regionId == "") return toast.error("Region cannot be empty");
            if (abbrv == "") return toast.error("District abbreviation cannot be empty");


            let data = {
                districtName,
                regionId,
                abbrv
            };


            const response = await axios.post("/api/primary-data/district", data);
            setDistrictName("");
            setRegionId("");
            setAbbrv("");
           
            if (response.status == 200) {
                router.refresh()

                return toast.success("District added");
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
                districtId,
                districtName,
                regionId,
                abbrv
            };


            const response = await axios.put(
                `/api/primary-data/district`, data
            );

            if (response.status == 200) {
                setDistrictName("")
                setDistrictId("");
                setRegionId("")
                setAbbrv("")
                router.refresh()
                return toast.success("District updated");
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
                <h1>DISTRICT</h1>
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
                                <h5 className="card-title">Add Single</h5>
                                <div className="col-sm-12 mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Name *
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter district name' value={districtName} onChange={(e: any) => setDistrictName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Abbreviation *
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter district abbrv' value={abbrv} onChange={(e: any) => setAbbrv(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-sm-12  mb-3">
                                <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Region *
                                    </label>
                                <select
                                    className="form-control"
                                    aria-label="Default select example"
                                    onChange={async(e: any) => {
                                        setRegionId(e.target.value);

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

                                                                setDistrictId("");
                                                                setDistrictName("");
                                                                setRegion("");

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
                                <h5 className="card-title">Districts</h5>
                                <table className="table table-bordered" style={{height:100}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Abbrv.</th>

                                            <th scope="col">Region</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.districts.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.name}</td>
                                                    <td>{data?.abbrv}</td>
                                                    <td>{data?.Region?.name}</td>

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
                                                                                setDistrictId(data.id);
                                                                                setDistrictName(data.name)
                                                                                setRegionId(data.regionId)
                                                                                setAbbrv(data.abbrv)
                                                                              
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
