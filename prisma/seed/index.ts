import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


import { userLevel} from "./userLevel";

import { userRole } from "./userRole";

import { region } from "./region";
import { inspectionForm } from "./inspectionForm";

// import { community } from "./community";
import { district } from "./district";
import { drainType } from "./drainType";
import { effluentManagement } from "./effluentManagement";
import { excretaContainment } from "./excretaContainment";
import { excretaDisposalMethod } from "./excretaDisposalMethod";
import { waterFrequency } from "./waterFlowFrequency";
import { wasteFrequency } from "./wasteCollectionFrequency";

import { inspectionType } from "./inspectionType";
import { respondentDesignation } from "./respondentDesignation";
import { solidWasteReceptacle } from "./solidWasteReceptacle";
import { toiletType } from "./toiletType";
import { waterSourceType } from "./waterSourceType";
import { drinkingWaterSourceType } from "./drinkingWaterSourceType";

import { waterStorageType } from "./waterStorageType";
import { waterSupplyType } from "./waterSupplyType";
import { waterTreatmentType } from "./waterTreatmentType";
import { yesNo } from "./yesNo";
import { greyWaterDisposal } from "./greyWaterDisposal";
import { wasteCollectionType } from "./wasteCollectionType";
import { nuisance } from "./nuisance";

import { action } from "./action";
import { pestSign } from "./pestSign";
import { structureType } from "./structureType";
import { toiletPitPosition } from "./toiletPitPosition";
import { services } from "./premisesServices";
import { types } from "./types";
import { subtypes } from "./premisesSubtypes";
import { hazardousWasteDisposal } from "./hazardousWasteDisposal";
import { derattingFrequency } from "./derattingFrequency";
import { ownershipType } from "./ownershipType";
import { cemeteryWorkers } from "./cemeteryWorkers";
import { wasteWaterContainment } from "./wasteWaterContainment";

import { users } from "./users";
// import { electoralArea } from "./electoralArea";
import { animalType } from "./animalType";
import { unservicedWasteDisposal } from "./unservicedWasteDisposal";
import { unsafeWaterStorage } from "./unsafeWaterStorage";
import { toiletDischarge } from "./toiletDischarge";
import { sewerSystem } from "./sewerSystem";
import { unsafeToiletCondition } from "./unsafeToiletCondition";
import { drainBadCondition } from "./drainBadCondition";
import { easeYourselfWhere } from "./easeYourselfWhere";
import { sanitaryInsanitary } from "./sanitaryInsanitary";
import { safeUnsafe } from "./safeUnsafe";
import { disinfectionFrequency } from "./disinfectionFrequency";
import { cleaningFrequency } from "./cleaningFrequency";
import { desiltingFrequency } from "./desiltingFrequency";
import { containerVolume } from "./containerVolume";
import { toiletHouseholdNumber } from "./toiletHouseholdNumber";

import {messageType} from "./messageType";
import {sendingType} from "./sendingType";
import {reportType} from "./reportType";
import { userGuides } from "./userGuides";
import { formSectionImage } from "./formSectionImage";
import { containerCondition } from "./containerCondition";
import { pages } from "./page";
import { pageAccess } from "./pageAccess";

async function main() {









  await prisma.inspectionForm.createMany({
    data: inspectionForm,
  });

  await prisma.inspectionType.createMany({
    data: inspectionType,
  });

  await prisma.region.createMany({
    data: region,
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

  await prisma.waterFlowFrequency.createMany({
    data: waterFrequency,
  });
  await prisma.wasteCollectionFrequency.createMany({
    data: wasteFrequency,
  });
  await prisma.solidWasteReceptacle.createMany({
    data: solidWasteReceptacle,
  });
  // await prisma.storageCondition.createMany({
  //   data: storageCondition,
  // });

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
  await prisma.structureType.createMany({
    data: structureType,
  });
  await prisma.toiletPitPosition.createMany({
    data: toiletPitPosition,
  });

  await prisma.premisesService.createMany({
    data: services,
  });
  await prisma.premisesType.createMany({
    data: types,
  });
  await prisma.premisesSubtype.createMany({
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

  await prisma.cemeteryWorkers.createMany({
    data: cemeteryWorkers,
  });

  await prisma.wasteWaterContainment.createMany({
    data: wasteWaterContainment,
  }); await prisma.userRole.createMany({
    data: userRole,
  });
  await prisma.page.createMany({
    data: pages,
  })
  await prisma.pageAccess.createMany({
    data: pageAccess,
  })
  
  await prisma.userLevel.createMany({
    data: userLevel,
  });
 
 

 
  await prisma.user.createMany({
    data: users,
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

  await prisma.drainBadCondition.createMany({
    data: drainBadCondition,
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

  await prisma.messageType.createMany({
    data: messageType,
  });  
  await prisma.sendingType.createMany({
    data: sendingType,
  });
  // await prisma.community.createMany({
  //   data: community,
  // });
 await prisma.reportType.createMany({
    data: reportType,
  });
  await prisma.reportType.createMany({
    data: reportType,
  });


  await prisma.formSectionImage.createMany({
    data: formSectionImage,
  })
  await prisma.communalContainerCondition.createMany({
    data: containerCondition,
  })

 
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
