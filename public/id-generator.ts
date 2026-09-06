import { randomBytes } from 'crypto';

/**
 * Nag-generate og unique deployment ID para sa TX message tunneling
 * Format: tx-[timestamp]-[random-hex]
 */
export function generateDeploymentId(prefix: string = 'tx'): string {
  const randomStr = randomBytes(4).toString('hex');
  const timestamp = Date.now().toString(36);
  
  return `${prefix}-${timestamp}-${randomStr}`;
}
