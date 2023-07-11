import prisma from "../../../../../prisma/db";

// export const toiletAvailability = async (filterBy, filterValue) => {
    
//     let safe = await prisma.liquidWasteSection.count({
//       where:
//         filterBy == "undefined"
//           ? {
//               deleted: 0,
//               toiletAdequacyId: 1,
            
//             }
//           : {
//               deleted: 0,
//               toiletAdequacyId: 1,
//               Inspection: {
//                 [filterBy]: filterValue,
//               },
//             },
//     });
//     let unsafe = await prisma.waterSection.count({
//       where:
//       filterBy == "undefined"
//         ? {
//             deleted: 0,
//             toiletAdequacyId: 2,
          
//           }
//         : {
//             deleted: 0,
//             toiletAdequacyId: 2,
//             Inspection: {
//               [filterBy]: filterValue,
//             },
//           },
//     });
  
//     return [
//       { label: "Safe", value: safe },
//       { label: "Unsafe", value: unsafe },
//     ];
//   };

  export const toiletAdequacy = async (filterBy, filterValue) => {
    
    let adequate = await prisma.liquidWasteSection.count({
      where:
        filterBy == "undefined"
          ? {
              deleted: 0,
              toiletAdequacyId: 1,
            
            }
          : {
              deleted: 0,
              toiletAdequacyId: 1,
              Inspection: {
                [filterBy]: filterValue,
              },
            },
    });
    let inadequate = await prisma.liquidWasteSection.count({
      where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            toiletAdequacyId: 2,
          
          }
        : {
            deleted: 0,
            toiletAdequacyId: 2,
            Inspection: {
              [filterBy]: filterValue,
            },
          },
    });
  
    return [
      { label: "Adequate", value: adequate },
      { label: "Inadequate", value: inadequate },
    ];
  };

  export const toiletCondition = async (filterBy, filterValue) => {
    
    let safe = await prisma.liquidWasteSection.count({
      where:
        filterBy == "undefined"
          ? {
              deleted: 0,
              toiletConditionId: 1,
            
            }
          : {
              deleted: 0,
              toiletConditionId: 1,
              Inspection: {
                [filterBy]: filterValue,
              },
            },
    });
    let unsafe = await prisma.liquidWasteSection.count({
      where:
      filterBy == "undefined"
        ? {
            deleted: 0,
            toiletAdequacyId: 2,
          
          }
        : {
            deleted: 0,
            toiletAdequacyId: 2,
            Inspection: {
              [filterBy]: filterValue,
            },
          },
    });
  
    return [
      { label: "Safe", value: safe },
      { label: "Unsafe", value: unsafe },
    ];
  };
  function toJson(data) {
    return JSON.parse(
      JSON.stringify(data, (_, v) =>
        typeof v === "bigint" ? `${v}n` : v
      ).replace(/"(-?\d+)n"/g, (_, a) => a)
    );
  }
  