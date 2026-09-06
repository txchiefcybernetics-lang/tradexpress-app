"use client";

import { useEffect, useState } from "react";

interface ServerData {
  server: string;
  status: string;
  cpu: number;
  memory: number;
  disk: number;
  services: {
    nginx: string;
    ollama: string;
    ssh: string;
  };
}

export default function ServerMonitor() {
  const [data, setData] = useState<ServerData | null>(null);

  useEffect(() => {
    async function loadServer() {
      try {
        const res = await fetch(
          "http://192.168.0.198:5000/health"
        );

        const json = await res.json();

        setData(json);

      } catch (error) {
        console.error(error);
      }
    }

    loadServer();

    const timer = setInterval(
      loadServer,
      10000
    );

    return () => clearInterval(timer);

  }, []);


  if (!data) {
    return (
      <div className="rounded-xl border p-6">
        Loading server status...
      </div>
    );
  }


  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-xl border p-6">
        <h2 className="font-bold">
          Ubuntu Server
        </h2>

        <p>Status: {data.status}</p>
        <p>CPU: {data.cpu}%</p>
        <p>Memory: {data.memory}%</p>
        <p>Disk: {data.disk}%</p>
      </div>


      <div className="rounded-xl border p-6">
        <h2 className="font-bold">
          Services
        </h2>

        <p>Nginx: {data.services.nginx}</p>
        <p>Ollama: {data.services.ollama}</p>
        <p>SSH: {data.services.ssh}</p>
      </div>


      <div className="rounded-xl border p-6">
        <h2 className="font-bold">
          Infrastructure
        </h2>

        <p>
          Server: {data.server}
        </p>

        <p>
          Monitoring: Active
        </p>
      </div>

    </div>
  );
}
