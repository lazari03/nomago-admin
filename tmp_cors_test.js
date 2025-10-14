const http = require('http');

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:8081',
  'http://xgs8swck0g8cgs8gcososwg8.168.231.78.121.sslip.io',
  'http://og0w444gsssg0ks0gwwogk40.168.231.78.121.sslip.io',
  'https://management.nomago.al',
  'https://nomago.al',
];

const port = 3001;

const server = http.createServer((req, res) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin,Accept');
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, origin: origin || null }));
});

server.listen(port, () => {
  console.log(`CORS test server listening on http://localhost:${port}`);
});
