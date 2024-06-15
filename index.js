const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('fuck you');
});

server.listen(PORT, () => {
  console.log(`S,knmzdx rfvtbgmzhbg,kjhdf vbngnzd bknm,vgbdn, mgvf,hbv gfnsrzhbvga,edbfghttp://localhost:${PORT}/`);
});
