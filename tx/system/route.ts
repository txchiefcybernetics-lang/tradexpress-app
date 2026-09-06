import {NextResponse} from "next/server";
import {
 getSystemStatus
} from "@/lib/adapters/systemAdapter";


export async function GET(){

 return NextResponse.json({

   service:"TX System Adapter",

   data:
     getSystemStatus()

 });

}
