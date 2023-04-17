import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const MarketPremisesInfoView = ({ data }) => {
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
                            MARKET INFORMATION SECTION
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          {data?.MarketPremisesInfoSection
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
                                  data?.MarketPremisesInfoSection
                                    ?.toiletAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection
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
                                  data?.MarketPremisesInfoSection
                                    ?.urinalAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection
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
                                  data?.MarketPremisesInfoSection
                                    ?.bathroomAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection
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
                                  data?.MarketPremisesInfoSection
                                    ?.drainsAvailability?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection
                            ?.approvedHandwashingFacilityAvailabilityMarket !=
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
                                  data?.MarketPremisesInfoSection
                                    ?.approvedHandwashingFacilityAvailabilityMarket
                                    ?.name
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection?.householdNumber !=
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
                                  data?.MarketPremisesInfoSection
                                    ?.householdNumber
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection
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
                                  data?.MarketPremisesInfoSection
                                    .maleOccupantNumber
                                }
                                readOnly="readOnly"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.MarketPremisesInfoSection
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
                                  data?.MarketPremisesInfoSection
                                    .femaleOccupantNumber
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

export default MarketPremisesInfoView;
