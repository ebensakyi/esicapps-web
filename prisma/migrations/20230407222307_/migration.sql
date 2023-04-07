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
CREATE TABLE "PremisesCommunalContainerCondition" (
    "id" VARCHAR(255) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "sanitaryPremisesInfoSectionId" VARCHAR(255) NOT NULL,
    "communalContainerConditionId" INTEGER NOT NULL,

    CONSTRAINT "PremisesCommunalContainerCondition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_sanitaryPremisesInfoSec_fkey" FOREIGN KEY ("sanitaryPremisesInfoSectionId") REFERENCES "SanitaryPremisesInfoSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_communalContainerCondit_fkey" FOREIGN KEY ("communalContainerConditionId") REFERENCES "CommunalContainerCondition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
