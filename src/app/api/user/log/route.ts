import { generateCode } from "@/utils/generate-code";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import bcrypt from "bcryptjs";
import { prisma } from "@/prisma/db";
import { sendSMS } from "@/utils/send-hubtel-sms";
import { append_233 } from "@/utils/append-233";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
    try {
        const session = await getServerSession(options);
         let logs =   await prisma.logs.findMany({where:{deleted:0},include:{User:true}})
         console.log("logs");
         
            return NextResponse.json(logs);

    } catch (error) {
        console.log(error);
        
        return NextResponse.json(error);

    }
}