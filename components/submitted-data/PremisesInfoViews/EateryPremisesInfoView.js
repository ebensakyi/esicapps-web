import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const EateryPremisesInfoView = ({ data }) => {
  const router = useRouter();

  const query = router.query;

  
  let formId = query.inspectionFormId;
  let published = query.published;



  return (
    <>
     
             <div className="row">
          <div className="col-lg-12">
            <div className="row mb-3">
              <div className="col-xl-12">
                <div className="row align-items-center gy-3 mb-3">
                  <div className="col-sm">
                    <div>
                      <h5 className="fs-14 mb-0">EATERY INFORMATION SECTION</h5>
                    </div>
                  </div>
                </div>
                <div className="card product">
                  <div className="card-body">
                    <div className="row gy-3">
                      {data?.EateryPremisesInfoSection?.facilityName != null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">Facility Name</label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={data?.EateryPremisesInfoSection.facilityName}
                            readOnly="readOnly"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {data?.EateryPremisesInfoSection?.physicalStructureType !=
                      null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Physical Structure Type
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={
                              data?.EateryPremisesInfoSection
                                ?.physicalStructureType?.name
                            }
                            readOnly="readOnly"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {data?.EateryPremisesInfoSection?.toiletAvailability !=
                      null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Toilet facility availabilty
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={
                              data?.EateryPremisesInfoSection
                                ?.toiletAvailability?.name
                            }
                            readOnly="readOnly"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {data?.EateryPremisesInfoSection?.urinalAvailability !=
                      null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Urinal facility availabilty
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={
                              data?.EateryPremisesInfoSection
                                ?.urinalAvailability?.name
                            }
                            readOnly="readOnly"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {data?.EateryPremisesInfoSection?.bathroomAvailability !=
                      null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Bathroom facility availabilty
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={
                              data?.EateryPremisesInfoSection
                                ?.bathroomAvailability?.name
                            }
                            readOnly="readOnly"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {data?.EateryPremisesInfoSection?.drainsAvailability !=
                      null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Drains availabilty
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={
                              data?.EateryPremisesInfoSection
                                ?.drainsAvailability?.name
                            }
                            readOnly="readOnly"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {data?.EateryPremisesInfoSection
                        ?.approvedHandwashingFacilityAvailabilityEatery !=
                      null ? (
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Handwashing facility availabilty
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={
                              data?.EateryPremisesInfoSection
                                ?.approvedHandwashingFacilityAvailabilityEatery
                                ?.name
                            }
                            readOnly="readOnly"
                          />
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
        
    </>
  );
};

export default EateryPremisesInfoView;
