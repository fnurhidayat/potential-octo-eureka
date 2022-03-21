/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require('http');
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public'); 

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, 'utf-8')
}

function onRequest(req, res) {
  switch(req.url) {
    case "/":
      res.writeHead(200)
      res.end(getHTML("index.html"))
      return;
    case "/about":
      res.writeHead(200)
      res.end(getHTML("about.html"))
      return;
    default:
      res.writeHead(404)
      res.end(getHTML("404.html"))
      return;
  }
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
})
