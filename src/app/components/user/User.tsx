"use client"
import Image from 'next/image'
import { useState } from 'react';
import { userLevel } from '../../../../prisma/seed/userLevel';
import { district } from '../../../../prisma/seed/district';
import axios from 'axios';
import router from 'next/router';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function User({ data }: any) {
    const searchParams = useSearchParams();
    const { data: session } = useSession()

    const searchText = searchParams.get('searchText');
    const formId = searchParams.get('formId');


    const [userRole, setUserRole] = useState(0);
    const [userId, setUserId] = useState();
    const [selectedUserLevel, setSelectedUserLevel] = useState(0);

    const [surname, setSurname] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [designation, setDesignation] = useState("");
    const [region, setRegion] = useState(0);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const [electoralArea, setElectoralArea] = useState();
    const [showRegion, setShowRegion] = useState(false);
    const [showDistrict, setShowDistrict] = useState(false);
    // const [searchText, setSearchText] = useState();

    

    const getDistrictsByRegion = async (regionId: number) => {
        try {
            //e.preventDefault();
            const response = await axios.get(
                "/api/primary-data/district?regionId=" + regionId
            );
            setDistricts(response.data);
        } catch (error) { }
    };

    // const handleExportAll = async () => {
    //     try {

    //       const response = await axios.post(
    //         `/api/v1/submitted-data/data-to-excel`,
    //         {
    //           inspectionFormId: Number(formId),
    //           fileName: handleExcelName(),
    //           published,
    //           exportType: 1,
    //         }
    //       );
    //       if (response.status == 200) {
    //         router.push(response.data);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
      const handleExportFiltered = async () => {
        try {
          const response = await axios.post(
            `/api/v1/submitted-data/data-to-excel`,
            {
              searchText: searchText,
              exportType: 2,
            }
          );
          if (response.status == 200) {
            router.push(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      const autoHandleSearch = (searchText:any) => {
        try {
          let currentUrl = router.pathname;
          const path = router.pathname;
          const query = router.query;
    
          let page =1// query.page;
    
          router.push({
            pathname: path,
            query: {
              page,
              searchText,
            },
          });
          // router.push({
          //   pathname: currentUrl,
          //   query: `&searchText=${searchText}`,
          // });
        } catch (error) {
          console.log(error);
        }
      };
    
      const handlePagination = (page:any) => {
        const path = router.pathname;
        const query = router.query;
        query.page = page.selected + 1;
        router.push({
          pathname: path,
          query: query,
        });
      };
    
      const addUser = async (e:any) => {
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
          if (designation == "") {
            return toast.error("Designation cannot be empty");
          }
          if (userRole == 0) {
            return toast.error("User type cannot be empty");
          }
          if (selectedUserLevel == 2) {
            if (region == null || region == 0) {
              return toast.error("Region cannot be empty");
            }
          }
          if (selectedUserLevel == 3) {
            if (district == null || district == 0) {
              return toast.error("District cannot be empty");
            }
          }
    
          let data = {
            userRoleId: Number(userRole),
            userLevelId: Number(selectedUserLevel),
    
            surname,
            otherNames,
            email,
            phoneNumber,
            designation,
            region: Number(region), 
            district: Number(district),
          };
    
    
    
          const response = await axios.post("/api/v1/account/user", data);
          router.replace(router.asPath);
    
          setSurname("");
          setOtherNames("");
          setEmail("");
          setPhoneNumber("");
          setDesignation("");
          setUserRole(0);
          setRegion(0);
          setDistrict(0);
          setSelectedUserLevel(0);
    
          return toast.success(response.data.message);
        } catch (error:any) {
          return toast.error(error.response.data.message);
        }
      };
    
      const updateUser = async (e:any) => {
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
          if (designation == "") {
            return toast.error("Designation cannot be empty");
          }
          if (userRole == 0) {
            return toast.error("User type cannot be empty");
          }
          if (selectedUserLevel == 2) {
            if (region == null || region == 0) {
              return toast.error("Region cannot be empty");
            }
          }
          if (selectedUserLevel == 3) {
            if (district == null || district == 0) {
              return toast.error("District cannot be empty");
            }
          }
    
          let data = {
            userId,
            userRoleId: Number(userRole),
            userLevelId: Number(selectedUserLevel),
            surname,
            otherNames,
            email,
            phoneNumber,
            designation,
            region,
            district,
          };
    
          const response = await axios.put("/api/v1/account/user", data);
          router.replace(router.asPath);
    
          setSurname("");
          setOtherNames("");
          setEmail("");
          setPhoneNumber("");
          setDesignation("");
          setUserRole(0);
          setRegion(0);
          setDistrict(0);
          setIsEditing(false);
          setSelectedUserLevel(0);
    
          return toast.success(response.data.message);
        } catch (error) {
          console.log(error);
          return toast.error("An error occurred while updating user");
        }
      };


      let userLevel = session?.user?.userLevelId  ;
      
    return (
        <main id="main" className="main">
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
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enter user details</h5>
                                {/* General Form Elements */}
                                <form>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Surname
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} value={surname} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Other name(s)
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Other names' onChange={(e) => setOtherNames(e.target.value)} value={otherNames} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputEmail" className="col-sm-12 col-form-label">
                    Email
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                    </div>

                                    <div className=" mb-3">
                                        {/* <label
                    htmlFor="inputNumber"
                    className="col-sm-12 col-form-label"
                  >
                   Phone Number
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" placeholder='Phone number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Designation/Role
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Designation/Position' onChange={(e) => setDesignation(e.target.value)} value={designation} />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label className="col-sm-2 col-form-label">Select role</label> */}
                                        <div className="col-sm-12">
                                            <select
                                                onChange={(e: any) => setUserRole(e.target.value)}
                                                className="form-select"
                                                aria-label="Default select example"
                                            >

                                                <option >Select user role</option>
                                                {data.roles.map((role: any) => {
                                                    return (
                                                        <option value={role.id}>{role.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e: any) => {
                                                    setSelectedUserLevel(e.target.value);

                                                    if (selectedUserLevel == 1) {
                                                        setRegion(0);
                                                        setDistrict(0);
                                                    }
                                                    if (selectedUserLevel == 2) {
                                                        setDistrict(0);
                                                    }
                                                    if (selectedUserLevel == 3) {
                                                        getDistrictsByRegion(0);

                                                        setRegion(0);
                                                    }

                                                }}
                                                value={selectedUserLevel}
                                            >
                                                <option >Select user level</option>
                                                {data.userLevels.map((ul: any) => {
                                                    return (
                                                        <option key={ul.id} value={ul.id}>{ul.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    {selectedUserLevel == 2 ?
                                        <div className=" mb-3">
                                            <div className="col-sm-12">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                >
                                                    <option >Select region</option>
                                                    {data.regions.map((rg: any) => {
                                                        return (
                                                            <option key={rg.id} value={rg.id}>{rg.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div> : <></>}
                                    {/* {selectedUserLevel == "3" ?
                                    <div className=" mb-3">
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option >Select district</option>
                                                {data.districts.map((d: any) => {
                                                    return (
                                                        <option key={d.id} value={d.id}>{d.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>:<></>} */}
                                    {selectedUserLevel == 3 ? (
                                        <>
                                            {userLevel==1 ? (
                                                <div className=" mb-3">
                                                <div className="col-sm-12">
                                                    <select
                                                          className="form-select"
                                                          aria-label="Default select example"
                                                        onChange={async (e: any) => {
                                                            //setFilterValue(e.target.value);
                                                            setRegion(e.target.value);

                                                            await getDistrictsByRegion(e.target.value);
                                                        }}
                                                        value={region}
                                                    >
                                                        {" "}
                                                        <option selected>...Select region... </option>
                                                        {data.regions?.map((data: any) => (
                                                            <option key={data.id} value={data.id}>
                                                                {data.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                           <div className=" mb-3">
                                            <div className="col-sm-12">
                                                <select
                                                    className="form-control"
                                                    aria-label="Default select example"
                                                    onChange={(e: any) => {
                                                        setDistrict(e.target.value);
                                                    }}
                                                    value={district}
                                                >
                                                    {" "}
                                                    <option selected>...Select... </option>
                                                    {districts?.map((data: any) => (
                                                        <option key={data.id} value={data.id}>
                                                            {data.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
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
                                <table className="table table-bordered border-primary">
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
