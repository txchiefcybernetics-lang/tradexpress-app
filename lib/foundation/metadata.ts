import { APP, COMPANY } from "./constants";
import { VERSION_STRING } from "./version";

export const METADATA = {
  app: APP.NAME,
  shortName: APP.SHORT_NAME,
  company: COMPANY.NAME,
  version: VERSION_STRING,
} as const;
