import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const InstitutionPremisesInfoView = ({ data }) => {
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
                          <h5 className="fs-14 mb-0">
                            INSTITUTION INFORMATION SECTION
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          {data?.InstitutionPremisesInfoSection
                            ?.toiletAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Toilet facility availabilty
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.InstitutionPremisesInfoSection
                                    .toiletAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
                            ?.urinalAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Urinal facility availabilty
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.InstitutionPremisesInfoSection
                                    .urinalAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
                            ?.bathroomAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Bathroom facility availabilty
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.InstitutionPremisesInfoSection
                                    .bathroomAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
                            ?.drainsAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Drains availabilty
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.InstitutionPremisesInfoSection
                                    .drainsAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
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
                                  data?.InstitutionPremisesInfoSection
                                    ?.approvedHandwashingFacilityAvailabilityInstitution
                                    ?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
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
                                  data?.InstitutionPremisesInfoSection
                                    ?.numberNonTeachingStaff
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
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
                                  data?.InstitutionPremisesInfoSection
                                    .numberTeachingStaff
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
                            ?.numberMaleStudents != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Number of male students
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.InstitutionPremisesInfoSection
                                    .numberMaleStudents
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.InstitutionPremisesInfoSection
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
                                  data?.InstitutionPremisesInfoSection
                                    .numberFemaleStudents
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        {data?.InstitutionPremisesInfoSection
                          ?.animalSpaceCondition != null ? (
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Animal space condition
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.InstitutionPremisesInfoSection
                                  .animalSpaceCondition?.name
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
                    
    </>
  );
};

export default InstitutionPremisesInfoView;
