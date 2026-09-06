import { NextRequest } from "next/server";

export function getClientInfo(request: NextRequest) {

  return {

    userAgent:
      request.headers.get("user-agent")
      ||
      "unknown",

    platform:
      "TradeXpress Enterprise",

    domain:
      "tradexpress.co",

    ip:
      request.headers.get("x-forwarded-for")
      ||
      request.headers.get("x-real-ip")
      ||
      "unknown"

  };

}
