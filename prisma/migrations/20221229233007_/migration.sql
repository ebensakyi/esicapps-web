-- AlterTable
ALTER TABLE "BasicInfoSection" ADD COLUMN     "imagePath" VARCHAR(255);

-- AlterTable
ALTER TABLE "LiquidWasteSection" ADD COLUMN     "imagePath1" VARCHAR(255),
ADD COLUMN     "imagePath2" VARCHAR(255);

-- AlterTable
ALTER TABLE "SolidWasteSection" ADD COLUMN     "imagePath" VARCHAR(255);

-- AlterTable
ALTER TABLE "WaterSection" ADD COLUMN     "imagePath" VARCHAR(255);
