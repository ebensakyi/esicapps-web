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



export default function Profile({ data }: any) {



    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })


    const router = useRouter();
    const pathname = usePathname()

    const [surname, setSurname] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");





    const updateUser = async (e: any) => {
        try {
            e.preventDefault();


            if (surname == "") {
                return toast.error("Surname cannot be empty");
            }
            if (otherNames == "") {
                return toast.error("Other Names cannot be empty");
            }
            if (email == "") {
                return toast.error("Email cannot be empty");
            }
            if (phoneNumber == "") {
                return toast.error("PhoneNumber cannot be empty");
            }
            let  data = {
               
                surname,
                otherNames,
                email,
                phoneNumber,
                newPassword,
                currentPassword
               
            };


            const response = await axios.post("/api/auth/profile", data);
            setSurname("");
            setOtherNames("");
            setEmail("");
            setPhoneNumber("");
            setCurrentPassword("");
            setNewPassword("");

            if (response.status == 200) {
                router.refresh()

                return toast.success("User guide added");
            }
            if (response.status == 201) {
                return toast.error("Same name already exist");
            }
        } catch (error) {
            console.log(error);
            return toast.error("An error occurred");
        }
    };
   

    return (
        <main id="main" className="main">
        {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        /> */}
        <div className="pagetitle">
            <h1>USERS</h1>
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
                            <h5 className="card-title">Enter user details</h5>
                            {/* General Form Elements */}
                           
                                <div className="row">

                                    <div className="col-sm-3 mb-3">
                                        <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                            Surname
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} value={surname} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3  mb-3">
                                        <label htmlFor="inputText" className="col-sm-12 col-form-label">
                                            Other name(s)
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Other names' onChange={(e) => setOtherNames(e.target.value)} value={otherNames} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3  mb-3">
                                        <label htmlFor="inputEmail" className="col-sm-12 col-form-label">
                                            Email
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3 mb-3">
                                        <label
                                            htmlFor="inputNumber"
                                            className="col-sm-12 col-form-label"
                                        >
                                            Phone Number
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3 mb-3">
                                        <label
                                            htmlFor="inputNumber"
                                            className="col-sm-12 col-form-label"
                                        >
                                            Current Password
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" placeholder='Enter current password' onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} />
                                        </div>
                                    </div>
                                    <div className="col-sm-3 mb-3">
                                        <label
                                            htmlFor="inputNumber"
                                            className="col-sm-12 col-form-label"
                                        >
                                            New Password
                                        </label>
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" placeholder='Enter new password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
                                        </div>
                                    </div>
                                </div>

                                
                                   
                                          </div>


                                <div className=" mb-3">
                                    <div className="col-sm-10">
                                       
                                                
                                                <button
                                                    className="btn btn-warning"
                                                    onClick={(e) => {
                                                        updateUser(e);
                                                    }}
                                                >
                                                    Update
                                                </button>
                                      
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                
            
        </section>
    </main>

    )
}
