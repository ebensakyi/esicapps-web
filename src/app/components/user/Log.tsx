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

export default function Log({ data }: any) {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })

    
 

   
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>LOGS</h1>
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
                  
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Logs</h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>

                                            <th scope="col">Activity</th>
                                            <th scope="col">Date</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.logs.map((log: any) => {
                                            return (
                                                <tr key={log.id}>
                                                    <td>{log.name}</td>
                                                    <td>{log.activity}</td>
                                                    <td>{log.createdAt}</td>
                                                 
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
