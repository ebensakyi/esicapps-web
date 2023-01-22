/*
  Warnings:

  - You are about to drop the column `imagePath` on the `BasicInfoSection` table. All the data in the column will be lost.
  - You are about to drop the column `imagePath1` on the `LiquidWasteSection` table. All the data in the column will be lost.
  - You are about to drop the column `imagePath2` on the `LiquidWasteSection` table. All the data in the column will be lost.
  - You are about to drop the column `imagePath` on the `SolidWasteSection` table. All the data in the column will be lost.
  - You are about to drop the column `imagePath` on the `WaterSection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BasicInfoSection" DROP COLUMN "imagePath";

-- AlterTable
ALTER TABLE "LiquidWasteSection" DROP COLUMN "imagePath1",
DROP COLUMN "imagePath2";

-- AlterTable
ALTER TABLE "SolidWasteSection" DROP COLUMN "imagePath";

-- AlterTable
ALTER TABLE "WaterSection" DROP COLUMN "imagePath";

-- CreateTable
CREATE TABLE "InspectionPictures" (
    "id" SERIAL NOT NULL,
    "basicInfoPicture" VARCHAR(255),
    "waterPicture" VARCHAR(255),
    "liquidWastePicture1" VARCHAR(255),
    "liquidWastePicture2" VARCHAR(255),
    "solidWastePicture" VARCHAR(255),
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "inspectionId" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "InspectionPictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InspectionPictures" ADD CONSTRAINT "InspectionPictures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionPictures" ADD CONSTRAINT "InspectionPictures_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
