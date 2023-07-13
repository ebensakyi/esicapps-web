-- CreateTable
CREATE TABLE "Inspection" (
    "id" VARCHAR(255) NOT NULL,
    "prevInspectionId" VARCHAR(255),
    "premisesCode" VARCHAR(255),
    "districtId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "electoralAreaId" INTEGER NOT NULL,
    "communityId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "inspectionTypeId" INTEGER NOT NULL,
    "isPublished" INTEGER NOT NULL DEFAULT 0,
    "rejected" INTEGER NOT NULL DEFAULT -1,
    "publishedById" INTEGER,
    "followUpDate" VARCHAR(255),
    "doFollowUp" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "isReinspected" INTEGER DEFAULT 0,
    "isFollowedUp" INTEGER DEFAULT 0,
    "totalRating" DECIMAL(4,2),
    "updated" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionHistory" (
    "historyId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "prevInspectionId" VARCHAR(255),
    "premisesCode" VARCHAR(255),
    "districtId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "electoralAreaId" INTEGER NOT NULL,
    "communityId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "inspectionTypeId" INTEGER NOT NULL,
    "isPublished" INTEGER NOT NULL DEFAULT 0,
    "rejected" INTEGER NOT NULL DEFAULT -1,
    "publishedById" INTEGER,
    "followUpDate" VARCHAR(255),
    "doFollowUp" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "isReinspected" INTEGER DEFAULT 0,
    "isFollowedUp" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "totalRating" DECIMAL(4,2),
    "updated" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InspectionHistory_pkey" PRIMARY KEY ("historyId")
);

-- CreateTable
CREATE TABLE "InspectionForm" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(2) NOT NULL,
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
    "tempPassword" VARCHAR(255),
    "imagePath" VARCHAR(255),
    "regionId" INTEGER,
    "districtId" INTEGER,
    "electoralAreaId" INTEGER,
    "loginTimes" INTEGER DEFAULT 0,
    "passwordChanged" INTEGER DEFAULT 0,
    "activated" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userLevelId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddedByUser" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adderId" INTEGER,
    "addeeId" INTEGER,

    CONSTRAINT "UserAddedByUser_pkey" PRIMARY KEY ("id")
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
    "title" VARCHAR(255),
    "message" VARCHAR(2550) NOT NULL,
    "recipient" TEXT,
    "recipientId" INTEGER,
    "messageType" INTEGER,
    "sendingType" INTEGER,
    "sender" INTEGER NOT NULL,
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
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255),
    "icon" VARCHAR(255),
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
CREATE TABLE "DrainBadCondition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DrainBadCondition_pkey" PRIMARY KEY ("id")
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
    "electoralAreaId" INTEGER,
    "districtId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
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
    "inspectionFormId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nuisance_pkey" PRIMARY KEY ("id")
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
    "code" VARCHAR(2) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "abbrv" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "CommunalContainerCondition" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunalContainerCondition_pkey" PRIMARY KEY ("id")
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
    "communityId" INTEGER,
    "community" VARCHAR(255),
    "electoralAreaId" INTEGER,
    "electoralArea" VARCHAR(255),
    "ghanaPostGps" VARCHAR(255),
    "latitude" DECIMAL(11,8) NOT NULL,
    "longitude" DECIMAL(11,8) NOT NULL,
    "accuracy" VARCHAR(255),
    "geom" JSONB,
    "respondentName" VARCHAR(255) NOT NULL,
    "respondentPhoneNumber" VARCHAR(255) NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BasicInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasicInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "communityId" INTEGER,
    "community" VARCHAR(255),
    "electoralAreaId" INTEGER,
    "electoralArea" VARCHAR(255),
    "ghanaPostGps" VARCHAR(255),
    "latitude" DECIMAL(11,8) NOT NULL,
    "longitude" DECIMAL(11,8) NOT NULL,
    "accuracy" VARCHAR(255),
    "geom" JSONB,
    "respondentName" VARCHAR(255) NOT NULL,
    "respondentPhoneNumber" VARCHAR(255) NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "BasicInfoSectionHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "ResidentialPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "drainsAvailabilityId" INTEGER NOT NULL,
    "toiletAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "animalAvailabilityId" INTEGER,
    "householdNumber" INTEGER,
    "maleOccupantNumber" INTEGER,
    "femaleOccupantNumber" INTEGER,
    "otherAnimal" VARCHAR(255),
    "animalNumber" INTEGER,
    "animalSpaceConditionId" INTEGER,
    "vaccinationProofId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResidentialPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResidentialPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "drainsAvailabilityId" INTEGER NOT NULL,
    "toiletAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "animalAvailabilityId" INTEGER,
    "householdNumber" INTEGER,
    "maleOccupantNumber" INTEGER,
    "femaleOccupantNumber" INTEGER,
    "otherAnimal" VARCHAR(255),
    "animalNumber" INTEGER,
    "animalSpaceConditionId" INTEGER,
    "vaccinationProofId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "ResidentialPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "protectiveClothingUsedId" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberFoodHandlingMedical" INTEGER,
    "uncookedFoodStorageCondtionSafeId" INTEGER,
    "cookedFoodStorageCondtionSafeId" INTEGER,
    "disinfestationId" INTEGER,
    "disinfestationFrequencyId" INTEGER,
    "disinfectionId" INTEGER,
    "disinfectionFrequencyId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EateryPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EateryPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
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
    "protectiveClothingUsedId" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberFoodHandlingMedical" INTEGER,
    "uncookedFoodStorageCondtionSafeId" INTEGER,
    "cookedFoodStorageCondtionSafeId" INTEGER,
    "disinfestationId" INTEGER,
    "disinfestationFrequencyId" INTEGER,
    "disinfectionId" INTEGER,
    "disinfectionFrequencyId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "EateryPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "bathroomAvailabilityId" INTEGER,
    "ehoAvailabilityId" INTEGER,
    "numberWards" INTEGER,
    "separateWardId" INTEGER,
    "numberBeds" INTEGER,
    "placentaPitAvailabilityId" INTEGER,
    "incineratorAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "embalmingAreaConditionId" INTEGER,
    "embalmingAreaAvailabilityId" INTEGER,
    "bodyTraysAdequateId" INTEGER,
    "coldRoomAvailabilityId" INTEGER,
    "coldRoomConditionId" INTEGER,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "healthPremisesTypeId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "ownershipTypeId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "ehoAvailabilityId" INTEGER,
    "numberWards" INTEGER,
    "separateWardId" INTEGER,
    "numberBeds" INTEGER,
    "placentaPitAvailabilityId" INTEGER,
    "incineratorAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "embalmingAreaConditionId" INTEGER,
    "embalmingAreaAvailabilityId" INTEGER,
    "bodyTraysAdequateId" INTEGER,
    "coldRoomAvailabilityId" INTEGER,
    "coldRoomConditionId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "HealthPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "bathroomAvailabilityId" INTEGER,
    "kitchenAvailabilityId" INTEGER,
    "numberMaleWorkers" INTEGER,
    "numberFemaleWorkers" INTEGER,
    "numberFoodHandlingMedical" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberRooms" INTEGER,
    "facilityCapacity" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HospitalityPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HospitalityPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
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
    "bathroomAvailabilityId" INTEGER,
    "kitchenAvailabilityId" INTEGER,
    "numberMaleWorkers" INTEGER,
    "numberFemaleWorkers" INTEGER,
    "numberFoodHandlingMedical" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberRooms" INTEGER,
    "facilityCapacity" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "HospitalityPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "bathroomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "ownershipTypeId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "staffChangingRoomId" INTEGER,
    "sanitaryFacilityMgtId" INTEGER,
    "disinfectionFrequencyId" INTEGER,
    "disinfestationQuarterlyId" INTEGER,
    "protectiveClothingUsedId" INTEGER,
    "slaughterAreaAvailabilityId" INTEGER,
    "condemnationRoomAvailabilityId" INTEGER,
    "cloakRoomAvailabilityId" INTEGER,
    "comfortRoomAvailabilityId" INTEGER,
    "wheelbathAvailabilityId" INTEGER,
    "footbathAvailabilityId" INTEGER,
    "leachateMgtId" INTEGER,
    "safeHazardousWasteMgtId" INTEGER,
    "sextonManagementId" INTEGER,
    "sextonOfficeId" INTEGER,
    "properLayoutId" INTEGER,
    "siteFencedId" INTEGER,
    "cremationPracticedId" INTEGER,
    "workersOfficeAvailabilityId" INTEGER,
    "transferStationCapacity" INTEGER,
    "numberContainer" INTEGER,
    "containerAttendantName" INTEGER,
    "containerAttendantPhoneNumber" INTEGER,
    "numberWorkers" INTEGER,
    "cremationPlatformId" INTEGER,
    "sanitaryAshesDisposalId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "numberCarcassHandlers" INTEGER,
    "numberCarcassHandlersMedicalCert" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SanitaryPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanitaryPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "physicalStructureTypeId" INTEGER,
    "sanitaryPremisesTypeId" INTEGER,
    "sanitaryPremisesSubtypeId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "ownershipTypeId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "staffChangingRoomId" INTEGER,
    "sanitaryFacilityMgtId" INTEGER,
    "disinfectionFrequencyId" INTEGER,
    "disinfestationQuarterlyId" INTEGER,
    "protectiveClothingUsedId" INTEGER,
    "slaughterAreaAvailabilityId" INTEGER,
    "condemnationRoomAvailabilityId" INTEGER,
    "cloakRoomAvailabilityId" INTEGER,
    "comfortRoomAvailabilityId" INTEGER,
    "wheelbathAvailabilityId" INTEGER,
    "footbathAvailabilityId" INTEGER,
    "leachateMgtId" INTEGER,
    "safeHazardousWasteMgtId" INTEGER,
    "sextonManagementId" INTEGER,
    "sextonOfficeId" INTEGER,
    "properLayoutId" INTEGER,
    "siteFencedId" INTEGER,
    "cremationPracticedId" INTEGER,
    "workersOfficeAvailabilityId" INTEGER,
    "transferStationCapacity" INTEGER,
    "numberContainer" INTEGER,
    "containerAttendantName" INTEGER,
    "containerAttendantPhoneNumber" INTEGER,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "numberWorkers" INTEGER,
    "cremationPlatformId" INTEGER,
    "sanitaryAshesDisposalId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "numberCarcassHandlers" INTEGER,
    "numberCarcassHandlersMedicalCert" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "SanitaryPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "bathroomAvailabilityId" INTEGER,
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
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "marketPremisesTypeId" INTEGER,
    "physicalStructureTypeId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
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
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "MarketPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "bathroomAvailabilityId" INTEGER,
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
    "protectiveClothingUsedId" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberFoodHandlingMedicalId" INTEGER,
    "numberClassRoomsId" INTEGER,
    "shepClubExistenceId" INTEGER,
    "numberOtherRooms" INTEGER,
    "animalSpaceConditionId" INTEGER,
    "animalSpaceAvailabilityId" INTEGER,
    "premisesConditionId" INTEGER,
    "slaughterAreaAvailabilityId" INTEGER,
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
    "physicalStructureTypeId" INTEGER,
    "foodVendorAvailabilityId" INTEGER,
    "boardingHouseAvailabilityId" INTEGER,
    "boardingHouseOvercrowdedId" INTEGER,
    "separateBoardingBoysGirlsId" INTEGER,
    "boardingHouseConditionId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstitutionPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstitutionPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "institutionPremisesTypeId" INTEGER,
    "institutionPremisesSubtypeId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
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
    "protectiveClothingUsedId" INTEGER,
    "numberFoodHandling" INTEGER,
    "numberFoodHandlingMedicalId" INTEGER,
    "numberClassRoomsId" INTEGER,
    "shepClubExistenceId" INTEGER,
    "numberOtherRooms" INTEGER,
    "animalSpaceConditionId" INTEGER,
    "animalSpaceAvailabilityId" INTEGER,
    "premisesConditionId" INTEGER,
    "slaughterAreaAvailabilityId" INTEGER,
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
    "physicalStructureTypeId" INTEGER,
    "foodVendorAvailabilityId" INTEGER,
    "boardingHouseAvailabilityId" INTEGER,
    "boardingHouseOvercrowdedId" INTEGER,
    "separateBoardingBoysGirlsId" INTEGER,
    "boardingHouseConditionId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "InstitutionPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "IndustryPremisesInfoSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "industryPremisesTypeId" INTEGER,
    "industryPremisesSubtypeId" INTEGER,
    "physicalStructureTypeId" INTEGER,
    "otherIndustryFacility" VARCHAR(255),
    "protectiveClothingUsedId" INTEGER,
    "productionRoomConditionId" INTEGER,
    "flyScreenNetAvailabilityId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "staffChangingRoomId" INTEGER,
    "manufacturedServices" VARCHAR(255) NOT NULL,
    "majorByProducts" VARCHAR(255) NOT NULL,
    "numberWorkers" INTEGER,
    "numberFoodHandlers" INTEGER,
    "numberFoodHandlersCert" INTEGER,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "byProductsStorageAreaCondId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustryPremisesInfoSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryPremisesInfoSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "facilityName" VARCHAR(255) NOT NULL,
    "industryPremisesTypeId" INTEGER,
    "industryPremisesSubtypeId" INTEGER,
    "physicalStructureTypeId" INTEGER,
    "otherIndustryFacility" VARCHAR(255),
    "protectiveClothingUsedId" INTEGER,
    "productionRoomConditionId" INTEGER,
    "flyScreenNetAvailabilityId" INTEGER,
    "storeRoomAvailabilityId" INTEGER,
    "toiletAvailabilityId" INTEGER,
    "urinalAvailabilityId" INTEGER,
    "bathroomAvailabilityId" INTEGER,
    "drainsAvailabilityId" INTEGER,
    "approvedHandwashingFacilityAvailabilityId" INTEGER,
    "firstAidAvailabilityId" INTEGER,
    "staffChangingRoomId" INTEGER,
    "manufacturedServices" VARCHAR(255) NOT NULL,
    "majorByProducts" VARCHAR(255) NOT NULL,
    "numberWorkers" INTEGER,
    "numberFoodHandlers" INTEGER,
    "numberFoodHandlersCert" INTEGER,
    "userId" INTEGER NOT NULL,
    "byProductsStorageAreaCondId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "IndustryPremisesInfoSectionHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "LicencePermitSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "buildingPermitAvailabilityId" INTEGER,
    "businessLicenceAvailabilityId" INTEGER,
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LicencePermitSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LicencePermitSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "buildingPermitAvailabilityId" INTEGER,
    "businessLicenceAvailabilityId" INTEGER,
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "LicencePermitSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "rating" DECIMAL(4,2) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "waterSourceConditionId" INTEGER,
    "waterStorageConditionId" INTEGER,
    "waterFlowFrequencyId" INTEGER,
    "safeDistanceWaterStorageSanitaryId" INTEGER,
    "rating" DECIMAL(4,2) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "WaterSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "bathroomConditionId" INTEGER,
    "areaSeweredId" INTEGER,
    "facilityConnectedSewerId" INTEGER,
    "numberUrinalCubicle" INTEGER,
    "numberBathroomCubicle" INTEGER,
    "urinalCubicleConditionId" INTEGER,
    "toiletConditionId" INTEGER,
    "toiletDischargeId" INTEGER,
    "containmentEmptiedId" INTEGER,
    "sewerSystemId" INTEGER,
    "wasteWaterContainmentId" INTEGER,
    "easeYourselfWhereId" INTEGER,
    "desiltingFrequencyId" INTEGER,
    "rating" DECIMAL(4,2) NOT NULL,
    "toiletHouseholdNumberId" INTEGER,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "drainTypeId" INTEGER,
    "effluentManagementId" INTEGER,
    "excretaContainmentId" INTEGER,
    "excretaDisposalMethodId" INTEGER,

    CONSTRAINT "LiquidWasteSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiquidWasteSectionHistory" (
    "newId" SERIAL NOT NULL,
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
    "bathroomConditionId" INTEGER,
    "areaSeweredId" INTEGER,
    "facilityConnectedSewerId" INTEGER,
    "numberUrinalCubicle" INTEGER,
    "numberBathroomCubicle" INTEGER,
    "urinalCubicleConditionId" INTEGER,
    "toiletConditionId" INTEGER,
    "toiletDischargeId" INTEGER,
    "containmentEmptiedId" INTEGER,
    "sewerSystemId" INTEGER,
    "wasteWaterContainmentId" INTEGER,
    "easeYourselfWhereId" INTEGER,
    "desiltingFrequencyId" INTEGER,
    "rating" DECIMAL(4,2) NOT NULL,
    "toiletHouseholdNumberId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "drainTypeId" INTEGER,
    "effluentManagementId" INTEGER,
    "excretaContainmentId" INTEGER,
    "excretaDisposalMethodId" INTEGER,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "LiquidWasteSectionHistory_pkey" PRIMARY KEY ("newId")
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
    "containerServiceProviderName" INTEGER,
    "scheduleLiftingId" INTEGER,
    "sanitaryContainerId" INTEGER,
    "rating" DECIMAL(4,2),
    "wasteServicePhoneNumber" TEXT,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolidWasteSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolidWasteSectionHistory" (
    "newId" SERIAL NOT NULL,
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
    "containerServiceProviderName" INTEGER,
    "scheduleLiftingId" INTEGER,
    "sanitaryContainerId" INTEGER,
    "rating" DECIMAL(4,2),
    "wasteServicePhoneNumber" TEXT,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "SolidWasteSectionHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "ConclusionSection" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "obnoxiousTradeExistId" INTEGER,
    "officerComment" VARCHAR(255) NOT NULL,
    "obnoxiousTrade" VARCHAR(255) NOT NULL,
    "isNuisanceObservedId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "ConclusionSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConclusionSectionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "obnoxiousTradeExistId" INTEGER,
    "officerComment" VARCHAR(255) NOT NULL,
    "obnoxiousTrade" VARCHAR(255) NOT NULL,
    "isNuisanceObservedId" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "ConclusionSectionHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "PremisesWaterSources" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterSourceId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterSources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterSourcesHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterSourceId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterSourcesHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesWaterTreatmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterTreatmentTypeHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterTreatmentTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterTreatmentTypeHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesWaterSupply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterSupplyHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterSupplyTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterSupplyHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesWaterStorage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWaterStorageHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "waterStorageTypeId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWaterStorageHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "PremisesUnsafeWaterStorage" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "waterStorageTypeId" INTEGER,
    "unsafeWaterStorageId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesUnsafeWaterStorage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesUnsafeWaterStorageHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "waterStorageTypeId" INTEGER,
    "unsafeWaterStorageId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesUnsafeWaterStorageHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "PremisesCommunalContainerCondition" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "communalContainerConditionId" INTEGER NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesCommunalContainerCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesCommunalContainerConditionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "communalContainerConditionId" INTEGER NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesCommunalContainerConditionHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesDrinkingWaterSources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesDrinkingWaterSourcesHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "waterSectionId" VARCHAR(255) NOT NULL,
    "drinkingWaterSourceId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesDrinkingWaterSourcesHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesToiletType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesToiletTypeHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "toiletTypeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesToiletTypeHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesEffluentManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesEffluentManagementHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "effluentManagementId" INTEGER NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesEffluentManagementHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesExcretaDisposalMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesExcretaDisposalMethodHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excretaDisposalMethodId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesExcretaDisposalMethodHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesExcretaContainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesExcretaContainmentHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "excretaContainmentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesExcretaContainmentHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesGreyWaterDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesGreyWaterDisposalHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "greyWaterDisposalId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesGreyWaterDisposalHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesWasteReceptacle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesWasteReceptacleHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "solidWasteReceptacleId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesWasteReceptacleHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "PremisesPestSigns" (
    "id" VARCHAR(255) NOT NULL,
    "pestSignId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "inspectionId" VARCHAR(255) NOT NULL,

    CONSTRAINT "PremisesPestSigns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesPestSignsHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "pestSignId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "historyId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesPestSignsHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesAnimal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesAnimalHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "animalTypeId" INTEGER NOT NULL,
    "residentialPremisesInfoSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesAnimalHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesDrainType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesDrainTypeHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "drainTypeId" INTEGER NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesDrainTypeHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "PremisesDrainBadCondition" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "drainBadConditionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesDrainBadCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesDrainBadConditionHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "liquidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "drainBadConditionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesDrainBadConditionHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesHazardousWasteDisposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesHazardousWasteDisposalHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "hazardousWasteDisposalMethodId" INTEGER NOT NULL,
    "solidWasteSectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesHazardousWasteDisposalHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "PremisesActionTaken" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "actionId" INTEGER NOT NULL,
    "conclusionSectionId" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesActionTaken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesActionTakenHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "actionId" INTEGER NOT NULL,
    "conclusionSectionId" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesActionTakenHistory_pkey" PRIMARY KEY ("newId")
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
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,

    CONSTRAINT "PremisesNuisanceDetected_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PremisesNuisanceDetectedHistory" (
    "newId" SERIAL NOT NULL,
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "conclusionSectionId" VARCHAR(255) NOT NULL,
    "nuisanceId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "historyId" INTEGER NOT NULL,

    CONSTRAINT "PremisesNuisanceDetectedHistory_pkey" PRIMARY KEY ("newId")
);

-- CreateTable
CREATE TABLE "FollowupPremisesActionTaken" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "actionId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FollowupPremisesActionTaken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowupPremisesNuisanceDetected" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nuisanceId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FollowupPremisesNuisanceDetected_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanitationReport" (
    "id" SERIAL NOT NULL,
    "fcmId" VARCHAR(255),
    "fullName" VARCHAR(255),
    "phoneNumber" VARCHAR(255),
    "email" VARCHAR(255),
    "community" VARCHAR(255),
    "image" VARCHAR(255) NOT NULL,
    "districtId" INTEGER,
    "reportTypeId" INTEGER,
    "description" VARCHAR(255),
    "latitude" DECIMAL(11,8),
    "longitude" DECIMAL(11,8),
    "status" INTEGER DEFAULT 0,
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
CREATE TABLE "UserGuides" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "fileType" INTEGER NOT NULL,
    "action" INTEGER NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserGuides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSectionImage" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormSectionImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotApplicable" (
    "id" TEXT NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "isNotApplicable" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotApplicable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionPictures" (
    "id" SERIAL NOT NULL,
    "imagePath" VARCHAR(255) NOT NULL,
    "formSectionImageId" INTEGER NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InspectionPictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUpInspectionPictures" (
    "id" SERIAL NOT NULL,
    "imagePath" VARCHAR(255) NOT NULL,
    "formSectionImageId" INTEGER NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "followUpInspectionId" VARCHAR(255) NOT NULL,
    "followUpInspectionHistoryId" VARCHAR(255),

    CONSTRAINT "FollowUpInspectionPictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssignData" (
    "id" SERIAL NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "assignedToId" INTEGER NOT NULL,
    "assignedFromId" INTEGER NOT NULL,

    CONSTRAINT "AssignData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUpInspection" (
    "id" VARCHAR(255) NOT NULL,
    "prevInspectionId" VARCHAR(255),
    "premisesCode" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "communityId" INTEGER NOT NULL,
    "community" VARCHAR(255) NOT NULL,
    "electoralAreaId" INTEGER NOT NULL,
    "electoralArea" VARCHAR(255) NOT NULL,
    "ghanaPostGps" VARCHAR(255),
    "latitude" VARCHAR(255) NOT NULL,
    "longitude" VARCHAR(255) NOT NULL,
    "accuracy" VARCHAR(255) NOT NULL,
    "respondentName" VARCHAR(255) NOT NULL,
    "respondentPhoneNumber" VARCHAR(255) NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "waterRating" VARCHAR(255) NOT NULL,
    "solidWasteRating" VARCHAR(255) NOT NULL,
    "liquidWasteRating" VARCHAR(255) NOT NULL,
    "totalRating" VARCHAR(255) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "obnoxiousTradeExistFollowUpId" INTEGER NOT NULL,
    "obnoxiousTrade" VARCHAR(255) NOT NULL,
    "officerComment" VARCHAR(255) NOT NULL,
    "isNuisanceObservedId" INTEGER,
    "updated" INTEGER DEFAULT 0,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FollowUpInspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUpInspectionHistory" (
    "id" VARCHAR(255) NOT NULL,
    "prevInspectionId" VARCHAR(255),
    "premisesCode" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "inspectionFormId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "communityId" INTEGER NOT NULL,
    "community" VARCHAR(255) NOT NULL,
    "electoralAreaId" INTEGER NOT NULL,
    "electoralArea" VARCHAR(255) NOT NULL,
    "ghanaPostGps" VARCHAR(255),
    "latitude" VARCHAR(255) NOT NULL,
    "longitude" VARCHAR(255) NOT NULL,
    "accuracy" VARCHAR(255) NOT NULL,
    "respondentName" VARCHAR(255) NOT NULL,
    "respondentPhoneNumber" VARCHAR(255) NOT NULL,
    "respondentDesignationId" INTEGER NOT NULL,
    "waterRating" VARCHAR(255) NOT NULL,
    "solidWasteRating" VARCHAR(255) NOT NULL,
    "liquidWasteRating" VARCHAR(255) NOT NULL,
    "totalRating" VARCHAR(255) NOT NULL,
    "isCompleted" INTEGER DEFAULT 1,
    "isSubmitted" INTEGER DEFAULT 1,
    "obnoxiousTradeExistFollowUpHistoryId" INTEGER NOT NULL,
    "obnoxiousTrade" VARCHAR(255) NOT NULL,
    "officerComment" VARCHAR(255) NOT NULL,
    "isNuisanceObservedFollowUpHistoryId" INTEGER,
    "updated" INTEGER DEFAULT 0,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "yesNoId" INTEGER,

    CONSTRAINT "FollowUpInspectionHistory_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "UserType_name_key" ON "UserType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Community_electoralAreaId_name_key" ON "Community"("electoralAreaId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "ElectoralArea_name_key" ON "ElectoralArea"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Region_abbrv_key" ON "Region"("abbrv");

-- CreateIndex
CREATE UNIQUE INDEX "Region_code_key" ON "Region"("code");

-- CreateIndex
CREATE UNIQUE INDEX "District_abbrv_key" ON "District"("abbrv");

-- CreateIndex
CREATE UNIQUE INDEX "Type_inspectionFormId_name_key" ON "Type"("inspectionFormId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Subtype_typeId_name_key" ON "Subtype"("typeId", "name");

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
CREATE UNIQUE INDEX "InspectionPictures_formSectionImageId_inspectionId_key" ON "InspectionPictures"("formSectionImageId", "inspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowUpInspectionPictures_formSectionImageId_followUpInspe_key" ON "FollowUpInspectionPictures"("formSectionImageId", "followUpInspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowUpInspection_prevInspectionId_key" ON "FollowUpInspection"("prevInspectionId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowUpInspectionHistory_prevInspectionId_key" ON "FollowUpInspectionHistory"("prevInspectionId");

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
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_electoralAreaId_fkey" FOREIGN KEY ("electoralAreaId") REFERENCES "ElectoralArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_prevInspectionId_fkey" FOREIGN KEY ("prevInspectionId") REFERENCES "Inspection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetRequest" ADD CONSTRAINT "PasswordResetRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userLevelId_fkey" FOREIGN KEY ("userLevelId") REFERENCES "UserLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_electoralAreaId_fkey" FOREIGN KEY ("electoralAreaId") REFERENCES "ElectoralArea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddedByUser" ADD CONSTRAINT "UserAddedByUser_adderId_fkey" FOREIGN KEY ("adderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddedByUser" ADD CONSTRAINT "UserAddedByUser_addeeId_fkey" FOREIGN KEY ("addeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_messageType_fkey" FOREIGN KEY ("messageType") REFERENCES "MessageType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_sender_fkey" FOREIGN KEY ("sender") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_sendingType_fkey" FOREIGN KEY ("sendingType") REFERENCES "SendingType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageAccess" ADD CONSTRAINT "PageAccess_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageAccess" ADD CONSTRAINT "PageAccess_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageActionAccess" ADD CONSTRAINT "PageActionAccess_pageActionId_fkey" FOREIGN KEY ("pageActionId") REFERENCES "PageAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageActionAccess" ADD CONSTRAINT "PageActionAccess_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_electoralAreaId_fkey" FOREIGN KEY ("electoralAreaId") REFERENCES "ElectoralArea"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElectoralArea" ADD CONSTRAINT "ElectoralArea_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nuisance" ADD CONSTRAINT "Nuisance_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespondentDesignation" ADD CONSTRAINT "RespondentDesignation_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "BasicInfoSectionHistory" ADD CONSTRAINT "BasicInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_animalAvailabilityId_fkey" FOREIGN KEY ("animalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_animalSpaceConditionId_fkey" FOREIGN KEY ("animalSpaceConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_approvedHandwashingFacility_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_vaccinationProofId_fkey" FOREIGN KEY ("vaccinationProofId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSection" ADD CONSTRAINT "ResidentialPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResidentialPremisesInfoSectionHistory" ADD CONSTRAINT "ResidentialPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_approvedHandwashingFacilityAvail_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_kitchenAvailabilityId_fkey" FOREIGN KEY ("kitchenAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_protectiveClothingUsedId_fkey" FOREIGN KEY ("protectiveClothingUsedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_designatedSmokingAreaId_fkey" FOREIGN KEY ("designatedSmokingAreaId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_disinfestationFrequencyId_fkey" FOREIGN KEY ("disinfestationFrequencyId") REFERENCES "DisinfectionFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_disinfectionFrequencyId_fkey" FOREIGN KEY ("disinfectionFrequencyId") REFERENCES "DisinfectionFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_uncookedFoodStorageCondtionSafeI_fkey" FOREIGN KEY ("uncookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_cookedFoodStorageCondtionSafeId_fkey" FOREIGN KEY ("cookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_disinfestationId_fkey" FOREIGN KEY ("disinfestationId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_disinfectionId_fkey" FOREIGN KEY ("disinfectionId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSection" ADD CONSTRAINT "EateryPremisesInfoSection_physicalStructureTypeId_fkey" FOREIGN KEY ("physicalStructureTypeId") REFERENCES "StructureType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EateryPremisesInfoSectionHistory" ADD CONSTRAINT "EateryPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_approvedHandwashingFacilityAvail_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_ehoAvailabilityId_fkey" FOREIGN KEY ("ehoAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_incineratorAvailabilityId_fkey" FOREIGN KEY ("incineratorAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_placentaPitAvailabilityId_fkey" FOREIGN KEY ("placentaPitAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_embalmingAreaConditionId_fkey" FOREIGN KEY ("embalmingAreaConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_embalmingAreaAvailabilityId_fkey" FOREIGN KEY ("embalmingAreaAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_bodyTraysAdequateId_fkey" FOREIGN KEY ("bodyTraysAdequateId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_coldRoomAvailabilityId_fkey" FOREIGN KEY ("coldRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSection" ADD CONSTRAINT "HealthPremisesInfoSection_coldRoomConditionId_fkey" FOREIGN KEY ("coldRoomConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthPremisesInfoSectionHistory" ADD CONSTRAINT "HealthPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_approvedHandwashingFacility_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_cookedFoodStorageCondtionSa_fkey" FOREIGN KEY ("cookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_kitchenAvailabilityId_fkey" FOREIGN KEY ("kitchenAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_protectiveClothingUsedId_fkey" FOREIGN KEY ("protectiveClothingUsedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSection" ADD CONSTRAINT "HospitalityPremisesInfoSection_designatedSmokingAreaId_fkey" FOREIGN KEY ("designatedSmokingAreaId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalityPremisesInfoSectionHistory" ADD CONSTRAINT "HospitalityPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_approvedHandwashingFacilityAva_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_siteFencedId_fkey" FOREIGN KEY ("siteFencedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_protectiveClothingUsedId_fkey" FOREIGN KEY ("protectiveClothingUsedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_safeHazardousWasteMgtId_fkey" FOREIGN KEY ("safeHazardousWasteMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryAshesDisposalId_fkey" FOREIGN KEY ("sanitaryAshesDisposalId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryFacilityMgtId_fkey" FOREIGN KEY ("sanitaryFacilityMgtId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sanitaryPremisesTypeId_fkey" FOREIGN KEY ("sanitaryPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sextonManagementId_fkey" FOREIGN KEY ("sextonManagementId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_sextonOfficeId_fkey" FOREIGN KEY ("sextonOfficeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_slaughterAreaAvailabilityId_fkey" FOREIGN KEY ("slaughterAreaAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_staffChangingRoomId_fkey" FOREIGN KEY ("staffChangingRoomId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_storeRoomAvailabilityId_fkey" FOREIGN KEY ("storeRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_wheelbathAvailabilityId_fkey" FOREIGN KEY ("wheelbathAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_workersOfficeAvailabilityId_fkey" FOREIGN KEY ("workersOfficeAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSection" ADD CONSTRAINT "SanitaryPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitaryPremisesInfoSectionHistory" ADD CONSTRAINT "SanitaryPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_approvedHandwashingFacilityAvail_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_generalSanitaryConditionId_fkey" FOREIGN KEY ("generalSanitaryConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_marketPremisesTypeId_fkey" FOREIGN KEY ("marketPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_physicalStructureTypeId_fkey" FOREIGN KEY ("physicalStructureTypeId") REFERENCES "StructureType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_cleanupFrequencyId_fkey" FOREIGN KEY ("cleanupFrequencyId") REFERENCES "CleaningFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_derattingFrequencyId_fkey" FOREIGN KEY ("derattingFrequencyId") REFERENCES "DerattingFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSection" ADD CONSTRAINT "MarketPremisesInfoSection_ownershipTypeId_fkey" FOREIGN KEY ("ownershipTypeId") REFERENCES "OwnershipType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPremisesInfoSectionHistory" ADD CONSTRAINT "MarketPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_approvedHandwashingFacility_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_drainsAvailabilityId_fkey" FOREIGN KEY ("drainsAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_toiletAvailabilityId_fkey" FOREIGN KEY ("toiletAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_urinalAvailabilityId_fkey" FOREIGN KEY ("urinalAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_foodVendorAvailabilityId_fkey" FOREIGN KEY ("foodVendorAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_kitchenAvailabilityId_fkey" FOREIGN KEY ("kitchenAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_animalSpaceAvailabilityId_fkey" FOREIGN KEY ("animalSpaceAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_animalSpaceConditionId_fkey" FOREIGN KEY ("animalSpaceConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_uncookedFoodStorageCondtion_fkey" FOREIGN KEY ("uncookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_cookedFoodStorageCondtionSa_fkey" FOREIGN KEY ("cookedFoodStorageCondtionSafeId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_shepClubExistenceId_fkey" FOREIGN KEY ("shepClubExistenceId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_slaughterAreaAvailabilityId_fkey" FOREIGN KEY ("slaughterAreaAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_slaughterAreaConditionId_fkey" FOREIGN KEY ("slaughterAreaConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_soundProofId_fkey" FOREIGN KEY ("soundProofId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_ablutionSlabId_fkey" FOREIGN KEY ("ablutionSlabId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_ablutionSlabConditionId_fkey" FOREIGN KEY ("ablutionSlabConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_physicalStructureTypeId_fkey" FOREIGN KEY ("physicalStructureTypeId") REFERENCES "StructureType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_boardingHouseAvailabilityId_fkey" FOREIGN KEY ("boardingHouseAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_boardingHouseOvercrowdedId_fkey" FOREIGN KEY ("boardingHouseOvercrowdedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_separateBoardingBoysGirlsId_fkey" FOREIGN KEY ("separateBoardingBoysGirlsId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_boardingHouseConditionId_fkey" FOREIGN KEY ("boardingHouseConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_protectiveClothingUsedId_fkey" FOREIGN KEY ("protectiveClothingUsedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_institutionPremisesTypeId_fkey" FOREIGN KEY ("institutionPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSection" ADD CONSTRAINT "InstitutionPremisesInfoSection_institutionPremisesSubtypeI_fkey" FOREIGN KEY ("institutionPremisesSubtypeId") REFERENCES "Subtype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstitutionPremisesInfoSectionHistory" ADD CONSTRAINT "InstitutionPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_approvedHandwashingFacilityAva_fkey" FOREIGN KEY ("approvedHandwashingFacilityAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_bathroomAvailabilityId_fkey" FOREIGN KEY ("bathroomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_physicalStructureTypeId_fkey" FOREIGN KEY ("physicalStructureTypeId") REFERENCES "StructureType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_byProductsStorageAreaCondId_fkey" FOREIGN KEY ("byProductsStorageAreaCondId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_productionRoomConditionId_fkey" FOREIGN KEY ("productionRoomConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_staffChangingRoomId_fkey" FOREIGN KEY ("staffChangingRoomId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_storeRoomAvailabilityId_fkey" FOREIGN KEY ("storeRoomAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_flyScreenNetAvailabilityId_fkey" FOREIGN KEY ("flyScreenNetAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_firstAidAvailabilityId_fkey" FOREIGN KEY ("firstAidAvailabilityId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_protectiveClothingUsedId_fkey" FOREIGN KEY ("protectiveClothingUsedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_industryPremisesTypeId_fkey" FOREIGN KEY ("industryPremisesTypeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSection" ADD CONSTRAINT "IndustryPremisesInfoSection_industryPremisesSubtypeId_fkey" FOREIGN KEY ("industryPremisesSubtypeId") REFERENCES "Subtype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustryPremisesInfoSectionHistory" ADD CONSTRAINT "IndustryPremisesInfoSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "LicencePermitSectionHistory" ADD CONSTRAINT "LicencePermitSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "WaterSectionHistory" ADD CONSTRAINT "WaterSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_bathroomConditionId_fkey" FOREIGN KEY ("bathroomConditionId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletHouseholdNumberId_fkey" FOREIGN KEY ("toiletHouseholdNumberId") REFERENCES "ToiletHouseholdNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidWasteSectionHistory" ADD CONSTRAINT "LiquidWasteSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_sanitaryContainerId_fkey" FOREIGN KEY ("sanitaryContainerId") REFERENCES "SanitaryInsanitary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_scheduleLiftingId_fkey" FOREIGN KEY ("scheduleLiftingId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteCollectionTypeId_fkey" FOREIGN KEY ("wasteCollectionTypeId") REFERENCES "WasteCollectionType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_unservicedWasteDisposalId_fkey" FOREIGN KEY ("unservicedWasteDisposalId") REFERENCES "UnservicedWasteDisposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSection" ADD CONSTRAINT "SolidWasteSection_wasteContainerVolumeId_fkey" FOREIGN KEY ("wasteContainerVolumeId") REFERENCES "ContainerVolume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolidWasteSectionHistory" ADD CONSTRAINT "SolidWasteSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_obnoxiousTradeExistId_fkey" FOREIGN KEY ("obnoxiousTradeExistId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSection" ADD CONSTRAINT "ConclusionSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConclusionSectionHistory" ADD CONSTRAINT "ConclusionSectionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSources" ADD CONSTRAINT "PremisesWaterSources_waterSourceId_fkey" FOREIGN KEY ("waterSourceId") REFERENCES "WaterSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSourcesHistory" ADD CONSTRAINT "PremisesWaterSourcesHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentType" ADD CONSTRAINT "PremisesWaterTreatmentType_waterTreatmentTypeId_fkey" FOREIGN KEY ("waterTreatmentTypeId") REFERENCES "WaterTreatmentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterTreatmentTypeHistory" ADD CONSTRAINT "PremisesWaterTreatmentTypeHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupply" ADD CONSTRAINT "PremisesWaterSupply_waterSupplyTypeId_fkey" FOREIGN KEY ("waterSupplyTypeId") REFERENCES "WaterSupplyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterSupplyHistory" ADD CONSTRAINT "PremisesWaterSupplyHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorage" ADD CONSTRAINT "PremisesWaterStorage_waterStorageTypeId_fkey" FOREIGN KEY ("waterStorageTypeId") REFERENCES "WaterStorageType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWaterStorageHistory" ADD CONSTRAINT "PremisesWaterStorageHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesUnsafeWaterStorage" ADD CONSTRAINT "PremisesUnsafeWaterStorage_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesUnsafeWaterStorage" ADD CONSTRAINT "PremisesUnsafeWaterStorage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesUnsafeWaterStorage" ADD CONSTRAINT "PremisesUnsafeWaterStorage_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesUnsafeWaterStorage" ADD CONSTRAINT "PremisesUnsafeWaterStorage_unsafeWaterStorageId_fkey" FOREIGN KEY ("unsafeWaterStorageId") REFERENCES "UnsafeWaterStorage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesUnsafeWaterStorage" ADD CONSTRAINT "PremisesUnsafeWaterStorage_waterStorageTypeId_fkey" FOREIGN KEY ("waterStorageTypeId") REFERENCES "WaterStorageType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesUnsafeWaterStorageHistory" ADD CONSTRAINT "PremisesUnsafeWaterStorageHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_communalContainerCondit_fkey" FOREIGN KEY ("communalContainerConditionId") REFERENCES "CommunalContainerCondition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerConditionHistory" ADD CONSTRAINT "PremisesCommunalContainerConditionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_drinkingWaterSourceId_fkey" FOREIGN KEY ("drinkingWaterSourceId") REFERENCES "DrinkingWaterSourceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_waterSectionId_fkey" FOREIGN KEY ("waterSectionId") REFERENCES "WaterSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSources" ADD CONSTRAINT "PremisesDrinkingWaterSources_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrinkingWaterSourcesHistory" ADD CONSTRAINT "PremisesDrinkingWaterSourcesHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_toiletTypeId_fkey" FOREIGN KEY ("toiletTypeId") REFERENCES "ToiletType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletType" ADD CONSTRAINT "PremisesToiletType_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesToiletTypeHistory" ADD CONSTRAINT "PremisesToiletTypeHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_effluentManagementId_fkey" FOREIGN KEY ("effluentManagementId") REFERENCES "EffluentManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagement" ADD CONSTRAINT "PremisesEffluentManagement_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesEffluentManagementHistory" ADD CONSTRAINT "PremisesEffluentManagementHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_excretaDisposalMethodId_fkey" FOREIGN KEY ("excretaDisposalMethodId") REFERENCES "ExcretaDisposalMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethod" ADD CONSTRAINT "PremisesExcretaDisposalMethod_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaDisposalMethodHistory" ADD CONSTRAINT "PremisesExcretaDisposalMethodHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_excretaContainmentId_fkey" FOREIGN KEY ("excretaContainmentId") REFERENCES "ExcretaContainment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainment" ADD CONSTRAINT "PremisesExcretaContainment_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesExcretaContainmentHistory" ADD CONSTRAINT "PremisesExcretaContainmentHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_greyWaterDisposalId_fkey" FOREIGN KEY ("greyWaterDisposalId") REFERENCES "GreyWaterDisposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposal" ADD CONSTRAINT "PremisesGreyWaterDisposal_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesGreyWaterDisposalHistory" ADD CONSTRAINT "PremisesGreyWaterDisposalHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_solidWasteReceptacleId_fkey" FOREIGN KEY ("solidWasteReceptacleId") REFERENCES "SolidWasteReceptacle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacle" ADD CONSTRAINT "PremisesWasteReceptacle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesWasteReceptacleHistory" ADD CONSTRAINT "PremisesWasteReceptacleHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_pestSignId_fkey" FOREIGN KEY ("pestSignId") REFERENCES "PestSign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSigns" ADD CONSTRAINT "PremisesPestSigns_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesPestSignsHistory" ADD CONSTRAINT "PremisesPestSignsHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_animalTypeId_fkey" FOREIGN KEY ("animalTypeId") REFERENCES "AnimalType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_residentialPremisesInfoSectionId_fkey" FOREIGN KEY ("residentialPremisesInfoSectionId") REFERENCES "ResidentialPremisesInfoSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimal" ADD CONSTRAINT "PremisesAnimal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesAnimalHistory" ADD CONSTRAINT "PremisesAnimalHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_drainTypeId_fkey" FOREIGN KEY ("drainTypeId") REFERENCES "DrainType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainType" ADD CONSTRAINT "PremisesDrainType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainTypeHistory" ADD CONSTRAINT "PremisesDrainTypeHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainBadCondition" ADD CONSTRAINT "PremisesDrainBadCondition_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainBadCondition" ADD CONSTRAINT "PremisesDrainBadCondition_drainBadConditionId_fkey" FOREIGN KEY ("drainBadConditionId") REFERENCES "DrainBadCondition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainBadCondition" ADD CONSTRAINT "PremisesDrainBadCondition_liquidWasteSectionId_fkey" FOREIGN KEY ("liquidWasteSectionId") REFERENCES "LiquidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainBadCondition" ADD CONSTRAINT "PremisesDrainBadCondition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesDrainBadConditionHistory" ADD CONSTRAINT "PremisesDrainBadConditionHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_hazardousWasteDisposalMetho_fkey" FOREIGN KEY ("hazardousWasteDisposalMethodId") REFERENCES "HazardousWasteDisposalMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposal" ADD CONSTRAINT "PremisesHazardousWasteDisposal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesHazardousWasteDisposalHistory" ADD CONSTRAINT "PremisesHazardousWasteDisposalHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_conclusionSectionId_fkey" FOREIGN KEY ("conclusionSectionId") REFERENCES "ConclusionSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTaken" ADD CONSTRAINT "PremisesActionTaken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesActionTakenHistory" ADD CONSTRAINT "PremisesActionTakenHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_conclusionSectionId_fkey" FOREIGN KEY ("conclusionSectionId") REFERENCES "ConclusionSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_nuisanceId_fkey" FOREIGN KEY ("nuisanceId") REFERENCES "Nuisance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetected" ADD CONSTRAINT "PremisesNuisanceDetected_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesNuisanceDetectedHistory" ADD CONSTRAINT "PremisesNuisanceDetectedHistory_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "InspectionHistory"("historyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowupPremisesActionTaken" ADD CONSTRAINT "FollowupPremisesActionTaken_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowupPremisesActionTaken" ADD CONSTRAINT "FollowupPremisesActionTaken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowupPremisesNuisanceDetected" ADD CONSTRAINT "FollowupPremisesNuisanceDetected_nuisanceId_fkey" FOREIGN KEY ("nuisanceId") REFERENCES "Nuisance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowupPremisesNuisanceDetected" ADD CONSTRAINT "FollowupPremisesNuisanceDetected_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationReport" ADD CONSTRAINT "SanitationReport_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SanitationReport" ADD CONSTRAINT "SanitationReport_reportTypeId_fkey" FOREIGN KEY ("reportTypeId") REFERENCES "ReportType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotApplicable" ADD CONSTRAINT "NotApplicable_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotApplicable" ADD CONSTRAINT "NotApplicable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionPictures" ADD CONSTRAINT "InspectionPictures_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionPictures" ADD CONSTRAINT "InspectionPictures_formSectionImageId_fkey" FOREIGN KEY ("formSectionImageId") REFERENCES "FormSectionImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionPictures" ADD CONSTRAINT "FollowUpInspectionPictures_formSectionImageId_fkey" FOREIGN KEY ("formSectionImageId") REFERENCES "FormSectionImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionPictures" ADD CONSTRAINT "FollowUpInspectionPictures_followUpInspectionId_fkey" FOREIGN KEY ("followUpInspectionId") REFERENCES "FollowUpInspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionPictures" ADD CONSTRAINT "FollowUpInspectionPictures_followUpInspectionHistoryId_fkey" FOREIGN KEY ("followUpInspectionHistoryId") REFERENCES "FollowUpInspectionHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignData" ADD CONSTRAINT "AssignData_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignData" ADD CONSTRAINT "AssignData_assignedFromId_fkey" FOREIGN KEY ("assignedFromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspection" ADD CONSTRAINT "FollowUpInspection_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspection" ADD CONSTRAINT "FollowUpInspection_prevInspectionId_fkey" FOREIGN KEY ("prevInspectionId") REFERENCES "Inspection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspection" ADD CONSTRAINT "FollowUpInspection_obnoxiousTradeExistFollowUpId_fkey" FOREIGN KEY ("obnoxiousTradeExistFollowUpId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspection" ADD CONSTRAINT "FollowUpInspection_isNuisanceObservedId_fkey" FOREIGN KEY ("isNuisanceObservedId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionHistory" ADD CONSTRAINT "FollowUpInspectionHistory_inspectionFormId_fkey" FOREIGN KEY ("inspectionFormId") REFERENCES "InspectionForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionHistory" ADD CONSTRAINT "FollowUpInspectionHistory_prevInspectionId_fkey" FOREIGN KEY ("prevInspectionId") REFERENCES "Inspection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionHistory" ADD CONSTRAINT "FollowUpInspectionHistory_obnoxiousTradeExistFollowUpHisto_fkey" FOREIGN KEY ("obnoxiousTradeExistFollowUpHistoryId") REFERENCES "YesNo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionHistory" ADD CONSTRAINT "FollowUpInspectionHistory_isNuisanceObservedFollowUpHistor_fkey" FOREIGN KEY ("isNuisanceObservedFollowUpHistoryId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUpInspectionHistory" ADD CONSTRAINT "FollowUpInspectionHistory_yesNoId_fkey" FOREIGN KEY ("yesNoId") REFERENCES "YesNo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToPageAction" ADD CONSTRAINT "_PageToPageAction_A_fkey" FOREIGN KEY ("A") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToPageAction" ADD CONSTRAINT "_PageToPageAction_B_fkey" FOREIGN KEY ("B") REFERENCES "PageAction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
