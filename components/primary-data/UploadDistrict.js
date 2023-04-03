import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadDistrict = ({ data,regions }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState();
  const [region, setRegion] = useState(null);

  const [districtFile, setDistrictFile] = useState(null);
  const [districtFileUrl, setDistrictFileUrl] = useState(null);
  const form = useRef(null);

  const handlePagination = (page) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };

  const handleSearch = () => {
    let currentUrl = router.pathname;
    router.push({
      pathname: currentUrl,
      query: `&searchText=${searchText}`,
    });
    // const path = router.pathname;
    // const query = router.query;
    // query.page = page.selected + 1;
    // router.push({
    //   pathname: path,
    //   query: query,
    // });
  };

  const autoHandleSearch = (searchText) => {
    let currentUrl = router.pathname;
    router.push({
      pathname: currentUrl,
      query: `&searchText=${searchText}`,
    });
  };

  const submit = async (e) => {
    try {
      e.preventDefault();

    let body = new FormData(form.current);
    body.append("csvFile", districtFile);
    body.append("regionId", region);


    const response = await axios({
      url: "/api/v1/primary-data/location/district/upload",
      method: "POST",
      headers: {
        authorization: "A",
        "Content-Type": "application/json",
      },
      data: body,
    });
     
     
      router.replace(router.asPath);
    } catch (error) {
console.log(error);
        toast.error(error);
      
    }
  };

  const uploadDistrict = (event) => {
   

    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];


      setDistrictFile(i);
      setDistrictFileUrl(URL.createObjectURL(i));
    }
  };

  const deleteDistrict = async (e,id) => {
    e.preventDefault();
    console.log(id);

    try {
      await axios.delete("/api/v1/primary-data/district-data", { data: { id } });
      router.replace(router.asPath);

    } catch (error) {}
  };
  return (
    <div className="row">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="col-lg-12">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">UPLOAD DISTRICT</h5>
            </div>
            <div className="card-body">
              {/* <h6 className="card-title">Add District</h6> */}
              <form ref={form}>
                 <div className="row gy-4">
                 <div className="col-xxl-4 col-md-8">
                 <label htmlFor="basiInput" className="form-label">
                      Select region
                    </label>
                 <select
                        className="form-select"
                        id="inputGroupSelect02"
                        value={region}
                        onChange={(e) => {
                          setRegion(e.target.value);
                          // getElectoralByDistrict(e, e.target.value);
                        }}
                      >
                        <option>Choose...</option>
                        {regions.map((region) => (
                          <option key={region.id} value={region.id}>
                            {region.name}
                          </option>
                        ))}
                      </select>
                    </div>
                <div className="col-xxl-4 col-md-8">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      Upload CSV(With name column)
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="basiInput"
                      onChange={uploadDistrict}
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div>
                    <label htmlFor="basiInput" className="form-label">
                      .
                    </label>
                    <div className="text-end">
                      <button
                         onClick={(e) => {
                          submit(e);
                        }}
                        className="btn btn-primary"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </form>
             
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">DISTRICTS</h5>
          </div>
          <div className="card-body">
            {/* <div className="col-md-4" style={{ textAlign: "end" }}>
              <div className="form-group">
                <div className="mb-6 position-relative">
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Search by name of applicant"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      autoHandleSearch(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div> */}

            <div className="col-sm">
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2">
                  <input
                    type="text"
                    className="form-control"
                    id="searchResultList"
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      autoHandleSearch(e.target.value);
                    }}
                    placeholder="Search..."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
            </div>
            <br />
            <table
              id="fixed-header"
              className="table table-bordered dt-responsive nowrap table-striped align-middle"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>District</th>
                  <th>Abbreviation</th>

                  <th>Region</th>

                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {data.district.map((dt) => {
                  return (
                    <tr key={dt.id}>
                      <td>{dt.name}</td>
                      <td>{dt.abbrv}</td>
                      <td>{dt.Region.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ReactPaginate
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              initialPage={data.curPage - 1}
              pageCount={data.maxPage}
              onPageChange={handlePagination}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDistrict;
