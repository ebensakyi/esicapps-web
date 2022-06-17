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
import { frequency } from "./frequency";
import { inspectionType } from "./inspectionType";
import { service } from "./service";
import { respondentDesignation } from "./respondentDesignation";
import { safeUnsafe } from "./safeUnsafe";
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

  await prisma.analCleansingMaterialMgt.createMany({
    data: analCleansingMaterialMgt,
  });
  await prisma.community.createMany({
    data: community,
  });
  await prisma.condition.createMany({
    data: condition,
  });
  await prisma.district.createMany({
    data: district,
  });
  await prisma.drainType.createMany({
    data: drainType,
  });
  await prisma.effluentManagement.createMany({
    data: effluentManagement,
  });
  await prisma.excretaContainment.createMany({
    data: excretaContainment,
  });
  await prisma.excretaDisposalMethod.createMany({
    data: excretaDisposalMethod,
  });

  await prisma.facility.createMany({
    data: facility,
  });

  await prisma.frequency.createMany({
    data: frequency,
  });
  await prisma.inspectionType.createMany({
    data: inspectionType,
  });
  await prisma.safeUnsafe.createMany({
    data: safeUnsafe,
  });
  await prisma.respondentDesignation.createMany({
    data: respondentDesignation,
  });

  await prisma.service.createMany({
    data: service,
  });
  await prisma.solidWasteReceptacle.createMany({
    data: solidWasteReceptacle,
  });
  await prisma.storageCondition.createMany({
    data: storageCondition,
  });
  await prisma.subDistrict.createMany({
    data: subDistrict,
  });

  await prisma.toiletType.createMany({
    data: toiletType,
  });
  await prisma.waterSourceType.createMany({
    data: waterSourceType,
  });
  await prisma.waterStorageType.createMany({
    data: waterStorageType,
  });
  await prisma.waterSupplyType.createMany({
    data: waterSupplyType,
  });

  await prisma.waterTreatmentType.createMany({
    data: waterTreatmentType,
  });
  await prisma.yesNo.createMany({
    data: yesNo,
  });
  await prisma.zone.createMany({
    data: zone,
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
