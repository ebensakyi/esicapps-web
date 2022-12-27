import axios from "axios";
import { useRouter } from "next/router";

const MarketView = ({ data }) => {
  const router = useRouter();

  const publish = async (id) => {
    try {
      const response = await axios.post(`/api/v1/data/market-view`, {
        id: id,
      });

      if (response.statusCode == 200) {
        router.push("/users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">MARKET</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Market list</a>
                </li>
                <li className="breadcrumb-item active">Single inspection</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">BASIC INFORMATION SECTION</h5>
                  </div>
                </div>
                {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping
                  </a>
                </div> */}
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Region</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.BasicInfoSection.Community.District.Region.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">District</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.Community.District.name}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Community</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.Community.name}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">GhanaPost GPS</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.ghanaPostGps}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Name of respondent</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.respondentName}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Respondent designation
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.RespondentDesignation.name}
                        readOnly="readOnly"
                      />
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Respondent phone number
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.respondentPhoneNumber}
                        readOnly="readOnly"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
        </div>
      </div>

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
                {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping
                  </a>
                </div> */}
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data.MarketPremisesInfoSection.toiletAvailability !=
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
                            data.MarketPremisesInfoSection
                              .toiletAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.urinalAvailability !=
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
                            data.MarketPremisesInfoSection
                              .urinalAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.bathRoomAvailability !=
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
                            data.MarketPremisesInfoSection
                              .bathRoomAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.drainsAvailability !=
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
                            data.MarketPremisesInfoSection
                              .drainsAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection
                      .approvedHandwashingFacilityAvailabilityMarket !=
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
                            data.MarketPremisesInfoSection
                              .approvedHandwashingFacilityAvailabilityMarket
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.householdNumber !=
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
                            data.MarketPremisesInfoSection.householdNumber
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.maleOccupantNumber !=
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
                            data.MarketPremisesInfoSection
                              .maleOccupantNumber
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.femaleOccupantNumber !=
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
                            data.MarketPremisesInfoSection
                              .femaleOccupantNumber
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.animalAvailability !=
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
                            data.MarketPremisesInfoSection
                              .animalAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.MarketPremisesInfoSection.animalNumber !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Animal number</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.MarketPremisesInfoSection.animalNumber
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data.MarketPremisesInfoSection.PremisesAnimal
                      .length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Animals</label>
                        {data.MarketPremisesInfoSection.PremisesAnimal.map(
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

                    {data.MarketPremisesInfoSection.vaccinationProof !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Animal vaccination proof
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.MarketPremisesInfoSection.vaccinationProof
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {data.MarketPremisesInfoSection.animalSpaceCondition !=
                  null ? (
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Animal space condition
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.MarketPremisesInfoSection
                            .animalSpaceCondition.name
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
            {/* end col */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">LICENCES & PERMITS SECTION</h5>
                  </div>
                </div>
                {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping
                  </a>
                </div> */}
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data.LicencePermitSection.animalsPermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Animal permit</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.animalsPermitAvailability
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.buildingPermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Building permit</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.buildingPermitAvailability
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection
                      .habitationCertificateAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Certificate of habitation
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .habitationCertificateAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.propertyRateAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Property rate payment
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.propertyRateAvailability
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection
                      .suitabilityCertificateAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Suitability Certificate
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .suitabilityCertificateAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.structurePermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Structure permit</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .structurePermitAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data.LicencePermitSection
                      .fumigationCertificateAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Fumigation certificate
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .fumigationCertificateAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.businessLicenceAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Business operating permit
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .businessLicenceAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.structurePermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Temporal structure permit
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .structurePermitAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.waterAnalysisReport != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Water analysis report
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.waterAnalysisReport.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.regGeneralCertAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Registrar General operating certificate
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.regGeneralCertAvailability
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.medicalCertificateAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Medical certificate
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .medicalCertificateAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection
                      .gtaOperatingLicenceAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Ghana Tourism Authority operating license
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .gtaOperatingLicenceAvailability.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data.LicencePermitSection.pharmacyCertAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          HEFRA/PHARMACY COUNCIL operating license
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.pharmacyCertAvailability
                              .value
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
            {/* end col */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">WATER SECTION</h5>
                  </div>
                </div>
                {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping
                  </a>
                </div> */}
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data.WaterSection.PremisesWaterSources.length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Water source</label>
                        {data.WaterSection.PremisesWaterSources.map((x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.WaterSourceType.name}
                            readOnly="readOnly"
                          />
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.WaterSection.PremisesWaterSupply.length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Water supply</label>
                        {data.WaterSection.PremisesWaterSupply.map((x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.WaterSupplyType.name}
                            readOnly="readOnly"
                          />
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.WaterSection.waterSourceCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Water source condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.WaterSection.waterSourceCondition.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data.WaterSection.PremisesWaterStorage.length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Water storage</label>
                        {data.WaterSection.PremisesWaterStorage.map((x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.WaterStorageType.name}
                            readOnly="readOnly"
                          />
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.WaterSection.waterStorageConditionSafe != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Safe Water storage receptacle condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.WaterSection.waterStorageConditionSafe.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.WaterSection.PremisesWaterTreatmentType.length !=
                    0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Water treatment type
                        </label>
                        {data.WaterSection.PremisesWaterTreatmentType.map(
                          (x) => (
                            <input
                              key={x.id}
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={x.WaterTreatmentType.name}
                              readOnly="readOnly"
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.WaterSection.PremisesDrinkingWaterSources.length !=
                    0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Drinking water source
                        </label>
                        {data.WaterSection.PremisesDrinkingWaterSources.map(
                          (x) => (
                            <input
                              key={x.id}
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={x.DrinkingWaterSourceType.name}
                              readOnly="readOnly"
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.WaterSection.WaterFlowFrequency != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Water flow frequency
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.WaterSection.WaterFlowFrequency.name}
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
            {/* end col */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">LIQUID WASTE SECTION</h5>
                  </div>
                </div>
                {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping


                  </a>
                </div> */}
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data.LiquidWasteSection.numberToiletSeats != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number Toilet Seats
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.numberToiletSeats}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.numberUrinalSeats != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Number Urinal Seats
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.numberUrinalSeats}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletAdequacy != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Toilet Adequacy</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletAdequacy.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.urinalAdequacy != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Urinal Adequacy</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.urinalAdequacy.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.bathroomAdequacy != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Bathroom Adequacy
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.bathroomAdequacy.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.separateStaffUrinal != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Separate Staff Urinal
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.separateStaffUrinal.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.availToiletFaciltyMgt != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Toilet Facilty Mgt availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.availToiletFaciltyMgt.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletGenderSensivity != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Toilet Gender Sensivity
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.toiletGenderSensivity.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.urinalGenderSensivity != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Urinal Gender Sensivity
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.urinalGenderSensivity.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletPitPosition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Toilet Pit Position
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletPitPosition.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletDisabilityFriendly !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Toilet Disability Friendly
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.toiletDisabilityFriendly
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.urinalDisabilityFriendly !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Urinal Disability Friendly
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.urinalDisabilityFriendly
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.drainsCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Drains Condition</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.drainsCondition.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.stagnationEvidence != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Stagnation Evidence
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.stagnationEvidence.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.analCleansingMaterialMgt !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Anal Cleansing Material
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.analCleansingMaterialMgt
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.effluentManagementReport !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Effluent Management Report
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.effluentManagementReport
                              .name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.areaSewered != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Is Area Sewered</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.areaSewered.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.areaSewered != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Facility Connected Sewer
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.facilityConnectedSewer.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Number Urinal Cubicle
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.LiquidWasteSection.numberUrinalCubicle}
                        readOnly="readOnly"
                      />
                    </div>
                    {data.LiquidWasteSection.urinalCubicleCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Urinal Cubicle Condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.urinalCubicleCondition.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Toilet Condition</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletCondition.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletDischarge != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Toilet Discharge</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletDischarge.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.containmentEmptied != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Containment Emptied
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.containmentEmptied.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.sewerSystem != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Sewer System</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.sewerSystem.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.wasteWaterContainment != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Waste Water Containment
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.wasteWaterContainment.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.EaseYourselfWhere != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Ease Yourself Where
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.EaseYourselfWhere.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.DesiltingFrequency != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Desilting Frequency
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.DesiltingFrequency.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Drain Type</label>
                      {data.LiquidWasteSection.PremisesDrainType.map((x) => (
                        <input
                          key={x.id}
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.DrainType.name}
                          readOnly="readOnly"
                        />
                      ))}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Effluent Management
                      </label>
                      {data.LiquidWasteSection.PremisesEffluentManagement.map(
                        (x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.EffluentManagement.name}
                            readOnly="readOnly"
                          />
                        )
                      )}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Excreta Containment
                      </label>
                      {data.LiquidWasteSection.PremisesExcretaContainment.map(
                        (x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.ExcretaContainment.name}
                            readOnly="readOnly"
                          />
                        )
                      )}
                    </div>{" "}
                    {data.LiquidWasteSection.PremisesExcretaDisposalMethod
                      .length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Excreta Disposal Method
                        </label>
                        {data.LiquidWasteSection.PremisesExcretaDisposalMethod.map(
                          (x) => (
                            <input
                              key={x.id}
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={x.ExcretaDisposalMethod.name}
                              readOnly="readOnly"
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Grey Water Disposal
                      </label>
                      {data.LiquidWasteSection.PremisesGreyWaterDisposal.map(
                        (x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.GreyWaterDisposal.name}
                            readOnly="readOnly"
                          />
                        )
                      )}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">Toilet Type</label>
                      {data.LiquidWasteSection.PremisesToiletType.map((x) => (
                        <input
                          key={x.id}
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.ToiletType.name}
                          readOnly="readOnly"
                        />
                      ))}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">SOLID WASTE SECTION</h5>
                  </div>
                </div>
                {/* <div className="col-sm-auto">
                  <a
                    href="apps-ecommerce-products.html"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping

                    wasteServiceProviderRegistrationId Int?
  wasteCollectorName                 String?
  wasteSortingAvailabilityId         Int?
  wasteCollectionFrequencyId         Int?
  approvedWasteStorageReceptacleId   Int?
  adequateWasteStorageReceptacleId   Int?
  wasteCollectionServiceTypeId       Int?
  unservicedWasteDisposalId          Int?
  wastePaymentEvidenceId             Int?
  wasteContainerVolumeId             Int?
  wasteProviderAccredittedId         Int?
  containerNumber                    Int?
                  </a>
                </div> */}
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Waste Service Provider Registration
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection
                            .wasteServiceProviderRegistration.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Waste Collector Name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.SolidWasteSection.wasteCollectorName}
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Waste Sorting Availability
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection.wasteSortingAvailability.name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Approved Waste Storage Receptacle
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection.approvedWasteStorageReceptacle
                            .name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Adequate Waste Storage Receptacle
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection.adequateWasteStorageReceptacle
                            .name
                        }
                        readOnly="readOnly"
                      />
                    </div>
                    {data.SolidWasteSection.PremisesWasteCollection.length !=
                    0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Waste Collection Type
                        </label>
                        {data.SolidWasteSection.PremisesWasteCollection.map(
                          (x) => (
                            <input
                              key={x.id}
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={x.WasteCollectionType.name}
                              readOnly="readOnly"
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label htmlFor="invoicenoInput">
                        Waste Collection Receptacle
                      </label>
                      {data.SolidWasteSection.PremisesWasteReceptacle.map(
                        (x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.SolidWasteReceptacle.name}
                            readOnly="readOnly"
                          />
                        )
                      )}
                    </div>
                    {data.SolidWasteSection.UnservicedWasteDisposal != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Unserviced Waste Disposal
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.SolidWasteSection.UnservicedWasteDisposal.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.SolidWasteSection.wastePaymentEvidence != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Waste Payment Evidence
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.SolidWasteSection.wastePaymentEvidence.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.SolidWasteSection.ContainerVolume != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Container Volume</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.SolidWasteSection.ContainerVolume.name}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.SolidWasteSection.wasteProviderAccreditted != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Waste Provider Accreditted
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.SolidWasteSection.wasteProviderAccreditted.name
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
            {/* end col */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-3">
            <div className="col-xl-12">
              <div className="row align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">ACTIONS & CONCLUSION SECTION</h5>
                  </div>
                </div>
              </div>
              <div className="card product">
                <div className="card-body">
                  <div className="row gy-3">
                    {data.ConclusionSection.generalSanitaryCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          General Sanitary Condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.ConclusionSection.generalSanitaryCondition.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.ConclusionSection.obnoxiousTradeExist != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Obnoxious Trade Exist
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.ConclusionSection.obnoxiousTradeExist.name
                          }
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.ConclusionSection.PremisesNuisanceDetected != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Nuisance Observed
                        </label>
                        {data.ConclusionSection.PremisesNuisanceDetected.map(
                          (x) => (
                            <input
                              key={x.id}
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={x.Nuisance.name}
                              readOnly="readOnly"
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}{" "}
                    {data.ConclusionSection.officerComment != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Office Comment</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.ConclusionSection.officerComment}
                          readOnly="readOnly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.ConclusionSection.PremisesActionTaken.length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">Action Taken</label>
                        {data.ConclusionSection.PremisesActionTaken.map((x) => (
                          <input
                            key={x.id}
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.Action.name}
                            readOnly="readOnly"
                          />
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-auto">
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();

                  publish(data.id);
                }}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketView;
