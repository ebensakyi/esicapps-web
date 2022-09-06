const PrimaryData = ({ levels, regions, districts }) => {

    return (

        <>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Region -  USE ACCORDIAN OR TAB VIEW</h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card */}
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">District</h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card */}
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Action</h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card */}
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Drain type</h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card */}
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Effluent Management</h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card */}
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Excreta Containment</h4>
                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            {/* <p className="text-muted">
                                Use <code>data-simplebar</code> attribute and add{" "}
                                <code>max-height: **px</code> to set default scrollbar.
                            </p> */}
                            <div className="mx-n3">
                                <div data-simplebar="" style={{ maxHeight: 500 }} className="px-3">
                                    <div className="card-body">
                                        <div className="row gy-4">
                                            <div className="col-xxl-8 col-md-8">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="basiInput"
                                                    />
                                                </div>

                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <label htmlFor="basiInput" className="form-label">
                                                        .
                                                    </label>
                                                    <div class="text-end">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <p>

                                    </p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bobby Davis</td>
                                                <td>Nov 14, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Christopher Neal</td>
                                                <td>Nov 21, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Monkey Karry</td>
                                                <td>Nov 24, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Aaron James</td>
                                                <td>Nov 25, 2021</td>
                                                <td>
                                                    <button className="badge bg-danger">Cancelled</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* end card-body */}
                    </div>
                    {/* end card */}
                </div>
            </div>
        </>

    )
}

export default PrimaryData;
