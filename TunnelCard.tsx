interface Props {

name:string;

type:string;

owner:string;

status:string;

devices:number;

}


export default function TunnelCard({
name,
type,
owner,
status,
devices
}:Props){


return (

<div className="rounded-xl border p-5 space-y-3">

<h2 className="text-lg font-bold">
{name}
</h2>


<p>
Type: {type}
</p>


<p>
Owner: {owner}
</p>


<p>
Devices: {devices}
</p>


<p>
Status:
<span className="ml-2 font-semibold">
{status}
</span>
</p>


</div>

);

}
