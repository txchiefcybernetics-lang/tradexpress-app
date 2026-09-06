import { SignJWT, jwtVerify } from "jose";


const secret = new TextEncoder().encode(
  process.env.TX_JWT_SECRET
);


export async function createTXToken(payload:{
  id:string;
  email:string;
  role:string;
}) {

  return await new SignJWT(payload)
    .setProtectedHeader({
      alg:"HS256"
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

}



export async function verifyTXToken(
  token:string
){

  const { payload } =
    await jwtVerify(
      token,
      secret
    );

  return payload;

}
