import { TX_ROUTES } from "./routes";


export function recoverRoute(path: string) {

  const normalized = path
    .replace(/\/+$/, "")
    .replace(/-$/, "");


  const exact = TX_ROUTES.find(
    (route) => route === normalized
  );


  if (exact) {
    return {
      status: "valid",
      route: exact,
    };
  }


  const suggestion = TX_ROUTES.filter(
    (route) =>
      route.includes(
        normalized.split("/").pop() || ""
      )
  );


  return {
    status: "recovered",
    original: path,
    normalized,
    suggestion,
  };
}
