import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { userType } from "./userType";

import { region } from "./region";
import { inspectionForm } from "./inspectionForm";

import { analCleansingMaterialMgt } from "./analCleansingMaterialMgt";
import { community } from "./community";
import { district } from "./district";
import { drainType } from "./drainType";
import { effluentManagement } from "./effluentManagement";
import { excretaContainment } from "./excretaContainment";
import { excretaDisposalMethod } from "./excretaDisposalMethod";
import { facility } from "./facility";
import { waterFrequency } from "./waterFlowFrequency";
import { wasteFrequency } from "./wasteCollectionFrequency";

import { inspectionType } from "./inspectionType";
import { respondentDesignation } from "./respondentDesignation";
import { solidWasteReceptacle } from "./solidWasteReceptacle";
import { storageCondition } from "./storageCondition";
import { toiletType } from "./toiletType";
import { waterSourceType } from "./waterSourceType";
import { drinkingWaterSourceType } from "./drinkingWaterSourceType";

import { waterStorageType } from "./waterStorageType";
import { waterSupplyType } from "./waterSupplyType";
import { waterTreatmentType } from "./waterTreatmentType";
import { yesNo } from "./yesNo";
import { zone } from "./zone";
import { greyWaterDisposal } from "./greyWaterDisposal";
import { wasteCollectionType } from "./wasteCollectionType";
import { nuisance } from "./nuisance";

import { action } from "./action";
import { pestSign } from "./pestSign";
import { temporaryPermanent } from "./temporaryPermanent";
import { toiletPitPosition } from "./toiletPitPosition";
import { services } from "./services";
import { types } from "./types";
import { subtypes } from "./subtypes";
import { hazardousWasteDisposal } from "./hazardousWasteDisposal";
import { derattingFrequency } from "./derattingFrequency";
import { ownershipType } from "./ownershipType";
import { userLevel } from "./userLevel";
import { cemeteryWorkers } from "./cemeteryWorkers";
import { wasteWaterContainment } from "./wasteWaterContainment";

import { pages } from "./page";
import { pageActions } from "./pageAction";
import { superUser } from "./superAdmin";
import { electoralArea } from "./electoralArea";
import { animalType } from "./animalType";
import { unservicedWasteDisposal } from "./unservicedWasteDisposal";
import { dataVersion } from "./dataVersion";
import { unsafeWaterStorage } from "./unsafeWaterStorage";
import { toiletDischarge } from "./toiletDischarge";
import { sewerSystem } from "./sewerSystem";
import { unsafeToiletCondition } from "./unsafeToiletCondition";
import { badDrainCondition } from "./badDrainCondition";
import { easeYourselfWhere } from "./easeYourselfWhere";
import { sanitaryInsanitary } from "./sanitaryInsanitary";
import { safeUnsafe } from "./safeUnsafe";
import { disinfectionFrequency } from "./disinfectionFrequency";
import { cleaningFrequency } from "./cleaningFrequency";
import { desiltingFrequency } from "./desiltingFrequency";
import {containerVolume} from "./containerVolume";
import {toiletHouseholdNumber} from "./toiletHouseholdNumber";

async function main() {
  await prisma.dataVersion.createMany({
    data: dataVersion,
  });

  await prisma.inspectionForm.createMany({
    data: inspectionForm,
  });

  await prisma.inspectionType.createMany({
    data: inspectionType,
  });

  await prisma.region.createMany({
    data: region,
  });

  await prisma.analCleansingMaterialMgt.createMany({
    data: analCleansingMaterialMgt,
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

  await prisma.waterFlowFrequency.createMany({
    data: waterFrequency,
  });
  await prisma.wasteCollectionFrequency.createMany({
    data: wasteFrequency,
  });
  await prisma.solidWasteReceptacle.createMany({
    data: solidWasteReceptacle,
  });
  await prisma.storageCondition.createMany({
    data: storageCondition,
  });

  await prisma.toiletType.createMany({
    data: toiletType,
  });
  await prisma.waterSourceType.createMany({
    data: waterSourceType,
  });
  await prisma.drinkingWaterSourceType.createMany({
    data: drinkingWaterSourceType,
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
  await prisma.greyWaterDisposal.createMany({
    data: greyWaterDisposal,
  });

  await prisma.wasteCollectionType.createMany({
    data: wasteCollectionType,
  });

  await prisma.nuisance.createMany({
    data: nuisance,
  });

  await prisma.action.createMany({
    data: action,
  });

  await prisma.pestSign.createMany({
    data: pestSign,
  });
  await prisma.temporaryPermanent.createMany({
    data: temporaryPermanent,
  });
  await prisma.toiletPitPosition.createMany({
    data: toiletPitPosition,
  });

  await prisma.service.createMany({
    data: services,
  });
  await prisma.type.createMany({
    data: types,
  });
  await prisma.subtype.createMany({
    data: subtypes,
  });
  await prisma.hazardousWasteDisposalMethod.createMany({
    data: hazardousWasteDisposal,
  });

  await prisma.derattingFrequency.createMany({
    data: derattingFrequency,
  });
  await prisma.ownershipType.createMany({
    data: ownershipType,
  });
  await prisma.respondentDesignation.createMany({
    data: respondentDesignation,
  });

  await prisma.userLevel.createMany({
    data: userLevel,
  });

  await prisma.cemeteryWorkers.createMany({
    data: cemeteryWorkers,
  });

  await prisma.wasteWaterContainment.createMany({
    data: wasteWaterContainment,
  });

  await prisma.page.createMany({
    data: pages,
  });
  await prisma.pageAction.createMany({
    data: pageActions,
  });

  await prisma.userType.createMany({
    data: userType,
  });
  await prisma.electoralArea.createMany({
    data: electoralArea,
  });

  await prisma.community.createMany({
    data: community,
  });
  await prisma.user.createMany({
    data: superUser,
  });
  await prisma.animalType.createMany({
    data: animalType,
  });

  await prisma.unservicedWasteDisposal.createMany({
    data: unservicedWasteDisposal,
  });

  await prisma.unsafeWaterStorage.createMany({
    data: unsafeWaterStorage,
  });

  await prisma.toiletDischarge.createMany({
    data: toiletDischarge,
  });

  await prisma.sewerSystem.createMany({
    data: sewerSystem,
  });

  await prisma.unsafeToiletCondition.createMany({
    data: unsafeToiletCondition,
  });

  await prisma.badDrainCondition.createMany({
    data: badDrainCondition,
  });

  await prisma.easeYourselfWhere.createMany({
    data: easeYourselfWhere,
  });
  await prisma.sanitaryInsanitary.createMany({
    data: sanitaryInsanitary,
  });

  await prisma.safeUnsafe.createMany({
    data: safeUnsafe,
  });


  await prisma.disinfectionFrequency.createMany({
    data: disinfectionFrequency,
  });

  await prisma.cleaningFrequency.createMany({
    data: cleaningFrequency,
  });

  await prisma.desiltingFrequency.createMany({
    data: desiltingFrequency,
  });

  await prisma.containerVolume.createMany({
    data: containerVolume,
  });

  await prisma.toiletHouseholdNumber.createMany({
    data: toiletHouseholdNumber,
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
