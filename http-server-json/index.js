/**
 * Impor HTTP Standar Library dari Node.js
 * Hal inilah yang nantinya akan kita gunakan untuk membuat
 * HTTP Server
 * */
const http = require('http');
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

function toJSON(value) {
  return JSON.stringify(value);
}

function onRequest(req, res) {
  const responseJSON = toJSON({
    id: "0aa3e62a-9a27-45a2-9e7a-0d4f1d7f02dd",
    username: "sabrina",
    email: "sabrina@binar.co.id",
    encrypted_password: "ldfgkj78%^&appdKO039*"
  })

  res.setHeader("Content-Type", "application/json")
  res.writeHead(200)
  res.end(responseJSON);
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
})
