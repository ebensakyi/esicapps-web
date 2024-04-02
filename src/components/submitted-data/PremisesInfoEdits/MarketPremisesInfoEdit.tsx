
const MarketPremisesInfoEdit = ({ data }:any) => {

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
                    {data?.MarketPremisesInfoSection?.facilityName != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Facility Name</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection?.facilityName}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.marketPremisesTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Premises Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.MarketPremisesInfoSection?.marketPremisesType
                              .name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.toiletAvailability !=
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
                            data?.MarketPremisesInfoSection?.toiletAvailability
                              ?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.urinalAvailability !=
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
                            data?.MarketPremisesInfoSection?.urinalAvailability
                              ?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.bathroomAvailability !=
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
                            data?.MarketPremisesInfoSection
                              ?.bathroomAvailability?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.drainsAvailability !=
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
                            data?.MarketPremisesInfoSection?.drainsAvailability
                              ?.name
                          }
                          
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
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.MarketPremisesInfoSection?.firstAidAvailabilityId !=
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
                            data?.MarketPremisesInfoSection.firstAidAvailability
                              .name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.ownershipTypeId !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Ownership Type</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.MarketPremisesInfoSection.ownershipType.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberStores != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of stores</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection?.numberStores}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberSheds != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of sheds</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection.numberSheds}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberStalls != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of stalls</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection.numberStalls}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberTraders != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of traders
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection?.numberTraders}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberMeatShops !=
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
                            data?.MarketPremisesInfoSection?.numberMeatShops
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberColdStores !=
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
                            data?.MarketPremisesInfoSection?.numberColdStores
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.MarketPremisesInfoSection?.numberMills != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Number of mills</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection?.numberMills}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberChopbars != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of chopbars
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection?.numberChopbars}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.MarketPremisesInfoSection?.derattingFrequencyId !=
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
                            data?.MarketPremisesInfoSection?.derattingFrequency
                              ?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.cleanupFrequencyId !=
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
                            data?.MarketPremisesInfoSection?.cleanupFrequency
                              ?.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberLorrySheds !=
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
                            data?.MarketPremisesInfoSection?.numberLorrySheds
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberVehicles != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of Vehicles
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.MarketPremisesInfoSection?.numberVehicles
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberDrivers != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number of drivers
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data?.MarketPremisesInfoSection?.numberDrivers}
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data?.MarketPremisesInfoSection?.numberFoodVendors !=
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
                            data?.MarketPremisesInfoSection?.numberFoodVendors
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data?.MarketPremisesInfoSection
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
                            data?.MarketPremisesInfoSection
                              ?.generalSanitaryCondition?.name
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

export default MarketPremisesInfoEdit;
