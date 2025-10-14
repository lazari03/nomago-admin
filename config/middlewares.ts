export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      // Dynamically reflect the Origin header when it is in the allowlist.
      // This is required when credentials: true is enabled (cannot use '*').
      origin: (ctx) => {
        const allowedOrigins = [
          'http://localhost:3000', // Next.js local dev
          'http://localhost:8081', // React Native or other local dev
          'http://xgs8swck0g8cgs8gcososwg8.168.231.78.121.sslip.io',
          'http://og0w444gsssg0ks0gwwogk40.168.231.78.121.sslip.io',
          'https://management.nomago.al',
          'https://nomago.al',
        ];

        const requestOrigin = ctx.get('Origin');
        // If no Origin header is present, return false so no CORS header is set.
        if (!requestOrigin) return false;
        return allowedOrigins.includes(requestOrigin) ? requestOrigin : false;
      },
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];