/*
  Warnings:

  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_inspectionFormId_fkey";

-- AlterTable
ALTER TABLE "RespondentDesignation" ADD COLUMN     "premisesSubtypeId" INTEGER;

-- DropTable
DROP TABLE "Service";

-- AddForeignKey
ALTER TABLE "RespondentDesignation" ADD CONSTRAINT "RespondentDesignation_premisesSubtypeId_fkey" FOREIGN KEY ("premisesSubtypeId") REFERENCES "PremisesSubtype"("id") ON DELETE SET NULL ON UPDATE CASCADE;
