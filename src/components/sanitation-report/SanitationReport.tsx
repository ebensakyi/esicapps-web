'use client'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Multiselect from "multiselect-react-dropdown";
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';

import { useSession } from "next-auth/react";
import { LOGIN_URL } from "@/config";





export default function SanitationReport({ data }: any) {

console.log(data);


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

    const [individualRecipient, setIndividualRecipient] = useState("")
    const [isEditing, setIsEditing] = useState(false);





   
    const update = async (e: any) => {
        try {
            e.preventDefault()
            if (title == "") return toast.error("Title cannot be empty");
            if (sendingType == "") return toast.error("Recipient type cannot be empty");
            if (message == "") return toast.error("Message cannot be empty");
            if (sendingType == "1" && individualRecipient == "") return toast.error("Recepient cannot be empty");
            if (sendingType == "2" && districtId == "") return toast.error("District cannot be empty");
            if (sendingType == "3" && regionId == "") return toast.error("Region cannot be empty");

            let data = {
                messageId,
                title,
                message,
                individualRecipient: individualRecipient == "" ? null : Number(individualRecipient),
                sendingType,
                districtId: districtId == "" ? null : Number(districtId),
                regionId: regionId == "" ? null : Number(regionId),
            };


            const response = await axios.put("/api/messaging/notification", data);
            setTitle("");
            setSendingType("");
            setMessage("");
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

    

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>REPORTS</h1>
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
                  
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Reports</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">District</th>

                                            <th scope="col">Community</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Status</th>

                                            <th scope="col">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.reports?.response?.map((data: any) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td>{data?.District.name}</td>
                                                    <td>{data?.community}</td>
                                                    <td>{data?.description}</td>
                                                    <td></td>
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

                                                                                console.log(data.districtId);
                                                                                

                                                                                // setTitle("");
                                                                                // setSendingType("");
                                                                                // setMessage("");
                                                                                // setRegionId("");

                                                                                setIsEditing(true);

                                                                            }}
                                                                        >
                                                                            Update status
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
