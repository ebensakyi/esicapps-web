export const dynamic = "force-dynamic";

import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Extract query parameters if needed (e.g., filtering by regionId)
    // const url = new URL(request.url);
    // const regionId = url.searchParams.get("region");

    // let { searchParams } = new URL(request.url);


    let regionId: any = undefined // searchParams.get("region")

    

    // Step 1: Query the districts with their inspection counts, filtering by deleted on the inspections
    const inspectionsByDistrict = await prisma.district.findMany({
      where: {
        deleted: 0,
        ...(regionId ? { regionId: Number(regionId) } : {}),
      },
      select: {
        name: true,
        Region: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            Inspection: {
              where: {
                deleted: 0, 
              },
            },
          },
        },
      },
    });

    // Step 2: Filter out districts with zero inspection counts
    const filteredInspections = inspectionsByDistrict.filter(
      (district) => district._count.Inspection > 0
    );

    // Step 3: Sort the results by inspection count in descending order
    filteredInspections.sort(
      (a, b) => b._count.Inspection - a._count.Inspection
    );
// console.log(filteredInspections);

    // Return the sorted data
    return NextResponse.json(filteredInspections);
  } catch (e:any) {
    console.log(e);
    return NextResponse.json({ error: e.message });
  }
}
