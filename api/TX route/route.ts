import { NextResponse } from "next/server";
import { askLocalAI } from "@/lib/ai/localAI";


export async function POST(req:Request){

  const body = await req.json();


  const result = await askLocalAI(
    body.prompt
  );


  return NextResponse.json(result);

}
