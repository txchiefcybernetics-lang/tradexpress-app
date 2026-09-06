// lib/audit/handler.ts


const AUDIT_PREFIX = "TX ROUTE AUDIT";

interface AuditRequest {
  path: string;
  method: string;
  ip?: string;
  userAgent?: string;
}

export function auditRequest(data: AuditRequest) {
  const timestamp = new Date().toISOString();

  const logEntry = {
    prefix: AUDIT_PREFIX,
    path: data.path,
    method: data.method,
    ip: data.ip ?? "unknown",
    userAgent: data.userAgent ?? "unknown",
    timestamp,
  };

  console.log(logEntry);

  return logEntry;
}
