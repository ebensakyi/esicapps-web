-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userTypeId" INTEGER NOT NULL DEFAULT 2,
    "surname" VARCHAR(255) NOT NULL,
    "otherNames" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "phoneNumber" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,
    "activated" INTEGER DEFAULT 0,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" SERIAL NOT NULL,
    "inspectionCode" VARCHAR(255) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "inspectionTypeId" INTEGER NOT NULL,
    "isPublished" INTEGER NOT NULL DEFAULT 0,
    "publishedById" INTEGER,
    "submittedById" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EducationInstitutionPremises" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "educationalInstitutionTypeId" INTEGER NOT NULL,

    CONSTRAINT "EducationInstitutionPremises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CorporateInstitutionPremises" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "corporateInstitutionTypeId" INTEGER NOT NULL,

    CONSTRAINT "CorporateInstitutionPremises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReligiousInstitutionPremises" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "religiousInstitutionTypeId" INTEGER NOT NULL,
    "ablutionSlabId" INTEGER,

    CONSTRAINT "ReligiousInstitutionPremises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "institutionTypeId" INTEGER NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthServices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesHealthServicesProvided" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "healthServicesId" INTEGER NOT NULL,

    CONSTRAINT "PremisesHealthServicesProvided_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstitutionType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstitutionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionForm" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InspectionForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "abbrv" VARCHAR(10) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subdistrict" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subdistrict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frequency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Frequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToiletType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToiletType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalCleansingMaterialMgt" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnalCleansingMaterialMgt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EffluentManagement" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EffluentManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcretaContainment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExcretaContainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcretaDisposalMethod" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExcretaDisposalMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSourceType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSourceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSupplyType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSupplyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterStorageType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterStorageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterTreatmentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterTreatmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolidWasteReceptacle" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolidWasteReceptacle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YesNo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YesNo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HazardousWasteDisposalMethod" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HazardousWasteDisposalMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorageCondition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorageCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespondentDesignation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RespondentDesignation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WasteCollectionType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WasteCollectionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PestSign" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PestSign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DrainType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DrainType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nuisance" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nuisance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GreyWaterDisposal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GreyWaterDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InspectionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToiletPitPosition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToiletPitPosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EateryType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EateryType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EateryPremisesType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EateryPremisesType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthPremisesType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthPremisesType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HospitalityServicesProvided" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "HospitalityServicesProvided_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HospitalityService" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HospitalityService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "activity" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facility" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlaughterHouse" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,
    "slaughterRoomsAvailableId" INTEGER NOT NULL,
    "condemnationRoomAvailableId" INTEGER NOT NULL,
    "hangingExaminationFacilitiesAvailableId" INTEGER NOT NULL,
    "holdingPenAvailableId" INTEGER NOT NULL,
    "isolationPenAvailableId" INTEGER NOT NULL,
    "chuteAvailableId" INTEGER NOT NULL,
    "genderFriendlyAvailableId" INTEGER NOT NULL,
    "comfortRoomAvailableId" INTEGER NOT NULL,
    "wheelBathAvailableId" INTEGER NOT NULL,
    "footbathAvailableId" INTEGER NOT NULL,
    "meatInspectorOfficeAvailableId" INTEGER NOT NULL,
    "dressingFloorAvailableId" INTEGER NOT NULL,

    CONSTRAINT "SlaughterHouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cemetery" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,
    "layoutCemeteryAdequacyId" INTEGER NOT NULL,
    "cemeteryFencedId" INTEGER NOT NULL,
    "cremationPracticedId" INTEGER NOT NULL,
    "cremationPlatformId" INTEGER NOT NULL,
    "ashesDisposalId" INTEGER NOT NULL,
    "sextonAvailabilityId" INTEGER NOT NULL,
    "sextonOfficeAvailabilityId" INTEGER NOT NULL,

    CONSTRAINT "Cemetery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferWasteStation" (
    "id" SERIAL NOT NULL,
    "transferStationCapacity" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,
    "wasteSortingId" INTEGER NOT NULL,
    "leachateManagementId" INTEGER NOT NULL,
    "hazardousManagementId" INTEGER NOT NULL,

    CONSTRAINT "TransferWasteStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunalContainer" (
    "id" SERIAL NOT NULL,
    "attendantName" VARCHAR(255) NOT NULL,
    "attendantPhoneNumber" VARCHAR(255) NOT NULL,
    "serviceProviderName" VARCHAR(255) NOT NULL,
    "containerVolume" INTEGER NOT NULL,
    "numberContainers" INTEGER NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,
    "scheduledCollectionId" INTEGER NOT NULL,
    "containerConditionId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunalContainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilitySection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "districtId" INTEGER NOT NULL,
    "subdistrictId" INTEGER,
    "zoneId" INTEGER,
    "communityId" INTEGER,
    "community" VARCHAR(255) NOT NULL,
    "ghanaPostGps" VARCHAR(255),
    "latitude" VARCHAR(255) NOT NULL,
    "longitude" VARCHAR(255) NOT NULL,
    "respondentName" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,
    "premiseTypeId" INTEGER NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "approvedHandwashingFacilityAvailabilityId" INTEGER NOT NULL,
    "protectiveClothingId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "separateWardId" INTEGER,
    "soundProofId" INTEGER,
    "disabilityFriendlyId" INTEGER,
    "multipleExitId" INTEGER,
    "businessLicenceAvailabilityId" INTEGER,
    "medicalCertAvailabilityId" INTEGER,
    "operatingLicenceAvailabilityId" INTEGER,
    "propertyRateAvailabilityId" INTEGER,
    "structurePermitAvailabilityId" INTEGER,
    "habitationCertificateAvailabilityId" INTEGER,
    "fumigationCertificateAvailabilityId" INTEGER,
    "medicalCertificateAvailabilityId" INTEGER,
    "buildingPermitId" INTEGER,
    "labourersOfficeAvailabilityId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "eateryTypeId" INTEGER,
    "eateryPremisesTypeId" INTEGER,
    "temporaryPermanentId" INTEGER,
    "smokingAreaId" INTEGER,
    "pantryAvailabilityId" INTEGER,
    "healthPremisesTypeId" INTEGER,
    "healthServicesProvidedId" INTEGER,
    "industryCategoryId" INTEGER,
    "industryPremisesSubsectionId" INTEGER,
    "institutionTypeId" INTEGER,
    "marketLorryParkPremisesId" INTEGER,
    "ownershipTypeId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacilitySection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnershipType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OwnershipType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemporaryPermanent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemporaryPermanent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketLorryParkPremises" (
    "id" SERIAL NOT NULL,
    "numberStores" INTEGER,
    "numberStalls" INTEGER,
    "numberSheds" INTEGER,
    "numberVehicles" INTEGER,
    "derattingFrequencyId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "marketLorryParkTypeId" INTEGER NOT NULL,

    CONSTRAINT "MarketLorryParkPremises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketLorryParkType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketLorryParkType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DerattingFrequency" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DerattingFrequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopulationSection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "maleDoctorsNumber" INTEGER,
    "femaleDoctorsNumber" INTEGER,
    "maleNursesNumber" INTEGER,
    "femaleNursesNumber" INTEGER,
    "maleAuxiliaryStaffNumber" INTEGER,
    "femaleAuxiliaryStaffNumber" INTEGER,
    "roomCapacity" INTEGER,
    "facilityCapacity" INTEGER,
    "maleWorkers" INTEGER,
    "femaleWorkers" INTEGER,
    "medicallyCertifiedWorkers" INTEGER,
    "numberMaleTeachers" INTEGER,
    "numberFemaleTeachers" INTEGER,
    "numberMaleNonTeachingStaff" INTEGER,
    "numberFemaleNonTeachingStaff" INTEGER,
    "numberMaleStudents" INTEGER,
    "numberFemaleStudents" INTEGER,
    "numberFemaleSchoolCooks" INTEGER,
    "numberCooksMedicallyCertified" INTEGER,
    "numberFoodVendorsCompound" INTEGER,
    "numberFoodVendorsMedicallyCertified" INTEGER,
    "numberPreschoolTeachersMedicallyCertified" INTEGER,
    "numberHousehold" INTEGER,
    "numberMales" INTEGER,
    "numberFemales" INTEGER,
    "numberRooms" INTEGER,
    "numberBeds" INTEGER,
    "staffRoomAvailability" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PopulationSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "waterConditionId" INTEGER NOT NULL,
    "waterSupplyTypeId" INTEGER NOT NULL,
    "waterStorageTypeId" INTEGER NOT NULL,
    "waterTreatmentTypeId" INTEGER NOT NULL,
    "waterFlowFrequencyId" INTEGER NOT NULL,
    "waterStorageConditionSafeId" INTEGER NOT NULL,
    "waterGeneralRating" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterSources" (
    "id" SERIAL NOT NULL,
    "waterSectionId" INTEGER NOT NULL,
    "waterSourceId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PremisesWaterSources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanitationSection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "sanitaryFacilityTypeId" INTEGER NOT NULL,
    "wasteCollectorRegistrationId" INTEGER NOT NULL,
    "wasteCollectorName" VARCHAR(255),
    "wasteSortingId" INTEGER NOT NULL,
    "sanitationGeneralRating" INTEGER NOT NULL,
    "drainsConditionId" INTEGER NOT NULL,
    "receiptsUpToDateId" INTEGER,
    "drainTypeId" INTEGER,
    "approvedWasteStorageReceptacleId" INTEGER NOT NULL,
    "analCleansingMaterialMgtId" INTEGER,
    "effluentManagementReportId" INTEGER,
    "distanceWaterStorageSanitaryId" INTEGER,
    "facilityCleanlinessId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "effluentManagementId" INTEGER,
    "wasteCollectionFrequencyId" INTEGER NOT NULL,
    "excretaDisposalMethodId" INTEGER,
    "excretaContainmentId" INTEGER,
    "areaSewered" INTEGER,
    "facilityConnectedSewerId" INTEGER,

    CONSTRAINT "SanitationSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWashroomFacility" (
    "id" SERIAL NOT NULL,
    "numberToiletSeats" INTEGER,
    "numberUrineSeats" INTEGER,
    "toiletAdequacyId" INTEGER,
    "urinalAdequacyId" INTEGER,
    "bathroomAdequacyId" INTEGER,
    "separateStaffUrinalId" INTEGER,
    "availToiletFaciltyMgtId" INTEGER,
    "toiletGenderSensivityId" INTEGER,
    "urinalGenderSensivityId" INTEGER,
    "sanitationSectionId" INTEGER,
    "premisesToiletTypeId" INTEGER,
    "premisesEffluentManagementId" INTEGER,
    "toiletPitPositionId" INTEGER,
    "premisesExcretaDisposalMethodId" INTEGER,
    "premisesExcretaContainmentId" INTEGER,
    "toiletDisabilityFriendlyId" INTEGER,
    "urinalDisabilityFriendlyId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PremisesWashroomFacility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesToiletType" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "premisesWashroomFacilityId" INTEGER NOT NULL,
    "toiletTypeId" INTEGER NOT NULL,

    CONSTRAINT "PremisesToiletType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesEffluentManagement" (
    "id" SERIAL NOT NULL,
    "effluentManagementId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "premisesWashroomFacilityId" INTEGER NOT NULL,

    CONSTRAINT "PremisesEffluentManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesExcretaDisposalMethod" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excretaDisposalMethodId" INTEGER NOT NULL,
    "premisesWashroomFacilityId" INTEGER NOT NULL,

    CONSTRAINT "PremisesExcretaDisposalMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesExcretaContainment" (
    "id" SERIAL NOT NULL,
    "premisesWashroomFacilityId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excretaContainmentId" INTEGER NOT NULL,

    CONSTRAINT "PremisesExcretaContainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWasteReceptacle" (
    "id" SERIAL NOT NULL,
    "solidWasteReceptacleId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWasteReceptacle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesGreyWaterDisposal" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,
    "greyWaterDisposalId" INTEGER NOT NULL,

    CONSTRAINT "PremisesGreyWaterDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HygieneSection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "publicBathRoomConditionId" INTEGER,
    "evidenceStagnationId" INTEGER,
    "disinfestationId" INTEGER,
    "disinfectionId" INTEGER,
    "safeConditionUncookedId" INTEGER,
    "safeConditionCookedId" INTEGER,
    "pondingEvidenceId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "animalType" VARCHAR(255),
    "animalsNumber" INTEGER DEFAULT 0,
    "animalSpaceConditionId" INTEGER,
    "vaccinationProofId" INTEGER,
    "animalsPermitId" INTEGER,
        "pantryFacilityAdequacyId" INTEGER,
    "shepClubExistenceId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,


    CONSTRAINT "HygieneSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesPestSigns" (
    "id" SERIAL NOT NULL,
    "hygieneSectionId" INTEGER NOT NULL,
    "pestSignId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PremisesPestSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConclusionSection" (
    "id" SERIAL NOT NULL,
    "officerComment" VARCHAR(255) NOT NULL,
    "obnoxiousTradeNearbyId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "ConclusionSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesActionTaken" (
    "id" SERIAL NOT NULL,
    "actionId" INTEGER NOT NULL,
    "conclusionSectionId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PremisesActionTaken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesNuisanceDetected" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "conclusionSectionId" INTEGER NOT NULL,
    "nuisanceId" INTEGER NOT NULL,

    CONSTRAINT "PremisesNuisanceDetected_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryPremisesSubsection" (
    "id" SERIAL NOT NULL,
    "consumableTypeId" INTEGER,
    "storageFinishedProductId" INTEGER NOT NULL,
    "nonConsumableTypeId" INTEGER NOT NULL,
    "productsManufactured" VARCHAR(255) NOT NULL,
    "mainRawMaterial" VARCHAR(255) NOT NULL,
    "sourceRawMaterial" VARCHAR(255) NOT NULL,
    "majorByproduct" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustryPremisesSubsection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsumableType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsumableType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonConsumableType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NonConsumableType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_publishedById_fkey" FOREIGN KEY ("publishedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_submittedById_fkey" FOREIGN KEY ("submittedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_inspectionTypeId_fkey" FOREIGN KEY ("inspectionTypeId") REFERENCES "InspectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationInstitutionPremises" ADD CONSTRAINT "EducationInstitutionPremises_educationalInstitutionTypeId_fkey" FOREIGN KEY ("educationalInstitutionTypeId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateInstitutionPremises" ADD CONSTRAINT "CorporateInstitutionPremises_corporateInstitutionTypeId_fkey" FOREIGN KEY ("corporateInstitutionTypeId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReligiousInstitutionPremises" ADD CONSTRAINT "ReligiousInstitutionPremises_religiousInstitutionTypeId_fkey" FOREIGN KEY ("religiousInstitutionTypeId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReligiousInstitutionPremises" ADD CONSTRAINT "ReligiousInstitutionPremises_ablutionSlabId_fkey" FOREIGN KEY ("ablutionSlabId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_institutionTypeId_fkey" FOREIGN KEY ("institutionTypeId") REFERENCES "InstitutionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHealthServicesProvided" ADD CONSTRAINT "PremisesHealthServicesProvided_healthServicesId_fkey" FOREIGN KEY ("healthServicesId") REFERENCES "HealthServices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityServicesProvided" ADD CONSTRAINT "HospitalityServicesProvided_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_slaughterRoomsAvailableId_fkey" FOREIGN KEY ("slaughterRoomsAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_condemnationRoomAvailableId_fkey" FOREIGN KEY ("condemnationRoomAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_hangingExaminationFacilitiesAvailableId_fkey" FOREIGN KEY ("hangingExaminationFacilitiesAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_holdingPenAvailableId_fkey" FOREIGN KEY ("holdingPenAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_isolationPenAvailableId_fkey" FOREIGN KEY ("isolationPenAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_chuteAvailableId_fkey" FOREIGN KEY ("chuteAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_genderFriendlyAvailableId_fkey" FOREIGN KEY ("genderFriendlyAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_comfortRoomAvailableId_fkey" FOREIGN KEY ("comfortRoomAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_wheelBathAvailableId_fkey" FOREIGN KEY ("wheelBathAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_footbathAvailableId_fkey" FOREIGN KEY ("footbathAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_meatInspectorOfficeAvailableId_fkey" FOREIGN KEY ("meatInspectorOfficeAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_dressingFloorAvailableId_fkey" FOREIGN KEY ("dressingFloorAvailableId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_sextonAvailabilityId_fkey" FOREIGN KEY ("sextonAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_sextonOfficeAvailabilityId_fkey" FOREIGN KEY ("sextonOfficeAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_layoutCemeteryAdequacyId_fkey" FOREIGN KEY ("layoutCemeteryAdequacyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_cemeteryFencedId_fkey" FOREIGN KEY ("cemeteryFencedId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_cremationPracticedId_fkey" FOREIGN KEY ("cremationPracticedId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_cremationPlatformId_fkey" FOREIGN KEY ("cremationPlatformId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_ashesDisposalId_fkey" FOREIGN KEY ("ashesDisposalId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_leachateManagementId_fkey" FOREIGN KEY ("leachateManagementId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_hazardousManagementId_fkey" FOREIGN KEY ("hazardousManagementId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunalContainer" ADD CONSTRAINT "CommunalContainer_scheduledCollectionId_fkey" FOREIGN KEY ("scheduledCollectionId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunalContainer" ADD CONSTRAINT "CommunalContainer_containerConditionId_fkey" FOREIGN KEY ("containerConditionId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunalContainer" ADD CONSTRAINT "CommunalContainer_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_healthServicesProvidedId_fkey" FOREIGN KEY ("healthServicesProvidedId") REFERENCES "PremisesHealthServicesProvided"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_institutionTypeId_fkey" FOREIGN KEY ("institutionTypeId") REFERENCES "InstitutionType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_subdistrictId_fkey" FOREIGN KEY ("subdistrictId") REFERENCES "Subdistrict"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_separateWardId_fkey" FOREIGN KEY ("separateWardId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_smokingAreaId_fkey" FOREIGN KEY ("smokingAreaId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_pantryAvailabilityId_fkey" FOREIGN KEY ("pantryAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_labourersOfficeAvailabilityId_fkey" FOREIGN KEY ("labourersOfficeAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_storeRoomAvailabilityId_fkey" FOREIGN KEY ("storeRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_protectiveClothingId_fkey" FOREIGN KEY ("protectiveClothingId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_soundProofId_fkey" FOREIGN KEY ("soundProofId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_disabilityFriendlyId_fkey" FOREIGN KEY ("disabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_multipleExitId_fkey" FOREIGN KEY ("multipleExitId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_businessLicenceAvailabilityId_fkey" FOREIGN KEY ("businessLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_medicalCertAvailabilityId_fkey" FOREIGN KEY ("medicalCertAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_operatingLicenceAvailabilityId_fkey" FOREIGN KEY ("operatingLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_propertyRateAvailabilityId_fkey" FOREIGN KEY ("propertyRateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_structurePermitAvailabilityId_fkey" FOREIGN KEY ("structurePermitAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_habitationCertificateAvailabilityId_fkey" FOREIGN KEY ("habitationCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_fumigationCertificateAvailabilityId_fkey" FOREIGN KEY ("fumigationCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_buildingPermitId_fkey" FOREIGN KEY ("buildingPermitId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_respondentDesignationId_fkey" FOREIGN KEY ("respondentDesignationId") REFERENCES "RespondentDesignation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_eateryTypeId_fkey" FOREIGN KEY ("eateryTypeId") REFERENCES "EateryType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_eateryPremisesTypeId_fkey" FOREIGN KEY ("eateryPremisesTypeId") REFERENCES "EateryPremisesType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_healthPremisesTypeId_fkey" FOREIGN KEY ("healthPremisesTypeId") REFERENCES "HealthPremisesType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_ownershipTypeId_fkey" FOREIGN KEY ("ownershipTypeId") REFERENCES "OwnershipType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_industryCategoryId_fkey" FOREIGN KEY ("industryCategoryId") REFERENCES "IndustryCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_temporaryPermanentId_fkey" FOREIGN KEY ("temporaryPermanentId") REFERENCES "TemporaryPermanent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_marketLorryParkPremisesId_fkey" FOREIGN KEY ("marketLorryParkPremisesId") REFERENCES "MarketLorryParkPremises"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_industryPremisesSubsectionId_fkey" FOREIGN KEY ("industryPremisesSubsectionId") REFERENCES "IndustryPremisesSubsection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketLorryParkPremises" ADD CONSTRAINT "MarketLorryParkPremises_marketLorryParkTypeId_fkey" FOREIGN KEY ("marketLorryParkTypeId") REFERENCES "MarketLorryParkType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketLorryParkPremises" ADD CONSTRAINT "MarketLorryParkPremises_derattingFrequencyId_fkey" FOREIGN KEY ("derattingFrequencyId") REFERENCES "DerattingFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSection" ADD CONSTRAINT "PopulationSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterFlowFrequencyId_fkey" FOREIGN KEY ("waterFlowFrequencyId") REFERENCES "Frequency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterSupplyTypeId_fkey" FOREIGN KEY ("waterSupplyTypeId") REFERENCES "WaterSupplyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterStorageTypeId_fkey" FOREIGN KEY ("waterStorageTypeId") REFERENCES "WaterStorageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterTreatmentTypeId_fkey" FOREIGN KEY ("waterTreatmentTypeId") REFERENCES "WaterTreatmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterConditionId_fkey" FOREIGN KEY ("waterConditionId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterStorageConditionSafeId_fkey" FOREIGN KEY ("waterStorageConditionSafeId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_waterSourceId_fkey" FOREIGN KEY ("waterSourceId") REFERENCES "WaterSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_wasteCollectionFrequencyId_fkey" FOREIGN KEY ("wasteCollectionFrequencyId") REFERENCES "Frequency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_analCleansingMaterialMgtId_fkey" FOREIGN KEY ("analCleansingMaterialMgtId") REFERENCES "AnalCleansingMaterialMgt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_effluentManagementId_fkey" FOREIGN KEY ("effluentManagementId") REFERENCES "EffluentManagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_excretaContainmentId_fkey" FOREIGN KEY ("excretaContainmentId") REFERENCES "ExcretaContainment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_excretaDisposalMethodId_fkey" FOREIGN KEY ("excretaDisposalMethodId") REFERENCES "ExcretaDisposalMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_facilityConnectedSewerId_fkey" FOREIGN KEY ("facilityConnectedSewerId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_approvedWasteStorageReceptacleId_fkey" FOREIGN KEY ("approvedWasteStorageReceptacleId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_wasteCollectorRegistrationId_fkey" FOREIGN KEY ("wasteCollectorRegistrationId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_distanceWaterStorageSanitaryId_fkey" FOREIGN KEY ("distanceWaterStorageSanitaryId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_effluentManagementReportId_fkey" FOREIGN KEY ("effluentManagementReportId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_wasteSortingId_fkey" FOREIGN KEY ("wasteSortingId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_drainsConditionId_fkey" FOREIGN KEY ("drainsConditionId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_receiptsUpToDateId_fkey" FOREIGN KEY ("receiptsUpToDateId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_facilityCleanlinessId_fkey" FOREIGN KEY ("facilityCleanlinessId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_drainTypeId_fkey" FOREIGN KEY ("drainTypeId") REFERENCES "DrainType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_sanitaryFacilityTypeId_fkey" FOREIGN KEY ("sanitaryFacilityTypeId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_separateStaffUrinalId_fkey" FOREIGN KEY ("separateStaffUrinalId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_bathroomAdequacyId_fkey" FOREIGN KEY ("bathroomAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_toiletAdequacyId_fkey" FOREIGN KEY ("toiletAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_urinalAdequacyId_fkey" FOREIGN KEY ("urinalAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_toiletDisabilityFriendlyId_fkey" FOREIGN KEY ("toiletDisabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_urinalDisabilityFriendlyId_fkey" FOREIGN KEY ("urinalDisabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_availToiletFaciltyMgtId_fkey" FOREIGN KEY ("availToiletFaciltyMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_toiletGenderSensivityId_fkey" FOREIGN KEY ("toiletGenderSensivityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_urinalGenderSensivityId_fkey" FOREIGN KEY ("urinalGenderSensivityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_toiletPitPositionId_fkey" FOREIGN KEY ("toiletPitPositionId") REFERENCES "ToiletPitPosition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_premisesToiletTypeId_fkey" FOREIGN KEY ("premisesToiletTypeId") REFERENCES "PremisesToiletType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_premisesEffluentManagementId_fkey" FOREIGN KEY ("premisesEffluentManagementId") REFERENCES "PremisesEffluentManagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_premisesExcretaDisposalMethodId_fkey" FOREIGN KEY ("premisesExcretaDisposalMethodId") REFERENCES "PremisesExcretaDisposalMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWashroomFacility" ADD CONSTRAINT "PremisesWashroomFacility_premisesExcretaContainmentId_fkey" FOREIGN KEY ("premisesExcretaContainmentId") REFERENCES "PremisesExcretaContainment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_toiletTypeId_fkey" FOREIGN KEY ("toiletTypeId") REFERENCES "ToiletType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_effluentManagementId_fkey" FOREIGN KEY ("effluentManagementId") REFERENCES "EffluentManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_excretaDisposalMethodId_fkey" FOREIGN KEY ("excretaDisposalMethodId") REFERENCES "ExcretaDisposalMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_excretaContainmentId_fkey" FOREIGN KEY ("excretaContainmentId") REFERENCES "ExcretaContainment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_solidWasteReceptacleId_fkey" FOREIGN KEY ("solidWasteReceptacleId") REFERENCES "SolidWasteReceptacle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_greyWaterDisposalId_fkey" FOREIGN KEY ("greyWaterDisposalId") REFERENCES "GreyWaterDisposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_shepClubExistenceId_fkey" FOREIGN KEY ("shepClubExistenceId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_pantryFacilityAdequacyId_fkey" FOREIGN KEY ("pantryFacilityAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_approvedHandwashingFacilityAvailabilityId_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_evidenceStagnationId_fkey" FOREIGN KEY ("evidenceStagnationId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_disinfectionId_fkey" FOREIGN KEY ("disinfectionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_disinfestationId_fkey" FOREIGN KEY ("disinfestationId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_safeConditionUncookedId_fkey" FOREIGN KEY ("safeConditionUncookedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_safeConditionCookedId_fkey" FOREIGN KEY ("safeConditionCookedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_publicBathRoomConditionId_fkey" FOREIGN KEY ("publicBathRoomConditionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_pondingEvidenceId_fkey" FOREIGN KEY ("pondingEvidenceId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_animalSpaceConditionId_fkey" FOREIGN KEY ("animalSpaceConditionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_animalsPermitId_fkey" FOREIGN KEY ("animalsPermitId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_vaccinationProofId_fkey" FOREIGN KEY ("vaccinationProofId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_pestSignId_fkey" FOREIGN KEY ("pestSignId") REFERENCES "PestSign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_hygieneSectionId_fkey" FOREIGN KEY ("hygieneSectionId") REFERENCES "HygieneSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_obnoxiousTradeNearbyId_fkey" FOREIGN KEY ("obnoxiousTradeNearbyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_conclusionSectionId_fkey" FOREIGN KEY ("conclusionSectionId") REFERENCES "ConclusionSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_nuisanceId_fkey" FOREIGN KEY ("nuisanceId") REFERENCES "Nuisance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_conclusionSectionId_fkey" FOREIGN KEY ("conclusionSectionId") REFERENCES "ConclusionSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesSubsection" ADD CONSTRAINT "IndustryPremisesSubsection_storageFinishedProductId_fkey" FOREIGN KEY ("storageFinishedProductId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesSubsection" ADD CONSTRAINT "IndustryPremisesSubsection_consumableTypeId_fkey" FOREIGN KEY ("consumableTypeId") REFERENCES "ConsumableType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesSubsection" ADD CONSTRAINT "IndustryPremisesSubsection_nonConsumableTypeId_fkey" FOREIGN KEY ("nonConsumableTypeId") REFERENCES "NonConsumableType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
