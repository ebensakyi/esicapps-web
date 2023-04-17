import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const SanitaryPremisesInfoView = ({ data }) => {
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
                            SANITARY INFORMATION SECTION
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          {data?.SanitaryPremisesInfoSection
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
                                  data?.SanitaryPremisesInfoSection
                                    ?.toiletAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
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
                                  data?.SanitaryPremisesInfoSection
                                    ?.urinalAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
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
                                  data?.SanitaryPremisesInfoSection
                                    ?.bathroomAvailability.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
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
                                  data?.SanitaryPremisesInfoSection
                                    ?.drainsAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
                            ?.approvedHandwashingFacilityAvailability !=
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
                                  data?.SanitaryPremisesInfoSection
                                    ?.approvedHandwashingFacilityAvailability
                                    ?.name
                                }
                                readOnly="readOnly"
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
                                  data?.SanitaryPremisesInfoSection
                                    ?.householdNumber
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
                            ?.maleOccupantNumber != null ? (
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
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
                            ?.femaleOccupantNumber != null ? (
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
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection
                            ?.animalAvailability != null ? (
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
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.SanitaryPremisesInfoSection?.animalNumber !=
                          null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Animal number
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.SanitaryPremisesInfoSection
                                    ?.animalNumber
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}

                          {data?.SanitaryPremisesInfoSection?.PremisesAnimal?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">Animals</label>
                              {data?.SanitaryPremisesInfoSection?.PremisesAnimal?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.AnimalType.name}
                                    readOnly="readOnly"
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}

                          {data?.SanitaryPremisesInfoSection
                            ?.vaccinationProof != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Animal vaccination proof
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.SanitaryPremisesInfoSection
                                    ?.vaccinationProof.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        {data?.SanitaryPremisesInfoSection
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
                                data?.SanitaryPremisesInfoSection?.animalSpaceCondition?.name
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

export default SanitaryPremisesInfoView;
