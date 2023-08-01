import axios from 'axios';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import EateryPremisesInfoView from './PremisesInfoViews/EateryPremisesInfoView';
import HealthPremisesInfoView from './PremisesInfoViews/HealthPremisesInfoView';
import HospitalityPremisesInfoView from './PremisesInfoViews/HospitalityPremisesInfoView';
import IndustryPremisesInfoView from './PremisesInfoViews/IndustryPremisesInfoView';
import InstitutionPremisesInfoView from './PremisesInfoViews/InstitutionPremisesInfoView';
import MarketPremisesInfoView from './PremisesInfoViews/MarketPremisesInfoView';
import ResidentialPremisesInfoView from './PremisesInfoViews/ResidentialPremisesInfoView';
import SanitaryPremisesInfoView from './PremisesInfoViews/SanitaryPremisesInfoView';

export default function DataView({data}:any) {
    const router = useRouter();

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const formId = Number(searchParams.get("formId"))
    const published = Number(searchParams.get('published'))
    const page = Number(searchParams.get('page'))
    const searchtext = searchParams.get('searchText')

    const publish = async (id:any) => {
        try {
            const response = await axios.post(`/api/submitted-data/data-view`, {
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
        router.refresh();
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

    const handleDelete = async (id:any) => {
        try {
            const response = await axios.put(`/api/submitted-data/data-view`, {
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
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Data </h1>
                {/* <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">Tables</li>
                <li className="breadcrumb-item active">Data</li>
            </ol>
        </nav> */}
            </div>
            {/* End Page Title */}
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        {/* End Page Title */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">

                                    </div>
                                    <div className="card-body table-responsive">
                                        {/* <h5 className="card-title">Datatables</h5> */}

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
                                                        DATA VIEW
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
                                                                        Go to Data list
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
                                                                                        value={data?.premisesCode}
                                                                                        readOnly={true}
                                                                                    />
                                                                                </div>
                                                                                <div className="col-lg-3 col-sm-6">
                                                                                    <label htmlFor="invoicenoInput">Region</label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control bg-light border-0"
                                                                                        id="invoicenoInput"
                                                                                        value={
                                                                                            data?.BasicInfoSection?.Community?.District
                                                                                                ?.Region.name
                                                                                        }
                                                                                        readOnly={true}
                                                                                    />
                                                                                </div>
                                                                                <div className="col-lg-3 col-sm-6">
                                                                                    <label htmlFor="invoicenoInput">District</label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control bg-light border-0"
                                                                                        id="invoicenoInput"
                                                                                        value={
                                                                                            data?.BasicInfoSection?.Community != null
                                                                                                ? data?.BasicInfoSection?.Community?.District
                                                                                                    ?.name
                                                                                                : ""
                                                                                        }
                                                                                        readOnly={true}
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
                                                                                        value={data?.ElectoralArea?.name}
                                                                                        readOnly={true}
                                                                                    />
                                                                                </div>
                                                                                <div className="col-lg-3 col-sm-6">
                                                                                    <label htmlFor="invoicenoInput">Community</label>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control bg-light border-0"
                                                                                        id="invoicenoInput"
                                                                                        value={data?.BasicInfoSection?.Community?.name}
                                                                                        readOnly={true}
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
                              value={data?.BasicInfoSection?.ghanaPostGps}
                              readOnly={true}
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
                                                                                        value={data?.BasicInfoSection?.respondentName}
                                                                                        readOnly={true}
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
                                                                                            data?.BasicInfoSection?.RespondentDesignation
                                                                                                ?.name
                                                                                        }
                                                                                        readOnly={true}
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
                                                                                            data?.BasicInfoSection?.respondentPhoneNumber
                                                                                        }
                                                                                        readOnly={true}
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

                                                    {formId == 1 ? <ResidentialPremisesInfoView data={data} /> : <></>}
                                                    {formId == 2 ? <EateryPremisesInfoView data={data} /> : <></>}
                                                    {formId == 3 ? <HealthPremisesInfoView data={data} /> : <></>}
                                                    {formId == 4 ? <HospitalityPremisesInfoView data={data} /> : <></>}
                                                    {formId == 5 ? <InstitutionPremisesInfoView data={data} /> : <></>}
                                                    {formId == 6 ? <IndustryPremisesInfoView data={data} /> : <></>}
                                                    {formId == 7 ? <MarketPremisesInfoView data={data} /> : <></>}
                                                    {formId == 8 ? <SanitaryPremisesInfoView data={data} /> : <></>}
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
                                                                                {data?.LicencePermitSection
                                                                                    ?.animalsPermitAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Animal permit
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.animalsPermitAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.buildingPermitAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Building permit
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.buildingPermitAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.habitationCertificateAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Certificate of habitation
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.habitationCertificateAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.propertyRateAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Property rate payment
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.propertyRateAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.suitabilityCertificateAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Suitability Certificate
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.suitabilityCertificateAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.structurePermitAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Structure permit
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.structurePermitAvailability.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}

                                                                                {data?.LicencePermitSection
                                                                                    ?.fumigationCertificateAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Fumigation certificate
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.fumigationCertificateAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.businessLicenceAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Business operating permit
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.businessLicenceAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.structurePermitAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Temporal structure permit
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.structurePermitAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection?.waterAnalysisReport !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water analysis report
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.waterAnalysisReport?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LicencePermitSection
                                                                                    ?.regGeneralCertAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Registrar General operating certificate
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.regGeneralCertAvailability.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}

                                                                                {data?.LicencePermitSection
                                                                                    ?.gtaOperatingLicenceAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Ghana Tourism Authority operating license
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.gtaOperatingLicenceAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}

                                                                                {data?.LicencePermitSection
                                                                                    ?.pharmacyCertAvailability != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            HEFRA/PHARMACY COUNCIL operating license
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LicencePermitSection
                                                                                                    ?.pharmacyCertAvailability?.value
                                                                                            }
                                                                                            readOnly={true}
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
                                                                                {data?.WaterSection?.PremisesWaterSources.length !=
                                                                                    0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water source
                                                                                        </label>
                                                                                        {data?.WaterSection?.PremisesWaterSources.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.WaterSourceType.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.WaterSection?.PremisesWaterSupply.length !=
                                                                                    0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water supply
                                                                                        </label>
                                                                                        {data?.WaterSection?.PremisesWaterSupply.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.WaterSupplyType.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.WaterSection?.waterSourceCondition != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water source condition
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.WaterSection?.waterSourceCondition?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}

                                                                                {data?.WaterSection?.PremisesWaterStorage.length !=
                                                                                    0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water storage
                                                                                        </label>
                                                                                        {data?.WaterSection?.PremisesWaterStorage.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.WaterStorageType.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.WaterSection?.waterStorageConditionSafe !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Safe Water storage receptacle condition
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.WaterSection?.waterStorageConditionSafe
                                                                                                    .name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.WaterSection?.PremisesWaterTreatmentType
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water treatment type
                                                                                        </label>
                                                                                        {data?.WaterSection?.PremisesWaterTreatmentType?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.WaterTreatmentType.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.WaterSection?.PremisesDrinkingWaterSources
                                                                                    .length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Drinking water source
                                                                                        </label>
                                                                                        {data?.WaterSection?.PremisesDrinkingWaterSources?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.DrinkingWaterSourceType.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.WaterSection?.WaterFlowFrequency != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Water flow frequency
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.WaterSection?.WaterFlowFrequency?.name
                                                                                            }
                                                                                            readOnly={true}
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
                                                                                {data?.LiquidWasteSection?.numberToiletSeats !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Number Toilet Seats
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.numberToiletSeats
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.numberUrinalSeats !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Number Urinal Seats
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.numberUrinalSeats
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.toiletAdequacy != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Toilet Adequacy
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.toiletAdequacy?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.bathroomAdequacy !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Bathroom Adequacy
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.bathroomAdequacy
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {/* {data?.LiquidWasteSection?.separateStaffUrinal != null ? (
                      <div className="col-lg-3 col-sm-6">
                        <label htmlFor="invoicenoInput">
                          Separate Staff Urinal
                        </label>
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="invoicenoInput"
                          value={
                            data?.LiquidWasteSection?.separateStaffUrinal.name
                          }
                          readOnly={true}
                        />
                      </div>
                    ) : (
                      <></>
                    )} */}
                                                                                {data?.LiquidWasteSection?.toiletPitPosition !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Toilet Pit Position
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.toiletPitPosition
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.drainsCondition != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Drains Condition
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.drainsCondition
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.stagnationEvidence !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Stagnation Evidence
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.stagnationEvidence
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.analCleansingMaterialMgt !=
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
                                                                                                data?.LiquidWasteSection
                                                                                                    ?.analCleansingMaterialMgt?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.toiletCondition != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Toilet Condition
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.toiletCondition
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.toiletDischarge != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Toilet Discharge
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.toiletDischarge
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.containmentEmptied !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Containment Emptied
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.containmentEmptied
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.sewerSystem != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Sewer System
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.sewerSystem?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.EaseYourselfWhere !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Ease Yourself Where
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.EaseYourselfWhere
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.DesiltingFrequency !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Desilting Frequency
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.LiquidWasteSection?.DesiltingFrequency
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.PremisesDrainType
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">Drain Type</label>
                                                                                        {data?.LiquidWasteSection?.PremisesDrainType?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.DrainType?.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.PremisesEffluentManagement
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Effluent Management
                                                                                        </label>
                                                                                        {data?.LiquidWasteSection?.PremisesEffluentManagement?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.EffluentManagement.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.PremisesExcretaContainment
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Excreta Containment
                                                                                        </label>
                                                                                        {data?.LiquidWasteSection?.PremisesExcretaContainment.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.ExcretaContainment.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection
                                                                                    ?.PremisesExcretaDisposalMethod?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Excreta Disposal Method
                                                                                        </label>
                                                                                        {data?.LiquidWasteSection?.PremisesExcretaDisposalMethod?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.ExcretaDisposalMethod.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.PremisesGreyWaterDisposal
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Grey Water Disposal
                                                                                        </label>
                                                                                        {data?.LiquidWasteSection?.PremisesGreyWaterDisposal?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.GreyWaterDisposal.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.LiquidWasteSection?.PremisesToiletType
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Toilet Type
                                                                                        </label>
                                                                                        {data?.LiquidWasteSection?.PremisesToiletType?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x.ToiletType.name}
                                                                                                    readOnly={true}
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
                                                                                {data?.SolidWasteSection
                                                                                    ?.wasteServiceProviderRegistration != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Service Provider Registration
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection
                                                                                                    ?.wasteServiceProviderRegistration?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.wasteCollectorName !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Collector Name
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection?.wasteCollectorName
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.wasteSortingAvailability !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Sorting Availability
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection
                                                                                                    ?.wasteSortingAvailability?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection
                                                                                    ?.approvedWasteStorageReceptacle != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Approved Waste Storage Receptacle
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection
                                                                                                    ?.approvedWasteStorageReceptacle?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection
                                                                                    ?.adequateWasteStorageReceptacle != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Adequate Waste Storage Receptacle
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection
                                                                                                    ?.adequateWasteStorageReceptacle?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.WasteCollectionType !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Collection Type
                                                                                        </label>

                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection?.WasteCollectionType
                                                                                                    .name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.PremisesWasteReceptacle
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Collection Receptacle
                                                                                        </label>
                                                                                        {data?.SolidWasteSection?.PremisesWasteReceptacle?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x?.SolidWasteReceptacle?.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.UnservicedWasteDisposal !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Unserviced Waste Disposal
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection
                                                                                                    ?.UnservicedWasteDisposal?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.wastePaymentEvidence !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Payment Evidence
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection?.wastePaymentEvidence
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.ContainerVolume != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Container Volume
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection?.ContainerVolume?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.SolidWasteSection?.wasteProviderAccreditted !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Waste Provider Accreditted
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.SolidWasteSection
                                                                                                    ?.wasteProviderAccreditted?.name
                                                                                            }
                                                                                            readOnly={true}
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
                                                                                <h5 className="fs-14 mb-0">
                                                                                    ACTIONS & CONCLUSION SECTION
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card product">
                                                                        <div className="card-body">
                                                                            <div className="row gy-3">
                                                                                {data?.ConclusionSection?.obnoxiousTradeExist !=
                                                                                    null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Obnoxious Trade Exist
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={
                                                                                                data?.ConclusionSection?.obnoxiousTradeExist
                                                                                                    ?.name
                                                                                            }
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.ConclusionSection?.PremisesNuisanceDetected
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Nuisance Observed
                                                                                        </label>
                                                                                        {data?.ConclusionSection?.PremisesNuisanceDetected?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x?.Nuisance?.name}
                                                                                                    readOnly={true}
                                                                                                />
                                                                                            )
                                                                                        )}
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.ConclusionSection?.officerComment != null ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Office Comment
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control bg-light border-0"
                                                                                            id="invoicenoInput"
                                                                                            value={data?.ConclusionSection?.officerComment}
                                                                                            readOnly={true}
                                                                                        />
                                                                                    </div>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                                {data?.ConclusionSection?.PremisesActionTaken
                                                                                    ?.length != 0 ? (
                                                                                    <div className="col-lg-3 col-sm-6">
                                                                                        <label htmlFor="invoicenoInput">
                                                                                            Action Taken
                                                                                        </label>
                                                                                        {data?.ConclusionSection?.PremisesActionTaken?.map(
                                                                                            (x:any) => (
                                                                                                <input
                                                                                                    key={x.id}
                                                                                                    type="text"
                                                                                                    className="form-control bg-light border-0"
                                                                                                    id="invoicenoInput"
                                                                                                    value={x?.Action?.name}
                                                                                                    readOnly={true}
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
                                                                                    value={`${data?.User?.otherNames} ${data?.User?.surname}`}
                                                                                    readOnly={true}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* {data?.InspectionPictures.map((ip) => {
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
                                                                        {data?.InspectionPictures?.map((ip:any) => {
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
                                                                    {data?.isPublished == 0 ? (
                                                                        <button
                                                                            className="btn btn-success"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();

                                                                                publish(data?.id);
                                                                            }}
                                                                        >
                                                                            Publish
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            className="btn btn-danger"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();

                                                                                publish(data?.id);
                                                                            }}
                                                                        >
                                                                            Unpublish
                                                                        </button>
                                                                    )}
                                                                </div>
                                                                <div className="col-sm-auto">
                                                                    <Link

                                                                        href={{
                                                                            pathname: `/submitted-data/data_edit`,
                                                                            query: {
                                                                                id: data?.id,
                                                                                inspectionFormId: formId,
                                                                                published: published,
                                                                            },
                                                                        }}
                                                                    >
                                                                        <a className="btn btn-primary">
                                                                            <i className="ri-edit-fill align-bottom me-2 text-muted" />{" "}
                                                                            Edit
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                {/* <div className="col-sm-auto">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();

                          handleEdit(data?.id);
                        }}
                      >
                        Edit
                      </button>
                   
                  </div> */}
                                                                <div className="col-sm-auto">
                                                                    {data?.isPublished == 0 ? (
                                                                        <button
                                                                            className="btn btn-danger"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();

                                                                                handleDelete(data?.id);
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
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </main>
    )
}
