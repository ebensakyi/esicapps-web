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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
                        value={data.ResidentialPremisesInfoSection.PremisesAnimal.map(
                          (x) => " "+x.AnimalType.name
                        )}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Animal vaccination proof</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.ResidentialPremisesInfoSection.vaccinationProof.name}
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
                        placeholder="Invoice No"
                        value={data.ResidentialPremisesInfoSection.animalSpaceCondition.name}
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
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Animal permit</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.animalsPermitAvailability.name}
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Building permit</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
 value={data.LicencePermitSection.buildingPermitAvailability.name}                  
       readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Certificate of habitation</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.habitationCertificateAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Property rate payment</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.propertyRateAvailability.value}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Suitability Certificate</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.suitabilityCertificateAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>

                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Structure permit</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.structurePermitAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Fumigation certificate</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.fumigationCertificateAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Business operating permit</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.businessLicenceAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Temporal structure permit</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.structurePermitAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Water analysis report</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.waterAnalysisReport.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Registrar General operating certificate</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.regGeneralCertAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Medical certificate</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.medicalCertificateAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">Ghana Tourism Authority operating license</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.gtaOperatingLicenceAvailability.name}                  
                        readonly="readonly"
                      />
                    </div>

                    <div className="col-lg-3 col-sm-6">
                      <label for="invoicenoInput">HEFRA/PHARMACY COUNCIL operating license</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        value={data.LicencePermitSection.pharmacyCertAvailability.value}                  
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
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                      <label for="invoicenoInput">Invoice No</label>
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                    <h5 className="fs-14 mb-0">SOLID WASTE SECTION</h5>
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
                        placeholder="Invoice No"
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
