import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = Number(searchParams.get('userId'))
    
    
    return NextResponse.json({ message: "This Worked", success: userId },{
        status: 400,
      });

}

export async function POST(request: Request) {
  try {
    
    return NextResponse.json({ message: "This Worked", success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err, success: false });
  }
}