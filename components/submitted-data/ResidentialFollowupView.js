import axios from "axios";
import { useRouter } from "next/router";

const ResidentialFollowupView = ({ data }) => {
  const router = useRouter();

  

  const downloadInspection = async () => {
    const printContents = document.getElementById("printableArea").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    router.reload(window.location.pathname);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <div>
              <button
                type="button"
                className="btn btn-danger btn-label waves-effect right waves-light rounded-pill"
                onClick={() => downloadInspection()}
              >
                <i className="ri-file-pdf-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                Download Inspection
              </button>
            </div>
          </div>
          <div id="printableArea">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0">RESIDENTIAL</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Residential list</a>
                  </li>
                  <li className="breadcrumb-item active">Single inspection</li>
                </ol>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <div className="row align-items-center gy-3 mb-3">
                      <div className="col-sm">
                        <div>
                          <h5 className="fs-14 mb-0">
                            BASIC INFORMATION SECTION
                          </h5>
                        </div>
                      </div>
                      {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping
                  </a>
                </div> */}
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Premises Code
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.premisesCode}
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">Region</label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.BasicInfoSection?.Community?.District
                                  ?.Region.name
                              }
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">District</label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.BasicInfoSection?.Community != null
                                  ? data?.BasicInfoSection?.Community?.District
                                      ?.name
                                  : ""
                              }
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Electoral Area
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.ElectoralArea?.name}
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">Community</label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.BasicInfoSection?.Community != null
                                  ? data?.BasicInfoSection?.Community?.name
                                  : ""
                              }
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              GhanaPost GPS
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.BasicInfoSection?.ghanaPostGps}
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Name of respondent
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.BasicInfoSection?.respondentName}
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Respondent designation
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.BasicInfoSection?.RespondentDesignation
                                  .name
                              }
                              readOnly="readOnly"
                            />
                          </div>{" "}
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Respondent phone number
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.BasicInfoSection?.respondentPhoneNumber
                              }
                              readOnly="readOnly"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                </div>
              </div>
            </div>

          
            <div className="row">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <div className="row align-items-center gy-3 mb-3">
                      <div className="col-sm">
                        <div>
                          <h5 className="fs-14 mb-0">
                            ACTIONS & CONCLUSION SECTION
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          {data?.ConclusionSection?.obnoxiousTradeExist !=
                          null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Obnoxious Trade Exist
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.ConclusionSection?.obnoxiousTradeExist
                                    ?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.ConclusionSection?.PremisesNuisanceDetected
                            ?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Nuisance Observed
                              </label>
                              {data?.ConclusionSection?.PremisesNuisanceDetected?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x?.Nuisance?.name}
                                    readOnly="readOnly"
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.ConclusionSection?.officerComment != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Office Comment
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={data?.ConclusionSection?.officerComment}
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.ConclusionSection?.PremisesActionTaken
                            ?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Action Taken
                              </label>
                              {data?.ConclusionSection?.PremisesActionTaken?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x?.Action?.name}
                                    readOnly="readOnly"
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentialFollowupView;
