export const onRequest: PagesFunction = async (context) => {
  const ua = context.request.headers.get("user-agent") || "";
  const isBot =
    /facebookexternalhit|WhatsApp|Twitterbot|Slackbot|Discordbot|TelegramBot|LinkedInBot|Googlebot|bingbot/i.test(
      ua
    );

  if (!isBot) return context.next();

  const url = new URL(context.request.url);

  return ogResponse({
    url: url.toString(),
    title: "Mall Explorer — Your Mall, In Your Pocket",
    description: "A unified platform for mall shoppers in Abu Dhabi. Indoor navigation, events, deals, and store directories — all from your phone's browser.",
    image: "https://mall-explorer.com/og-image.jpg",
  });
};

function ogResponse(meta: { url: string; title: string; description: string; image: string }) {
  const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${esc(meta.title)}</title>
<meta property="og:type" content="website" />
<meta property="og:url" content="${esc(meta.url)}" />
<meta property="og:title" content="${esc(meta.title)}" />
<meta property="og:description" content="${esc(meta.description)}" />
<meta property="og:image" content="${esc(meta.image)}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:site_name" content="Mall Explorer" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(meta.title)}" />
<meta name="twitter:description" content="${esc(meta.description)}" />
<meta name="twitter:image" content="${esc(meta.image)}" />
</head>
<body></body>
</html>`;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}

function esc(str: string) {
  return String(str).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
