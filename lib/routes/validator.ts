import { routes } from "./registry";

export function validateRoute(path: string) {

  // remove accidental prefix letters
  let normalized = path;

  if (path.startsWith("/ldashboard")) {
    normalized = path.replace(
      "/ldashboard",
      "/dashboard"
    );
  }


  if (routes.includes(normalized)) {
    return {
      status: "recovered",
      original: path,
      normalized,
      suggestion: [normalized],
    };
  }


  return {
    status: "invalid",
    original: path,
    normalized,
    suggestion: [],
  };
}
