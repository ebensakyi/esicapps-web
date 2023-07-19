/*
  Warnings:

  - You are about to drop the column `userTypeId` on the `PageAccess` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[path]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userRoleId` to the `PageAccess` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PageAccess" DROP CONSTRAINT "PageAccess_userTypeId_fkey";

-- AlterTable
ALTER TABLE "PageAccess" DROP COLUMN "userTypeId",
ADD COLUMN     "userRoleId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Page_name_key" ON "Page"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Page_path_key" ON "Page"("path");

-- AddForeignKey
ALTER TABLE "PageAccess" ADD CONSTRAINT "PageAccess_userRoleId_fkey" FOREIGN KEY ("userRoleId") REFERENCES "UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
