import Image from 'next/image'

export default function Role() {
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
                                            <input type="text" className="form-control" placeholder='Select page(s)' />
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
