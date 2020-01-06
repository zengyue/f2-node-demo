const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const url = require('url');
const { canvas, chart } = require('./chart');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const filename = pathname.substr(1);
  if (/\.html/.test(filename)) {
    const stream = fs.createReadStream(path.join(__dirname, filename));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    stream.pipe(res);
    return;
  }

  const { type, x, y } = qs.parse(query);
  if (type && x && y) {
    const ev = {
      changedTouches: [{
        x: Number(x),
        y: Number(y),
      }],
      touches: [{
        x: Number(x),
        y: Number(y),
      }],
    };
    chart.get('el').dispatchEvent('touchstart', ev);
  }

  const buffer = canvas.toBuffer('image/png');
  const base64Str = buffer.toString('base64');
  res.end(base64Str);
});

server.listen(8000);
