import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('documents')
      .select('workspace_id, title, source, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const uniqueWorkspaces = Array.from(
      new Map(data.map(item => [item.workspace_id, item])).values()
    );

    return NextResponse.json({ success: true, workspaces: uniqueWorkspaces }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
