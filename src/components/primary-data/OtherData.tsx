"use client"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname, redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { useSession } from "next-auth/react";
import Modal from 'react-modal'
import { LOGIN_URL } from "@/config";
import { animalType } from '../../../prisma/seed/animalType';
import { cemeteryWorkers } from '../../../prisma/seed/cemeteryWorkers';


export default function OtherData({ data }: any) {

    // const [searchText, setSearchText] = useState();
    // const [region, setRegion] = useState("");
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [name, setName] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const [primaryData, setPrimaryData] = useState(0)




    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect(LOGIN_URL);
        }
    })


    const router = useRouter();
    const pathname = usePathname()



    const [isEditing, setIsEditing] = useState(false);



    const add = async (e: any, model: string) => {
        try {
            e.preventDefault();


            if (name == "") return toast.error("Name cannot be empty");


            let data = {
                name,

            };


            const response = await axios.post(`/api/primary-data/${model}`, data);
            setName("");

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
    const update = async (e: any, model: string) => {
        try {
            e.preventDefault()
            let data = {
                name,

            };


            const response = await axios.put(
                `/api/primary-data/${model}`, data
            );

            if (response.status == 200) {
                setName("")

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



    function openModal(e: any, primaryData: number) {
        e.preventDefault()
        setIsOpen(true)

        setPrimaryData(primaryData)


    }
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>OTHER DATA</h1>
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
                <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                    {primaryData == 1 ?
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Action </h6>
                                <div className="row gy-4">
                                    <div className="col-xxl-4 col-md-8">
                                        <div>
                                            <label
                                                htmlFor="basiInput"
                                                className="form-label"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="basiInput"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div>
                                            <label
                                                htmlFor="basiInput"
                                                className="form-label"
                                            >
                                                .
                                            </label>
                                            <div className="text-end">
                                                <button
                                                    onClick={(e: any) => {
                                                        add(e, "actions");
                                                    }}
                                                    className="btn btn-primary"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            {/* <th scope="col">Id</th> */}
                                            <th scope="col">Name</th>

                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.actions.map((data: any) => (
                                            <tr key={data.id}>
                                                {/* <th scope="row">{region.id}</th> */}
                                                <td>{data.name}</td>

                                                <td>
                                                    <button className="badge bg-success" onClick={async () => {
                                                        setName(data.name)
                                                    }}>
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        primaryData == 2 ?
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">Animal Types </h6>
                                    <div className="row gy-4">
                                        <div className="col-xxl-4 col-md-8">
                                            <div>
                                                <label
                                                    htmlFor="basiInput"
                                                    className="form-label"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basiInput"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div>
                                                <label
                                                    htmlFor="basiInput"
                                                    className="form-label"
                                                >
                                                    .
                                                </label>
                                                <div className="text-end">
                                                    <button
                                                        onClick={(e: any) => {
                                                            add(e, "animalTypes");
                                                        }}
                                                        className="btn btn-primary"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                {/* <th scope="col">Id</th> */}
                                                <th scope="col">Name</th>

                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.animalTypes.map((data: any) => (
                                                <tr key={data.id}>
                                                    {/* <th scope="row">{region.id}</th> */}
                                                    <td>{data.name}</td>

                                                    <td>
                                                        <button className="badge bg-success" onClick={async () => {
                                                            setName(data.name)
                                                        }}>
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div> :
                            primaryData == 3 ?
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Cemetery Workers </h6>
                                        <div className="row gy-4">
                                            <div className="col-xxl-4 col-md-8">
                                                <div>
                                                    <label
                                                        htmlFor="basiInput"
                                                        className="form-label"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                        value={name}
                                                        onChange={(e) =>
                                                            setName(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div>
                                                    <label
                                                        htmlFor="basiInput"
                                                        className="form-label"
                                                    >
                                                        .
                                                    </label>
                                                    <div className="text-end">
                                                        <button
                                                            onClick={(e: any) => {
                                                                add(e, "actions");
                                                            }}
                                                            className="btn btn-primary"
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    {/* <th scope="col">Id</th> */}
                                                    <th scope="col">Name</th>

                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.cemeteryWorkers.map((data: any) => (
                                                    <tr key={data.id}>
                                                        {/* <th scope="row">{region.id}</th> */}
                                                        <td>{data.name}</td>

                                                        <td>
                                                            <button className="badge bg-success" onClick={async () => {
                                                                setName(data.name)
                                                            }}>
                                                                Edit
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div> :
                                <></>


                    }
                </Modal>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add Single</h5>

                                <div className="row g-3">
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 1)}>
                                            Action
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 2)}>
                                            Animal Types
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 3)}>
                                            Cemetery Workers
                                        </button>
                                    </div>

                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 4)}>
                                            Cleaning Frequencies
                                        </button>
                                    </div>

                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 5)}>
                                            Container Conditions
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            Container Volumes
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    <div className="col-md-2">

                                        <button type="submit" className="btn btn-primary" onClick={async (e: any) => openModal(e, 6)}>
                                            XXXXXXXX
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </main>

    )
}
