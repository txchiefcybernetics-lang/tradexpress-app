import TunnelCard from "@/components/tunnels/TunnelCard";
import { tunnels } from "@/lib/tunnels";


export default function TunnelPage(){


return (

<div className="space-y-8">


<div>

<h1 className="text-3xl font-bold">
TX Secure Tunnel Console
</h1>


<p>
Private connectivity management for individuals,
companies, and partners.
</p>

</div>



<div className="grid md:grid-cols-3 gap-6">


{tunnels.map((tunnel)=>(

<TunnelCard

key={tunnel.id}

name={tunnel.name}

type={tunnel.type}

owner={tunnel.owner}

status={tunnel.status}

devices={tunnel.devices}

/>

))}


</div>


</div>

);

}
