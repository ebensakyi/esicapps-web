import { prisma } from "@/prisma/db";

export async function GET(request: Request) {
    try {
        const res = await request.json();

        const relationCount = await prisma.user.findMany({
            include: {
              _count: {
                select: { Inspection: true },
              },
            },
          })

          console.log(relationCount);
          


      

    }catch(e){

    }}
