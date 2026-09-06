export type TunnelType =
  | "individual"
  | "company"
  | "partner";


export type TunnelStatus =
  | "active"
  | "inactive"
  | "pending";


export interface Tunnel {

  id: string;

  name: string;

  type: TunnelType;

  owner: string;

  status: TunnelStatus;

  devices: number;

  created: string;

}


export const tunnels: Tunnel[] = [

  {
    id: "TX-TUN-001",
    name: "Kenny Private Tunnel",
    type: "individual",
    owner: "Kenny",
    status: "active",
    devices: 2,
    created: "2026-08-06"
  },


  {
    id: "TX-TUN-002",
    name: "ABC Logistics Enterprise",
    type: "company",
    owner: "ABC Logistics",
    status: "active",
    devices: 25,
    created: "2026-08-06"
  },


  {
    id: "TX-TUN-003",
    name: "Trade Partner Network",
    type: "partner",
    owner: "Global Partners",
    status: "pending",
    devices: 8,
    created: "2026-08-06"
  }

];
