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
CREATE TABLE "WasteCollectionFrequency" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WasteCollectionFrequency_pkey" PRIMARY KEY ("id")
);
