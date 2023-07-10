import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const HealthPremisesInfoEdit = ({ data }) => {
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
                    <h5 className="fs-14 mb-0">HEALTH INFORMATION SECTION</h5>
                  </div>
                </div>
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                  {data?.submittedData?.HospitalityPremisesInfoSection?.facilityName !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Facility Name</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HospitalityPremisesInfoSection?.facilityName
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}{" "}
                    {data?.submittedData?.HealthPremisesInfoSection
                      ?.healthPremisesType != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.healthPremisesType?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  
  {data?.submittedData?.HealthPremisesInfoSection?.physicalStructureTypeId
                       != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Premises Structure
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.physicalStructureType.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.toiletAvailability !=
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
                            data?.submittedData?.HealthPremisesInfoSection?.toiletAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.HealthPremisesInfoSection?.urinalAvailability !=
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
                            data?.submittedData?.HealthPremisesInfoSection?.urinalAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.HealthPremisesInfoSection?.bathroomAvailability !=
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
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.bathroomAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.HealthPremisesInfoSection?.drainsAvailability !=
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
                            data?.submittedData?.HealthPremisesInfoSection?.drainsAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.HealthPremisesInfoSection
                      ?.approvedHandwashingFacilityAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Handwashing facility availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.approvedHandwashingFacilityAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.ehoAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">EHO availabilty</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection?.ehoAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.HealthPremisesInfoSection?.incineratorAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Incinerator availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.incineratorAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.placentaPitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Placenta Pit availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.placentaPitAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}













                    {data?.submittedData?.HealthPremisesInfoSection?.healthPremisesTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                         Health Premises Type
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.healthPremisesType?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.separateWardId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Separate Ward
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.separateWard?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.ownershipTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Ownership Type
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.ownershipType?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.embalmingAreaConditionId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                         Embalming Area Condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.embalmingAreaCondition?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.embalmingAreaAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Embalming Area Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.embalmingAreaAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.bodyTraysAdequateId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                         Body Trays Adequate
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.bodyTraysAdequate?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.coldRoomAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                         Cold Room Availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.coldRoomAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.HealthPremisesInfoSection?.coldRoomConditionId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                         Cold Room Condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.coldRoomCondition?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}


{data?.submittedData?.HealthPremisesInfoSection?.numberWards !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                         Number of  Ward
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.HealthPremisesInfoSection
                              ?.numberWards
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

export default HealthPremisesInfoEdit;
