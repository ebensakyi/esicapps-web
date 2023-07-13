/*
  Warnings:

  - You are about to alter the column `totalRating` on the `Inspection` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `totalRating` on the `InspectionHistory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `rating` on the `LiquidWasteSection` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `rating` on the `LiquidWasteSectionHistory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `rating` on the `SolidWasteSection` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `rating` on the `SolidWasteSectionHistory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `rating` on the `WaterSection` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.
  - You are about to alter the column `rating` on the `WaterSectionHistory` table. The data in that column could be lost. The data in that column will be cast from `Decimal(4,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Inspection" ALTER COLUMN "totalRating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "InspectionHistory" ALTER COLUMN "totalRating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "LiquidWasteSection" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "LiquidWasteSectionHistory" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "SolidWasteSection" ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "SolidWasteSectionHistory" ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "WaterSection" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "WaterSectionHistory" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;
