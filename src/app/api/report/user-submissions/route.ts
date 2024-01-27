import { prisma } from "@/prisma/db";

export async function GET(request: Request) {
    try {
        const res = await request.json();

        const usersWithInspectionCount = await prisma.user.findMany({
            include: {
              Inspection: {
                select: {
                  id: true
                },
                _count: true
              }
            }
          });
          console.log(usersWithInspectionCount);
          

    }catch(e){

    }}
