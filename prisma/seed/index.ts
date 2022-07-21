import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { userType } from "./userType";

import { region } from "./region";
import { inspectionForm } from "./inspectionForm";
import { institution } from "./institution";
import { institutionType } from "./institutionType";

import { analCleansingMaterialMgt } from "./analCleansingMaterialMgt";
import { community } from "./community";
//import { condition } from "./condition";
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
import { solidWasteReceptacle } from "./solidWasteReceptacle";
import { storageCondition } from "./storageCondition";
import { subdistrict } from "./subdistrict";
import { toiletType } from "./toiletType";
import { waterSourceType } from "./waterSourceType";

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
//  import { healthPremisesType } from "./healthPremisesType";
//  import { healthPremisesService } from "./healthPremisesService";
//  import { hospitalityPremisesType } from "./hospitalityPremisesType";
//  import {hospitalityPremisesService } from "./hospitalityPremisesService";

 import { premisesService } from "./premisesService";
 import { premisesType } from "./premisesType";

import { hazardousWasteDisposal } from "./hazardousWasteDisposal";
import { premisesCategory } from "./premisesCategory";
import { consumableType } from "./consumableType";
import { nonConsumableType } from "./nonConsumableType";
import { derattingFrequency } from "./derattingFrequency";
import { ownershipType } from "./ownershipType";

async function main() {
  await prisma.inspectionForm.createMany({
    data: inspectionForm,
  });

  await prisma.institutionType.createMany({
    data: institutionType,
  });
  await prisma.inspectionType.createMany({
    data: inspectionType,
  });
  await prisma.userType.createMany({
    data: userType,
  });
  await prisma.institution.createMany({
    data: institution,
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
  // await prisma.condition.createMany({
  //   data: condition,
  // });
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

  await prisma.respondentDesignation.createMany({
    data: respondentDesignation,
  });

 
  await prisma.solidWasteReceptacle.createMany({
    data: solidWasteReceptacle,
  });
  await prisma.storageCondition.createMany({
    data: storageCondition,
  });
  await prisma.subdistrict.createMany({
    data: subdistrict,
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
  // await prisma.healthPremisesType.createMany({
  //   data: healthPremisesType,
  // });
  // await prisma.healthPremisesService.createMany({
  //   data: healthPremisesService,
  // });
  // await prisma.hospitalityPremisesType.createMany({
  //   data: hospitalityPremisesType,
  // });
  // await prisma.hospitalityPremisesService.createMany({
  //   data: hospitalityPremisesService,
  // });
  await prisma.premisesServices.createMany({
    data: premisesService,
  });
  await prisma.premisesType.createMany({
    data: premisesType,
  });
  await prisma.hazardousWasteDisposalMethod.createMany({
    data: hazardousWasteDisposal,
  });
  await prisma.premisesCategory.createMany({
    data: premisesCategory,
  });
  await prisma.consumableType.createMany({
    data: consumableType,
  });
  await prisma.nonConsumableType.createMany({
    data: nonConsumableType,
  });
  await prisma.derattingFrequency.createMany({
    data: derattingFrequency,
  });
  await prisma.ownershipType.createMany({
    data: ownershipType,
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
