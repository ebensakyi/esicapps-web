import { prisma } from "@/prisma/db";

export const wasteCollectorRegistration = async (
  filterBy: any,
  filterValue: any,
  startDate: any,
  endDate: any
) => {
  let wasteCollectorRegistered = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            wasteServiceProviderRegistrationId: 1,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            wasteServiceProviderRegistrationId: 1,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });
  let wasteCollectorNotRegistered = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            wasteServiceProviderRegistrationId: 2,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            wasteServiceProviderRegistrationId: 2,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });

  let wasteCollectorNotRegistered1 = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            wasteServiceProviderRegistrationId: null,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            wasteServiceProviderRegistrationId: null,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });

  return [
    { label: "Registered", value: wasteCollectorRegistered },
    {
      label: "Not registered",
      value: wasteCollectorNotRegistered + wasteCollectorNotRegistered1,
    },
  ];
};

export const wasteSorting = async (
  filterBy: any,
  filterValue: any,
  startDate: any,
  endDate: any
) => {
  let wasteSorted = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            wasteSortingAvailabilityId: 1,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            wasteSortingAvailabilityId: 1,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });
  let wasteNotSorted = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            wasteSortingAvailabilityId: 2,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            wasteSortingAvailabilityId: 2,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });
  let wasteNotSorted1 = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            wasteSortingAvailabilityId: null,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            wasteSortingAvailabilityId: null,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });

  return [
    { label: "Waste sorted", value: wasteSorted },
    { label: "Waste not sorted", value: wasteNotSorted + wasteNotSorted1 },
  ];
};

export const wasteReceptacle = async (
  filterBy: any,
  filterValue: any,
  startDate: any,
  endDate: any
) => {
  let approvedWasteStorageReceptacle = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            approvedWasteStorageReceptacleId: 1,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            approvedWasteStorageReceptacleId: 1,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });
  let unApprovedWasteStorageReceptacle = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            approvedWasteStorageReceptacleId: 2,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            approvedWasteStorageReceptacleId: 2,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });
  let unApprovedWasteStorageReceptacle1 = await prisma.solidWasteSection.count({
    where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            approvedWasteStorageReceptacleId: null,createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }
        : {
            deleted: 0,
            approvedWasteStorageReceptacleId: null,createdAt: {
              gte: startDate,
              lte: endDate,
            },
            Inspection: {
              [filterBy]: Number(filterValue),
            },
          },
  });

  return [
    {
      label: "Approved Waste Receptacle",
      value: approvedWasteStorageReceptacle,
    },
    {
      label: "Unapproved Waste Receptacle",
      value: unApprovedWasteStorageReceptacle,
    },
  ];
};
