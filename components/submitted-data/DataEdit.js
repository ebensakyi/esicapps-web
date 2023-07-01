import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Multiselect from "multiselect-react-dropdown";

import ResidentialPremisesInfoEdit from "./PremisesInfoEdits/ResidentialPremisesInfoEdit";
import EateryPremisesInfoEdit from "./PremisesInfoEdits/EateryPremisesInfoEdit";
import HealthPremisesInfoEdit from "./PremisesInfoEdits/HealthPremisesInfoEdit";
import HospitalityPremisesInfoEdit from "./PremisesInfoEdits/HospitalityPremisesInfoEdit";
import IndustryPremisesInfoEdit from "./PremisesInfoEdits/IndustryPremisesInfoEdit";
import InstitutionPremisesInfoEdit from "./PremisesInfoEdits/InstitutionPremisesInfoEdit";
import SanitaryPremisesInfoEdit from "./PremisesInfoEdits/SanitaryPremisesInfoEdit";
import MarketPremisesInfoEdit from "./PremisesInfoEdits/MarketPremisesInfoEdit";

const DataEdit = ({ data }) => {
  const [animalPermitAvailability, setAnimalPermitAvailability] = useState();
  const [buildingPermitAvailability, setBuildingPermitAvailability] =
    useState();
  const [
    certificateHabitationAvailability,
    setCertificateHabitationAvailability,
  ] = useState();
  const [propertyRateAvailability, setPropertyRateAvailability] = useState();
  const [
    suitabilityCertificateAvailability,
    setSuitabilityCertificateAvailability,
  ] = useState();
  const [structurePermitAvailability, setStructurePermitAvailability] =
    useState();
  const [
    fumigationCertificateAvailability,
    setFumigationCertificateAvailability,
  ] = useState();
  const [businessPermitAvailability, setBusinessPermitAvailability] =
    useState();
  const [tempStructurePermitAvailability, setTempStructurePermitAvailability] =
    useState();
  const [waterAnalysisReportSafeUnsafe, setWaterAnalysisReportSafeUnsafe] =
    useState();
  const [regGeneralCertAvailability, setRegGeneralCertAvailability] =
    useState();
  const [gtaOperatingLicenceAvailability, setGtaOperatingLicenceAvailability] =
    useState();
  const [pharmacyCertAvailability, setPharmacyCertAvailability] = useState();
  const [waterSourceCondition, setWaterSourceCondition] = useState();
  const [waterStorageCondition, setWaterStorageCondition] = useState();
  const [toiletAdequacy, setToiletAdequacy] = useState();
  const [bathroomAdequacy, setBathroomAdequacy] = useState();
  const [toiletPitPosition, setToiletPitPosition] = useState();
  const [drainCondition, setDrainCondition] = useState();
  const [stagnationEvidence, setStagnationEvidence] = useState();
  const [analCleansingMaterialMgt, setAnalCleansingMaterialMgt] = useState();
  const [toiletCondition, setToiletCondition] = useState();
  const [toiletDischarge, setToiletDischarge] = useState();
  const [containmentEmptied, setContainmentEmptied] = useState();
  const [sewerSystem, setSewerSystem] = useState();
  const [easeYourselfWhere, setEaseYourselfWhere] = useState();
  const [desiltingFrequency, setDesiltingFrequency] = useState();
  const [
    wasteServiceProviderRegistration,
    setWasteServiceProviderRegistration,
  ] = useState();
  const [wasteSortingAvailability, setWasteSortingAvailability] = useState();
  const [
    wasteStorageReceptacleAvailability,
    setApprovedWasteStorageReceptacleAvailability,
  ] = useState();
  const [unservicedWasteDisposal, setUnservicedWasteDisposal] = useState();
  const [wastePaymentEvidence, setWastePaymentEvidence] = useState();
  const [containerVolume, setContainerVolume] = useState();
  const [wasteProviderAccreditted, setWasteProviderAccreditted] = useState();
  const [obnoxiousTradeExist, setObnoxiousTradeExist] = useState();
  const [adequateWasteStorageReceptacle, setAdequateWasteStorageReceptacle] =
    useState();
  // const [name, setName] = useState();
  // const [name, setName] = useState();
  // const [name, setName] = useState();

  const [selectedWaterSupply, setSelectedWaterSupply] = useState([]);

  const router = useRouter();

  const query = router.query;

  let formId = query.inspectionFormId;
  let published = query.published;

  const publish = async (id) => {
    try {
      const response = await axios.post(`/api/v1/submitted-data/data-view`, {
        id: id,
      });
      if (response.status == 200) {
        router.push(
          `/submitted-data/data?published=${published}&inspectionFormId=${formId}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadInspection = async () => {
    const printContents = document.getElementById("printableArea").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    router.reload(window.location.pathname);
  };

  const handleTitle = () => {
    try {
      if (formId == 1) {
        return <h5 className="card-title mb-0">RESIDENTIAL PREMISES</h5>;
      } else if (formId == 2) {
        return <h5 className="card-title mb-0">EATING & DRINKING PREMISES</h5>;
      } else if (formId == 3) {
        return <h5 className="card-title mb-0">HEALTH PREMISES</h5>;
      } else if (formId == 4) {
        return <h5 className="card-title mb-0">HOSPITALITY PREMISES</h5>;
      } else if (formId == 5) {
        return <h5 className="card-title mb-0">INSTITUTION PREMISES</h5>;
      } else if (formId == 6) {
        return <h5 className="card-title mb-0">INDUSTRY PREMISES</h5>;
      } else if (formId == 7) {
        return (
          <h5 className="card-title mb-0">MARKETS & LORRY PARK PREMISES</h5>
        );
      } else if (formId == 8) {
        return <h5 className="card-title mb-0">SANITARY FACILITY PREMISES</h5>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.put(`/api/v1/submitted-data/data-view`, {
        id: id,
      });
      if (response.status == 200) {
        router.push(
          `/submitted-data/data?published=${published}&inspectionFormId=${formId}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onWaterSupplyRemove = (selected) => {
    // setSelectedPages([selected.length - 1].value);
    setSelectedWaterSupply(selected);
  };
  const onWaterSupplySelect = (selected) => {
    // setSelectedPages(selected[selected.length - 1].value);
    setSelectedWaterSupply(selected);
  };

  useEffect(() => {
    let premisesWaterSupply =
      data?.submittedData?.WaterSection?.PremisesWaterSupply?.map((data) => {
        return {
          value: data.WaterSupplyType.id,
          label: data.WaterSupplyType.name,
        };
      });

    setSelectedWaterSupply(premisesWaterSupply);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <div>
              <button
                type="button"
                className="btn btn-danger btn-label waves-effect right waves-light rounded-pill"
                onClick={() => downloadInspection()}
              >
                <i className="ri-file-pdf-line label-icon align-middle rounded-pill fs-16 ms-2"></i>{" "}
                Download Inspection
              </button>
            </div>
          </div>
          <div id="printableArea">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              DATA EDIT
              <h4 className="mb-sm-0">{handleTitle()}</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <Link
                      href={{
                        pathname: `/submitted-data/data`,
                        query: {
                          published: published,
                          inspectionFormId: formId,
                        },
                      }}
                    >
                      <a className="dropdown-item">Go to Data list</a>
                    </Link>
                  </li>
                </ol>
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
                            BASIC INFORMATION SECTION
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
                            <label htmlFor="invoicenoInput">
                              Premises Code
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.submittedData?.premisesCode}
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">Region</label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.submittedData?.BasicInfoSection?.Community
                                  ?.District?.Region.name
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
                              value={
                                data?.submittedData?.BasicInfoSection
                                  ?.Community != null
                                  ? data?.submittedData?.BasicInfoSection
                                      ?.Community?.District?.name
                                  : ""
                              }
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Electoral Area
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.submittedData?.ElectoralArea?.name}
                              readOnly="readOnly"
                            />
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">Community</label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.submittedData?.BasicInfoSection?.Community
                                  ?.name
                              }
                              readOnly="readOnly"
                            />
                          </div>
                          {/* <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              GhanaPost GPS
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={data?.submittedData?.BasicInfoSection?.ghanaPostGps}
                              readOnly="readOnly"
                            />
                          </div> */}
                          <div className="col-lg-3 col-sm-6">
                            <label htmlFor="invoicenoInput">
                              Name of respondent
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="invoicenoInput"
                              value={
                                data?.submittedData?.BasicInfoSection
                                  ?.respondentName
                              }
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
                              value={
                                data?.submittedData?.BasicInfoSection
                                  ?.RespondentDesignation?.name
                              }
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
                              value={
                                data?.submittedData?.BasicInfoSection
                                  ?.respondentPhoneNumber
                              }
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

            {formId == 1 ? <ResidentialPremisesInfoEdit data={data} /> : <></>}
            {formId == 2 ? <EateryPremisesInfoEdit data={data} /> : <></>}
            {formId == 3 ? <HealthPremisesInfoEdit data={data} /> : <></>}
            {formId == 4 ? <HospitalityPremisesInfoEdit data={data} /> : <></>}
            {formId == 5 ? <InstitutionPremisesInfoEdit data={data} /> : <></>}
            {formId == 6 ? <IndustryPremisesInfoEdit data={data} /> : <></>}
            {formId == 7 ? <MarketPremisesInfoEdit data={data} /> : <></>}
            {formId == 8 ? <SanitaryPremisesInfoEdit data={data} /> : <></>}
            <div className="row">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <div className="row align-items-center gy-3 mb-3">
                      <div className="col-sm">
                        <div>
                          <h5 className="fs-14 mb-0">
                            LICENCES & PERMITS SECTION
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
                          {data?.submittedData?.LicencePermitSection
                            ?.animalsPermitAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Animal permit
                              </label>

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setAnimalPermitAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.animalsPermitAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.animalsPermitAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.buildingPermitAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Building permit
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setBuildingPermitAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.buildingPermitAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.buildingPermitAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.habitationCertificateAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Certificate of habitation
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setCertificateHabitationAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.habitationCertificateAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.habitationCertificateAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.propertyRateAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Property rate payment
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setPropertyRateAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.propertyRateAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.propertyRateAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.suitabilityCertificateAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Suitability Certificate
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setSuitabilityCertificateAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.suitabilityCertificateAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.suitabilityCertificateAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.structurePermitAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Structure permit
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setStructurePermitAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.structurePermitAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.structurePermitAvailability.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}

                          {data?.submittedData?.LicencePermitSection
                            ?.fumigationCertificateAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Fumigation certificate
                              </label>

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setFumigationCertificateAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.fumigationCertificateAvailability.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option>Available</option>
                                <option>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.fumigationCertificateAvailability.name
                                }
                                
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.businessLicenceAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Business operating permit
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setBusinessPermitAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.businessLicenceAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.businessLicenceAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.structurePermitAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Temporal structure permit
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setTempStructurePermitAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.structurePermitAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Not Available</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.structurePermitAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.waterAnalysisReport != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water analysis report
                              </label>

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWaterAnalysisReportSafeUnsafe(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.waterAnalysisReport?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Safe</option>
                                <option value={2}>Unsafe</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.waterAnalysisReport?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LicencePermitSection
                            ?.regGeneralCertAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Registrar General operating certificate
                              </label>

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setRegGeneralCertAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.regGeneralCertAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Unavailable</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.regGeneralCertAvailability.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}

                          {data?.submittedData?.LicencePermitSection
                            ?.gtaOperatingLicenceAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Ghana Tourism Authority operating license
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setGtaOperatingLicenceAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.gtaOperatingLicenceAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Unavailable</option>
                              </select>

                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.gtaOperatingLicenceAvailability?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}

                          {data?.submittedData?.LicencePermitSection
                            ?.pharmacyCertAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                HEFRA/PHARMACY COUNCIL operating license
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setPharmacyCertAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.pharmacyCertAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Available</option>
                                <option value={2}>Unavailable</option>
                              </select>

                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LicencePermitSection
                                    ?.pharmacyCertAvailability?.value
                                }
                              /> */}
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
                          {data?.submittedData?.WaterSection
                            ?.PremisesWaterSources.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water source
                              </label>

                              <Multiselect
                                options={data.waterSourcesOptions}
                                selectedValues={selectedWaterSources}
                                onSelect={onwaterSourcesSelect}
                                onRemove={onwaterSourcesRemove}
                                displayValue="label"
                              />
                              {/* {data?.submittedData?.WaterSection?.PremisesWaterSources.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.WaterSourceType.name}
                                  />
                                )
                              )} */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.WaterSection
                            ?.PremisesWaterSupply.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water supply
                              </label>
                              {/* {data?.submittedData?.WaterSection?.PremisesWaterSupply.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.WaterSupplyType.name}
                                  />
                                )
                              )} */}
                              <Multiselect
                                options={data.waterSupplyOptions}
                                selectedValues={selectedWaterSupply}
                                onSelect={onWaterSupplySelect}
                                onRemove={onWaterSupplyRemove}
                                displayValue="label"
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.WaterSection
                            ?.waterSourceCondition != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water source condition
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWaterSourceCondition(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.WaterSection
                                    ?.waterSourceCondition?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Safe</option>
                                <option value={2}>Unsafe</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.WaterSection?.waterSourceCondition?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}

                          {data?.submittedData?.WaterSection
                            ?.PremisesWaterStorage.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water storage
                              </label>
                              {data?.submittedData?.WaterSection?.PremisesWaterStorage.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.WaterStorageType.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.WaterSection
                            ?.waterStorageConditionSafe != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Safe Water storage receptacle condition
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWaterStorageCondition(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.WaterSection
                                    ?.waterStorageConditionSafe?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Safe</option>
                                <option value={2}>Unsafe</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.WaterSection?.waterStorageConditionSafe
                                    .name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.WaterSection
                            ?.PremisesWaterTreatmentType?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water treatment type
                              </label>
                              {data?.submittedData?.WaterSection?.PremisesWaterTreatmentType?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.WaterTreatmentType.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.WaterSection
                            ?.PremisesDrinkingWaterSources.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Drinking water source
                              </label>
                              {data?.submittedData?.WaterSection?.PremisesDrinkingWaterSources?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.DrinkingWaterSourceType.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.WaterSection
                            ?.WaterFlowFrequency != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Water flow frequency
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.WaterSection
                                    ?.WaterFlowFrequency?.name
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
                          {data?.submittedData?.LiquidWasteSection
                            ?.numberToiletSeats != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Number Toilet Seats
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.numberToiletSeats
                                }
                                onChange={() => {
                                  setNumberToiletSeats(e.target.value);
                                }}
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.numberUrinalSeats != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Number Urinal Seats
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.numberUrinalSeats
                                }
                                onChange={() => {
                                  setNumberUrinalSeats(e.target.value);
                                }}
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.toiletAdequacy != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Toilet Adequacy
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.toiletAdequacy?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setToiletAdequacy(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.toiletAdequacy?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Safe</option>
                                <option value={2}>Unsafe</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.bathroomAdequacy != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Bathroom Adequacy
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.bathroomAdequacy
                                    ?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setBathroomAdequacy(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.bathroomAdequacy?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Safe</option>
                                <option value={2}>Unsafe</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {/* {data?.submittedData?.LiquidWasteSection?.separateStaffUrinal != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Separate Staff Urinal
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.submittedData?.LiquidWasteSection?.separateStaffUrinal.name
                          }
                          
                        />
                      </div>
                    ) : (
                      <></>
                    )} */}
                          {data?.submittedData?.LiquidWasteSection
                            ?.toiletPitPosition != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Toilet Pit Position
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setToiletPitPosition(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.toiletPitPosition?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Direct</option>
                                <option value={2}>Offsite</option>
                                <option value={3}>NA</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.toiletPitPosition
                                    ?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.drainsCondition != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Drains Condition
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.drainsCondition
                                    ?.name
                                }
                              /> */}

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setDrainCondition(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.drainsCondition?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Direct</option>
                                <option value={2}>Offsite</option>
                                <option value={3}>NA</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.stagnationEvidence != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Stagnation Evidence
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setStagnationEvidence(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.stagnationEvidence?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.stagnationEvidence
                                    ?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.analCleansingMaterialMgt != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Anal Cleansing Material Management
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setAnalCleansingMaterialMgt(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.analCleansingMaterialMgt?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.analCleansingMaterialMgt?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.toiletCondition != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Toilet Condition
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setToiletCondition(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.toiletCondition?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Sanitary</option>
                                <option value={2}>Insanitary</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.toiletCondition
                                    ?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.toiletDischarge != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Toilet Discharge
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.toiletDischarge
                                    ?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setToiletDischarge(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.toiletDischarge?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>On site</option>
                                <option value={2}>Off site</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.containmentEmptied != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Containment Emptied
                              </label>
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setContainmentEmptied(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.containmentEmptied?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>On site</option>
                                <option value={2}>Off site</option>
                              </select>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.containmentEmptied
                                    ?.name
                                }
                              /> */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.sewerSystem != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Sewer System
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.sewerSystem?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setSewerSystem(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.sewerSystem?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Centralised</option>
                                <option value={2}>Decentralised</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.EaseYourselfWhere != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Ease Yourself Where
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.EaseYourselfWhere
                                    ?.name

                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setEaseYourselfWhere(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.EaseYourselfWhere?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Neighbours place</option>
                                <option value={2}>Bush</option>
                                <option value={3}>Public toilet</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.DesiltingFrequency != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Desilting Frequency
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.LiquidWasteSection?.DesiltingFrequency
                                    ?.name
                                }

                              
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setDesiltingFrequency(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.LiquidWasteSection
                                    ?.DesiltingFrequency?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Daily</option>
                                <option value={2}>Weekly</option>
                                <option value={3}>Monthly</option>
                                <option value={4}>Quarterly</option>
                                <option value={5}>Bi yearly</option>
                                <option value={6}>Yearly</option>
                                <option value={7}>None</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.PremisesDrainType?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">Drain Type</label>
                              {data?.submittedData?.LiquidWasteSection?.PremisesDrainType?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.DrainType?.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.PremisesEffluentManagement?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Effluent Management
                              </label>
                              {data?.submittedData?.LiquidWasteSection?.PremisesEffluentManagement?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.EffluentManagement.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.PremisesExcretaContainment?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Excreta Containment
                              </label>
                              {data?.submittedData?.LiquidWasteSection?.PremisesExcretaContainment.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.ExcretaContainment.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.PremisesExcretaDisposalMethod?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Excreta Disposal Method
                              </label>
                              {data?.submittedData?.LiquidWasteSection?.PremisesExcretaDisposalMethod?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.ExcretaDisposalMethod.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.PremisesGreyWaterDisposal?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Grey Water Disposal
                              </label>
                              {data?.submittedData?.LiquidWasteSection?.PremisesGreyWaterDisposal?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.GreyWaterDisposal.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.LiquidWasteSection
                            ?.PremisesToiletType?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Toilet Type
                              </label>
                              {data?.submittedData?.LiquidWasteSection?.PremisesToiletType?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.ToiletType.name}
                                  />
                                )
                              )}
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
                          <h5 className="fs-14 mb-0">SOLID WASTE SECTION</h5>
                        </div>
                      </div>
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          {data?.submittedData?.SolidWasteSection
                            ?.wasteServiceProviderRegistration != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Service Provider Registration
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteServiceProviderRegistration?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWasteServiceProviderRegistration(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteServiceProviderRegistration?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.wasteCollectorName != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Collector Name
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteCollectorName
                                }
                                onChange={(e) => {
                                  setWasteCollectorName(e.target.value);
                                }}
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.wasteSortingAvailability != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Sorting Availability
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteSortingAvailability?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWasteSortingAvailability(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteSortingAvailability?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.approvedWasteStorageReceptacle != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Approved Waste Storage Receptacle
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.approvedWasteStorageReceptacle?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setApprovedWasteStorageReceptacleAvailability(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.approvedWasteStorageReceptacle?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.adequateWasteStorageReceptacle != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Adequate Waste Storage Receptacle
                              </label>

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setAdequateWasteStorageReceptacle(
                                    e.target.value
                                  );
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.adequateWasteStorageReceptacle?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.WasteCollectionType != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Collection Type
                              </label>

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWasteCollectionType(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.WasteCollectionType?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Communal container</option>
                                <option value={2}>Door to door</option>
                                <option value={3}>Not serviced</option>
                                <option value={4}>Communal Dump Site</option>
                              </select>
                              {/* {data?.submittedData?.SolidWasteSection?.PremisesWasteCollection?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x.WasteCollectionType.name}
                                  />
                                )
                              )} */}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.PremisesWasteReceptacle?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Collection Receptacle
                              </label>
                              {data?.submittedData?.SolidWasteSection?.PremisesWasteReceptacle?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x?.SolidWasteReceptacle?.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.UnservicedWasteDisposal != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Unserviced Waste Disposal
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.UnservicedWasteDisposal?.name
                                }
                              /> */}

                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setUnservicedWasteDisposal(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.UnservicedWasteDisposal?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Crude Dumping</option>
                                <option value={2}>Burning</option>
                                <option value={2}>Burying</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.wastePaymentEvidence != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Payment Evidence
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection?.wastePaymentEvidence
                                    ?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWastePaymentEvidence(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wastePaymentEvidence?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.ContainerVolume != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Container Volume
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection?.ContainerVolume?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setContainerVolume(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.ContainerVolume?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>10 Cubic</option>
                                <option value={2}>12 Cubic</option>
                                <option value={3}>14 Cubic</option>
                                <option value={4}>20 and Above</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.SolidWasteSection
                            ?.wasteProviderAccreditted != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Waste Provider Accreditted
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteProviderAccreditted?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setWasteProviderAccreditted(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.SolidWasteSection
                                    ?.wasteProviderAccreditted?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
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
                          <h5 className="fs-14 mb-0">
                            ACTIONS & CONCLUSION SECTION
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card product">
                      <div className="card-body">
                        <div className="row gy-3">
                          {data?.submittedData?.ConclusionSection
                            ?.obnoxiousTradeExist != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Obnoxious Trade Exist
                              </label>
                              {/* <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.ConclusionSection?.obnoxiousTradeExist
                                    ?.name
                                }
                              /> */}
                              <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={(e) => {
                                  setObnoxiousTradeExist(e.target.value);
                                }}
                                value={
                                  data?.submittedData?.ConclusionSection
                                    ?.obnoxiousTradeExist?.id
                                }
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                              </select>
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.ConclusionSection
                            ?.PremisesNuisanceDetected?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Nuisance Observed
                              </label>
                              {data?.submittedData?.ConclusionSection?.PremisesNuisanceDetected?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x?.Nuisance?.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.ConclusionSection
                            ?.officerComment != null ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Office Comment
                              </label>
                              <input
                                type="text"
                                className="form-control bg-light border-0"
                                id="invoicenoInput"
                                value={
                                  data?.submittedData?.ConclusionSection
                                    ?.officerComment
                                }
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                          {data?.submittedData?.ConclusionSection
                            ?.PremisesActionTaken?.length != 0 ? (
                            <div className="col-lg-3 col-sm-6">
                              <label htmlFor="invoicenoInput">
                                Action Taken
                              </label>
                              {data?.submittedData?.ConclusionSection?.PremisesActionTaken?.map(
                                (x) => (
                                  <input
                                    key={x.id}
                                    type="text"
                                    className="form-control bg-light border-0"
                                    id="invoicenoInput"
                                    value={x?.Action?.name}
                                  />
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="col-lg-3 col-sm-6">
                          <label htmlFor="invoicenoInput">
                            Reporting Officer
                          </label>
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            id="invoicenoInput"
                            value={`${data?.submittedData?.User?.otherNames} ${data?.submittedData?.User?.surname}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {data?.submittedData?.InspectionPictures.map((ip) => {
     return <figure className="figure">
        <img
          src={`https://esicapps-images.s3.eu-west-2.amazonaws.com/${ip}`}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">
          A caption for the above image.
        </figcaption>
      </figure>
         })} */}
            <div className="row">
              <div className="col-lg-12">
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <div className="row align-items-center gy-3 mb-3">
                      <div className="col-sm">
                        <div>
                          <h5 className="fs-14 mb-0">PICTURES</h5>
                        </div>
                      </div>
                    </div>

                    <div className="row gallery-wrapper">
                      {data?.submittedData?.InspectionPictures?.map((ip) => {
                        return (
                          <div
                            key={ip.id}
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing development"
                            data-category="designing development"
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href={`https://esicapps-images.s3.eu-west-2.amazonaws.com/${ip.imagePath}`}
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src={`https://esicapps-images.s3.eu-west-2.amazonaws.com/${ip.imagePath}`}
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      {ip.FormSectionImage.name}
                                    </h5>
                                  </div>
                                </a>
                              </div>

                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      {ip.FormSectionImage.name}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    {data?.submittedData?.isPublished == 0 ? (
                      <button
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();

                          publish(data?.submittedData?.id);
                        }}
                      >
                        Publish
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.preventDefault();

                          publish(data?.submittedData?.id);
                        }}
                      >
                        Unpublish
                      </button>
                    )}
                  </div>
                  <div className="col-sm-auto">
                    {data?.submittedData?.isPublished == 0 ? (
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.preventDefault();

                          handleDelete(data?.submittedData?.id);
                        }}
                      >
                        Delete
                      </button>
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

export default DataEdit;
