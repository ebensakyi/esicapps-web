-- DropForeignKey
ALTER TABLE "LiquidWasteSection" DROP CONSTRAINT "LiquidWasteSection_toiletHouseholdNumberId_fkey";

-- AlterTable
ALTER TABLE "LiquidWasteSection" ALTER COLUMN "toiletHouseholdNumberId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LiquidWasteSection" ADD CONSTRAINT "LiquidWasteSection_toiletHouseholdNumberId_fkey" FOREIGN KEY ("toiletHouseholdNumberId") REFERENCES "ToiletHouseholdNumber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
