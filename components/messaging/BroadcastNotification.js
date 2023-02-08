import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router'

const BroadcastNotification = ({ regions, districts, messages }) => {
  const router = useRouter()

  const [group, setGroup] = useState();
  const [title, setTitle] = useState();
  const [recipient, setRecipient] = useState(null);

  const [message, setMessage] = useState();

  const sendBroadcastMessage = async (e) => {
    try {
      // console.log("sendBroadcastMessage");
      e.preventDefault();
      let data = {
        title,
        message,
        sendingType: 2,
        districtRecipient: districtRecipient,
        regionRecipient: regionRecipient,
        recipient: null,
      };

      const response = await axios.post("/api/v1/messaging/notification/broadcast", data);
     router.push('/messaging/notification/broadcast')

      setRegionRecipient("")
      setDistrictRecipient("")
      setRecipient("")
      setMessage("")
      setTitle("")
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
            <h5 className="mb-3">NOTIFICATION</h5>
            <div className="card">
              <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Broadcast</h4>
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
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                      onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="valueInput" className="form-label">
                        Message
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="valueInput"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-xxl-3 col-md-6">
                    <div>
                      <label htmlFor="readonlyInput" className="form-label">
                        Group
                      </label>

                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        onChange={(e) => {
                          setGroup(e.target.value);
                        }}
                      >
                        <option selected>Choose...</option>
                        <option key={1} value="1">
                          District
                        </option>
                        <option key={2} value="2">
                          Region
                        </option>
                      </select>
                    </div>
                  </div>
                  {group == 1 ? (
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="readonlyInput" className="form-label">
                          District
                        </label>

                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          onChange={(e) => {
                            setRecipient(e.target.value);
                          }}
                        >
                          <option selected>Choose...</option>
                          {districts.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {group == 2 ? (
                    <div className="col-xxl-3 col-md-6">
                      <div>
                        <label htmlFor="readonlyInput" className="form-label">
                          Region
                        </label>

                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          onChange={async (e) => {
                            setRecipient(e.target.value);
                          }}
                        >
                          <option selected>Choose...</option>
                          {regions.map((region) => (
                            <option value= {region.name} key={region.id}>
                              {region.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
                            sendBroadcastMessage(e);
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

           
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Messages</h5>
                </div>
                <div className="card-body">
                  <table
                    id="fixed-header"
                    className="table table-bordered dt-responsive nowrap table-striped align-middle"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Sending Type</th>
                        <th>Msg Type</th>
                        <th>Title</th>
                        <th>Message</th>

                        <th>Recipient</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((msg) => {
                        return (
                          <tr key={msg.id}>
                            <td>{msg.SendingType.name}</td>
                            <td>{msg.MessageType.name}</td>

                            <td>{msg.title}</td>
                            <td>{msg.message}</td>

                            <td>
                              
                              { msg.recipient}
                            </td>
                            {/* <td>
                        {user.activated == 0 ? (
                          <span className="badge text-bg-warning">
                            INACTIVE
                          </span>
                        ) : (
                          <span className="badge text-bg-success">ACTIVE</span>
                        )}
                      </td> */}

                            <td>
                              <div className="dropdown d-inline-block">
                                <button
                                  className="btn btn-soft-secondary btn-sm dropdown"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-fill align-middle" />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a className="dropdown-item edit-item-btn">
                                      <i className=" ri-send-plane-line align-bottom me-2 text-muted" />{" "}
                                      Resend
                                    </a>
                                  </li>
                                  {/* <li>
                              <a className="dropdown-item remove-item-btn">
                                <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                Delete
                              </a>
                            </li> */}
                                </ul>
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
        </div>
        {/*end col*/}
      </div>
    </div>
  );
};

export default BroadcastNotification;
