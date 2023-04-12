/*
  Warnings:

  - You are about to drop the column `sanitaryPremisesInfoSectionId` on the `PremisesCommunalContainerCondition` table. All the data in the column will be lost.
  - Added the required column `solidWasteSectionId` to the `PremisesCommunalContainerCondition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" DROP CONSTRAINT "PremisesCommunalContainerCondition_sanitaryPremisesInfoSec_fkey";

-- AlterTable
ALTER TABLE "PremisesCommunalContainerCondition" DROP COLUMN "sanitaryPremisesInfoSectionId",
ADD COLUMN     "solidWasteSectionId" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "PremisesCommunalContainerCondition" ADD CONSTRAINT "PremisesCommunalContainerCondition_solidWasteSectionId_fkey" FOREIGN KEY ("solidWasteSectionId") REFERENCES "SolidWasteSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
