
const SanitaryPremisesInfoEdit = ({ data }:any) => {

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">SANITARY INFORMATION SECTION</h5>
                  </div>
                </div>
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data?.SanitaryPremisesInfoSection?.physicalStructureType
                      ?.name != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Premises Structure
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.physicalStructureType?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.SanitaryPremisesInfoSection?.sanitaryPremisesType
                      ?.name != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises Subtype</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.sanitaryPremisesSubtypeId
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.SanitaryPremisesInfoSection
                      ?.sanitaryPremisesTypeId != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.sanitaryPremisesType.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.SanitaryPremisesInfoSection?.staffChangingRoomId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Staff Changing Room
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection?.staffChangingRoom
                              ?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.SanitaryPremisesInfoSection?.ownershipTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Ownership Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection?.ownershipType
                              .name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.SanitaryPremisesInfoSection?.sanitaryFacilityMgtId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Sanitary Facility Management
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.sanitaryFacilityMgt?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}




{data?.SanitaryPremisesInfoSection?.disinfectionFrequencyId !=
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
                            data?.SanitaryPremisesInfoSection
                              ?.disinfectionFrequency.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.disinfestationQuarterlyId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Disinfestation Quarterly
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.disinfestationQuarterly.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.protectiveClothingUsedId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Protectective Clothing
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.protectiveClothing.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.slaughterAreaAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Slaughter Area Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.slaughterAreaAvailability.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.storeRoomAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Store Room Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.storeRoomAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.condemnationRoomAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Condemnation Room Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.condemnationRoomAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.cloakRoomAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Cloak Room Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.cloakRoomAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.comfortRoomAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Comfort Room Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.comfortRoomAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.wheelbathAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Wheel bath Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.wheelbathAvailability.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.footbathAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Footbath Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.footbathAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.leachateMgtId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Leachate Management
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.leachateMgt?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}


{data?.SanitaryPremisesInfoSection?.safeHazardousWasteMgtId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                       Safe Hazardous Waste Management
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.safeHazardousWasteMgt?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.sextonManagementId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Sexton Management
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.sextonManagement.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.sextonOfficeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Sexton Office Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.sextonOffice?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.properLayoutId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                       Proper Layout
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.properLayout?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.cremationPracticedId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Cremation Practiced
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.cremationPracticed?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}



{data?.SanitaryPremisesInfoSection?.workersOfficeAvailabilityId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Workers Office Availability
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.workersOfficeAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.transferStationCapacity !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Transfer Station Capacity
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.transferStationCapacity
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.numberContainer !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Number Container
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.numberContainer
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.containerAttendantName !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Container Attendant Name
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.containerAttendantName
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.containerAttendantPhoneNumber !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Container Attendant Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.containerAttendantPhoneNumber
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                     {data?.SanitaryPremisesInfoSection?.numberWorkers !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                       Number of Workers
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.numberWorkers
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

{data?.SanitaryPremisesInfoSection?.cremationPlatformId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Cremation Platform
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.cremationPlatform?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                      {data?.SanitaryPremisesInfoSection?.sanitaryAshesDisposalId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Sanitary Ashes Disposal
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.sanitaryAshesDisposal?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                      {data?.SanitaryPremisesInfoSection?.numberCarcassHandlers !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Number of Carcass Handlers
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.numberCarcassHandlers
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                      {data?.SanitaryPremisesInfoSection?.numberCarcassHandlersMedicalCert !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                        Number Carcass Handlers Medically Certified
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.numberCarcassHandlersMedicalCert
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    







                    {data?.SanitaryPremisesInfoSection?.toiletAvailability !=
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
                            data?.SanitaryPremisesInfoSection
                              ?.toiletAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.urinalAvailability !=
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
                            data?.SanitaryPremisesInfoSection
                              ?.urinalAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.bathroomAvailability !=
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
                            data?.SanitaryPremisesInfoSection
                              ?.bathroomAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.drainsAvailability !=
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
                            data?.SanitaryPremisesInfoSection
                              ?.drainsAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection
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
                            data?.SanitaryPremisesInfoSection
                              ?.approvedHandwashingFacilityAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.householdNumber !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of household
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection?.householdNumber
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.maleOccupantNumber !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of male occupants
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.maleOccupantNumber
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.femaleOccupantNumber !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of female occupants
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.femaleOccupantNumber
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.animalAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Animal availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection
                              ?.animalAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.SanitaryPremisesInfoSection?.animalNumber != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Animal number</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection?.animalNumber
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                   
                    {data?.SanitaryPremisesInfoSection?.siteFencedId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Is site fenced
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.SanitaryPremisesInfoSection?.siteFenced
                              .name
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

export default SanitaryPremisesInfoEdit;
