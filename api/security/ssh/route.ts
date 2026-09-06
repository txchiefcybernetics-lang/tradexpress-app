import { NextResponse } from "next/server";
import { generateKeyPairSync } from "crypto";


export async function POST(){

  const { publicKey, privateKey } =
    generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding:{
        type:"pkcs1",
        format:"pem",
      },
      privateKeyEncoding:{
        type:"pkcs1",
        format:"pem",
      },
    });


  return NextResponse.json({
    publicKey,
    privateKey,
  });

}
