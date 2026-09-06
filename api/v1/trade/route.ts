import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      { 
        status: 'SUCCESS', 
        message: 'Trade API Endpoint fully active',
        payload: body 
      }, 
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Exec Error:', error);

    return NextResponse.json(
      {
        status: 'ERROR',
        error: error.message || 'Something went wrong on the server.',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
