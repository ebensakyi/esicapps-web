"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Multiselect from "multiselect-react-dropdown";
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { pages } from '../../../prisma/seed/page';
import { pageAccess } from '../../../prisma/seed/pageAccess';
import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";
import { district } from '../../../prisma/seed/district';
import { sendingType } from '../../../prisma/seed/sendingType';



export default function Notification({ data }: any) {



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
    const [message, setMessage] = useState("");
    const [regionId, setRegionId] = useState("")
    const [districtId, setDistrictId] = useState("")
    const [messageId, setMessageId] = useState("")

    const [individualRecepient,setIndividualRecepient]= useState("")
    const [isEditing, setIsEditing] = useState(false);





    const add = async (e: any) => {
        try {
            e.preventDefault();


            if (title == "") return toast.error("Title cannot be empty");
            if (sendingType == "") return toast.error("Sending type cannot be empty");
            if (message == "") return toast.error("Message cannot be empty");
            if (regionId == "") return toast.error("Region cannot be empty");
            if (districtId == "") return toast.error("District cannot be empty");

            let data = {
                title,
                message,
                sendingType,
                districtId,
                regionId
            };


            const response = await axios.post("/api/messaging/notification", data);
            setTitle("");
            setSendingType("");
            setMessage("");
            setRegionId("");
            setDistrictId("")

            if (response.status == 200) {
                router.refresh()

                return toast.success("Message sent");
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
                title,
                message,
                sendingType,
                districtId,
                regionId
            };

            const response = await axios.put(
                `/api/messaging/notification`, data
            );

            if (response.status == 200) {
                setTitle("");
                setSendingType("");
                setMessage("");
                setRegionId("");
                setDistrictId("");
                router.refresh()
                return toast.success("Message resent");
            }


            return toast.error("An error occurred while updating");
        } catch (error) {
            return toast.error("An error occurred while updating");
        }
    };

    const _delete = async (id: any) => {
        try {
            const response = await axios.delete(
                `/api/messaging/notification/?id=${id}`
            );

            if (response.status == 200) {
                router.refresh()
                return toast.success("Message deleted");
            }


            return toast.error("An error occurred while deleting");
        } catch (error) {
            return toast.error("An error occurred while deleting");
        }
    };

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>NOTIFICATION</h1>
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
                                <h5 className="card-title">Send Notification</h5>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Title *
                                    </label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder='Enter title' value={title} onChange={(e: any) => setTitle(e.target.value)} />
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Enter url *
                                    </label>
                                <select
                                    className="form-control"
                                    aria-label="Default select example"
                                    onChange={(e: any) => {
                                        setSendingType(e.target.value);
                                    }}
                                    value={sendingType}
                                >
                                    <option >Select sending type * </option>
                                    {data?.sendingTypes?.map((data: any) => (
                                        <option key={data.id} value={data.id}>
                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                                </div>
                                {sendingType=="1"?
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        User*
                                    </label>
                                <select
                                    className="form-control"
                                    aria-label="Default select example"
                                    onChange={(e: any) => {
                                        setIndividualRecepient(e.target.value);
                                    }}
                                    value={individualRecepient}
                                >
                                    <option >Select user * </option>
                                    {data?.users?.map((data: any) => (
                                        <option key={data.id} value={data.id}>
                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                                </div>:<></>}
                                {sendingType=="3"?
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Region *
                                    </label>
                                <select
                                    className="form-control"
                                    aria-label="Default select example"
                                    onChange={(e: any) => {
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
                                </div>:<></>}
                                {sendingType=="2"?
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        District *
                                    </label>
                                <select
                                    className="form-control"
                                    aria-label="Default select example"
                                    onChange={(e: any) => {
                                        setDistrictId(e.target.value);
                                    }}
                                    value={districtId}
                                >
                                    <option >Select district * </option>
                                    {data?.districts?.map((data: any) => (
                                        <option key={data.id} value={data.id}>
                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                                </div>:<></>}
                                <div className=" mb-3">
                                    <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                        Message
                                    </label>
                                    <div className="col-sm-12">
                                        <textarea className="form-control" style={{ height: 100 }}></textarea>
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

                                                                setTitle("");
                                                                setSendingType("");
                                                                setMessage("");
                                                                setRegionId("");
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
                                                        Send
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
                                <h5 className="card-title">Notifications</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>

                                            <th scope="col">Message</th>
                                            <th scope="col">Sending Type</th>
                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.notifications.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.title}</td>
                                                    <td>{data?.message}</td>
                                                    <td>{data?.sendingType}</td>

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
                                                                                setMessageId(data.id);
                                                                                setTitle(data.title)
                                                                                setMessage(data.message)
                                                                                setSendingType(data.sendingType)
                                                                                setDistrictId(data.districtId);

                                                                                setTitle("");
                                                                                setSendingType("");
                                                                                setMessage("");
                                                                                setRegionId("");

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
