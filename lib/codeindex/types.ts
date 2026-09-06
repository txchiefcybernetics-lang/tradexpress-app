export interface CodeDocument {

  id:string;

  file:string;

  language:string;

  type:
    "component" |
    "api" |
    "service" |
    "module" |
    "config";

  symbols:string[];

  description:string;

  content:string;

}
