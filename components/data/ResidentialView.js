const ResidentialView = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">RESIDENTIAL</h4>
            <div className="page-title-right">
              {/* <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Ecommerce</a>
                </li>
                <li className="breadcrumb-item active">Shopping Cart</li>
              </ol> */}
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
                      <label for="invoicenoInput">Region</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">District</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.Community.District.name}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Community</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.Community.name}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">GhanaPost GPS</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.ghanaPostGps}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Name of respondent</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.respondentName}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Respondent designation</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.RespondentDesignation.name}
                        readonly="readonly"
                      />
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Respondent phone number
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.BasicInfoSection.respondentPhoneNumber}
                        readonly="readonly"
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
                      RESIDENTIAL INFORMATION SECTION
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
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Toilet facility availabilty
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.toiletAvailability
                            .name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Urinal facility availabilty
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.urinalAvailability
                            .name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Bathroom facility availabilty
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection
                            .bathRoomAvailability.name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Drains availabilty</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.drainsAvailability
                            .name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Handwashing facility availabilty
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.animalAvailability
                            .name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Number of household</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.householdNumber
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Number of male occupants
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.maleOccupantNumber
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Number of female occupants
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection
                            .femaleOccupantNumber
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Animal availabilty</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.animalAvailability
                            .name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Animal number</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.ResidentialPremisesInfoSection.animalNumber}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Animal number</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.ResidentialPremisesInfoSection.PremisesAnimal.map(
                          (x) => " " + x.AnimalType.name
                        )}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Animal vaccination proof
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.ResidentialPremisesInfoSection.vaccinationProof
                            .name
                        }
                        readonly="readonly"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <label for="invoicenoInput">Animal space condition</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      id="invoicenoInput"
                      value={
                        data.ResidentialPremisesInfoSection.animalSpaceCondition
                          .name
                      }
                      readonly="readonly"
                    />
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
                        <label for="invoicenoInput">Animal permit</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.animalsPermitAvailability
                              .name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.buildingPermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Building permit</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.buildingPermitAvailability
                              .name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection
                      .habitationCertificateAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.propertyRateAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection
                      .suitabilityCertificateAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.structurePermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Structure permit</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .structurePermitAvailability.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data.LicencePermitSection
                      .fumigationCertificateAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.businessLicenceAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.structurePermitAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.waterAnalysisReport != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Water analysis report
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection.waterAnalysisReport.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.regGeneralCertAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection.medicalCertificateAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Medical certificate</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LicencePermitSection
                              .medicalCertificateAvailability.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LicencePermitSection
                      .gtaOperatingLicenceAvailability != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}

                    {data.LicencePermitSection.pharmacyCertAvailability !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
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
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water source</label>
                      {data.WaterSection.PremisesWaterSources.map((x) => (
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.WaterSourceType.name}
                          readonly="readonly"
                        />
                      ))}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water supply</label>
                      {data.WaterSection.PremisesWaterSupply.map((x) => (
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.WaterSupplyType.name}
                          readonly="readonly"
                        />
                      ))}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water source condition</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.WaterSection.waterSourceCondition.name}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water storage</label>
                      {data.WaterSection.PremisesWaterStorage.map((x) => (
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.WaterStorageType.name}
                          readonly="readonly"
                        />
                      ))}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">
                        Safe Water storage receptacle condition
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.WaterSection.waterStorageConditionSafe.name}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water treatment type</label>
                      {data.WaterSection.PremisesWaterTreatmentType.map((x) => (
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.WaterTreatmentType.name}
                          readonly="readonly"
                        />
                      ))}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Drinking water source</label>
                      {data.WaterSection.PremisesDrinkingWaterSources.map(
                        (x) => (
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.DrinkingWaterSourceType.name}
                            readonly="readonly"
                          />
                        )
                      )}
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water flow frequency</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.WaterSection.WaterFlowFrequency.name}
                        readonly="readonly"
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
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Number Toilet Seats</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.LiquidWasteSection.numberToiletSeats}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Number Urinal Seats</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.LiquidWasteSection.numberUrinalSeats}
                        readonly="readonly"
                      />
                    </div>
                    {data.LiquidWasteSection.toiletAdequacy != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Toilet Adequacy</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletAdequacy.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.urinalAdequacy != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Urinal Adequacy</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.urinalAdequacy.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.bathroomAdequacy != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Bathroom Adequacy</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.bathroomAdequacy.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.separateStaffUrinal != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Separate Staff Urinal
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.separateStaffUrinal.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.availToiletFaciltyMgt != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Toilet Facilty Mgt availabilty
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.availToiletFaciltyMgt.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletGenderSensivity != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Toilet Gender Sensivity
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.toiletGenderSensivity.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.urinalGenderSensivity != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Urinal Gender Sensivity
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.urinalGenderSensivity.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletPitPosition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Toilet Pit Position</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletPitPosition.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletDisabilityFriendly !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.urinalDisabilityFriendly !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.drainsCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Drains Condition</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.drainsCondition.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.stagnationEvidence != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Stagnation Evidence</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.stagnationEvidence.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.analCleansingMaterialMgt !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.effluentManagementReport !=
                    null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
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
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.areaSewered != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Is Area Sewered</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.areaSewered.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.areaSewered != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Facility Connected Sewer
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.facilityConnectedSewer.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Number Urinal Cubicle</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={data.LiquidWasteSection.numberUrinalCubicle}
                        readonly="readonly"
                      />
                    </div>
                    {data.LiquidWasteSection.urinalCubicleCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Urinal Cubicle Condition
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.urinalCubicleCondition.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletCondition != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Toilet Condition</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletCondition.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.toiletDischarge != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Toilet Discharge</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.toiletDischarge.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.containmentEmptied != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Containment Emptied</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.containmentEmptied.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.sewerSystem != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Sewer System</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.sewerSystem.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.wasteWaterContainment != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Waste Water Containment
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.wasteWaterContainment.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.EaseYourselfWhere != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Ease Yourself Where</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={data.LiquidWasteSection.EaseYourselfWhere.name}
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {data.LiquidWasteSection.DesiltingFrequency != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">Desilting Frequency</label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data.LiquidWasteSection.DesiltingFrequency.name
                          }
                          readonly="readonly"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Drain Type</label>
                      {data.LiquidWasteSection.PremisesDrainType.map((x) => (
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.DrainType.name}
                          readonly="readonly"
                        />
                      ))}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Effluent Management</label>
                      {data.LiquidWasteSection.PremisesEffluentManagement.map(
                        (x) => (
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.EffluentManagement.name}
                            readonly="readonly"
                          />
                        )
                      )}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Excreta Containment</label>
                      {data.LiquidWasteSection.PremisesExcretaContainment.map(
                        (x) => (
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.ExcretaContainment.name}
                            readonly="readonly"
                          />
                        )
                      )}
                    </div>{" "}
                    {data.LiquidWasteSection.PremisesExcretaDisposalMethod
                      .length != 0 ? (
                      <div className="col-lg-3 col-sm-6">
                        <label for="invoicenoInput">
                          Excreta Disposal Method
                        </label>
                        {data.LiquidWasteSection.PremisesExcretaDisposalMethod.map(
                          (x) => (
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={x.ExcretaDisposalMethod.name}
                              readonly="readonly"
                            />
                          )
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Grey Water Disposal</label>
                      {data.LiquidWasteSection.PremisesGreyWaterDisposal.map(
                        (x) => (
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={x.GreyWaterDisposal.name}
                            readonly="readonly"
                          />
                        )
                      )}
                    </div>{" "}
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Toilet Type</label>
                      {data.LiquidWasteSection.PremisesToiletType.map((x) => (
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={x.ToiletType.name}
                          readonly="readonly"
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
                      <label for="invoicenoInput">
                        Waste Service Provider Registration
                      </label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection
                            .wasteServiceProviderRegistrationId.name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Waste Collector Name</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection
                            .wasteCollectorName
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Waste Sorting Availability</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value={
                          data.SolidWasteSection
                            .wasteSortingAvailability.name
                        }
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Approved Waste Storage Receptacle</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Adequate Waste Storage Receptacle</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>  <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Waste Collection Type</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>  <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Unserviced Waste Disposal</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div> <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Waste Payment Evidence</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>  <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Container Volume</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>  <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Waste Provider Accreditted</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
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
                    <h5 className="fs-14 mb-0">ACTIONS & CONCLUSION SECTION</h5>
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
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        value="#VL25000355"
                        readonly="readonly"
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
    </>
  );
};

export default ResidentialView;
