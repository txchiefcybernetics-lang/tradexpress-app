import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, channel } = await req.json();
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
      // Fallback response if webhook URL isn't configured yet
      return NextResponse.json({ 
        success: true, 
        simulated: true, 
        message: `[Slack Pro Simulated Alert]: ${message}` 
      });
    }

    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: `*TradeXpress Pro Alert*: ${message}` })
    });

    if (!slackRes.ok) throw new Error('Failed to send Slack notification');

    return NextResponse.json({ success: true, message: 'Notification sent to Slack successfully.' });
  } catch (error) {
    return NextResponse.json({ error: 'Slack notification failed' }, { status: 500 });
  }
}
