export async function GET() {
  const publisherId = (
    process.env.ADSENSE_PUBLISHER_ID ||
    process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ||
    ''
  ).trim();

  const hasValidPublisherId = /^pub-\d{10,}$/.test(publisherId);
  const body = hasValidPublisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : [
        '# ads.txt for globalplay.games',
        '# Add your Google AdSense publisher ID before requesting review.',
        '# Expected format:',
        '# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0',
        '',
      ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
