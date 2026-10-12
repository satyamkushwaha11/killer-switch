/**
 * Kill switch for the Ziqkar app. The app polls this on launch and on every
 * return to the foreground; `{ enabled: false }` locks it on the device.
 * Off by default — only `APP_ENABLED=true` lets the app run.
 */
export const dynamic = 'force-dynamic';

export function GET() {
  const enabled = process.env.APP_ENABLED?.trim().toLowerCase() === 'true';
  return Response.json(
    { enabled },
    { headers: { 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' } },
  );
}
