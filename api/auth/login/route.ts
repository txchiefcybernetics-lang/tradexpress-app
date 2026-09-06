import { NextResponse } from "next/server";
import { createTXToken } from "@/lib/auth/jwt";


export async function POST(req:Request){

 const {email,password}=await req.json();


 // temporary user check
 if(
   email==="admin@tradexpress.co" &&
   password==="admin"
 ){

  const token =
    await createTXToken({
      id:"tx-admin-001",
      email,
      role:"admin"
    });


  return NextResponse.json({
    token
  });

 }


 return NextResponse.json(
  {
   error:"Invalid credentials"
  },
  {
   status:401
  }
 );

}
