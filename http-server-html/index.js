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

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
  // Membuat path ke html file yang ada di directory public
  const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html');

  // Membaca file HTML pada path htmlFile
  const html = fs.readFileSync(htmlFile, 'utf-8')

  // Set header agar client tau kalo response kita itu berupa HTML
  res.setHeader('Content-Type', 'text/html')

  // Set response status, agar client kita tau kalo requestnya berhasil
  res.writeHead(200)

  // Set response body, agar dapat dibaca oleh client
  res.end(html)
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
})
