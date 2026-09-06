import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'chat_logs.json');

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

    // Fetch from Supabase if configured
    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('fytavhhlqtkcnqsozyco')) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase
        .from('chat_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
      if (!error && data) {
        return NextResponse.json({ logs: data });
      }
    }

    // Fallback to local JSON
    if (!fs.existsSync(logFilePath)) {
      return NextResponse.json({ logs: [] });
    }
    const logs = JSON.parse(fs.readFileSync(logFilePath, 'utf8'));
    return NextResponse.json({ logs });
  } catch (err: any) {
    return NextResponse.json({ logs: [], error: err.message });
  }
}
