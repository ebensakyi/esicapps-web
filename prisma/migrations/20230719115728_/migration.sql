/*
  Warnings:

  - You are about to drop the column `url` on the `Page` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Page" DROP COLUMN "url",
ADD COLUMN     "path" VARCHAR(255);
