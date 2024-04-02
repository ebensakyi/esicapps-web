const EateryPremisesInfoEdit = ({ data }:any) => {

// const searchParams = useSearchParams()
//   let formId = searchParams.get("inspectionFormId");
//   let published = searchParams.get("published");


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
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection?.physicalStructureType?.name !=
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
                            data?.EateryPremisesInfoSection?.toiletAvailability
                              ?.name
                          }
                          
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
                            data?.EateryPremisesInfoSection?.urinalAvailability
                              ?.name
                          }
                          
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
                            data?.EateryPremisesInfoSection?.drainsAvailability
                              ?.name
                          }
                          
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
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.EateryPremisesInfoSection
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
                            data?.EateryPremisesInfoSection
                              ?.cookedFoodStorageCondtionSafe.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection
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
                            data?.EateryPremisesInfoSection
                              ?.uncookedFoodStorageCondtionSafe.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection?.designatedSmokingAreaId !=
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
                            data?.EateryPremisesInfoSection
                              ?.designatedSmokingArea?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection
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
                            data?.EateryPremisesInfoSection
                              ?.protectiveClothingUsed?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection?.firstAidAvailabilityId !=
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
                            data?.EateryPremisesInfoSection
                              ?.firstAidAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection?.kitchenAvailabilityId !=
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
                            data?.EateryPremisesInfoSection?.kitchenAvailability
                              ?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection?.numberMaleWorkers !=
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
                            data?.EateryPremisesInfoSection?.numberMaleWorkers
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection?.numberFemaleWorkers !=
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
                            data?.EateryPremisesInfoSection?.numberFemaleWorkers
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.EateryPremisesInfoSection
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
                            data?.EateryPremisesInfoSection
                              ?.numberFoodHandlingMedical
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.EateryPremisesInfoSection?.numberFoodHandling !=
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
                            data?.EateryPremisesInfoSection?.numberFoodHandling
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.EateryPremisesInfoSection?.numberRooms != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of rooms</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.EateryPremisesInfoSection?.numberRooms}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.EateryPremisesInfoSection?.facilityCapacity !=
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
                            data?.EateryPremisesInfoSection?.facilityCapacity
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}


{data?.EateryPremisesInfoSection?.disinfestationId !=
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
                            data?.EateryPremisesInfoSection?.disinfestation?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.EateryPremisesInfoSection?.disinfestationFrequencyId !=
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
                            data?.EateryPremisesInfoSection?.disinfestationFrequency?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.EateryPremisesInfoSection?.disinfectionId !=
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
                            data?.EateryPremisesInfoSection?.disinfection?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

{data?.EateryPremisesInfoSection?.disinfectionFrequencyId !=
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
                            data?.EateryPremisesInfoSection?.disinfectionFrequency?.name
                          }
                          
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

export default EateryPremisesInfoEdit;
