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
  if (req.headers['content-type'] !== 'application/json') {
    const badRequestJSON = toJSON({
      status: "FAIL",
      message: "Request must be in JSON format"
    })
    
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(400);
    res.end(badRequestJSON);
    return;
  }

  let requestJSON = '';

  req.on('data', chunk => {
    requestJSON += chunk;
  })

  req.on('end', () => {
    try {
      requestJSON = JSON.parse(requestJSON); 

      if (requestJSON.username !== 'sabrina' || requestJSON.password !== '123456') {
        const unauthorizedJSON = toJSON({
          status: "FAIL",
          message: "Invalid username or password"
        })

        res.setHeader('Content-Type', 'application/json');
        res.writeHead(401);
        res.end(unauthorizedJSON);
        return;
      }

      const authenticatedJSON = toJSON({
        status: "OK",
        message: "Hello, Sabrina!"
      })


      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(authenticatedJSON);
      return;
    }

    catch(err) {
      const badRequestJSON = toJSON({
        status: "FAIL",
        message: "Invalid JSON syntax"
      })

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(400);
      res.end(badRequestJSON);
      return;
    }
  })
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, '0.0.0.0', () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT);
})
