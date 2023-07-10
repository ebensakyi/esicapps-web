import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const MarketPremisesInfoEdit = ({ data }) => {
  console.log(data);

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
                    <h5 className="fs-14 mb-0">MARKET INFORMATION SECTION</h5>
                  </div>
                </div>
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data?.submittedData?.MarketPremisesInfoSection?.facilityName != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Facility Name</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection?.facilityName}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.marketPremisesTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.marketPremisesType
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.toiletAvailability !=
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
                            data?.submittedData?.MarketPremisesInfoSection?.toiletAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.urinalAvailability !=
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
                            data?.submittedData?.MarketPremisesInfoSection?.urinalAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.bathroomAvailability !=
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
                            data?.submittedData?.MarketPremisesInfoSection
                              ?.bathroomAvailability?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.drainsAvailability !=
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
                            data?.submittedData?.MarketPremisesInfoSection?.drainsAvailability
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection
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
                            data?.submittedData?.MarketPremisesInfoSection
                              ?.approvedHandwashingFacilityAvailabilityMarket
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.MarketPremisesInfoSection?.firstAidAvailabilityId !=
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
                            data?.submittedData?.MarketPremisesInfoSection.firstAidAvailability
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.ownershipTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Ownership Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection.ownershipType.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberStores != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of stores</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection?.numberStores}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberSheds != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of sheds</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection.numberSheds}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberStalls != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of stalls</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection.numberStalls}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberTraders != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of traders
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection?.numberTraders}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberMeatShops !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of meat shops
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.numberMeatShops
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberColdStores !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of Cold Stores
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.numberColdStores
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.MarketPremisesInfoSection?.numberMills != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of mills</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection?.numberMills}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberChopbars != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of chopbars
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection?.numberChopbars}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.MarketPremisesInfoSection?.derattingFrequencyId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Deratting Frequency
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.derattingFrequency
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.cleanupFrequencyId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Cleanup Frequency
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.cleanupFrequency
                              ?.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberLorrySheds !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of Lorry Sheds
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.numberLorrySheds
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberVehicles != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of Vehicles
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.numberVehicles
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberDrivers != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of drivers
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.submittedData?.MarketPremisesInfoSection?.numberDrivers}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.submittedData?.MarketPremisesInfoSection?.numberFoodVendors !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of food vendors
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection?.numberFoodVendors
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.submittedData?.MarketPremisesInfoSection
                      ?.generalSanitaryConditionId != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          General Sanitary Condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.MarketPremisesInfoSection
                              ?.generalSanitaryCondition?.name
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

export default MarketPremisesInfoEdit;
