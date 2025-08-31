export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000', // Next.js local dev
        'http://localhost:8081', // React Native or other local dev
        'http://xgs8swck0g8cgs8gcososwg8.168.231.78.121.sslip.io',
        'http://og0w444gsssg0ks0gwwogk40.168.231.78.121.sslip.io'

        
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: '*',
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