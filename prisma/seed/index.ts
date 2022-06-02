import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { userType } from "./userType";

import { region } from "./region";

import { analCleansingMaterialMgt } from "./analCleansingMaterialMgt";
import { community } from "./community";
import { condition } from "./condition";
import { district } from "./district";
import { drainType } from "./drainType";
import { effluentManagement } from "./effluentManagement";
import { excretaContainment } from "./excretaContainment";
import { excretaDisposalMethod } from "./excretaDisposalMethod";
import { facility } from "./facility";
import { facilityKind } from "./facilityKind";
import { frequency } from "./frequency";
import { inspectionType } from "./inspectionType";
import { plantCondition } from "./plantCondition";
import { respondentDesignation } from "./respondentDesignation";
import { safeUnsafe } from "./safeUnsafe";
import { serviceProvided } from "./serviceProvided";
import { solidWasteReceptacle } from "./solidWasteReceptacle";
import { storageCondition } from "./storageCondition";
import { subDistrict } from "./subDistrict";
import { toiletType } from "./toiletType";
import { waterSourceType } from "./waterSourceType";

import { waterStorageType } from "./waterStorageType";
import { waterSupplyType } from "./waterSupplyType";
import { waterTreatmentType } from "./waterTreatmentType";
import { yesNo } from "./yesNo";
import { zone } from "./zone";
async function main() {
 
  await prisma.userType.createMany({
    data: userType,
  });
 
  await prisma.region.createMany({
    data: region,
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
     await prisma.$disconnect();
  });
