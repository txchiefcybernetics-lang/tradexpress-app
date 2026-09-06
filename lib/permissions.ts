export const TX_ROLES = {

 admin:[
   "dashboard",
   "console",
   "security",
   "deploy"
 ],

 developer:[
   "workspace",
   "runtime",
   "logs"
 ],

 broker:[
   "customs",
   "documents"
 ],

 executive:[
   "dashboard",
   "analytics",
   "reports"
 ]

};


export function hasPermission(
 role:string,
 permission:string
){

const permissions =
 TX_ROLES[
   role as keyof typeof TX_ROLES
 ];

return permissions?.includes(permission)
 ?? false;

}
