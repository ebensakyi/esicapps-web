import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Page = ({}) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");

  const add = async (e) => {
    try {
      e.preventDefault();
      if (url == "") return toast.error("Url cannot be empty");
      if (name == "") return toast.error("Name cannot be empty");
      if (icon == "") return toast.error("Icon cannot be empty");

      let data = {
        name,
        url,
        icon,
      };

      const response = await axios.post("/api/v1/permission/page", data);
      setUrl("");
      setName("");
      setIcon("");
      router.replace(router.asPath);
      //router.push("/messaging/sms/single");

      return toast.success("Message sent");
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
    }
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
      <div className="col-12">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="mb-3">Menu</h5>

            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Add</h4>
                {/* <div className="flex-shrink-0">
                  <div className="form-check form-switch form-switch-right form-switch-md">
                    <label
                      htmlFor="form-grid-showcode"
                      className="form-label text-muted"
                    >
                      Show Code
                    </label>
                    <input
                      className="form-check-input code-switcher"
                      type="checkbox"
                      id="form-grid-showcode"
                    />
                  </div>
                </div> */}
              </div>
              {/* end card header */}
              <div className="card-body">
                <div className="row gy-4">
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="valueInput" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="valueInput" className="form-label">
                        Url
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Icon
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        value={icon}
                        onChange={(e) => {
                          setIcon(e.target.value);
                        }}
                      >
                        <option value="">Choose...</option>

                        <option >Home Icon</option>
                        <option >Data Icon</option>
                        <option >Chart Icon</option>
                        <option >SMS Icon</option>
                        <option >Notification Icon</option>
                        <option >Setting Icon</option>
                        <option >User Icon</option>

                      </select>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Has submenu
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        value={icon}
                        onChange={(e) => {
                          setHasSubmenu(e.target.value);
                        }}
                      >
                        <option value="">Choose...</option>

                        <option >Yes</option>
                        <option >No</option>
                      

                      </select>
                    </div>
                  </div>

                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        District
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => {
                          setDistrict(e.target.value);
                        }}
                      >
                        <option selected>Choose...</option>
                        {districts.map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}

                  {/* <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Electoral Area
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => setElectoralArea(e.target.value)}
                      >
                        <option selected>Choose...</option>
                        {electoralAreas.map((ea) => (
                          <option key={ea.id} value={ea.id}>
                            {ea.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}
                </div>
                <br />
                <div className="row gy-4">
                  <div className="flex-shrink-0">
                    <div className="col-lg-12">
                      <div className="text-end">
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            add(e);
                          }}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
      </div>
    </div>
  );
};

export default Page;
