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
                    {data?.submittedData?.EateryPremisesInfoSection?.facilityName != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Facility Name</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.EateryPremisesInfoSection.facilityName}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.physicalStructureType?.name !=
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
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.physicalStructureType?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.toiletAvailability !=
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
                            data?.submittedData?.EateryPremisesInfoSection?.toiletAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.urinalAvailability !=
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
                            data?.submittedData?.EateryPremisesInfoSection?.urinalAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.bathroomAvailability !=
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
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.bathroomAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.drainsAvailability !=
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
                            data?.submittedData?.EateryPremisesInfoSection?.drainsAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection
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
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.approvedHandwashingFacilityAvailabilityEatery
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.EateryPremisesInfoSection
                      ?.cookedFoodStorageCondtionSafeId != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Cooked Food Storage Condtion Safe
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.cookedFoodStorageCondtionSafe.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection
                      ?.uncookedFoodStorageCondtionSafeId != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Uncooked Food Storage Condtion Safe
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.uncookedFoodStorageCondtionSafe.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.designatedSmokingAreaId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Designated Smoking Area
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.designatedSmokingArea?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection
                      ?.protectiveClothingUsedId != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Protective Clothing Used
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.protectiveClothingUsed?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.firstAidAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          First Aid Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.firstAidAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.kitchenAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Kitchen Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.kitchenAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.numberMaleWorkers !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of male workers
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.numberMaleWorkers
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection?.numberFemaleWorkers !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of female workers
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.numberFemaleWorkers
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.EateryPremisesInfoSection
                      ?.numberFoodHandlingMedical != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of food Handling Medically Cert
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection
                              ?.numberFoodHandlingMedical
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.EateryPremisesInfoSection?.numberFoodHandling !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of food Handling Staff
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.numberFoodHandling
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.EateryPremisesInfoSection?.numberRooms != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of rooms</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.EateryPremisesInfoSection?.numberRooms}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.EateryPremisesInfoSection?.facilityCapacity !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Facility capacity
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.facilityCapacity
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}


{data?.submittedData?.EateryPremisesInfoSection?.disinfestationId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Disinfestation done
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.disinfestation?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.submittedData?.EateryPremisesInfoSection?.disinfestationFrequencyId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Disinfestation Frequency
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.disinfestationFrequency?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.submittedData?.EateryPremisesInfoSection?.disinfectionId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Disinfection done?
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.disinfection?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

{data?.submittedData?.EateryPremisesInfoSection?.disinfectionFrequencyId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Disinfection Frequency
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.EateryPremisesInfoSection?.disinfectionFrequency?.name
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
