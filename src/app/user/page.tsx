import Image from 'next/image'

export default function User() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>USERS</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">Forms</li>
                        <li className="breadcrumb-item active">Elements</li>
                    </ol>
                </nav>
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
                                            <input type="text" className="form-control" placeholder='Surname' />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Other name(s)
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Other names' />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputEmail" className="col-sm-12 col-form-label">
                    Email
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="email" className="form-control" placeholder='Email' />
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
                                            <input type="number" className="form-control" placeholder='Phone number' />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label htmlFor="inputText" className="col-sm-12 col-form-label">
                    Designation/Role
                  </label> */}
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder='Designation/Position' />
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        {/* <label className="col-sm-2 col-form-label">Select role</label> */}
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option >User role</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option >User level</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option >Region</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        <div className="col-sm-12">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option >District</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" mb-3">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">
                                                Submit Form
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
