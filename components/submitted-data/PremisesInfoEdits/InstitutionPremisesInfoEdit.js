import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const InstitutionPremisesInfoEdit = ({ data }) => {
  const router = useRouter();
  console.log(data);
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
                    <h5 className="fs-14 mb-0">
                      INSTITUTION INFORMATION SECTION
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data?.submittedData?.InstitutionPremisesInfoSection?.facilityName !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Facility Name</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection.facilityName
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection?.Type != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection.Type?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection?.Subtype != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises Subtype</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection.Subtype?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection?.toiletAvailability !=
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
                            data?.submittedData?.InstitutionPremisesInfoSection
                              .toiletAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection?.urinalAvailability !=
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
                            data?.submittedData?.InstitutionPremisesInfoSection
                              .urinalAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection
                      ?.bathroomAvailabilityId != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Bathroom facility availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection
                              ?.bathroomAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection?.drainsAvailability !=
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
                            data?.submittedData?.InstitutionPremisesInfoSection
                              ?.drainsAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection
                      ?.approvedHandwashingFacilityAvailabilityInstitution !=
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
                            data?.submittedData?.InstitutionPremisesInfoSection
                              ?.approvedHandwashingFacilityAvailabilityInstitution
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection
                      ?.numberNonTeachingStaff != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of non teaching staff
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection
                              ?.numberNonTeachingStaff
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection
                      ?.numberTeachingStaff != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of teaching staff
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection
                              .numberTeachingStaff
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection?.numberMaleStudents !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of male students
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection
                              ?.numberMaleStudents
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.InstitutionPremisesInfoSection
                      ?.numberFemaleStudents != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of female students
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.InstitutionPremisesInfoSection
                              .numberFemaleStudents
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                 

                  {data?.submittedData?.InstitutionPremisesInfoSection?.ablutionSlabId !=
                  null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Ablution Slab</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection?.ablutionSlab
                            ?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}

                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.ablutionSlabConditionId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Ablution slab condition
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.ablutionSlabCondition?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}

                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.animalSpaceAvailabilityId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Animal space availabilty
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.animalSpaceAvailability?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.animalSpaceConditionId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Animal space condition
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.animalSpaceCondition?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.cookedFoodStorageCondtionSafeId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Cooked food condition safe
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.cookedFoodStorageCondtionSafe?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.uncookedFoodStorageCondtionSafeId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Uncooked food condition safe
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.uncookedFoodStorageCondtionSafe?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.foodVendorAvailabilityId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Food Vendor Availability
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.foodVendorAvailability?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.kitchenAvailabilityId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Kitchen Availability
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.kitchenAvailability?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.physicalStructureTypeId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Physical Structure Type
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.physicalStructureType?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection?.shepClubExistenceId !=
                  null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Shep Club Existence
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection?.shepClubExistence
                            ?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.slaughterAreaAvailabilityId != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Slaughter Area Availability
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.slaughterAreaAvailability?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
                    ?.slaughterAreaCondition != null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Slaughter Area condition
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.slaughterAreaCondition?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection?.soundProofId !=
                  null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Sound Proof</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data?.submittedData?.InstitutionPremisesInfoSection?.soundProof?.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.submittedData?.InstitutionPremisesInfoSection
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
                          data?.submittedData?.InstitutionPremisesInfoSection
                            ?.protectiveClothingUsed?.name
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

export default InstitutionPremisesInfoEdit;
