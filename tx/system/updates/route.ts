import {NextResponse} from "next/server";
import {
 getUbuntuUpdates
} from "@/lib/system/ubuntuAdapter";


export async function GET(){

 const result =
   await getUbuntuUpdates();


 return NextResponse.json({

   service:
    "TX Ubuntu Update Monitor",

   result

 });

}
