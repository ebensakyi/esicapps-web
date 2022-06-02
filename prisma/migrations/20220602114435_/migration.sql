-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userTypeId" INTEGER DEFAULT 2,
    "surname" VARCHAR(255) NOT NULL,
    "otherNames" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "phoneNumber" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "idTypeId" INTEGER NOT NULL,
    "idNumber" VARCHAR(255) NOT NULL,
    "activated" INTEGER DEFAULT 0,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Inspection" (
    "id" SERIAL NOT NULL,
    "inspectionCode" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "inspectionTypeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationSection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "districtId" INTEGER NOT NULL,
    "subDistrictId" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "communityId" INTEGER NOT NULL,
    "community" VARCHAR(255) NOT NULL,
    "ghanaPostGps" VARCHAR(255) NOT NULL,
    "latitude" VARCHAR(255) NOT NULL,
    "longitude" VARCHAR(255) NOT NULL,
    "baselineSectionId" INTEGER,

    CONSTRAINT "LocationSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaselineSection" (
    "id" SERIAL NOT NULL,
    "respondentName" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,
    "premiseTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "BaselineSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilitySection" (
    "id" SERIAL NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "premiseTypeId" INTEGER NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "approvedHandwashingFacilityAvailabilityId" INTEGER NOT NULL,
    "protectiveClothingId" INTEGER NOT NULL,
    "firstAidAvailabilityId" INTEGER NOT NULL,
    "drainsAvailabilityId" INTEGER NOT NULL,
    "toiletAvailabilityId" INTEGER NOT NULL,
    "urinalAvailabilityId" INTEGER NOT NULL,
    "bathRoomAvailabilityId" INTEGER NOT NULL,
    "separateWardId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "yesNoId" INTEGER,

    CONSTRAINT "FacilitySection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalRearing" (
    "id" SERIAL NOT NULL,
    "animalType" VARCHAR(255) NOT NULL,
    "animalsNumber" INTEGER DEFAULT 0,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "conditionId" INTEGER NOT NULL,
    "vaccinationProofId" INTEGER NOT NULL,
    "animalsPermitId" INTEGER NOT NULL,
    "hygieneSectionId" INTEGER NOT NULL,

    CONSTRAINT "AnimalRearing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopulationSection" (
    "id" SERIAL NOT NULL,
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
    "numberStores" INTEGER,
    "numberStalls" INTEGER,
    "numberSheds" INTEGER,
    "numberVehicles" INTEGER,
    "numberHousehold" INTEGER,
    "numberMales" INTEGER,
    "numberFemales" INTEGER,
    "numberRooms" INTEGER,
    "numberBeds" INTEGER,
    "staffRoomAvailability" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "yesNoId" INTEGER NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "PopulationSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LicenceSection" (
    "id" SERIAL NOT NULL,
    "businessLicenceAvailabilityId" INTEGER NOT NULL,
    "medicalCertAvailabilityId" INTEGER NOT NULL,
    "operatingLicenceAvailabilityId" INTEGER NOT NULL,
    "propertyRateAvailabilityId" INTEGER NOT NULL,
    "structurePermitAvailabilityId" INTEGER NOT NULL,
    "habitationCertificateAvailabilityId" INTEGER NOT NULL,
    "fumigationCertificateAvailabilityId" INTEGER NOT NULL,
    "medicalCertificateAvailabilityId" INTEGER NOT NULL,
    "buildingPermitId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "LicenceSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSection" (
    "id" SERIAL NOT NULL,
    "distanceWaterStorageSanitary" INTEGER NOT NULL,
    "waterGeneralRating" INTEGER NOT NULL,
    "waterSourceId" INTEGER NOT NULL,
    "waterConditionId" INTEGER NOT NULL,
    "waterSupplyTypeId" INTEGER NOT NULL,
    "waterStorageTypeId" INTEGER NOT NULL,
    "waterTreatmentTypeId" INTEGER NOT NULL,
    "waterFlowFrequencyId" INTEGER NOT NULL,
    "waterStorageConditionId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "WaterSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanitationSection" (
    "id" SERIAL NOT NULL,
    "wasteCollectorName" VARCHAR(255) NOT NULL,
    "solidWasteReceptacleId" INTEGER NOT NULL,
    "wasteWaterDisposal" INTEGER NOT NULL,
    "greyWaterDisposal" INTEGER NOT NULL,
    "wasteStorageReceptacle" INTEGER NOT NULL,
    "collectionFrequency" INTEGER NOT NULL,
    "wasteSorting" INTEGER NOT NULL,
    "binsPicture" VARCHAR(255) NOT NULL,
    "sanitationGeneralRating" INTEGER NOT NULL,
    "drainsCondition" INTEGER NOT NULL,
    "receiptsUpToDate" INTEGER NOT NULL,
    "wasteCollectorRegistrationId" INTEGER NOT NULL,
    "drainTypeId" INTEGER NOT NULL,
    "labourersOfficeAvailabilityId" INTEGER NOT NULL,
    "storeRoomAvailabilityId" INTEGER NOT NULL,
    "toiletAvailability" INTEGER NOT NULL,
    "urinalAvailability" INTEGER NOT NULL,
    "bathroomAvailability" INTEGER NOT NULL,
    "numberToiletPots" INTEGER NOT NULL,
    "numberUrinePots" INTEGER NOT NULL,
    "toiletTypeId" INTEGER NOT NULL,
    "toiletAdequacyId" INTEGER NOT NULL,
    "urinalAdequacyId" INTEGER NOT NULL,
    "availToiletFaciltyMgtId" INTEGER NOT NULL,
    "toiletGenderSensivityId" INTEGER NOT NULL,
    "urinalGenderSensivityId" INTEGER NOT NULL,
    "approvedHandwashingFacilityAvailabilityId" INTEGER NOT NULL,
    "excretaDisposalMethodId" INTEGER NOT NULL,
    "excretaContainmentId" INTEGER NOT NULL,
    "effluentManagementId" INTEGER NOT NULL,
    "analCleansingMaterialMgtId" INTEGER NOT NULL,
    "toiletDisabilityFriendlyId" INTEGER NOT NULL,
    "urinalDisabilityFriendlyId" INTEGER NOT NULL,
    "effluentManagementReportId" INTEGER NOT NULL,
    "facilityCleanlinessId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitaryFacilityTypeId" INTEGER NOT NULL,
    "pondingEvidenceId" INTEGER NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "SanitationSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HygieneSection" (
    "id" SERIAL NOT NULL,
    "pestSignsId" INTEGER NOT NULL,
    "evidenceStagnationId" INTEGER NOT NULL,
    "disinfestationId" INTEGER NOT NULL,
    "disinfectionId" INTEGER NOT NULL,
    "safeConditionUncookedId" INTEGER NOT NULL,
    "safeConditionCookedId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "goodBadId" INTEGER NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "HygieneSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConclusionSection" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" INTEGER NOT NULL,

    CONSTRAINT "ConclusionSection_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Institution" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "soundProofId" INTEGER NOT NULL,
    "disabilityFriendlyId" INTEGER NOT NULL,
    "multipleExitId" INTEGER NOT NULL,
    "ablutionSlabId" INTEGER NOT NULL,
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
CREATE TABLE "HealthServicesProvided" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthServicesProvided_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryConsumable" (
    "id" SERIAL NOT NULL,
    "productsManufactured" VARCHAR(255) NOT NULL,
    "mainRawMaterial" VARCHAR(255) NOT NULL,
    "sourceRawMaterial" VARCHAR(255) NOT NULL,
    "majorByproduct" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "consumableTypeId" INTEGER NOT NULL,
    "safeUnsafeId" INTEGER NOT NULL,

    CONSTRAINT "IndustryConsumable_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "PremisePicture" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "section" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PremisePicture_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "SubDistrict" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubDistrict_pkey" PRIMARY KEY ("id")
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
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSourceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSupplyType" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSupplyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterStorageType" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterStorageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterTreatmentType" (
    "id" SERIAL NOT NULL,
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
CREATE TABLE "StorageCondition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorageCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SafeUnsafe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SafeUnsafe_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "DrainType" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DrainType_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "EateryType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "facilitySectionId" INTEGER NOT NULL,

    CONSTRAINT "EateryType_pkey" PRIMARY KEY ("id")
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
    "facilityKindId" INTEGER NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "facilityKindId" INTEGER NOT NULL,

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
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sanitationSectionId" INTEGER NOT NULL,
    "scheduledCollectionId" INTEGER NOT NULL,
    "goodBadId" INTEGER NOT NULL,

    CONSTRAINT "CommunalContainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoodBad" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoodBad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilityKind" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacilityKind_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_inspectionTypeId_fkey" FOREIGN KEY ("inspectionTypeId") REFERENCES "InspectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_baselineSectionId_fkey" FOREIGN KEY ("baselineSectionId") REFERENCES "BaselineSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_subDistrictId_fkey" FOREIGN KEY ("subDistrictId") REFERENCES "SubDistrict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationSection" ADD CONSTRAINT "LocationSection_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaselineSection" ADD CONSTRAINT "BaselineSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaselineSection" ADD CONSTRAINT "BaselineSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaselineSection" ADD CONSTRAINT "BaselineSection_respondentDesignationId_fkey" FOREIGN KEY ("respondentDesignationId") REFERENCES "RespondentDesignation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_separateWardId_fkey" FOREIGN KEY ("separateWardId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_protectiveClothingId_fkey" FOREIGN KEY ("protectiveClothingId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_yesNoId_fkey" FOREIGN KEY ("yesNoId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilitySection" ADD CONSTRAINT "FacilitySection_respondentDesignationId_fkey" FOREIGN KEY ("respondentDesignationId") REFERENCES "RespondentDesignation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalRearing" ADD CONSTRAINT "AnimalRearing_hygieneSectionId_fkey" FOREIGN KEY ("hygieneSectionId") REFERENCES "HygieneSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalRearing" ADD CONSTRAINT "AnimalRearing_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalRearing" ADD CONSTRAINT "AnimalRearing_animalsPermitId_fkey" FOREIGN KEY ("animalsPermitId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalRearing" ADD CONSTRAINT "AnimalRearing_vaccinationProofId_fkey" FOREIGN KEY ("vaccinationProofId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSection" ADD CONSTRAINT "PopulationSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PopulationSection" ADD CONSTRAINT "PopulationSection_yesNoId_fkey" FOREIGN KEY ("yesNoId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_businessLicenceAvailabilityId_fkey" FOREIGN KEY ("businessLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_medicalCertAvailabilityId_fkey" FOREIGN KEY ("medicalCertAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_operatingLicenceAvailabilityId_fkey" FOREIGN KEY ("operatingLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_propertyRateAvailabilityId_fkey" FOREIGN KEY ("propertyRateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_structurePermitAvailabilityId_fkey" FOREIGN KEY ("structurePermitAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_habitationCertificateAvailabilityId_fkey" FOREIGN KEY ("habitationCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_fumigationCertificateAvailabilityId_fkey" FOREIGN KEY ("fumigationCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenceSection" ADD CONSTRAINT "LicenceSection_buildingPermitId_fkey" FOREIGN KEY ("buildingPermitId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterFlowFrequencyId_fkey" FOREIGN KEY ("waterFlowFrequencyId") REFERENCES "Frequency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterSourceId_fkey" FOREIGN KEY ("waterSourceId") REFERENCES "WaterSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterConditionId_fkey" FOREIGN KEY ("waterConditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterSupplyTypeId_fkey" FOREIGN KEY ("waterSupplyTypeId") REFERENCES "WaterSupplyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterStorageTypeId_fkey" FOREIGN KEY ("waterStorageTypeId") REFERENCES "WaterStorageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterTreatmentTypeId_fkey" FOREIGN KEY ("waterTreatmentTypeId") REFERENCES "WaterTreatmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterStorageConditionId_fkey" FOREIGN KEY ("waterStorageConditionId") REFERENCES "SafeUnsafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_toiletTypeId_fkey" FOREIGN KEY ("toiletTypeId") REFERENCES "ToiletType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_analCleansingMaterialMgtId_fkey" FOREIGN KEY ("analCleansingMaterialMgtId") REFERENCES "AnalCleansingMaterialMgt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_effluentManagementId_fkey" FOREIGN KEY ("effluentManagementId") REFERENCES "EffluentManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_excretaContainmentId_fkey" FOREIGN KEY ("excretaContainmentId") REFERENCES "ExcretaContainment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_excretaDisposalMethodId_fkey" FOREIGN KEY ("excretaDisposalMethodId") REFERENCES "ExcretaDisposalMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_solidWasteReceptacleId_fkey" FOREIGN KEY ("solidWasteReceptacleId") REFERENCES "SolidWasteReceptacle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_wasteCollectorRegistrationId_fkey" FOREIGN KEY ("wasteCollectorRegistrationId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_pondingEvidenceId_fkey" FOREIGN KEY ("pondingEvidenceId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_labourersOfficeAvailabilityId_fkey" FOREIGN KEY ("labourersOfficeAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_storeRoomAvailabilityId_fkey" FOREIGN KEY ("storeRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_effluentManagementReportId_fkey" FOREIGN KEY ("effluentManagementReportId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_toiletAdequacyId_fkey" FOREIGN KEY ("toiletAdequacyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_urinalAdequacyId_fkey" FOREIGN KEY ("urinalAdequacyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_availToiletFaciltyMgtId_fkey" FOREIGN KEY ("availToiletFaciltyMgtId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_toiletGenderSensivityId_fkey" FOREIGN KEY ("toiletGenderSensivityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_urinalGenderSensivityId_fkey" FOREIGN KEY ("urinalGenderSensivityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_toiletDisabilityFriendlyId_fkey" FOREIGN KEY ("toiletDisabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_urinalDisabilityFriendlyId_fkey" FOREIGN KEY ("urinalDisabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_approvedHandwashingFacilityAvailabilityI_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_facilityCleanlinessId_fkey" FOREIGN KEY ("facilityCleanlinessId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_drainTypeId_fkey" FOREIGN KEY ("drainTypeId") REFERENCES "DrainType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationSection" ADD CONSTRAINT "SanitationSection_sanitaryFacilityTypeId_fkey" FOREIGN KEY ("sanitaryFacilityTypeId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_pestSignsId_fkey" FOREIGN KEY ("pestSignsId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_evidenceStagnationId_fkey" FOREIGN KEY ("evidenceStagnationId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_disinfectionId_fkey" FOREIGN KEY ("disinfectionId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_disinfestationId_fkey" FOREIGN KEY ("disinfestationId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_safeConditionUncookedId_fkey" FOREIGN KEY ("safeConditionUncookedId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_safeConditionCookedId_fkey" FOREIGN KEY ("safeConditionCookedId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HygieneSection" ADD CONSTRAINT "HygieneSection_goodBadId_fkey" FOREIGN KEY ("goodBadId") REFERENCES "GoodBad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_institutionTypeId_fkey" FOREIGN KEY ("institutionTypeId") REFERENCES "InstitutionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_soundProofId_fkey" FOREIGN KEY ("soundProofId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_disabilityFriendlyId_fkey" FOREIGN KEY ("disabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_multipleExitId_fkey" FOREIGN KEY ("multipleExitId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_ablutionSlabId_fkey" FOREIGN KEY ("ablutionSlabId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryConsumable" ADD CONSTRAINT "IndustryConsumable_consumableTypeId_fkey" FOREIGN KEY ("consumableTypeId") REFERENCES "ConsumableType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryConsumable" ADD CONSTRAINT "IndustryConsumable_safeUnsafeId_fkey" FOREIGN KEY ("safeUnsafeId") REFERENCES "SafeUnsafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryType" ADD CONSTRAINT "EateryType_facilitySectionId_fkey" FOREIGN KEY ("facilitySectionId") REFERENCES "FacilitySection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityServicesProvided" ADD CONSTRAINT "HospitalityServicesProvided_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facility" ADD CONSTRAINT "Facility_facilityKindId_fkey" FOREIGN KEY ("facilityKindId") REFERENCES "FacilityKind"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_facilityKindId_fkey" FOREIGN KEY ("facilityKindId") REFERENCES "FacilityKind"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlaughterHouse" ADD CONSTRAINT "SlaughterHouse_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Cemetery" ADD CONSTRAINT "Cemetery_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_wasteSortingId_fkey" FOREIGN KEY ("wasteSortingId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_leachateManagementId_fkey" FOREIGN KEY ("leachateManagementId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferWasteStation" ADD CONSTRAINT "TransferWasteStation_hazardousManagementId_fkey" FOREIGN KEY ("hazardousManagementId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunalContainer" ADD CONSTRAINT "CommunalContainer_sanitationSectionId_fkey" FOREIGN KEY ("sanitationSectionId") REFERENCES "SanitationSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunalContainer" ADD CONSTRAINT "CommunalContainer_scheduledCollectionId_fkey" FOREIGN KEY ("scheduledCollectionId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunalContainer" ADD CONSTRAINT "CommunalContainer_goodBadId_fkey" FOREIGN KEY ("goodBadId") REFERENCES "GoodBad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
