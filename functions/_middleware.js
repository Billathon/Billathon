export const onRequest = ({ request }) => {
  const url = new URL(request.url);
  const hostname = url.hostname;

  if (hostname.endsWith(".pages.dev")) {
    return Response.redirect("https://billathon.com", 301);
  }

  return new Response(null, { status: 404 });
};
