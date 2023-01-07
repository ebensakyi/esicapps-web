-- CreateTable
CREATE TABLE "Inspection" (
    "id" VARCHAR(255) NOT NULL,
    "prevInspectionId" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "inspectionTypeId" INTEGER NOT NULL,
    "isPublished" INTEGER NOT NULL DEFAULT 0,
    "publishedById" INTEGER,
    "followUpDate" VARCHAR(255) NOT NULL,
    "doFollowUp" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "PasswordResetRequest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tempPassword" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fcmId" VARCHAR(255),
    "userTypeId" INTEGER NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "otherNames" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL,
    "designation" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "regionId" INTEGER,
    "districtId" INTEGER,
    "electoralAreaId" INTEGER,
    "loginTimes" INTEGER DEFAULT 0,
    "passwordChanged" INTEGER DEFAULT 0,
    "activated" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLevel" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messaging" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" VARCHAR(2550) NOT NULL,
    "recipient" INTEGER,
    "messageType" INTEGER,
    "sendingType" INTEGER,
    "sender" INTEGER NOT NULL,
    "regionRecipient" INTEGER,
    "districtRecipient" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Messaging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SendingType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SendingType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userLevelId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageAccess" (
    "id" SERIAL NOT NULL,
    "pageId" INTEGER NOT NULL,
    "userTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageActionAccess" (
    "id" SERIAL NOT NULL,
    "userTypeId" INTEGER NOT NULL,
    "pageActionId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageActionAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "path" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageAction" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageAction_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "AnimalType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnimalType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BadDrainCondition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BadDrainCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CemeteryWorkers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CemeteryWorkers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CleaningFrequency" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CleaningFrequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "districtId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContainerVolume" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContainerVolume_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "DesiltingFrequency" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesiltingFrequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisinfectionFrequency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DisinfectionFrequency_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "DrinkingWaterSourceType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DrinkingWaterSourceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EaseYourselfWhere" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EaseYourselfWhere_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "GreyWaterDisposal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GreyWaterDisposal_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Nuisance" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nuisance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionFormNuisances" (
    "id" SERIAL NOT NULL,
    "nuisanceId" INTEGER NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InspectionFormNuisances_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "PestSign" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PestSign_pkey" PRIMARY KEY ("id")
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
    "abbrv" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectoralArea" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "districtId" INTEGER NOT NULL,

    CONSTRAINT "ElectoralArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespondentDesignation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RespondentDesignation_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "SanitaryInsanitary" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SanitaryInsanitary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SewerSystem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SewerSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StructureType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StructureType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subtype" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Subtype_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "ToiletHouseholdNumber" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToiletHouseholdNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToiletDischarge" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToiletDischarge_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "UnsafeToiletCondition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnsafeToiletCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnsafeWaterStorage" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnsafeWaterStorage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnservicedWasteDisposal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnservicedWasteDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WasteCollectionFrequency" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WasteCollectionFrequency_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "SolidWasteReceptacle" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolidWasteReceptacle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WasteWaterContainment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WasteWaterContainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterFlowFrequency" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterFlowFrequency_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "WaterStorageType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterStorageType_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "WaterTreatmentType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterTreatmentType_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "YesNo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YesNo_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "typeId" INTEGER,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasicInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "zoneId" INTEGER,
    "communityId" INTEGER,
    "community" VARCHAR(255),
    "ghanaPostGps" VARCHAR(255),
    "latitude" DECIMAL(11,8) NOT NULL,
    "longitude" DECIMAL(11,8) NOT NULL,
    "accuracy" VARCHAR(255) NOT NULL,
    "geom" JSONB,
    "respondentName" VARCHAR(255) NOT NULL,
    "respondentPhoneNumber" VARCHAR(255) NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "imagePath" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BasicInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResidentialPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "drainsAvailabilityId" INTEGER NOT NULL,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "animalAvailabilityId" INTEGER,
    "householdNumber" VARCHAR(255) NOT NULL,
    "maleOccupantNumber" INTEGER,
    "femaleOccupantNumber" INTEGER,
    "otherAnimal" VARCHAR(255),
    "animalNumber" INTEGER,
    "animalSpaceConditionId" INTEGER,
    "vaccinationProofId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ResidentialPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EateryPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "physicalStructureTypeId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "eateryPremisesTypeId" INTEGER,
    "eateryPremisesSubTypeId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "designatedSmokingAreaId" INTEGER,
    "kitchenAvailabilityId" INTEGER,
    "protectiveClothingId" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberFoodHandlingMedical" INTEGER,
    "uncookedFoodStorageCondtionSafeId" INTEGER,
    "cookedFoodStorageCondtionSafeId" INTEGER,
    "disinfestationId" INTEGER,
    "disinfestationFrequencyId" INTEGER,
    "disinfectionId" INTEGER,
    "disinfectionFrequencyId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "EateryPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "healthPremisesTypeId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "ownershipTypeId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "ehoAvailabilityId" INTEGER,
    "numberWards" INTEGER,
    "separateWardId" INTEGER,
    "numberBeds" INTEGER,
    "placentaPitAvailabilityId" INTEGER,
    "incineratorAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "HealthPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HospitalityPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "physicalStructureTypeId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "hospitalityPremisesTypeId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "cookedFoodStorageCondtionSafeId" INTEGER,
    "uncookedFoodStorageCondtionSafeId" INTEGER,
    "designatedSmokingAreaId" INTEGER,
    "protectiveClothingUsedId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "kitchenAvailabilityId" INTEGER,
    "protectiveClothingId" INTEGER,
    "numberMaleWorkers" INTEGER,
    "numberFemaleWorkers" INTEGER,
    "numberFoodHandlingMedical" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberRooms" INTEGER,
    "facilityCapacity" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "HospitalityPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanitaryPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "physicalStructureTypeId" INTEGER,
    "sanitaryPremisesTypeId" INTEGER,
    "sanitaryPremisesSubtypeId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "ownershipTypeId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "staffChangingRoomId" INTEGER,
    "sanitaryFacilityMgtId" INTEGER,
    "disinfectionFrequencyId" INTEGER,
    "disinfestationQuarterlyId" INTEGER,
    "protectiveClothingId" INTEGER,
    "slaughterRoomAvailabilityId" INTEGER,
    "condemnationRoomAvailabilityId" INTEGER,
    "cloakRoomAvailabilityId" INTEGER,
    "comfortRoomAvailabilityId" INTEGER,
    "wheelbathAvailabilityId" INTEGER,
    "footbathAvailabilityId" INTEGER,
    "wasteSortingId" INTEGER,
    "leachateMgtId" INTEGER,
    "safeHazardousWasteMgtId" INTEGER,
    "sextonManagementId" INTEGER,
    "sextonOfficeId" INTEGER,
    "properLayoutId" INTEGER,
    "fencedId" INTEGER,
    "cremationPracticedId" INTEGER,
    "workersOfficeAvailabilityId" INTEGER,
    "transferStationCapacity" INTEGER,
    "numberContainer" INTEGER,
    "containerAttendantName" INTEGER,
    "containerAttendantPhoneNumber" INTEGER,
    "containerServiceProviderName" INTEGER,
    "scheduleLiftingId" INTEGER,
    "sanitaryContainerId" INTEGER,
    "numberWorkers" INTEGER,
    "cremationPlatformId" INTEGER,
    "sanitaryAshesDisposalId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SanitaryPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "marketPremisesTypeId" INTEGER,
    "physicalStructureTypeId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "ownershipTypeId" INTEGER,
    "numberStores" INTEGER,
    "numberSheds" INTEGER,
    "numberStalls" INTEGER,
    "numberTraders" INTEGER,
    "numberMeatShops" INTEGER,
    "numberColdStores" INTEGER,
    "numberMills" INTEGER,
    "numberChopbars" INTEGER,
    "generalSanitaryConditionId" INTEGER,
    "derattingFrequencyId" INTEGER,
    "cleanupFrequencyId" INTEGER,
    "numberLorrySheds" INTEGER,
    "numberVehicles" INTEGER,
    "numberDrivers" INTEGER,
    "numberFoodVendors" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MarketPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstitutionPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "institutionPremisesTypeId" INTEGER,
    "institutionPremisesSubtypeId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "numberTeachingStaff" INTEGER,
    "numberNonTeachingStaff" INTEGER,
    "numberMaleStudents" INTEGER,
    "numberFemaleStudents" INTEGER,
    "kitchenAvailabilityId" INTEGER,
    "uncookedFoodStorageCondtionSafeId" INTEGER,
    "cookedFoodStorageCondtionSafeId" INTEGER,
    "kitchenConditionId" INTEGER,
    "protectiveClothingId" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberFoodHandlingMedicalId" INTEGER,
    "numberClassRoomsId" INTEGER,
    "shepClubExistenceId" INTEGER,
    "numberOtherRooms" INTEGER,
    "animalSpaceConditionId" INTEGER,
    "animalSpaceAvailabilityId" INTEGER,
    "shrinePremisesConditionId" INTEGER,
    "slaughterRoomAvailabilityId" INTEGER,
    "slaughterAreaConditionId" INTEGER,
    "soundProofId" INTEGER,
    "ablutionSlabId" INTEGER,
    "ablutionSlabConditionId" INTEGER,
    "facilityCapacity" INTEGER,
    "multipleExitId" INTEGER,
    "disabilityFriendlyId" INTEGER,
    "emergencyExitId" INTEGER,
    "emergencyAssemblyPointId" INTEGER,
    "overcrowdingId" INTEGER,
    "adequateLighteningId" INTEGER,
    "adequateVentilationId" INTEGER,
    "numberCompoundFoodVendor" INTEGER,
    "numberFoodVendorMedicallyCertified" INTEGER,
    "fireExtinguisherId" INTEGER,
    "numberFireExtinguisher" INTEGER,
    "buildingStructureConditionId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "InstitutionPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "industryPremisesTypeId" INTEGER,
    "industryPremisesSubtypeId" INTEGER,
    "physicalStructureTypeId" INTEGER,
    "otherIndustryFacility" INTEGER,
    "protectiveClothingId" INTEGER,
    "productionRoomConditionId" INTEGER,
    "flyScreenNetAvailabilityId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "medicalCertificateAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathRoomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "staffChangingRoomId" INTEGER,
    "manufacturedServices" VARCHAR(255) NOT NULL,
    "majorByProducts" VARCHAR(255) NOT NULL,
    "numberWorkers" INTEGER,
    "byProductsStorageAreaCondId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "IndustryPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LicencePermitSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "buildingPermitAvailabilityId" INTEGER,
    "businessLicenceAvailabilityId" INTEGER,
    "medicalCertAvailabilityId" INTEGER,
    "operatingLicenceAvailabilityId" INTEGER,
    "propertyRateAvailabilityId" INTEGER,
    "structurePermitAvailabilityId" INTEGER,
    "habitationCertificateAvailabilityId" INTEGER,
    "fumigationCertificateAvailabilityId" INTEGER,
    "medicalCertificateAvailabilityId" INTEGER,
    "gtaOperatingLicenceAvailabilityId" INTEGER,
    "animalsPermitAvailabilityId" INTEGER,
    "suitabilityCertificateAvailabilityId" INTEGER,
    "waterAnalysisReportId" INTEGER,
    "regGeneralCertAvailabilityId" INTEGER,
    "pharmacyCertAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LicencePermitSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "waterSourceConditionId" INTEGER,
    "waterStorageConditionId" INTEGER,
    "waterFlowFrequencyId" INTEGER,
    "safeDistanceWaterStorageSanitaryId" INTEGER,
    "imagePath" VARCHAR(255),
    "rating" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiquidWasteSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "numberToiletSeats" INTEGER,
    "numberUrinalSeats" INTEGER,
    "toiletAdequacyId" INTEGER,
    "urinalAdequacyId" INTEGER,
    "bathroomAdequacyId" INTEGER,
    "separateStaffUrinalId" INTEGER,
    "availToiletFaciltyMgtId" INTEGER,
    "toiletGenderSensivityId" INTEGER,
    "urinalGenderSensivityId" INTEGER,
    "toiletPitPositionId" INTEGER,
    "toiletDisabilityFriendlyId" INTEGER,
    "urinalDisabilityFriendlyId" INTEGER,
    "stagnationEvidenceId" INTEGER,
    "drainsConditionId" INTEGER,
    "analCleansingMaterialMgtId" INTEGER,
    "effluentManagementReportId" INTEGER,
    "publicBathRoomConditionId" INTEGER,
    "areaSeweredId" INTEGER,
    "facilityConnectedSewerId" INTEGER,
    "numberUrinalCubicle" INTEGER,
    "urinalCubicleConditionId" INTEGER,
    "toiletConditionId" INTEGER,
    "toiletDischargeId" INTEGER,
    "containmentEmptiedId" INTEGER,
    "sewerSystemId" INTEGER,
    "wasteWaterContainmentId" INTEGER,
    "easeYourselfWhereId" INTEGER,
    "desiltingFrequencyId" INTEGER,
    "rating" INTEGER,
    "imagePath1" VARCHAR(255),
    "imagePath2" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "drainTypeId" INTEGER,
    "effluentManagementId" INTEGER,
    "excretaContainmentId" INTEGER,
    "excretaDisposalMethodId" INTEGER,
    "toiletHouseholdNumberId" INTEGER NOT NULL,

    CONSTRAINT "LiquidWasteSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolidWasteSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "wasteServiceProviderRegistrationId" INTEGER,
    "wasteCollectorName" TEXT,
    "wasteSortingAvailabilityId" INTEGER,
    "wasteCollectionFrequencyId" INTEGER,
    "approvedWasteStorageReceptacleId" INTEGER,
    "adequateWasteStorageReceptacleId" INTEGER,
    "wasteCollectionTypeId" INTEGER,
    "unservicedWasteDisposalId" INTEGER,
    "wastePaymentEvidenceId" INTEGER,
    "wasteContainerVolumeId" INTEGER,
    "wasteProviderAccredittedId" INTEGER,
    "containerNumber" INTEGER,
    "rating" INTEGER,
    "imagePath" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolidWasteSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConclusionSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "obnoxiousTradeExistId" INTEGER,
    "officerComment" VARCHAR(255) NOT NULL,
    "obnoxiousTrade" VARCHAR(255) NOT NULL,
    "generalSanitaryConditionId" INTEGER,
    "isNuisanceObservedId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConclusionSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterSources" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterSourceId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterSources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterTreatmentType" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterTreatmentTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterTreatmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterSupply" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterSupplyTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterSupply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterStorage" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterStorageTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterStorage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesDrinkingWaterSources" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "drinkingWaterSourceId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesDrinkingWaterSources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesToiletType" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "toiletTypeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesToiletType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesEffluentManagement" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "effluentManagementId" INTEGER NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesEffluentManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesExcretaDisposalMethod" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excretaDisposalMethodId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesExcretaDisposalMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesExcretaContainment" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excretaContainmentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesExcretaContainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesGreyWaterDisposal" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "greyWaterDisposalId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesGreyWaterDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWasteReceptacle" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "solidWasteReceptacleId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWasteReceptacle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWasteCollection" (
    "id" VARCHAR(255) NOT NULL,
    "wasteCollectionTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWasteCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesPestSigns" (
    "id" VARCHAR(255) NOT NULL,
    "pestSignId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesPestSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesAnimal" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "animalTypeId" INTEGER NOT NULL,
    "residentialPremisesInfoSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesAnimal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesDrainType" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "drainTypeId" INTEGER NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesDrainType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesHazardousWasteDisposal" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "hazardousWasteDisposalMethodId" INTEGER NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesHazardousWasteDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesActionTaken" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "actionId" INTEGER NOT NULL,
    "conclusionSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesActionTaken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesNuisanceDetected" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "conclusionSectionId" VARCHAR(255) NOT NULL,
    "nuisanceId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

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
    "inspectionId" VARCHAR(255) NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanitationReport" (
    "id" SERIAL NOT NULL,
    "fcmId" VARCHAR(255),
    "fullName" VARCHAR(255),
    "phoneNumber" VARCHAR(255),
    "email" VARCHAR(255),
    "image" VARCHAR(255) NOT NULL,
    "districtId" INTEGER,
    "reportTypeId" INTEGER,
    "description" VARCHAR(255),
    "latitude" DECIMAL(11,8),
    "longitude" DECIMAL(11,8),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SanitationReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportType" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReportType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PageToPageAction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Inspection_prevInspectionId_key" ON "Inspection"("prevInspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BasicInfoSection_inspectionId_key" ON "BasicInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "ResidentialPremisesInfoSection_inspectionId_key" ON "ResidentialPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "EateryPremisesInfoSection_inspectionId_key" ON "EateryPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "HealthPremisesInfoSection_inspectionId_key" ON "HealthPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "HospitalityPremisesInfoSection_inspectionId_key" ON "HospitalityPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "SanitaryPremisesInfoSection_inspectionId_key" ON "SanitaryPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "MarketPremisesInfoSection_inspectionId_key" ON "MarketPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "InstitutionPremisesInfoSection_inspectionId_key" ON "InstitutionPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryPremisesInfoSection_inspectionId_key" ON "IndustryPremisesInfoSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "LicencePermitSection_inspectionId_key" ON "LicencePermitSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "WaterSection_inspectionId_key" ON "WaterSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "LiquidWasteSection_inspectionId_key" ON "LiquidWasteSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "SolidWasteSection_inspectionId_key" ON "SolidWasteSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "ConclusionSection_inspectionId_key" ON "ConclusionSection"("inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "_PageToPageAction_AB_unique" ON "_PageToPageAction"("A", "B");

-- CreateIndex
CREATE INDEX "_PageToPageAction_B_index" ON "_PageToPageAction"("B");

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_inspectionTypeId_fkey" FOREIGN KEY ("inspectionTypeId") REFERENCES "InspectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_publishedById_fkey" FOREIGN KEY ("publishedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_prevInspectionId_fkey" FOREIGN KEY ("prevInspectionId") REFERENCES "Inspection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetRequest" ADD CONSTRAINT "PasswordResetRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_electoralAreaId_fkey" FOREIGN KEY ("electoralAreaId") REFERENCES "ElectoralArea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_districtRecipient_fkey" FOREIGN KEY ("districtRecipient") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_messageType_fkey" FOREIGN KEY ("messageType") REFERENCES "MessageType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_recipient_fkey" FOREIGN KEY ("recipient") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_regionRecipient_fkey" FOREIGN KEY ("regionRecipient") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_sender_fkey" FOREIGN KEY ("sender") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_sendingType_fkey" FOREIGN KEY ("sendingType") REFERENCES "SendingType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserType" ADD CONSTRAINT "UserType_userLevelId_fkey" FOREIGN KEY ("userLevelId") REFERENCES "UserLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageAccess" ADD CONSTRAINT "PageAccess_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageAccess" ADD CONSTRAINT "PageAccess_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageActionAccess" ADD CONSTRAINT "PageActionAccess_pageActionId_fkey" FOREIGN KEY ("pageActionId") REFERENCES "PageAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageActionAccess" ADD CONSTRAINT "PageActionAccess_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionFormNuisances" ADD CONSTRAINT "InspectionFormNuisances_nuisanceId_fkey" FOREIGN KEY ("nuisanceId") REFERENCES "Nuisance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectoralArea" ADD CONSTRAINT "ElectoralArea_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtype" ADD CONSTRAINT "Subtype_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtype" ADD CONSTRAINT "Subtype_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasicInfoSection" ADD CONSTRAINT "BasicInfoSection_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasicInfoSection" ADD CONSTRAINT "BasicInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasicInfoSection" ADD CONSTRAINT "BasicInfoSection_respondentDesignationId_fkey" FOREIGN KEY ("respondentDesignationId") REFERENCES "RespondentDesignation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasicInfoSection" ADD CONSTRAINT "BasicInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_animalAvailabilityId_fkey" FOREIGN KEY ("animalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_animalSpaceConditionId_fkey" FOREIGN KEY ("animalSpaceConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_approvedHandwashingFacility_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_vaccinationProofId_fkey" FOREIGN KEY ("vaccinationProofId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_approvedHandwashingFacilityAvail_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_eateryPremisesSubTypeId_fkey" FOREIGN KEY ("eateryPremisesSubTypeId") REFERENCES "Subtype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_eateryPremisesTypeId_fkey" FOREIGN KEY ("eateryPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_approvedHandwashingFacilityAvail_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_ehoAvailabilityId_fkey" FOREIGN KEY ("ehoAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_healthPremisesTypeId_fkey" FOREIGN KEY ("healthPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_ownershipTypeId_fkey" FOREIGN KEY ("ownershipTypeId") REFERENCES "OwnershipType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_separateWardId_fkey" FOREIGN KEY ("separateWardId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_approvedHandwashingFacility_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_cookedFoodStorageCondtionSa_fkey" FOREIGN KEY ("cookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_hospitalityPremisesTypeId_fkey" FOREIGN KEY ("hospitalityPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_physicalStructureTypeId_fkey" FOREIGN KEY ("physicalStructureTypeId") REFERENCES "StructureType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_uncookedFoodStorageCondtion_fkey" FOREIGN KEY ("uncookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_approvedHandwashingFacilityAva_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_cloakRoomAvailabilityId_fkey" FOREIGN KEY ("cloakRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_comfortRoomAvailabilityId_fkey" FOREIGN KEY ("comfortRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_condemnationRoomAvailabilityId_fkey" FOREIGN KEY ("condemnationRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_cremationPlatformId_fkey" FOREIGN KEY ("cremationPlatformId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_cremationPracticedId_fkey" FOREIGN KEY ("cremationPracticedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_disinfectionFrequencyId_fkey" FOREIGN KEY ("disinfectionFrequencyId") REFERENCES "DisinfectionFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_disinfestationQuarterlyId_fkey" FOREIGN KEY ("disinfestationQuarterlyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_fencedId_fkey" FOREIGN KEY ("fencedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_footbathAvailabilityId_fkey" FOREIGN KEY ("footbathAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_leachateMgtId_fkey" FOREIGN KEY ("leachateMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_ownershipTypeId_fkey" FOREIGN KEY ("ownershipTypeId") REFERENCES "OwnershipType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_physicalStructureTypeId_fkey" FOREIGN KEY ("physicalStructureTypeId") REFERENCES "StructureType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_properLayoutId_fkey" FOREIGN KEY ("properLayoutId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_protectiveClothingId_fkey" FOREIGN KEY ("protectiveClothingId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_safeHazardousWasteMgtId_fkey" FOREIGN KEY ("safeHazardousWasteMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryAshesDisposalId_fkey" FOREIGN KEY ("sanitaryAshesDisposalId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryContainerId_fkey" FOREIGN KEY ("sanitaryContainerId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryFacilityMgtId_fkey" FOREIGN KEY ("sanitaryFacilityMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryPremisesTypeId_fkey" FOREIGN KEY ("sanitaryPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_scheduleLiftingId_fkey" FOREIGN KEY ("scheduleLiftingId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sextonManagementId_fkey" FOREIGN KEY ("sextonManagementId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sextonOfficeId_fkey" FOREIGN KEY ("sextonOfficeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_slaughterRoomAvailabilityId_fkey" FOREIGN KEY ("slaughterRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_staffChangingRoomId_fkey" FOREIGN KEY ("staffChangingRoomId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_storeRoomAvailabilityId_fkey" FOREIGN KEY ("storeRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_wasteSortingId_fkey" FOREIGN KEY ("wasteSortingId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_wheelbathAvailabilityId_fkey" FOREIGN KEY ("wheelbathAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_workersOfficeAvailabilityId_fkey" FOREIGN KEY ("workersOfficeAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_approvedHandwashingFacilityAvail_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_approvedHandwashingFacility_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_approvedHandwashingFacilityAva_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_bathRoomAvailabilityId_fkey" FOREIGN KEY ("bathRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_animalsPermitAvailabilityId_fkey" FOREIGN KEY ("animalsPermitAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_buildingPermitAvailabilityId_fkey" FOREIGN KEY ("buildingPermitAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_businessLicenceAvailabilityId_fkey" FOREIGN KEY ("businessLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_fumigationCertificateAvailabilityId_fkey" FOREIGN KEY ("fumigationCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_habitationCertificateAvailabilityId_fkey" FOREIGN KEY ("habitationCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_medicalCertAvailabilityId_fkey" FOREIGN KEY ("medicalCertAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_operatingLicenceAvailabilityId_fkey" FOREIGN KEY ("operatingLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_propertyRateAvailabilityId_fkey" FOREIGN KEY ("propertyRateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_structurePermitAvailabilityId_fkey" FOREIGN KEY ("structurePermitAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_gtaOperatingLicenceAvailabilityId_fkey" FOREIGN KEY ("gtaOperatingLicenceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_waterAnalysisReportId_fkey" FOREIGN KEY ("waterAnalysisReportId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_regGeneralCertAvailabilityId_fkey" FOREIGN KEY ("regGeneralCertAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_suitabilityCertificateAvailabilityId_fkey" FOREIGN KEY ("suitabilityCertificateAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_pharmacyCertAvailabilityId_fkey" FOREIGN KEY ("pharmacyCertAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicencePermitSection" ADD CONSTRAINT "LicencePermitSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_safeDistanceWaterStorageSanitaryId_fkey" FOREIGN KEY ("safeDistanceWaterStorageSanitaryId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterFlowFrequencyId_fkey" FOREIGN KEY ("waterFlowFrequencyId") REFERENCES "WaterFlowFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterSourceConditionId_fkey" FOREIGN KEY ("waterSourceConditionId") REFERENCES "SafeUnsafe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterSection" ADD CONSTRAINT "WaterSection_waterStorageConditionId_fkey" FOREIGN KEY ("waterStorageConditionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_analCleansingMaterialMgtId_fkey" FOREIGN KEY ("analCleansingMaterialMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_areaSeweredId_fkey" FOREIGN KEY ("areaSeweredId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_availToiletFaciltyMgtId_fkey" FOREIGN KEY ("availToiletFaciltyMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_bathroomAdequacyId_fkey" FOREIGN KEY ("bathroomAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_containmentEmptiedId_fkey" FOREIGN KEY ("containmentEmptiedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_desiltingFrequencyId_fkey" FOREIGN KEY ("desiltingFrequencyId") REFERENCES "DesiltingFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_drainTypeId_fkey" FOREIGN KEY ("drainTypeId") REFERENCES "DrainType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_drainsConditionId_fkey" FOREIGN KEY ("drainsConditionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_easeYourselfWhereId_fkey" FOREIGN KEY ("easeYourselfWhereId") REFERENCES "EaseYourselfWhere"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_effluentManagementId_fkey" FOREIGN KEY ("effluentManagementId") REFERENCES "EffluentManagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_effluentManagementReportId_fkey" FOREIGN KEY ("effluentManagementReportId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_excretaContainmentId_fkey" FOREIGN KEY ("excretaContainmentId") REFERENCES "ExcretaContainment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_excretaDisposalMethodId_fkey" FOREIGN KEY ("excretaDisposalMethodId") REFERENCES "ExcretaDisposalMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_facilityConnectedSewerId_fkey" FOREIGN KEY ("facilityConnectedSewerId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_publicBathRoomConditionId_fkey" FOREIGN KEY ("publicBathRoomConditionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_separateStaffUrinalId_fkey" FOREIGN KEY ("separateStaffUrinalId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_sewerSystemId_fkey" FOREIGN KEY ("sewerSystemId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_stagnationEvidenceId_fkey" FOREIGN KEY ("stagnationEvidenceId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletAdequacyId_fkey" FOREIGN KEY ("toiletAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletConditionId_fkey" FOREIGN KEY ("toiletConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletDisabilityFriendlyId_fkey" FOREIGN KEY ("toiletDisabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletDischargeId_fkey" FOREIGN KEY ("toiletDischargeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletGenderSensivityId_fkey" FOREIGN KEY ("toiletGenderSensivityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletPitPositionId_fkey" FOREIGN KEY ("toiletPitPositionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_urinalAdequacyId_fkey" FOREIGN KEY ("urinalAdequacyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_urinalCubicleConditionId_fkey" FOREIGN KEY ("urinalCubicleConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_urinalDisabilityFriendlyId_fkey" FOREIGN KEY ("urinalDisabilityFriendlyId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_urinalGenderSensivityId_fkey" FOREIGN KEY ("urinalGenderSensivityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_wasteWaterContainmentId_fkey" FOREIGN KEY ("wasteWaterContainmentId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletHouseholdNumberId_fkey" FOREIGN KEY ("toiletHouseholdNumberId") REFERENCES "ToiletHouseholdNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_adequateWasteStorageReceptacleId_fkey" FOREIGN KEY ("adequateWasteStorageReceptacleId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_approvedWasteStorageReceptacleId_fkey" FOREIGN KEY ("approvedWasteStorageReceptacleId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteCollectionFrequencyId_fkey" FOREIGN KEY ("wasteCollectionFrequencyId") REFERENCES "WasteCollectionFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wastePaymentEvidenceId_fkey" FOREIGN KEY ("wastePaymentEvidenceId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteServiceProviderRegistrationId_fkey" FOREIGN KEY ("wasteServiceProviderRegistrationId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteSortingAvailabilityId_fkey" FOREIGN KEY ("wasteSortingAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteProviderAccredittedId_fkey" FOREIGN KEY ("wasteProviderAccredittedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteCollectionTypeId_fkey" FOREIGN KEY ("wasteCollectionTypeId") REFERENCES "WasteCollectionType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_unservicedWasteDisposalId_fkey" FOREIGN KEY ("unservicedWasteDisposalId") REFERENCES "UnservicedWasteDisposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteContainerVolumeId_fkey" FOREIGN KEY ("wasteContainerVolumeId") REFERENCES "ContainerVolume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_obnoxiousTradeExistId_fkey" FOREIGN KEY ("obnoxiousTradeExistId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_generalSanitaryConditionId_fkey" FOREIGN KEY ("generalSanitaryConditionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_waterSourceId_fkey" FOREIGN KEY ("waterSourceId") REFERENCES "WaterSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_waterTreatmentTypeId_fkey" FOREIGN KEY ("waterTreatmentTypeId") REFERENCES "WaterTreatmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_waterSupplyTypeId_fkey" FOREIGN KEY ("waterSupplyTypeId") REFERENCES "WaterSupplyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_waterStorageTypeId_fkey" FOREIGN KEY ("waterStorageTypeId") REFERENCES "WaterStorageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_drinkingWaterSourceId_fkey" FOREIGN KEY ("drinkingWaterSourceId") REFERENCES "DrinkingWaterSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_toiletTypeId_fkey" FOREIGN KEY ("toiletTypeId") REFERENCES "ToiletType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_effluentManagementId_fkey" FOREIGN KEY ("effluentManagementId") REFERENCES "EffluentManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_excretaDisposalMethodId_fkey" FOREIGN KEY ("excretaDisposalMethodId") REFERENCES "ExcretaDisposalMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_excretaContainmentId_fkey" FOREIGN KEY ("excretaContainmentId") REFERENCES "ExcretaContainment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_greyWaterDisposalId_fkey" FOREIGN KEY ("greyWaterDisposalId") REFERENCES "GreyWaterDisposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_solidWasteReceptacleId_fkey" FOREIGN KEY ("solidWasteReceptacleId") REFERENCES "SolidWasteReceptacle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteCollection" ADD CONSTRAINT "PremisesWasteCollection_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteCollection" ADD CONSTRAINT "PremisesWasteCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteCollection" ADD CONSTRAINT "PremisesWasteCollection_wasteCollectionTypeId_fkey" FOREIGN KEY ("wasteCollectionTypeId") REFERENCES "WasteCollectionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_pestSignId_fkey" FOREIGN KEY ("pestSignId") REFERENCES "PestSign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_animalTypeId_fkey" FOREIGN KEY ("animalTypeId") REFERENCES "AnimalType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_residentialPremisesInfoSectionId_fkey" FOREIGN KEY ("residentialPremisesInfoSectionId") REFERENCES "ResidentialPremisesInfoSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_drainTypeId_fkey" FOREIGN KEY ("drainTypeId") REFERENCES "DrainType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_hazardousWasteDisposalMetho_fkey" FOREIGN KEY ("hazardousWasteDisposalMethodId") REFERENCES "HazardousWasteDisposalMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_conclusionSectionId_fkey" FOREIGN KEY ("conclusionSectionId") REFERENCES "ConclusionSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_conclusionSectionId_fkey" FOREIGN KEY ("conclusionSectionId") REFERENCES "ConclusionSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_nuisanceId_fkey" FOREIGN KEY ("nuisanceId") REFERENCES "Nuisance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationReport" ADD CONSTRAINT "SanitationReport_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationReport" ADD CONSTRAINT "SanitationReport_reportTypeId_fkey" FOREIGN KEY ("reportTypeId") REFERENCES "ReportType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToPageAction" ADD CONSTRAINT "_PageToPageAction_A_fkey" FOREIGN KEY ("A") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToPageAction" ADD CONSTRAINT "_PageToPageAction_B_fkey" FOREIGN KEY ("B") REFERENCES "PageAction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
